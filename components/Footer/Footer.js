import Link from 'next/link'
import React from 'react'
import Logo from "../../public/header/Logo.png";
import Name from "../../public/header/Name.png";
import Facebook from "../../public/icons/facebook.png";
import Insta from "../../public/icons/insta.png";
import Twitter from "../../public/icons/twitter.png";
import Linkedin from "../../public/icons/linkedin.png";
import Image from 'next/image';

export default function Footer() {
    let years = new Date().getFullYear()
    return (
        <>
            <footer className="shadow">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="flex items-center justify-between flex-wrap">
                        <Link href="/" className="flex items-center mb-4 md:mb-0 space-x-3 rtl:space-x-reverse" >
                            <Image src={Logo} width={50} priority={true} alt="Company Logo" />
                            <Image src={Name} width={200} priority={true} alt="Company Name" className='' />
                        </Link>
                        <ul className="flex items-center mb-4 text-sm font-medium md:mb-0 text-white">
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
                        <div className="">
                            <h5 className='text-white text-md font-bold mb-2'>Follow Us</h5>
                            <div className='flex gap-8'>
                                <Link href="https://www.facebook.com/markoverment" target="_blank" rel="noopener noreferrer">
                                    <Image src={Facebook} width={20} priority={true} className='invert' alt="Facebook" />
                                </Link>
                                <Link href="https://www.instagram.com/markoverment" target="_blank" rel="noopener noreferrer">
                                    <Image src={Insta} width={20} priority={true} className='invert' alt="Instagram" />
                                </Link>
                                <Link href="https://www.twitter.com/markoverment" target="_blank" rel="noopener noreferrer">
                                    <Image src={Twitter} width={20} priority={true} className='invert' alt="twitter" />
                                </Link>
                                <Link href="https://www.linkedin.com/company/markoverment" target="_blank" rel="noopener noreferrer">
                                    <Image src={Linkedin} width={20} priority={true} className='invert' alt="linkedin" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <hr className="border-white sm:mx-auto my-6" />
                    <span className="block text-sm text-white sm:text-center">&copy; {years} <Link href="/" className="hover:underline">Markoverment</Link>. All Rights Reserved.</span>
                </div>
            </footer >
        </>
    )
}
