const Navbar = () => {
  return (
    <header className="border-b">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h2 className="text-2xl font-bold">Shopware Store</h2>

        <nav className="flex gap-6">
          <ol className="text-gray-600 hover:text-gray-900 transition">
            <a href="#">Home</a>
          </ol>
          <ol className="text-gray-600 hover:text-gray-900 transition">
            <a href="#">Shop</a>
          </ol>
          <ol className="text-gray-600 hover:text-gray-900 transition">
            <a href="#">About</a>
          </ol>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
