import React, { useState } from "react";
import { motion } from "framer-motion";
import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom"; // Import useNavigate

// Sample Product Data
const products = [
  {
    id: 1,
    name: "Stylish Jacket",
    description: "A high-quality jacket to keep you warm and fashionable.",
    price: 120.99,
    imageUrl: "https://via.placeholder.com/400",
    category: "jackets",
    maxQuantity: 10,
  },
  {
    id: 2,
    name: "Casual T-shirt",
    description: "Comfortable and trendy t-shirt for everyday wear.",
    price: 29.99,
    imageUrl: "https://via.placeholder.com/400",
    category: "t-shirts",
    maxQuantity: 20,
  },
  {
    id: 3,
    name: "Running Shoes",
    description: "Durable and stylish shoes for your active lifestyle.",
    price: 89.99,
    imageUrl: "https://via.placeholder.com/400",
    category: "shoes",
    maxQuantity: 15,
  },
  {
    id: 4,
    name: "Leather Wallet",
    description: "Premium leather wallet with multiple card slots.",
    price: 59.99,
    imageUrl: "https://via.placeholder.com/400",
    category: "accessories",
    maxQuantity: 5,
  },
  {
    id: 5,
    name: "Sneakers",
    description: "Comfortable sneakers for your daily adventures.",
    price: 99.99,
    imageUrl: "https://via.placeholder.com/400",
    category: "shoes",
    maxQuantity: 8,
  },
  {
    id: 6,
    name: "Denim Jeans",
    description: "Stylish denim jeans that go with almost everything.",
    price: 49.99,
    imageUrl: "https://via.placeholder.com/400",
    category: "pants",
    maxQuantity: 12,
  },
  {
    id: 7,
    name: "Wool Sweater",
    description: "Warm and cozy sweater for the cold weather.",
    price: 79.99,
    imageUrl: "https://via.placeholder.com/400",
    category: "jackets",
    maxQuantity: 10,
  },
  {
    id: 8,
    name: "Running Shorts",
    description: "Breathable and lightweight shorts for running.",
    price: 34.99,
    imageUrl: "https://via.placeholder.com/400",
    category: "pants",
    maxQuantity: 18,
  },
  {
    id: 9,
    name: "Chinos",
    description: "Versatile chinos for a semi-casual look.",
    price: 64.99,
    imageUrl: "https://via.placeholder.com/400",
    category: "pants",
    maxQuantity: 14,
  },
  {
    id: 10,
    name: "Sunglasses",
    description: "Trendy sunglasses for the sunny days.",
    price: 39.99,
    imageUrl: "https://via.placeholder.com/400",
    category: "accessories",
    maxQuantity: 7,
  },
];

const ShopPage = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  // State for filters and products
  const [categoryFilter, setCategoryFilter] = useState("all");

  // Filter products by category
  const filteredProducts =
    categoryFilter === "all"
      ? products
      : products.filter((p) => p.category === categoryFilter);

  // Handle "Buy Now" action (add to cart and navigate to cart page)
  const handleBuyNow = (product, quantity) => {
    addToCart({ ...product, quantity });
    navigate("/cart");
  };

  // Handle adding product to cart
  const handleAddToCart = (product, quantity) => {
    addToCart({ ...product, quantity });
  };

  return (
    <motion.div
      className="min-h-screen bg-gray-100 text-gray-800 py-16 px-8 sm:px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Filter Section */}
      <div className="flex justify-center gap-6 mb-8">
        <motion.button
          onClick={() => setCategoryFilter("all")}
          className="bg-blue-500 text-white px-6 py-2 rounded-full transform transition duration-300 hover:scale-110 hover:shadow-xl"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          All
        </motion.button>
        <motion.button
          onClick={() => setCategoryFilter("jackets")}
          className="bg-blue-500 text-white px-6 py-2 rounded-full transform transition duration-300 hover:scale-110 hover:shadow-xl"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Jackets
        </motion.button>
        <motion.button
          onClick={() => setCategoryFilter("shoes")}
          className="bg-blue-500 text-white px-6 py-2 rounded-full transform transition duration-300 hover:scale-110 hover:shadow-xl"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Shoes
        </motion.button>
        <motion.button
          onClick={() => setCategoryFilter("pants")}
          className="bg-blue-500 text-white px-6 py-2 rounded-full transform transition duration-300 hover:scale-110 hover:shadow-xl"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Pants
        </motion.button>
        <motion.button
          onClick={() => setCategoryFilter("accessories")}
          className="bg-blue-500 text-white px-6 py-2 rounded-full transform transition duration-300 hover:scale-110 hover:shadow-xl"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Accessories
        </motion.button>
      </div>

      {/* Products Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <motion.div
            key={product.id}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
          >
            <motion.img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-64 object-cover rounded-xl transition-transform duration-300 transform hover:scale-110"
              whileHover={{ scale: 1.1 }}
            />
            <h2 className="text-xl font-semibold mt-4">{product.name}</h2>
            <p className="text-gray-600 mt-2">{product.description}</p>
            <p className="text-xl font-semibold mt-2 text-green-600">
              ${product.price.toFixed(2)}
            </p>

            <div className="mt-6 flex justify-between">
              {/* Add to Cart Button */}
              <motion.button
                onClick={() => handleAddToCart(product, 1)}
                className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-blue-600 transform transition duration-300 hover:scale-110"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Add to Cart
              </motion.button>
              {/* Buy Now Button */}
              <motion.button
                onClick={() => handleBuyNow(product, 1)}
                className="bg-green-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-green-600 transform transition duration-300 hover:scale-110"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Buy Now
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ShopPage;
