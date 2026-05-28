export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <h1 className="text-6xl font-bold text-blue-500">
        My E-commerce Store
      </h1>

      <p className="mt-4 text-xl text-gray-300">
        Built with Next.js + React + Tailwind CSS
      </p>

      <button className="mt-8 rounded-xl bg-blue-500 px-6 py-3 text-lg font-semibold hover:bg-blue-700 hover:scale-105 transition">
        Shop Now
      </button>
      <button className="mt-4 rounded-xl border border-white px-6 py-3">
        Learn More
      </button>
    </main>
  );
}