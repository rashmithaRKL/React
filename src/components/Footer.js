// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About ClothingStore</h3>
          <p className="text-sm">
            Your one-stop shop for the latest trends in fashion. Explore our
            wide range of products designed for everyone.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-blue-400">
                Home
              </a>
            </li>
            <li>
              <a href="/products" className="hover:text-blue-400">
                Products
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-400">
                About
              </a>
            </li>
            <li>
              <a href="/cart" className="hover:text-blue-400">
                Cart
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p>Email: dexlanka@gmail.com</p>
          <p>Phone: (+94) 70 558 8789</p>
          <p>Address: Ovitigama, Meegoda</p>
        </div>
      </div>

      <div className="mt-8 text-center border-t border-gray-600 pt-4">
        &copy; 2024 ClothingStore. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
