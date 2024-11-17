// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-800">
          <Link to="/">ClothingStore</Link>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-gray-700 hover:text-blue-500">
            Home
          </Link>
          <Link to="/products" className="text-gray-700 hover:text-blue-500">
            Products
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-500">
            About
          </Link>
          <Link to="/cart" className="text-gray-700 hover:text-blue-500">
            Cart
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-500">
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md py-4">
          <Link
            to="/"
            className="block px-6 py-2 text-gray-700 hover:bg-blue-100"
          >
            Home
          </Link>
          <Link
            to="/products"
            className="block px-6 py-2 text-gray-700 hover:bg-blue-100"
          >
            Products
          </Link>
          <Link
            to="/about"
            className="block px-6 py-2 text-gray-700 hover:bg-blue-100"
          >
            About
          </Link>
          <Link
            to="/cart"
            className="block px-6 py-2 text-gray-700 hover:bg-blue-100"
          >
            Cart
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
