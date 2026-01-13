import AdminClientRedirect from '@/components/AdminClientRedirect';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation'
import React from 'react'

const AdminPage = async () => {
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
    <div className='w-full h-screen flex justify-center items-center'>
      <AdminClientRedirect />
    </div>
  )
}

export default AdminPage
