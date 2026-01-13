import NextAuth from "next-auth"
import { authOptions } from "@/lib/auth"

// Force Node.js runtime for NextAuth route to avoid edge/ESM interop issues
export const runtime = "nodejs";

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }

