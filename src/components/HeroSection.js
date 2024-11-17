// src/components/HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="bg-blue-100 h-screen flex flex-col justify-center items-center text-center px-4">
      <motion.h1
        className="text-5xl font-bold mb-4 text-gray-800"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to ClothingStore
      </motion.h1>
      <motion.p
        className="text-xl text-gray-600 mb-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Find your perfect style today.
      </motion.p>
      <motion.button
        className="bg-blue-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-600"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Shop Now
      </motion.button>
    </div>
  );
};

export default HeroSection;
