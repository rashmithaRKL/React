import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  // States to store backend data
  const [bestSellers, setBestSellers] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from the backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true); // Start loading state

        // Fetch best sellers and new arrivals data from your backend API
        const bestSellersResponse = await axios.get(
          "http://localhost:5000/api/products/best-sellers"
        );
        const newArrivalsResponse = await axios.get(
          "http://localhost:5000/api/products/new-arrivals"
        );

        // Update the state with the data received
        setBestSellers(bestSellersResponse.data);
        setNewArrivals(newArrivalsResponse.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); // End loading state after fetch
      }
    };

    fetchProducts();
  }, []);

  // Handle adding items to the cart
  const addToCart = (productId) => {
    console.log(`Adding product with ID: ${productId} to the cart`);
    navigate("/cart");
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-[url('https://via.placeholder.com/1500')] bg-cover bg-center h-screen flex items-center justify-center">
        <motion.div
          className="text-center text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-bold mb-4">Welcome to Deerlan</h1>
          <p className="text-lg mb-6">
            Where Luxury Meets Youth. Discover our latest collections now!
          </p>
          <div className="space-x-4">
            <Link
              to="/products"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
            >
              Shop Now
            </Link>
            <Link
              to="/about"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
            >
              Learn More
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Best Sellers Section */}
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">Best Sellers</h2>
        {loading ? (
          <p className="text-center">Loading best sellers...</p>
        ) : (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {bestSellers.map((product) => (
              <motion.div
                key={product.id}
                className="bg-gray-200 rounded-lg shadow-lg p-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="mt-4 text-center">
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="text-green-500 mt-2">${product.price}</p>
                  <button
                    onClick={() => addToCart(product.id)} // Pass product ID
                    className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </section>

      {/* New Arrivals Section */}
      <section className="py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">New Arrivals</h2>
        {loading ? (
          <p className="text-center">Loading new arrivals...</p>
        ) : (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {newArrivals.map((product) => (
              <motion.div
                key={product.id}
                className="bg-gray-200 rounded-lg shadow-lg p-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="mt-4 text-center">
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="text-green-500 mt-2">${product.price}</p>
                  <button
                    onClick={() => addToCart(product.id)} // Pass product ID
                    className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </section>
    </div>
  );
};

export default HomePage;
