'use client'
import { motion } from 'framer-motion'
import React from 'react'

const IntroPara = () => {
    return (
        <motion.p
            initial={{ opacity: 0 }} // Start as hidden
            animate={{ opacity: 1 }} // Become visible
            transition={{ duration: 0.5, delay: 2.5 }} // transition
            className="absolute top-[28.5rem] text-lg text-gray-700">
            Hi, I’m Aryan! Explore my projects and passions.
        </motion.p>
    )
}

export default IntroPara