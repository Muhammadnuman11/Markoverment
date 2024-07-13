"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import menu from '@/public/menu/menu.png'
import cross from '@/public/menu/cross.png'
import dropdown from '@/public/icons/dropdown.png'
import dropup from '@/public/icons/dropup.png'
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const currentPath = usePathname();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const isServicesPage = currentPath.startsWith('/services');

    const handleClick = () => {
        setIsDropdownOpen((prevState) => !prevState);
    };

    return (
        <nav className={`z-[100] p-6 w-full h-0 md:h-1/5 lg:h-1/4 md:flex absolute md:bg-transparent ${isOpen ? "bg-white h-3/4 rounded-ee-full" : ""}`}>
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
                    <Link href="/" className={`block mt-4 md:inline-block md:mt-0 text-[#fbc040] md:text-black ${currentPath === "/" ? "text-black md:text-white" : ""}`} onClick={() => { setIsOpen(!isOpen); setIsDropdownOpen(false) }}>
                        Home
                    </Link>
                    <Link href="/about" className={`block mt-4 md:inline-block md:mt-0 text-[#fbc040] md:text-black ${currentPath === "/about" ? "text-black md:text-white" : ""}`} onClick={() => { setIsOpen(!isOpen); setIsDropdownOpen(false) }}>
                        About
                    </Link>

                    <div className="relative inline-block" onClick={handleClick}>
                        <span className={`cursor-pointer flex mt-4 md:mt-0 text-[#fbc040] md:text-black ${isServicesPage ? "text-black md:text-white" : ""}`}>
                            Services
                            {
                                <>
                                    {isDropdownOpen ?
                                        <Image src={dropup} width={24} priority={true} alt="dropdown" className={`${isServicesPage ? "invert-0 md:invert" : ""}`} />
                                        :
                                        <Image src={dropdown} width={24} priority={true} alt="dropup" className={`${isServicesPage ? "invert-0 md:invert" : ""}`} />
                                    }
                                </>
                            }
                        </span>
                        {isDropdownOpen && (
                            <div
                                className="z-100 absolute top-full left-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-56 dark:bg-gray-700"
                            >
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 font-normal">
                                    <li>
                                        <Link href="/services/search-engine-optimization" className={`block w-full px-4 py-2 hover:bg-gray-100 text-[#fbc040] md:text-black ${currentPath === "/services/search-engine-optimization" ? "text-black md:text-[#fbc040]" : ""}`} onClick={() => setIsOpen(!isOpen)}>
                                            Search Engine Optimization
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services/social-media-marketing" className={`block w-full px-4 py-2 hover:bg-gray-100 text-[#fbc040] md:text-black ${currentPath === "/services/social-media-marketing" ? "text-black md:text-[#fbc040]" : ""}`} onClick={() => setIsOpen(!isOpen)}>
                                            Social Media Marketing
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services/digital-marketing" className={`block w-full px-4 py-2 hover:bg-gray-100 text-[#fbc040] md:text-black ${currentPath === "/services/digital-marketing" ? "text-black md:text-[#fbc040]" : ""}`} onClick={() => setIsOpen(!isOpen)}>
                                            Digital Marketing
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services/graphic-designing" className={`block w-full px-4 py-2 hover:bg-gray-100 text-[#fbc040] md:text-black ${currentPath === "/services/graphic-designing" ? "text-black md:text-[#fbc040]" : ""}`} onClick={() => setIsOpen(!isOpen)}>
                                            Graphic Designing
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services/shopify-development" className={`block w-full px-4 py-2 hover:bg-gray-100 text-[#fbc040] md:text-black ${currentPath === "/services/shopify-development" ? "text-black md:text-[#fbc040]" : ""}`} onClick={() => setIsOpen(!isOpen)}>
                                            Shopify Development
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services/web-development" className={`block w-full px-4 py-2 hover:bg-gray-100 text-[#fbc040] md:text-black ${currentPath === "/services/web-development" ? "text-black md:text-[#fbc040]" : ""}`} onClick={() => setIsOpen(!isOpen)}>
                                            Web Development
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services/web-development" className={`block w-full px-4 py-2 hover:bg-gray-100 text-[#fbc040] md:text-black ${currentPath === "/services/web-development" ? "text-black md:text-[#fbc040]" : ""}`} onClick={() => setIsOpen(!isOpen)}>
                                            Content writing
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services/web-development" className={`block w-full px-4 py-2 hover:bg-gray-100 text-[#fbc040] md:text-black ${currentPath === "/services/web-development" ? "text-black md:text-[#fbc040]" : ""}`} onClick={() => setIsOpen(!isOpen)}>
                                            Content creation
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services/web-development" className={`block w-full px-4 py-2 hover:bg-gray-100 text-[#fbc040] md:text-black ${currentPath === "/services/web-development" ? "text-black md:text-[#fbc040]" : ""}`} onClick={() => setIsOpen(!isOpen)}>
                                            Software as a service
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>

                    <Link href="/clients" className={`block mt-4 md:inline-block md:mt-0 text-[#fbc040] md:text-black ${currentPath === "/clients" ? "text-black md:text-white" : ""}`} onClick={() => { setIsOpen(!isOpen); setIsDropdownOpen(false) }}>
                        Clients
                    </Link>
                    <Link href="/contact" className={`block mt-4 md:inline-block md:mt-0 text-[#fbc040] md:text-black ${currentPath === "/contact" ? "text-black md:text-white" : ""}`} onClick={() => { setIsOpen(!isOpen); setIsDropdownOpen(false) }}>
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    )
}
