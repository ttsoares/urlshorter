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
    <section className="w-full h-fit flex items-center justify-center mx-auto bg-white">
      <div className="container w-[90%] lg:w-[80%] flex items-center justify-between  mx-auto mt-5 lg:mb-7 relative">
        <div className="p-3 md:ml-3 mr-5 w-44">
          <Link href="/">
            <Image src="/logo.svg" alt="logo" width={500} height={220} />
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
            className="w-8 h-8 fill-current text-black"
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
            className="flex flex-col absolute w-[102%] h-[380px] top-14 -left-1 rounded-lg bg-darkViolet z-10"
          >
            {MENU_LIST.map((item, index) => (
              <div
                className="flex flex-col justify-center items-center"
                key={index}
              >
                <div className=" text-grayishViolet hover:text-veryDarkViolet font-bold mx-5 py-5">
                  <Link href={item.href}>{item.text}</Link>
                </div>
              </div>
            ))}
            <div className="w-[90%] h-3 py-3 mt-3 mx-auto border-t-2 border-slate-500"></div>
            <Link
              className="text-grayishViolet hover:text-veryDarkViolet py-3 mb-4 text-center"
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
                <div className=" text-grayishViolet hover:text-veryDarkViolet font-bold mx-2 py-3">
                  <Link href={item.href}>{item.text}</Link>
                </div>
              </div>
            ))}
          </div>
          {/* right */}
          <div className="hidden lg:flex items-center justify-between font-bold md:mr-6 space-x-6">
            <Link
              className="text-grayishViolet hover:text-veryDarkViolet py-3 mr-4"
              href="/login"
            >
              Login
            </Link>
            <div className=" text-white bg-cyan hover:bg-cyanLight rounded-full flex items-center justify-center px-7 py-2">
              <Link href="/signup">Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
