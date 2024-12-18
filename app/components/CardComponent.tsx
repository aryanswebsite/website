'use client'
import { motion } from "framer-motion";
import Image from "next/image";

const F1Card = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="w-80 bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden"
    >
      {/* Card Image */}
      <div className="relative h-48">
        <Image 
        src="/f1.jpg"
        alt="f1 picture"
        width={327}
        height={409}
        className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h2 className="text-2xl font-bold text-white">Formula 1</h2>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6">
        <p className="text-sm text-gray-400 mb-3">
          High-speed races, cutting-edge technology, and adrenaline-filled action.
        </p>
        <p className="text-sm">
          I am a massive fan of Formula 1, where drivers push themselves to the limit on
          the world&apos;s fastest circuits. My favourite team is McLaren (if you couldn&apos;t already tell!)
        </p>
      </div>
    </motion.div>
  );
};

export default F1Card;
