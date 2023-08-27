"use client";

import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

export const MENU_LIST = [
  { text: "Featuring", href: "/featuring" },
  { text: "Pricing", href: "/pricing" },
  { text: "Resources", href: "/resources" },
];

const Header = () => {
  const [burger, setBurger] = useState(false);

  return (
    <section className="flex items-center justify-between w-[95%] relative">
      <div className="p-3 md:ml-5 w-24 h-12 mr-14">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={120} height={75} />
        </Link>
      </div>

      {/* Burger menu */}
      <div onClick={() => setBurger(!burger)} className="block lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.0"
          stroke="currentColor"
          class="w-8 h-8 fill-current text-black"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      {burger && (
        <div
          onClick={() => setBurger(!burger)}
          className="flex flex-col absolute w-[95%] h-[300px] top-14 left-5 right-5 rounded-lg bg-darkViolet"
        >
          {MENU_LIST.map((item, index) => (
            <div
              className="flex flex-col justify-center items-center"
              key={index}
            >
              <div className=" text-grayishViolet hover:text-veryDarkViolet font-bold mx-5 py-3">
                <Link href={item.href}>{item.text}</Link>
              </div>
            </div>
          ))}
          <div className="w-[90%] h-1 mx-auto border-b-2 border-slate-500"></div>
          <Link
            className="text-grayishViolet hover:text-veryDarkViolet py-3 text-center"
            href="/login"
          >
            Login
          </Link>
          <div className=" text-white bg-cyan hover:bg-cyanLight w-[90%] rounded-full flex items-center justify-center mx-auto px-4 py-3">
            <Link href="/signup">Sign Up</Link>
          </div>
        </div>
      )}

      {/* Tablet - Desktop menu */}
      <div className="hidden lg:flex w-full h-24 items-center justify-between">
        {/* left */}
        <div className="flex items-center justify-start">
          {MENU_LIST.map((item, index) => (
            <div className="flex justify-center items-center" key={index}>
              <div className=" text-grayishViolet hover:text-veryDarkViolet font-bold mx-5 py-3">
                <Link href={item.href}>{item.text}</Link>
              </div>
            </div>
          ))}
        </div>
        {/* right */}
        <div className="hidden lg:flex items-center justify-between font-bold md:mr-6 space-x-6">
          <Link
            className="text-grayishViolet hover:text-veryDarkViolet py-3"
            href="/login"
          >
            Login
          </Link>
          <div className=" text-white bg-cyan hover:bg-cyanLight rounded-full flex items-center justify-center px-8 py-3">
            <Link href="/signup">Sign Up</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
