"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import menu from '@/public/menu/menu.png'
import cross from '@/public/menu/cross.png'
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const currentPath = usePathname();
    return (
        <nav className={`p-6 w-full h-0 md:h-1/4 md:flex absolute md:bg-transparent z-9 ${isOpen ? "bg-white h-3/4 rounded-ee-full" : ""}`}>
            <div className="flex justify-between items-center relative">
                <div className="block md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
                    >
                        <Image src={menu} width={100} priority={true} alt="menu" className={`fill-current h-9 w-9 ${isOpen ? "hidden" : "block"}`} />

                        <Image src={cross} width={100} priority={true} alt="cross" className={`fill-current h-9 w-9 ${isOpen ? "block" : "hidden"}`} />
                    </button>
                </div>
            </div>
            <div className={`w-full block flex-grow md:flex items-center md:w-auto ${isOpen ? "block" : "hidden"}`} >
                <div className="text-md font-semibold md:w-3/5 w-20 md:flex justify-around">
                    <Link href="/" className={`block mt-4 md:inline-block md:mt-0 text-[#fbc040] md:text-white ${currentPath === "/" ? "active md:text-black" : ""}`}>
                        Home
                    </Link>
                    <Link href="/about" className={`block mt-4 md:inline-block md:mt-0 text-[#fbc040] md:text-white ${currentPath === "/about" ? "active md:text-black" : ""}`}>
                        About
                    </Link>
                    <Link href="/products" className={`block mt-4 md:inline-block md:mt-0 text-[#fbc040] md:text-white ${currentPath === "/products" ? "active md:text-black" : ""}`}>
                        Products
                    </Link>
                    <Link href="/clients" className={`block mt-4 md:inline-block md:mt-0 text-[#fbc040] md:text-white ${currentPath === "/clients" ? "active md:text-black" : ""}`}>
                        Clients
                    </Link>
                    <Link href="/contact" className={`block mt-4 md:inline-block md:mt-0 text-[#fbc040] md:text-white ${currentPath === "/contact" ? "active md:text-black" : ""}`}>
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    )
}
