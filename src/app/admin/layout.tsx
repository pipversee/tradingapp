import AdminNavbar from '@/components/sections/admin-navbar'
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import Image from 'next/image'
import { redirect } from 'next/navigation';
import React from 'react'

const Admin = async ({ children }: Readonly<{
  children: React.ReactNode;
}>) => {
  const session = await getServerSession(authOptions)
  if (!session) redirect("/login")
  const allowedAdmins = [
    process.env.ADMIN_EMAIL,
    process.env.ADMIN_EMAIL_2
  ];

  if (!allowedAdmins.includes(session.user.email!)) {
    redirect("/login?error=AccessDenied");
  }

  return (
    <main className='min-h-screen bg-black selection:bg-white/20'>
      <AdminNavbar />
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
      <section className="max-w-5xl px-6 md:px-14 pb-8 md:h-full md:max-h-[950px] md:max-w-7xl relative z-30">
        {children}
      </section>
    </main>
  )
}

export default Admin
