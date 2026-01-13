// src/types/next-auth.d.ts
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      /** Existing fields */
      name?: string | null;
      email?: string | null;
      image?: string | null;

      /** Add custom fields here */
      role?: "admin" | "user";
    };
  }
}
