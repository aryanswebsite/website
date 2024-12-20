'use client'
import { useRef } from 'react'
import { motion } from "framer-motion";

const ProjectIcon = () => {
  const parentRef = useRef(null);

  return (
    <div className='relative w-full h-full z-10' ref={parentRef}>
      <motion.div
        drag
        dragConstraints={parentRef}
        className='absolute left-16 bottom-20 z-10'
        style={{
          perspective: "50px",
          display: "flex",
        }}
      >
        <motion.img
          src="/project_icon.png"
          alt="3D Image"
          initial={{ z: -500, rotateY: -90, rotateZ: -10, filter: 'blur(50px)' }}
          animate={{ z: 0, rotateY: 0, filter: 'blur(0px)', y: ["0%", "-5%", "0%"] }}
          transition={{
            z: { duration: 0.5, delay: 3.3 },
            filter: { duration: 0.5, delay: 3.3 },
            rotateY: { duration: 0.5, delay: 3.3 },
            y: { duration: 2, delay: 3.3, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }
          }}
          style={{
            width: 180,
            height: "auto",
            pointerEvents: 'none',
          }}
        />
        <motion.a
          href="/projects"
          initial={{ opacity: 0 }} // Start as hidden
          animate={{ opacity: 1 }} // Become visible
          transition={{ duration: 0.5, delay: 3.6 }} // transition
          className='absolute top-40 left-24 translate-y-4'>
          <p className="text-2xl text-mclaren-orange text-shadow-outline font-semibold hover:drop-shadow-md-strong">
            Projects!
          </p>
        </motion.a>
      </motion.div>
    </div>
  )
}

export default ProjectIcon