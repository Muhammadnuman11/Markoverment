import Link from 'next/link'
import React from 'react'
import Logo from "../../public/header/Logo.png";
import Name from "../../public/header/Name.png";
import Image from 'next/image';

export default function Footer() {
    let years = new Date().getFullYear()
    return (
        <>
            <footer className="shadow">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <Link href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse" >
                            <Image src={Logo} width={50} priority={true} alt="Company Logo"/>
                            <Image src={Name} width={200} priority={true} alt="Company Name" className='' />
                        </Link>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 text-white">
                            <li>
                                <Link href="/" className="hover:underline me-4 md:me-6">About</Link>
                            </li>
                            <li>
                                <Link href="/" className="hover:underline me-4 md:me-6">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href="/" className="hover:underline me-4 md:me-6">Licensing</Link>
                            </li>
                            <li>
                                <Link href="/" className="hover:underline">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <hr className="border-white sm:mx-auto my-6" />
                    <span className="block text-sm text-white sm:text-center">&copy; {years} <Link href="/" className="hover:underline">Markoverment</Link>. All Rights Reserved.</span>
                </div>
            </footer >
        </>
    )
}
