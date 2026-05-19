import { ProductCard } from "./index";
const products = [
  { id: 1, title: "Minimal Chair", price: 129.99 },
  { id: 2, title: "Modern Lamp", price: 89.99 },
  { id: 3, title: "Wood Desk", price: 249.99 },
];
const Products = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20">
      <h2 className="mb-10 text-4xl font-bold">Featured Products</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
};

export default Products;
