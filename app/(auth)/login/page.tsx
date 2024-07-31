"use client";
import Link from "next/link";
import {useEffect} from "react";
import {useRouter} from "next/navigation";
import GoogleSignIn from "@/components/authButtons/GoogleSignIn";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function LoginPage() {

  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session.status === 'authenticated') {
      router.replace("/");
    }
  }, [session]);
 


  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] =useState(true);
  const [error, setError] = useState("");

  

  const handleSubmit = async (e:any) => {
    
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res?.error) {
        setError("Неправильне ім'я або пароль");
        return;
      }

      router.replace("/");
    } catch (error) {
      console.log(error);
    }
  };

  //for button
  
  useEffect(() => {
      if(email.length > 0 && password.length > 0){
        setDisabled(false)
      }else{
        setDisabled(true)
      }
  }, [email,password]);    


 

    return (
        <>
            <main className="flex flex-col items-center justify-center  py-2 pt-52 ">
                <div className="flex flex-col items-center justify-center bg-white py-5 px-8 rounded-lg shadow-2xl  ">
                    <div className="mb-5 text-[20px]"><Link href='/signup' className="mr-1 ">Реєстрація</Link>/<Link href='login' className="ml-1 text-slate-500">Вхід</Link></div>
                        <hr />
                        <GoogleSignIn/> 
                        <br />
                        <hr />
        <form onSubmit={handleSubmit} className="flex flex-col text-center">
        <label htmlFor="email">email</label>
                    <input 
                        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        placeholder="Email"
                        />
                    <label htmlFor="password">пароль</label>
                    <input 
                    className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                        />
                    <Link href='/resetPass' className="mb-2 underline">Забули пороль ?</Link>
          {disabled?<button className="w-fit mx-auto py-2 px-10 border bg-gray-50 border-gray-300 text-gray-300 rounded-lg mb-4 pointer-events-none ">Увійти</button>
          :<button className="w-fit mx-auto py-2 px-10 border border-gray-300 rounded-lg mb-4 focus:outline-none    hover:border-slate-950 transition-colors duration-300">Увійти</button>}
          
          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}

         
        </form>
                </div>
            </main>
        </>
    )

}