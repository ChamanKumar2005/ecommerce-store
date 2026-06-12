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

type CartItem = Product & {
  quantity: number;
};

export default function Home() {
 
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const cartCount = cartItems.reduce(
  (sum, item) => sum + item.quantity,
  0
);

  console.log(cartItems);

 const handleAddToCart = (product: Product) => {
  const existingItem = cartItems.find(
    (item) => item.id === product.id
  );

  if (existingItem) {
    const updatedCart = cartItems.map((item) =>
      item.id === product.id
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item
    );

    setCartItems(updatedCart);
  } else {
    setCartItems([
      ...cartItems,
      {
        ...product,
        quantity: 1,
      },
    ]);
  }
};

const increaseQuantity = (id: number) => {
  const updatedCart = cartItems.map((item) =>
    item.id === id
      ? { ...item, quantity: item.quantity + 1 }
      : item
  );

  setCartItems(updatedCart);
};

const decreaseQuantity = (id: number) => {
  const updatedCart = cartItems
    .map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    )
    .filter((item) => item.quantity > 0);

  setCartItems(updatedCart);
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


const totalPrice = cartItems.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0
);


const removeFromCart = (indexToRemove: number) => {
  const updatedCart = cartItems.filter(
    (_, index) => index !== indexToRemove
  );

  setCartItems(updatedCart);
};

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
  onAddToCart={() => handleAddToCart(product)}
/>
))}
        </div>
        <section className="mt-12">
          <h2 className="text-3xl font-bold mb-4">
            Cart Items
          </h2>

          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul className="space-y-2">
              {cartItems.map((item, index) => (
                <li
                  key={index}
                  className="border p-3 rounded-lg flex justify-between items-center"
                >
                  <span>
                    <div>
                      <p>
                       {item.title} (Quantity: {item.quantity})
                      </p>

                     <p>
                        ₹{item.price.toLocaleString()}
                    </p>
                    </div>
                  </span>

                  <div className="flex gap-2">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="bg-red-500 px-3 py-1 rounded"
                    >
                      -
                    </button>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="bg-green-500 px-3 py-1 rounded"
                    >
                      +
                    </button>

                    <button
                      onClick={() => removeFromCart(index)}
                      className="bg-red-700 px-3 py-1 rounded"
                    >
                      Remove
                    </button>
                  </div>
              </li>
              ))}
            </ul>
          )}
          <p className="mt-4 text-2xl font-bold">
            Total: ₹{totalPrice.toLocaleString()}
          </p>
          </section>
      </main>
    </>
  );
}