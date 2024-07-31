
'use client'

import { useSession } from "next-auth/react"
import Link from "next/link";


const AdminLink = () => {

const { data:session , status} = useSession();

  return (
    <>
        {session?.user.role == "Admin"?<Link href='/admin/createProduct' className="text-red-500 Underline after:bg-red-500">Адмін</Link>:<></>} 
    </>
  )
}

export default AdminLink