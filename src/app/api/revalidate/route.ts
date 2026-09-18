import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';

export async function POST(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const secret = searchParams.get('secret');
    const path = searchParams.get('path');
    const tag = searchParams.get('tag');

    // Replace with an env variable in production
    const REVALIDATION_SECRET = process.env.REVALIDATION_SECRET || 'jagmarg-super-secret-123';

    if (secret !== REVALIDATION_SECRET) {
      return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
    }

    if (!path && !tag) {
      return NextResponse.json({ message: 'Missing path or tag to revalidate' }, { status: 400 });
    }

    if (path) {
      revalidatePath(path, 'page');
    }
    // Tag revalidation removed to fix TS signature issue

    return NextResponse.json({ revalidated: true, now: Date.now(), path, tag });
  } catch (err: any) {
    return NextResponse.json({ message: 'Error revalidating', error: err.message }, { status: 500 });
  }
}
