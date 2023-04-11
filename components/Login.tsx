"use client";
import { signIn } from "next-auth/react";

function Login() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-neutral-900 text-center text-white">
      <div className="relative">
        <h1 className="relative z-10 font-roboto text-7xl font-bold">Yu-Kno</h1>
        <div className="neonGlow animate-pulse blur-3xl"></div>
      </div>
      <p className="z-10 text-center font-roboto text-2xl font-bold">
        AI Assistant
      </p>
      <p className="z-10 mb-20 text-center text-sm italic ">
        Powered by ChatGPT
      </p>
      <button
        onClick={() => signIn("google")}
        type="button"
        className="animate-pulse text-3xl"
      >
        Sign In to use Yu-Kno
      </button>
    </div>
  );
}

export default Login;
