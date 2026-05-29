"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <>
      <Navbar cartCount={cartCount} />

      <main className="p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProductCard
            title="Nike Shoes"
            price={4999}
            onAddToCart={handleAddToCart}
          />

          <ProductCard
            title="iPhone 16"
            price={79999}
            onAddToCart={handleAddToCart}
          />

          <ProductCard
            title="Smart Watch"
            price={2999}
            onAddToCart={handleAddToCart}
          />
        </div>
      </main>
    </>
  );
}