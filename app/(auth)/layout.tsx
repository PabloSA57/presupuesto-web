import React from "react";
import Link from "next/link"
import {Logo} from "@/app/ui/icons/Logo";
import style from "./style.module.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${style.bg} relative flex flex-col  min-w-screen min-h-screen`}>
      <div className="p-3 md:p-5 ">
      <Link href="/" className="z-10">
        <Logo/>
      </Link>

      </div>

      <div className="absolute bottom-0 left-0 overflow-hidden w-full z-0 rotate-180'">
        <svg  data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="rotate-180 h-[50vh]"><path  d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"  fill="#ef4444" fill-opacity="1"></path></svg>
      </div>
      <main className="flex-1 flex flex-col justify-center items-center z-10   ">
        {children}
      </main>
    </div>
  );
}
