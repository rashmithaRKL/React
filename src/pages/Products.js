import React from "react";
import ProductCard from "../components/ProductCard";

const products = [
  {
    id: 1,
    name: "T-Shirt",
    price: 25,
    image: "https://via.placeholder.com/150",
  },
  { id: 2, name: "Jeans", price: 40, image: "https://via.placeholder.com/150" },
  {
    id: 3,
    name: "Jacket",
    price: 60,
    image: "https://via.placeholder.com/150",
  },
];

const Products = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 py-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
