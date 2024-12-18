'use client'
import { motion } from 'framer-motion';

const AboutMe = () => {

  return (
    <section className="flex flex-col items-center justify-center relative">
      {/* Interactive Background */}
      <div className="absolute inset-0 opacity-50 z-0"></div>
      
      <div className="relative z-10 p-8 max-w-4xl text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-6"
          whileHover={{ scale: 1.1 }}
        >
          Hello, I&apos;m <span className="text-[#47c7fc]">Aryan Jain</span>
        </motion.h1>
        
        <p className="text-lg md:text-2xl">
          I&apos;m a software engineer with a love for building useful and powerful applications powered by data science and AI.
        </p>
      </div>

      {/* Scrollable Timeline */}
      <div className="relative z-10 w-full px-4 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold">My Journey</h2>
          <p className="text-lg mt-4">A timeline of my experience and career path.</p>
        </motion.div>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="p-6 bg-white text-black rounded-lg shadow-lg"
          >
            <h3 className="font-semibold text-xl">2020 - Student @ UCL</h3>
            <p>Completed a Bachelor of Science in Computer Science at the University College London, obtaining an Upper Second Class 2:1.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="p-6 bg-white text-black rounded-lg shadow-lg"
          >
            <h3 className="font-semibold text-xl">2021 - Intern @ Amazon</h3>
            <p>Completed a Technology Spring internship at Amazon.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="p-6 bg-white text-black rounded-lg shadow-lg"
          >
            <h3 className="font-semibold text-xl">2023 - Full time Analyst @ Deutsche Bank</h3>
            <p>Currently working as a software engineer at DB, building AI/ML powered applications for the bank&apos;s Risk, Finance & Treasury department.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
