import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h1 className="text-5xl font-bold">Next.js Shopware Storefront</h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-600">
          Modern headless ecommerce storefront built with Next.js, React, and
          Shopware 6.
        </p>

        <button className="mt-8 rounded-xl bg-black px-6 py-3 text-white transition hover:bg-gray-800">
          Shop Now
        </button>
      </section>
    </main>
  );
};

export default Home;
