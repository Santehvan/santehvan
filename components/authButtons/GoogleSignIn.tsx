"use client";

import Image from "next/image";
import { signIn } from "next-auth/react";

export default function GoogleSignIn() {
  return (
    <button
      onClick={() => signIn("google")}
      className="flex items-center gap-4 border border-gray-300 rounded-lg pl-3"
    >
      <Image src="/google-logo.png" height={30} width={30} alt={""} />
      <span className="bg-blue-500 text-black px-4 py-3">
        Sign in with Google
      </span>
    </button>
  );
}
