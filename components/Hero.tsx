const Hero = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-500">
          Modern Ecommerce
        </p>

        <h1 className="text-6xl font-bold leading-tight">
          Next.js Shopware Storefront
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          Build fast, scalable, and modern headless ecommerce experiences with
          Next.js, React, and Shopware 6.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="rounded-xl bg-black px-6 py-3 text-white hover:bg-gray-800">
            Shop Now
          </button>

          <button className="rounded-xl border border-gray-300 px-6 py-3 text-gray-700 transition hover:bg-gray-100">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
