import { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: { scope: "openid email profile" },
      },
    })
  ],


  callbacks: {
    async signIn({ user }) {
      // console.log("USER EMAIL FROM GOOGLE:", user.email);
      // console.log("ADMIN EMAIL:", process.env.ADMIN_EMAIL);

      if (!user.email) return false; // safety

      const allowedAdmins = [
        process.env.ADMIN_EMAIL,
        process.env.ADMIN_EMAIL_2
      ];

      if (allowedAdmins.includes(user.email)) {
        return true; // ✅ allow admin
      }

      return "/login?error=NotAuthorized"; // redirect non-admins
    },

    async session({ session }) {
      const allowedAdmins = [
        process.env.ADMIN_EMAIL,
        process.env.ADMIN_EMAIL_2
      ];

      if (session.user && allowedAdmins.includes(session.user.email!)) {
        session.user.role = "admin";
      } else {
        session.user.role = "user";
      }
      return session;
    },
  },

  pages: {
    signIn: "/login",
    error: "/login",
  },
}