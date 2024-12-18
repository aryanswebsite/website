'use client'
import { motion } from "framer-motion";
import Image from "next/image";

const BadmintonCard = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="w-80 bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden"
    >
      {/* Card Image */}
      <div className="relative h-48">
        <Image 
        src="/badminton.jpg"
        alt="f1 picture"
        width={236}
        height={330}
        className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h2 className="text-2xl font-bold text-white">Badminton</h2>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6">
        <p className="text-sm text-gray-400 mb-3">
          Exciting, fast-paced and competitive sports.
        </p>
        <p className="text-sm">
        I love playing badminton because it challenges my agility, reflexes, and strategy. It of course also helps me stay active and have fun.
        </p>
      </div>
    </motion.div>
  );
};

export default BadmintonCard;
