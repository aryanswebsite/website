import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='fixed w-screen top-4 left-0 flex items-center justify-center'>
        <div className='rounded-full bg-mclaren-orange drop-shadow-md-strong font-work-sans px-6 py-3'>
            <nav className='flex justify-start items-center'>
                <Link href="/" className='hover:drop-shadow-glow-blue pr-[4rem]'>
                    <Image src="/aryanface2.png" alt="aryanface" width={52} height={55} />
                </Link>
                <Link href="/about" className='hover:drop-shadow-md-strong pr-[4rem] transform hover:-translate-y-0.5 transition-transform ease-in-out duration-300'>
                    <span className='text-2xl font-bold'>About Me</span>
                </Link>
                <Link href="/resume" className='hover:drop-shadow-md-strong pr-[4rem] transform hover:-translate-y-0.5 transition-transform ease-in-out duration-300'>
                    <span className='text-2xl font-bold'>Resume</span>
                </Link>
                <Link href="/projects" className='hover:drop-shadow-md-strong pr-[4rem] transform hover:-translate-y-0.5 transition-transform ease-in-out duration-300'>
                    <span className='text-2xl font-bold'>Projects</span>
                </Link>
                <Link href="/hobbies" className='hover:drop-shadow-md-strong pr-[4rem] transform hover:-translate-y-0.5 transition-transform ease-in-out duration-300'>
                    <span className='text-2xl font-bold'>Hobbies</span>
                </Link>
            </nav>
        </div>
    </div>
  )
}

export default Navbar;