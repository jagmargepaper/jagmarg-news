import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
// import { PrismaAdapter } from "@auth/prisma-adapter"
// import { PrismaClient } from "@prisma/client"

// const prisma = new PrismaClient()

export const authOptions = {
  // adapter: PrismaAdapter(prisma), // Temporarily disabled until DATABASE_URL is added
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  session: {
    strategy: "jwt" as const,
  },
  pages: {
    signIn: '/',
  },
  callbacks: {
    async jwt({ token, user, trigger, session }: any) {
      if (user) {
        token.id = user.id;
        token.isPremium = user.isPremium || false; 
        token.planType = user.planType || null;
        token.premiumExpiry = user.premiumExpiry || null;
        token.contactNumber = user.contactNumber || null;
      }
      if (trigger === "update" && session) {
        token.isPremium = session.isPremium;
        token.planType = session.planType;
        token.premiumExpiry = session.premiumExpiry;
        token.contactNumber = session.contactNumber;
        token.name = session.name;
      }
      return token;
    },
    async session({ session, token }: any) {
      if (session.user) {
        session.user.id = token.id;
        session.user.isPremium = token.isPremium;
        session.user.planType = token.planType;
        session.user.premiumExpiry = token.premiumExpiry;
        session.user.contactNumber = token.contactNumber;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
