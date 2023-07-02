"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X, ShoppingCart, Ghost } from "lucide-react";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-gray-300 top-0 left-0 right-0 z-10">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            {/*Logo*/}
            <Link href="/">
              <Image
                src={"/Logo.png"}
                width={150}
                height={150}
                alt="Logo"
              ></Image>
            </Link>

            <div className="md:hidden">
              <Button
                variant="ghost"
                onClick={() => {
                  setNavbar(!navbar);
                }}
              >
                {navbar ? <X /> : <Menu />}
              </Button>
            </div>
          </div>
        </div>
        <div className="flex">
          <div
            className={`flex w-full justify-self-center pb-3 mt-4 md:block md:pb-0 md:mt-0 ${
              navbar ? "md:p-0 block" : "hidden"
            }`}
          >
            <ul className="md:h-auto items-center justify-center md:flex  w-full">
              <li className="pb-6 md:pb-0 py-2 md:px-6 md:hover:text-gray-600">
                <Link href="/men" onClick={() => setNavbar(!navbar)}>
                  Men
                </Link>
              </li>
              <li className="pb-6 md:pb-0 py-2 md:px-6  md:hover:text-gray-600">
                <Link href="/women" onClick={() => setNavbar(!navbar)}>
                  Women
                </Link>
              </li>
              <li className="pb-6 md:pb-0 py-2 md:px-6 md:hover:text-gray-600">
                <Link href="/" onClick={() => setNavbar(!navbar)}>
                  Kids
                </Link>
              </li>
              <li className="pb-6 md:pb-0 py-2 md:px-6 md:hover:text-gray-600">
                <Link href="/allproducts" onClick={() => setNavbar(!navbar)}>
                  All Products
                </Link>
              </li>
              <li className="pb-6 md:pb-0 py-2 md:px-6">
                <Link href="/cartpage" onClick={() => setNavbar(!navbar)}>
                  <div className="relative p-[12px] rounded-full">
                    <div className="absolute left-[29px] bottom-[29px] bg-[#0F172A] text-white rounded-full w-[18px] h-[18px] flex items-center justify-center">
                      <p>2</p>
                    </div>
                    <ShoppingCart />
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
