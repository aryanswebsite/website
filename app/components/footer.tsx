import Image from 'next/image'
import React from 'react'
import { IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer className='w-full pt-4 pb-4 bg-red-200 mt-auto' id='contact'>
        <div className="container mx-auto px-6 flex items-center justify-between">
            {/* middle */}
            <div className='absolute left-1/2 transform -translate-x-1/2 flex space-x-2'>
                <h1>
                    Made with ❤️ by
                </h1>
                <Image src="/aryanface2.png" alt="aryanface" width={22} height={23} />
            </div>

            {/* left */}
            <div>© 2024</div>
            
            {/* right */}
            <div className='flex space-x-1.5'>
                <a href='https://www.x.com'>
                    <IoLogoTwitter className='h-8 w-8 hover:drop-shadow-md transform hover:-translate-y-0.5 transition-transform ease-in-out duration-300'/>
                </a>
                <a href='https://www.instagram.com/ajain._02/'>
                    <IoLogoInstagram className='h-8 w-8 hover:drop-shadow-md transform hover:-translate-y-0.5 transition-transform ease-in-out duration-300'/>
                </a>
                <a href='https://www.linkedin.com/in/aryan-jain18/'>
                    <IoLogoLinkedin className='h-8 w-8 hover:drop-shadow-md transform hover:-translate-y-0.5 transition-transform ease-in-out duration-300'/>
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer