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
    <div className="border rounded-xl p-4 shadow-md">
      <h2 className="text-xl font-bold">
        {title}
      </h2>

      <p className="text-gray-500">
        ₹{price}
      </p>

      <button
        onClick={onAddToCart}
        className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        Add to Cart
      </button>
    </div>
  );
}