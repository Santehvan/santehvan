'use client'
import Link from "next/link"
import { Button } from "../ui/button"
import { useSession } from "next-auth/react"
import { signOut } from "next-auth/react"
import { useState } from "react"
import AdminLink from "./AdminLink"


const Auth = ({email,user}:any) => {
  const { data:session, status} = useSession();
  const [burger, setBurger] = useState('burger-lines');
  const [bgBurger, setBgBurger] = useState('bg-burger');
  user = JSON.parse(user);

  
    const handleRouteChange= () =>{
      setBurger('burger-lines');
      setBgBurger('bg-burger')
      document.body.style.overflow = 'auto';
    }
  function burgerClass(){
    if(burger === 'burger-lines'){
      setBurger('burger-lines burger-button');
      setBgBurger('bg-burger bg-burger-active')
      document.body.style.overflow = 'hidden';
    }else{
      setBurger('burger-lines');
      setBgBurger('bg-burger')
      document.body.style.overflow = 'auto';
    }
  }
  return (
    <>
      
      {//@ts-ignore
      status === "authenticated"?<Button onClick={signOut} variant="outline" className="hover:border-black transition-colors duration-300 ">Вийти</Button>:<Link href='/login'><Button variant="default" className="z-40 relative ">Увійти</Button></Link>}
      <div onClick={burgerClass} className="py-3">
        <div className={burger}></div>
      </div>
     
      <div className={bgBurger}>
        <p className="py-5 px-2  "><AdminLink></AdminLink></p>
        <p className="py-5 px-2  "><Link href='/' className="Underline " onClick={handleRouteChange}>Головна</Link></p>
        <p className="py-5 px-2  "><Link href='/presentations' className="Underline" onClick={handleRouteChange}>Презентації</Link></p>
        <p className="py-5 px-2  "><Link href='/catalog' className="Underline" onClick={handleRouteChange}>Каталог</Link></p>
        {email && <p className="py-5 px-2  "><Link href={`/liked/${user?._id}`} className="Underline">Уподобані</Link></p>}
        <p className="py-5 px-2  "><Link href='/contacts' className="Underline" onClick={handleRouteChange}>Контакти</Link></p>
        {email &&<p className="py-5 px-2  "><Link href='/myOrders' className="Underline" onClick={handleRouteChange}>Мої замовлення</Link></p>}
        <p className="py-5 px-2 "><Link href='/delivery-payment' className="Underline" onClick={handleRouteChange}>Доставка та оплата</Link></p>
        <p className="py-5 px-2 "><Link href='/warranty-services' className="Underline" onClick={handleRouteChange}>Гарантія та сервіси</Link></p>
        {email &&<p className="py-5 px-2 "><Link  href={`/liked/${user._id}`} className="Underline" onClick={handleRouteChange}>Уподобані</Link></p>}
        {/* {email && <Link href={`/liked/${user._id}`} className="Underline">Уподобані</Link>} */}
    </div>
    </>
  )
}

export default Auth
