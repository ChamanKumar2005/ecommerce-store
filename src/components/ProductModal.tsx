import Image from "next/image";

type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
};

type ProductModalProps = {
  product: Product;
  onClose: () => void;
  onAddToCart: () => void;
};

export default function ProductModal({
  product,
  onClose,
  onAddToCart,
}: ProductModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
    <div className="bg-gray-900 text-white rounded-2xl p-6 w-full max-w-lg relative">

        <button
        onClick={onClose}
        className="absolute top-3 right-4 text-2xl"
        >
        ✕
        </button>

        <div className="relative h-64 w-full mb-5">
        <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain rounded-lg"
        />
        </div>

        <h2 className="text-3xl font-bold">
        {product.title}
        </h2>

        <p className="text-gray-400 mt-2">
        {product.category}
        </p>

        <p className="text-2xl font-bold text-green-500 mt-3">
        ₹{product.price.toLocaleString()}
        </p>

        <button
        onClick={onAddToCart}
        className="mt-6 w-full bg-blue-500 hover:bg-blue-600 py-3 rounded-lg"
        >
        Add to Cart
        </button>

    </div>
    </div>
  );
}