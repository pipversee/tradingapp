"use client";

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { signIn, useSession } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import { redirect } from "next/navigation";
import { useState } from "react"


function LoginPage() {
    const { data: isAdmin } = useSession()
  const [loading, setLoading] = useState(false)

  if(isAdmin) redirect('/admin/add-trade')

  const handleGoogleLogin = async () => {
    try {
      setLoading(true)
      await signIn("google", { callbackUrl: "/admin" })
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className='min-h-screen bg-black selection:bg-white/20'>
      {/* Floor Background Layer */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none hidden md:block">
        <Image
          alt="Floor background"
          src="https://resend.com/_next/image?url=%2Fstatic%2Flanding-page%2Fbg-hero-1.jpg&w=3840&q=100&dpl=dpl_4tUqZd5uM7Tom4zJTxfJ7UkQvKFx"
          fill
          priority
          className="object-cover opacity-80 transition-opacity duration-500"
          style={{ objectPosition: 'center top' }}
        />
      </div>

      <div className="w-full h-screen flex flex-col justify-center items-center relative z-30 px-4">
        <h1 className="font-serif text-[36px] tracking-[-0.05em] leading-[110%] text-center pb-4 md:pb-5">
          <span className="bg-linear-to-r text-[36px] from-white to-[#636363] bg-clip-text text-transparent font-medium">
            Login to Access &nbsp;<br /> <span className='bg-linear-to-r from-green-400 to-green-600 bg-clip-text text-transparent italic z-10'>PipVerse's</span>&nbsp;
          </span>
          <span className="bg-linear-to-r text-[36px] from-white to-[#636363] bg-clip-text text-transparent font-medium">Admin Panel</span>
        </h1>
        <Card className="w-full max-w-sm border border-white/18">
          <CardHeader>
            <CardTitle>Log In</CardTitle>
            <CardDescription>
              SignIn with Google below to login
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-6">
              <Button
                type="button"
                onClick={handleGoogleLogin}
                disabled={loading}
              >
                {loading ? "Redirecting..." : "Continue with Google"}
              </Button>
            </div>
            <div className="flex-col gap-2 pt-8 w-full">
              <div className="flex justify-end items-end w-full pt-1 pr-1.5">
                <Link href={'/'} className="hover:underline pt-0.5 text-[12px] text-end hover:text-white text-muted-foreground transition-all duration-100">
                  Go back to home
                </Link>
              </div>
            </div>

          </CardContent>
        </Card>
      </div>
    </main>
  )
}

export default LoginPage
