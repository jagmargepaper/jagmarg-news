import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

// Temporarily commented out due to missing DB
// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    const body = await req.json();
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, planType } = body;

    const secret = process.env.RAZORPAY_KEY_SECRET!;

    const body_str = razorpay_order_id + '|' + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac('sha256', secret)
      .update(body_str.toString())
      .digest('hex');

    const isAuthentic = expectedSignature === razorpay_signature;

    if (isAuthentic) {
      if (session?.user?.email) {
        let months = 1;
        if (planType === 'half_yearly') months = 6;
        if (planType === 'yearly') months = 12;

        const expiry = new Date();
        expiry.setMonth(expiry.getMonth() + months);

        // TEMPORARILY DISABLED FOR LOCALHOST TESTING (No Database URL yet)
        /*
        await prisma.user.update({
          where: { email: session.user.email },
          data: {
            isPremium: true,
            planType: planType || 'monthly',
            premiumExpiry: expiry
          }
        });
        */
      }
      return NextResponse.json({ success: true, message: 'Payment verified successfully (Mock DB)' });
    } else {
      return NextResponse.json({ success: false, error: 'Invalid signature' }, { status: 400 });
    }
  } catch (error) {
    console.error('Razorpay Verification Error:', error);
    return NextResponse.json({ error: 'Failed to verify payment' }, { status: 500 });
  }
}
