type ProductCardProps = {
  title: string;
  price: number;
  onAddToCart: () => void;
};

export default function ProductCard({
  title,
  price,
  onAddToCart,
}: ProductCardProps) {
  return (
  <div className="rounded-xl border p-5 shadow-lg hover:shadow-2xl transition">
    <div className="h-40 bg-gray-200 rounded-lg mb-4"></div>

    <h2 className="text-xl font-bold">
      {title}
    </h2>

    <p className="text-2xl font-semibold text-green-600 mt-2">
      ₹{price}
    </p>

    <button
      onClick={onAddToCart}
      className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
    >
      Add to Cart
    </button>
  </div>
);
}