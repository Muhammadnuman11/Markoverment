import Link from 'next/link'
import React from 'react'
import Logo from "../../public/header/Logo.png";
import Name from "../../public/header/Name.png";
import Image from 'next/image';

export default function Footer() {
    let years = new Date().getFullYear()
    return (
        <>
            <footer className="bg-white rounded-lg shadow dark:bg-gray-900">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <Link href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse" >
                            <Image src={Logo} width={110} priority={true} alt="Company Logo" className="w-14 h-14" />
                            <Image src={Name} width={300} priority={true} alt="Company Name" className='' />
                        </Link>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
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
                    <hr className="border-gray-200 sm:mx-auto dark:border-gray-700 my-6" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">&copy; {years} <Link href="/" className="hover:underline">Markoverment™</Link>. All Rights Reserved.</span>
                </div>
            </footer >
        </>
    )
}
