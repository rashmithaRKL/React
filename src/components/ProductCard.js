import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

const ProductPage = () => {
  const { addToCart, cart } = useCart(); // Cart context to manage cart items
  const navigate = useNavigate();

  // Mock product data (replace with actual backend data)
  const product = {
    id: 1,
    name: "Stylish Backpack",
    description: "A high-quality backpack for all your daily needs.",
    price: 99.99,
    imageUrl: "https://via.placeholder.com/400", // Replace with actual image URL
    minQuantity: 1,
    maxQuantity: 10,
  };

  // State for quantity
  const [quantity, setQuantity] = useState(product.minQuantity || 1);

  // Handle quantity change (increment/decrement)
  const handleQuantityChange = (change) => {
    setQuantity((prev) => {
      const newQuantity = prev + change;
      return Math.min(
        Math.max(newQuantity, product.minQuantity),
        product.maxQuantity
      );
    });
  };

  // Handle adding to cart and update backend
  const handleAddToCart = async () => {
    if (quantity >= product.minQuantity && quantity <= product.maxQuantity) {
      const cartItem = { ...product, quantity }; // Item to add to the cart
      addToCart(cartItem); // Update local cart context

      try {
        // Send cart data to the backend
        await axios.post("http://localhost:5000/api/cart", cartItem);
        alert("Product successfully added to cart!");
      } catch (error) {
        console.error("Error adding product to cart:", error);
        alert("Failed to add product to cart. Please try again.");
      }
    } else {
      alert(
        `Quantity must be between ${product.minQuantity} and ${product.maxQuantity}`
      );
    }
  };

  // Handle "Buy Now" action
  const handleBuyNow = () => {
    addToCart({ ...product, quantity });
    navigate("/cart"); // Redirect to cart page
  };

  return (
    <motion.div
      className="min-h-screen bg-gray-100 text-gray-800 py-16 px-8 sm:px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow-md">
        <motion.div
          className="flex flex-col lg:flex-row gap-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img
            src={product.imageUrl || "https://via.placeholder.com/300"}
            alt={product.name}
            className="w-full lg:w-64 h-auto object-cover rounded mb-6 lg:mb-0"
          />
          <div className="flex flex-col gap-4 w-full">
            <motion.h1 className="text-3xl font-bold">{product.name}</motion.h1>
            <motion.p className="text-lg text-gray-600">
              {product.description}
            </motion.p>
            <motion.p className="text-xl font-semibold text-green-600">
              ${product.price.toFixed(2)}
            </motion.p>
            <motion.p className="text-gray-600">
              Minimum Quantity: {product.minQuantity} | Available Stock:{" "}
              {product.maxQuantity}
            </motion.p>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 mt-6">
              <motion.button
                onClick={() => handleQuantityChange(-1)}
                className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
              >
                -
              </motion.button>
              <motion.span className="text-lg font-semibold">
                {quantity}
              </motion.span>
              <motion.button
                onClick={() => handleQuantityChange(1)}
                className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
              >
                +
              </motion.button>
            </div>

            {/* Buttons */}
            <motion.button
              onClick={handleAddToCart}
              className="mt-6 bg-blue-500 text-white px-6 py-2 rounded shadow hover:bg-blue-600"
            >
              Add to Cart
            </motion.button>
            <motion.button
              onClick={handleBuyNow}
              className="mt-4 bg-green-500 text-white px-6 py-2 rounded shadow hover:bg-green-600"
            >
              Buy Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProductPage;
