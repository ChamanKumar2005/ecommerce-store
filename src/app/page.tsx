"use client";

import Hero from "../components/Hero";
import { useState } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

const products = [
  {
    id: 1,
    title: "Nike Shoes",
    price: 4999,
  },
  {
    id: 2,
    title: "iPhone 16",
    price: 79999,
  },
  {
    id: 3,
    title: "Smart Watch",
    price: 2999,
  },
  {
    id: 4,
    title: "Gaming Laptop",
    price: 85000,
  },
  {
    id: 5,
    title: "Headphones",
    price: 1999,
  },
  {
    id: 6,
    title: "Mechanical Keyboard",
    price: 3499,
  }
];

export default function Home() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <>
      <Navbar cartCount={cartCount} />
      <Hero />

      <main className="p-10">
        <h2 className="text-4xl font-bold mb-8">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
          onAddToCart={handleAddToCart}
        />
          ))}
        </div>
      </main>
    </>
  );
}