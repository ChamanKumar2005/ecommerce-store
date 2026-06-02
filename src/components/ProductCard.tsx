import Image from "next/image";

type ProductCardProps = {
  title: string;
  price: number;
  image: string;
  category: string;
  onAddToCart: () => void;
};

export default function ProductCard({
  title,
  price,
  image,
  category,
  onAddToCart,
}: ProductCardProps) {
  return (
  <div className="rounded-xl border p-5 shadow-lg hover:shadow-2xl transition">
    <div className="relative h-40 mb-4">
  <Image
    src={image}
    alt={title}
    fill
    className="rounded-lg object-cover"
  />
</div>

    <h2 className="text-xl font-bold">
      {title}
    </h2>

    <p className="text-sm text-gray-400">
      {category}
    </p>

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