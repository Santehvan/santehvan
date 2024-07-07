"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";


export default function VerifyEmailPage() {

    const [token, setToken] = useState("");
    const [verified, setVerified] = useState(false);
    const [error, setError] = useState(false);
    const [changed, setChanged] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [password, setPassword] = useState("");


    const changeUserPass = async () => {
        try {
            await axios.post('/api/users/newPass', { token, password });
            setVerified(true);
            setChanged(true);
        } catch (error: any) {
            setError(true);
            console.log(error);
        }
    }

    useEffect(() => {
        if (password.length > 0) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [password]);

    useEffect(() => {
        const urlToken = window.location.search.split("=")[1];
        setToken(urlToken || "");
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (token.length > 0) {
            await changeUserPass();
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen mt-[-160px]">
            {changed ?
                <div>
                    <h2 className="text-[25px] text-gray-700">Вітаємо! Ви успішно змінили пароль</h2>
                    <Image src='/assets/welldone.svg' width={300} height={300} alt="" className="mx-auto mt-5"></Image>
                    <div className="mx-auto w-fit mt-[-30px]">
                        <Link href="/login" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-black/90 h-10 px-4 py-2 z-40 relative">
                            Увійти
                        </Link>
                    </div>
                </div>
                :
                <div className="flex flex-col items-center justify-center bg-white py-5 px-8 rounded-lg shadow-2xl">
                    <h1 className="text-[25px]">Зміна пароля</h1>

                    <form onSubmit={handleSubmit} className="flex flex-col text-center">

                        <input
                            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder="Новий пароль"
                        />

                        {disabled ? <button className="w-fit mx-auto py-2 px-10 border bg-gray-50 border-gray-300 text-gray-300 rounded-lg mb-4 pointer-events-none">Змінити</button>
                            : <button className="w-fit mx-auto py-2 px-10 border border-gray-300 rounded-lg mb-4 focus:outline-none hover:border-slate-950 transition-colors duration-300">Змінити</button>}

                    </form>
                </div>
            }
        </div>
    )
}