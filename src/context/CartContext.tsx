"use client";
import { createContext, useContext, useState, type ReactNode } from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
};

type CartItem = Product & {
  quantity: number;
};

type CartContextType = {
  cartItems: CartItem[];
  cartCount: number;
  totalPrice: number;
  addToCart: (product: Product) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const cartCount = cartItems.reduce(
        (sum, item) => sum + item.quantity,
        0
    );
    const totalPrice = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const addToCart = (product: Product) => {
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
    const removeFromCart = (id: number) => {
        const updatedCart = cartItems.filter(
            (item) => item.id !== id
        );

        setCartItems(updatedCart);
    };

    return (
        <CartContext.Provider
            value={{
            cartItems,
            cartCount,
            totalPrice,
            addToCart,
            increaseQuantity,
            decreaseQuantity,
            removeFromCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}