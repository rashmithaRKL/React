// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Cart from "./components/Cart";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import Accessories from "./pages/Accessories";
import Contact from "./pages/Contact";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-16">
          {" "}
          {/* Add padding for fixed Navbar */}
          <CartProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/about" element={<About />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/shop/men" element={<Men />} />
              <Route path="/shop/women" element={<Women />} />
              <Route path="/shop/kids" element={<Kids />} />
              <Route path="/shop/accessories" element={<Accessories />} />
            </Routes>
          </CartProvider>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
