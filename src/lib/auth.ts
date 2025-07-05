import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { MongoClient } from "mongodb";
import { sendEmail } from "@/lib/email/resend";

// Use a fallback MongoDB URI that won't cause connection errors in development
const mongoUri = process.env.MONGODB_URI || "mongodb://localhost:27017/saasfast";
const client = new MongoClient(mongoUri);
const clientPromise = client.connect();

export const authOptions: NextAuthOptions = {
  adapter: process.env.MONGODB_URI ? MongoDBAdapter(clientPromise) : undefined,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    EmailProvider({
      async sendVerificationRequest({ identifier: email, url }) {
        try {
          await sendEmail({
            to: email,
            subject: "Sign in to SaaSFast",
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                <h1 style="color: #2563eb;">Sign in to SaaSFast</h1>
                <p>Click the button below to sign in to your account:</p>
                <a href="${url}" style="background-color: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block; margin: 16px 0;">
                  Sign In
                </a>
                <p>If you didn't request this email, you can safely ignore it.</p>
                <p>This link will expire in 24 hours for security reasons.</p>
              </div>
            `,
          });
        } catch (error) {
          console.error("Failed to send verification email:", error);
          throw new Error("Failed to send verification email");
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error",
    verifyRequest: "/auth/verify-request",
  },
  callbacks: {
    async session({ session, user }) {
      if (session?.user) {
        session.user.id = user.id;
      }
      return session;
    },
    async jwt({ user, token }) {
      if (user) {
        token.uid = user.id;
      }
      return token;
    },
  },
  session: {
    strategy: process.env.MONGODB_URI ? "database" : "jwt",
  },
};