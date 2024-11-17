import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../contexts/CartContext"; // Using CartContext

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const handleRemove = (id) => {
    removeFromCart(id); // Removes item from the cart
  };

  const handleIncrease = (id) => {
    updateQuantity(id, cartItems.find((item) => item.id === id).quantity + 1);
  };

  const handleDecrease = (id) => {
    updateQuantity(id, cartItems.find((item) => item.id === id).quantity - 1);
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <motion.div
      className="min-h-screen bg-gray-100 text-gray-800 py-16 px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="text-4xl font-bold text-center mb-10">Shopping Cart</h1>

      <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow-md">
        <AnimatePresence>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <motion.div
                key={item.id}
                className="flex items-center justify-between mb-6 border-b pb-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.3 }}
              >
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p>Price: ${item.price.toFixed(2)}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <div className="flex items-center gap-4">
                  <button onClick={() => handleDecrease(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncrease(item.id)}>+</button>
                  <motion.button
                    onClick={() => handleRemove(item.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    Remove
                  </motion.button>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div
              className="text-center py-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <h2 className="text-xl font-semibold">
                Your cart is currently empty.
              </h2>
            </motion.div>
          )}
        </AnimatePresence>

        {cartItems.length > 0 && (
          <div className="mt-8 text-right">
            <div className="text-xl font-bold">Total: ${calculateTotal()}</div>
            <motion.button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded shadow hover:bg-blue-600">
              Proceed to Checkout
            </motion.button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Cart;
