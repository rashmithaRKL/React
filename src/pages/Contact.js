import React from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen bg-green-500 text-white flex flex-col justify-center items-center px-6 text-center">
        <motion.h1
          className="text-5xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Get in Touch
        </motion.h1>
        <motion.p
          className="mt-4 text-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          We’d love to hear from you! Reach out to us anytime.
        </motion.p>
        <motion.div
          className="mt-10"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <a
            href="#contact-form"
            className="px-8 py-4 bg-white text-green-500 rounded-full shadow-md hover:bg-gray-100 transition"
          >
            Contact Us
          </a>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section
        id="contact-form"
        className="py-16 px-6 lg:px-24 bg-gray-100 text-gray-800"
      >
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Contact Us
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.form
            className="p-6 bg-white rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for reaching out!");
            }}
          >
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">
                Message
              </label>
              <textarea
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your Message"
                rows="5"
                required
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-lg hover:bg-green-600 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </motion.form>

          {/* Contact Details */}
          <motion.div
            className="flex flex-col justify-between bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <h3 className="text-xl font-semibold">Address</h3>
              <p className="text-gray-600 mt-2">
                123 Business Avenue, City, Country
              </p>
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold">Phone</h3>
              <p className="text-gray-600 mt-2">+123 456 7890</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Email</h3>
              <p className="text-gray-600 mt-2">contact@yourbusiness.com</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-6 lg:px-24 bg-white">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Visit Us
        </motion.h2>
        <motion.div
          className="relative h-96 w-full rounded-lg overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.481774934834!2d80.04007167574686!3d6.832692793165292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253a3d37ac853%3A0x88205e1a91e6c19b!2sRK%20Software%20Technologies!5e0!3m2!1sen!2slk!4v1745613841613!5m2!1sen!2slk"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div>
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

export default ContactPage;
