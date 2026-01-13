'use client'

import { useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'

export default function AdminClientRedirect() {
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (pathname === '/admin') {
      router.replace('/admin/add-trade') // client-side redirect
    }
  }, [pathname, router])

  return <p>Redirecting you to Admin Dashboard...</p>
}
