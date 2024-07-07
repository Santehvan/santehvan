
import Link from "next/link"
import Auth from "./Auth"
import Image from "next/image"
import AdminLink from "./AdminLink"
import { getSession } from "@/lib/getServerSession"
import { fetchUserByEmail } from "@/lib/actions/user.actions"
import  {InfoLinks}  from "./InfoLinks"
import { TransitionLink } from "../interface/TransitionLink"


const Header = async () => {
 
  const email = await getSession();

  const user = await fetchUserByEmail(email);
  

  return (
    <header className="flex justify-between max-w-screen-2xl mx-auto items-center pt-3 px-3">
    <Image src='/banner.png' width={150} height={100} alt="" ></Image>
    {/* <p className="font-bold text-[18px]">SANTEHVAN</p> */}
    <div className="flex gap-10">
    <nav className="items-center gap-10 hidden lg:flex">
        <AdminLink></AdminLink>
        <TransitionLink href='/' className="Underline">Головна</TransitionLink>
        <TransitionLink href='/catalog' className="Underline">Каталог</TransitionLink>
        {email && <TransitionLink href={`/liked/${user?._id}`} className="Underline">Уподобані</TransitionLink>}
        {email &&<TransitionLink href='/myOrders' className="Underline">Мої замовлення</TransitionLink>}
        <InfoLinks />
    </nav>
    <div className="flex items-center gap-5">
      <Auth email={email} user={JSON.stringify(user)}></Auth>
    </div>
    </div>
    </header>
  )
} 

export default Header;