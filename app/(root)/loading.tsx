import React from 'react'
import Image from 'next/image'

const loading = () => {
    
    return (
        <div className='flex relative justify-center items-center overflow-hidden w-full h-screen'>
            <Image 
            src="/mclarenf1car.png"
            alt="McLaren F1 Car"
            width={329}
            height={98}
            className='absolute animate-slideInOut'
            />
            <span className='absolute bottom-64 left-1/2 -translate-x-1/2 text-2xl font-semibold'>
                Qualifying...
            </span>
        </div>
    );
}

export default loading