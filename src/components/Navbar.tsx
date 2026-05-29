type NavbarProps = {
  cartCount: number;
};

export default function Navbar({
  cartCount,
}: NavbarProps) {
  return (
    <nav className="flex items-center justify-between p-5 bg-gray-900 text-white">
      <h1 className="text-2xl font-bold">E-Shop</h1>

      <div className="flex gap-6">
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">Cart ({cartCount})</a>
      </div>
    </nav>
  );
}