'use client'
import { motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react'

const DynamicFace = () => {
    const eyeRef1 = useRef<HTMLDivElement | null>(null);
    const eyeRef2 = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const eyes = [eyeRef1.current, eyeRef2.current];
            const { clientX: mouseX, clientY: mouseY } = event;

            eyes.forEach((eye) => {
                if (!eye) return;
                const rect = eye.getBoundingClientRect();
                const eyeCenterX = rect.left + rect.width / 2;
                const eyeCenterY = rect.top + rect.height / 2;

                const angle = Math.atan2(mouseY - eyeCenterY, mouseX - eyeCenterX);
                const distance = Math.min(rect.width / 2, rect.height / 2); // Limit pupil movement

                eye.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`;
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3.5 }}
            className="absolute left-20 top-36 w-40 h-40 z-50">
            <img src="/face.png" alt="Face" className="w-full h-full" />
            {/* Eyes */}
            <div
                ref={eyeRef1}
                className="relative bg-gradient-to-br from-green-800 to-green-600 border border-[#454545] shadow-sm shadow-black rounded-full w-2 h-2 bottom-[5.4rem] left-[2.8rem]"
            // className="relative bg-gradient-to-br from-blue-800 to-blue-400 border border-[#747474] shadow-sm shadow-black rounded-full w-2 h-2 bottom-[5.4rem] left-[2.8rem]"
            // className="relative bg-gradient-to-br from-black to-gray-500 border border-[#373333] shadow-sm shadow-black rounded-full w-2 h-2 bottom-[5.4rem] left-[2.8rem]"
            >
                <div className="relative bg-white rounded-full w-0.5 h-0.5 left-[0.2rem] opacity-40"></div>
            </div>
            <div
                ref={eyeRef2}
                className="relative bg-gradient-to-br from-green-800 to-green-600 border border-[#454545] shadow-sm shadow-black rounded-full w-2 h-2 bottom-[6.02rem] left-[5.8rem]"
            // className="relative bg-gradient-to-br from-blue-800 to-blue-400 border border-[#747474] shadow-sm shadow-black rounded-full w-2 h-2 bottom-[6.02rem] left-[5.8rem]"
            // className="relative bg-gradient-to-br from-black to-gray-500 border border-[#373333] shadow-sm shadow-black rounded-full w-2 h-2 bottom-[6.02rem] left-[5.8rem]"
            >
                <div className="relative bg-white rounded-full w-0.5 h-0.5 left-[0.2rem] opacity-40"></div>
            </div>
            <a href="/about" className='relative text-2xl text-mclaren-orange text-shadow-outline font-semibold hover:drop-shadow-md-strong left-5 bottom-2'>
                About Me
            </a>
        </motion.div>
    );
};


export default DynamicFace