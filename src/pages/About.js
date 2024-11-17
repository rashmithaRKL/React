import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen bg-blue-500 text-white flex flex-col justify-center items-center px-6 text-center">
        <motion.h1
          className="text-5xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to Our Story
        </motion.h1>
        <motion.p
          className="mt-4 text-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Discover the journey behind our vision and what drives us forward.
        </motion.p>
        <motion.div
          className="mt-10"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <a
            href="#story"
            className="px-8 py-4 bg-white text-blue-500 rounded-full shadow-md hover:bg-gray-100 transition"
          >
            Learn More
          </a>
        </motion.div>
      </section>

      {/* Story Section */}
      <section
        id="story"
        className="py-16 px-6 lg:px-24 bg-gray-100 text-gray-800"
      >
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our Journey
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-4">The Beginning</h3>
            <p className="text-gray-600">
              Our story began with a simple idea—to create something meaningful
              and impactful.
            </p>
          </motion.div>
          <motion.div
            className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl font-semibold mb-4">Our Growth</h3>
            <p className="text-gray-600">
              Through dedication and innovation, we expanded our horizons to
              reach new heights.
            </p>
          </motion.div>
          <motion.div
            className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-semibold mb-4">The Future</h3>
            <p className="text-gray-600">
              With an unwavering commitment to excellence, we look ahead with
              optimism and enthusiasm.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 lg:px-24 bg-white">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Meet the Team
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {Array.from({ length: 4 }).map((_, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center text-center bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 + i * 0.1 }}
            >
              <div className="w-32 h-32 bg-blue-300 rounded-full mb-6"></div>
              <h3 className="text-xl font-semibold">Team Member {i + 1}</h3>
              <p className="text-gray-600">Role in the Company</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-800 text-white text-center">
        <p>
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default AboutPage;
