import React, { useState } from "react";
import { motion } from "framer-motion";
import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom"; // Import useNavigate

// Sample Product Data (Women’s Collection)
const products = [
  {
    id: 1,
    name: "Floral Dress",
    description: "A beautiful floral dress perfect for sunny days.",
    price: 89.99,
    imageUrl: "https://via.placeholder.com/400",
    category: "dresses",
    maxQuantity: 15,
  },
  {
    id: 2,
    name: "Denim Jacket",
    description: "Classic denim jacket for a casual look.",
    price: 79.99,
    imageUrl: "https://via.placeholder.com/400",
    category: "jackets",
    maxQuantity: 12,
  },
  {
    id: 3,
    name: "High Heels",
    description: "Elegant high heels that add style to any outfit.",
    price: 129.99,
    imageUrl: "https://via.placeholder.com/400",
    category: "shoes",
    maxQuantity: 10,
  },
  {
    id: 4,
    name: "Leather Handbag",
    description: "Premium leather handbag for everyday use.",
    price: 159.99,
    imageUrl: "https://via.placeholder.com/400",
    category: "accessories",
    maxQuantity: 8,
  },
  {
    id: 5,
    name: "Cotton Blouse",
    description: "Soft and breathable cotton blouse for comfort.",
    price: 49.99,
    imageUrl: "https://via.placeholder.com/400",
    category: "tops",
    maxQuantity: 20,
  },
  {
    id: 6,
    name: "Wide Leg Pants",
    description: "Trendy wide-leg pants for a relaxed fit.",
    price: 69.99,
    imageUrl: "https://via.placeholder.com/400",
    category: "pants",
    maxQuantity: 14,
  },
  {
    id: 7,
    name: "Maxi Skirt",
    description: "Flowy maxi skirt perfect for warm days.",
    price: 55.99,
    imageUrl: "https://via.placeholder.com/400",
    category: "skirts",
    maxQuantity: 18,
  },
  {
    id: 8,
    name: "Casual Sneakers",
    description: "Comfortable sneakers for a laid-back look.",
    price: 89.99,
    imageUrl: "https://via.placeholder.com/400",
    category: "shoes",
    maxQuantity: 10,
  },
  {
    id: 9,
    name: "Summer Hat",
    description: "Stylish hat to protect you from the sun.",
    price: 39.99,
    imageUrl: "https://via.placeholder.com/400",
    category: "accessories",
    maxQuantity: 25,
  },
  {
    id: 10,
    name: "Tunic Top",
    description: "Comfortable tunic top for casual wear.",
    price: 39.99,
    imageUrl: "https://via.placeholder.com/400",
    category: "tops",
    maxQuantity: 30,
  },
];

const WomenShopPage = () => {
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
          className="bg-pink-500 text-white px-6 py-2 rounded-full transform transition duration-300 hover:scale-110 hover:shadow-xl"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          All
        </motion.button>
        <motion.button
          onClick={() => setCategoryFilter("dresses")}
          className="bg-pink-500 text-white px-6 py-2 rounded-full transform transition duration-300 hover:scale-110 hover:shadow-xl"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Dresses
        </motion.button>
        <motion.button
          onClick={() => setCategoryFilter("jackets")}
          className="bg-pink-500 text-white px-6 py-2 rounded-full transform transition duration-300 hover:scale-110 hover:shadow-xl"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Jackets
        </motion.button>
        <motion.button
          onClick={() => setCategoryFilter("shoes")}
          className="bg-pink-500 text-white px-6 py-2 rounded-full transform transition duration-300 hover:scale-110 hover:shadow-xl"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Shoes
        </motion.button>
        <motion.button
          onClick={() => setCategoryFilter("accessories")}
          className="bg-pink-500 text-white px-6 py-2 rounded-full transform transition duration-300 hover:scale-110 hover:shadow-xl"
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
                className="bg-pink-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-pink-600 transform transition duration-300 hover:scale-110"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Add to Cart
              </motion.button>
              {/* Buy Now Button */}
              <motion.button
                onClick={() => handleBuyNow(product, 1)}
                className="bg-purple-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-purple-600 transform transition duration-300 hover:scale-110"
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

export default WomenShopPage;
