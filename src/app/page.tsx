"use client";

import Hero from "../components/Hero";
import { useState } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
};

const products: Product[] = [
  {
    id: 1,
    title: "Nike Shoes",
    price: 4999,
    category: "Shoes",
    image: "/nike-shoes.jpg"
  },
  {
    id: 2,
    title: "iPhone 16",
    price: 79999,
    category: "Electronics",
    image: "/iphone.jpg"
  },
  {
    id: 3,
    title: "Smart Watch",
    price: 2999,
    category: "Electronics",
    image: "/smartwatch.jpg"
  },
  {
    id: 4,
    title: "Gaming Laptop",
    price: 85000,
    category: "Electronics",
    image: "/laptop.jpg"
  },
  {
    id: 5,
    title: "Headphones",
    price: 1999,
    category: "Accessories",
    image: "/headphones.jpg"
  },
  {
    id: 6,
    title: "Mechanical Keyboard",
    price: 3499,
    category: "Accessories",
    image: "/keyboard.jpg"
  },
];

export default function Home() {
  const [cartCount, setCartCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

 const filteredProducts = products.filter((product) => {
  const matchesSearch = product.title
    .toLowerCase()
    .includes(searchTerm.toLowerCase());

  const matchesCategory =
    selectedCategory === "All" ||
    product.category === selectedCategory;

  return matchesSearch && matchesCategory;
});

  return (
    <>
      <Navbar cartCount={cartCount} />
      <Hero />

      <main className="p-10">
        <h2 className="text-4xl font-bold mb-8">
          Featured Products
        </h2>
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full mb-6 rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-white placeholder:text-gray-400"
          />  
          <div className="flex gap-3 mb-6 flex-wrap">
  <button
    onClick={() => setSelectedCategory("All")}
    className={`px-4 py-2 rounded-lg text-white ${
  selectedCategory === "All"
    ? "bg-green-600"
    : "bg-blue-500"
}`}
  >
    All
  </button>

  <button
    onClick={() => setSelectedCategory("Electronics")}
    className={`px-4 py-2 rounded-lg text-white ${
  selectedCategory === "Electronics"
    ? "bg-green-600"
    : "bg-blue-500"
}`}
  >
    Electronics
  </button>

  <button
    onClick={() => setSelectedCategory("Shoes")}
    className={`px-4 py-2 rounded-lg text-white ${
  selectedCategory === "Shoes"
    ? "bg-green-600"
    : "bg-blue-500"
}`}
  >
    Shoes
  </button>

  <button
    onClick={() => setSelectedCategory("Accessories")}
    className={`px-4 py-2 rounded-lg text-white ${
  selectedCategory === "Accessories"
    ? "bg-green-600"
    : "bg-blue-500"
}`}
  >
    Accessories
  </button>
</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
  <ProductCard
  key={product.id}
  title={product.title}
  price={product.price}
  image={product.image}
  category={product.category}
  onAddToCart={handleAddToCart}
/>
))}
        </div>
      </main>
    </>
  );
}