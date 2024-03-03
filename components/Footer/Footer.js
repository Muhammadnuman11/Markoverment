import Link from 'next/link'
import React from 'react'

export default function Footer() {
    let years = new Date().getFullYear()
    return (
        <>
            <footer className="bg-white rounded-lg shadow dark:bg-gray-900">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <Link href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse" >
                            <img src="https://scontent.flhe3-1.fna.fbcdn.net/v/t39.30808-1/297991383_394091449546764_2205842919641584514_n.png?stp=dst-png_p200x200&_nc_cat=103&ccb=1-7&_nc_sid=596444&_nc_ohc=9EeTsPkqiqEAX_hG-r2&_nc_ht=scontent.flhe3-1.fna&oh=00_AfCvvcnJV0QS8pBkQPnbhvQeRfYEInghqqUdAVQtgJTGzw&oe=65E727D9" className="h-8" alt="Markoverment Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Markoverment</span>
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
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">&copy; {years} <Link href="/" className="hover:underline">Markoverment™</Link>. All Rights Reserved.</span>
                </div>
            </footer >
        </>
    )
}
