"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function VerifyEmailPage() {

    const [token, setToken] = useState("");
    const [verified, setVerified] = useState(false);
    const [error, setError] = useState(false);
    const [loaded, setLoaded]=useState(false);
    

    const verifyUserEmail = async () => {
        try {
            await axios.post('../api/users/verifyemail', {token})
            setVerified(true);
        } catch (error:any) {
            setError(true);
            console.log(error);
            
        }finally{
            setLoaded(true);
        }

    }

    useEffect(() => {
        const urlToken = window.location.search.split("=")[1];
        setToken(urlToken || "");
    }, []);


    useEffect(() => {
        if(token.length > 0) {
            verifyUserEmail();
        }
    }, [token]);

    return(
        <div className="flex flex-col items-center justify-center min-h-screen mt-[-160px]">

            <h1 className="text-[45px]">Підтвердження пошти</h1>
            {loaded?
                <>
                    {verified && (
                    <div>
                        <h2 className="text-[25px] text-gray-700">Вітаємо! Ви успішно створили акаунт</h2>
                        <Image src='/assets/welldone.svg' width={300} height={300} alt="" className="mx-auto mt-5"></Image>
                        <div className="mx-auto w-fit mt-[-30px]">
                            <Link href="/login" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-black/90 h-10 px-4 py-2 z-40 relative">
                                Увійти
                            </Link>
                        </div>
                    </div>
                )}
                {error && (
                    <div>
                        
                        <Accordion type="single" collapsible className="w-[400px]">
                            <AccordionItem value="item-1" className="border-none">
                                <AccordionTrigger className="text-center"><h2 className="text-[25px] text-gray-700 mx-auto">Упс, щось пішло не так</h2></AccordionTrigger>
                                <AccordionContent>
                                    <p>Якщо ви отримали данне повідомлення після оновлення сторінки, то перейдіть  &quot;До реєстрації&quot;, далі на вкладку 
                                    &quot;Увійти&quot;. Введіть ваші данні як при звичайному вході.<br /><br />
                                        В іншому випадку пройдіть реєстрацію ще раз. Вибачте за незручності.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        <Image src='/assets/sad.svg' width={200} height={200} alt="" className="mx-auto mt-10"></Image>
                        <div className="mx-auto w-fit">
                            <Link href="/signup" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-black/90 h-10 px-4 py-2 z-40 relative">
                                До реєстрації
                            </Link>
                        </div>
                    </div>
                )}

                </>
            :
                <div className="flex items-center justify-center mt-9">
                    <div className="w-12 h-12 border-4 border-black border-t-transparent border-solid rounded-full animate-spin"></div>
                </div>}
            

            
        </div>
    )

}