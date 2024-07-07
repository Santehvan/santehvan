'use client'

import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Image from 'next/image';
import axios from "axios";


const ResetPass = () => {
    const [disabled, setDisabled] =useState(true);
    const [email, setEmail] = useState("");
    const [wasSended, setWasSended] = useState(false);


    useEffect(() => {
      if(email.length > 0 ){
        setDisabled(false)
      }else{
        setDisabled(true)
      }
    }, [email]);   

    const handleSubmit = async (e:any) => {
    
      e.preventDefault();
  
      try {
        await axios.post("/api/users/resetPass", { email });
        setWasSended(true);
        
    } catch (error:any) {
      console.log(error);
    }


      
    };
  




  return (
    <>
    <section className="flex flex-col items-center justify-center  py-2 pt-52 ">
      {wasSended?
        <div>
          <h1 className="text-[45px] text-center">Лист Відправлено!</h1>
          <Image src='assets/mail.svg' width={100} height={100} alt="" className="mx-auto my-10"></Image>
          <p className="text-gray-700 text-[17px] ">Перевірте вашу електронну адресу на наявність листа! <br /> Не забудьте подивитись у папці спам</p>
        </div>
        :
        <div className="flex flex-col items-center justify-center bg-white py-5 px-8 rounded-lg shadow-2xl  ">
        <h1 className='text-[25px]'>Зміна пароля</h1>
        <p className='text-gray-700 mb-5'>На вашу пошту прийде лист <br /> підтвердження, з яким ви <br /> зможете змінити пароль</p>
        <form onSubmit={handleSubmit}  className="flex flex-col text-center">

            <input 
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                />
           
            
            {disabled?<button className="w-fit mx-auto py-2 px-10 border bg-gray-50 border-gray-300 text-gray-300 rounded-lg mb-4 pointer-events-none ">Надіслати</button>
            :<button className="w-fit mx-auto py-2 px-10 border border-gray-300 rounded-lg mb-4 focus:outline-none    hover:border-slate-950 transition-colors duration-300">Надіслати</button>}

          </form>
        </div>
    }
        
    </section>
</>
  )
}

export default ResetPass