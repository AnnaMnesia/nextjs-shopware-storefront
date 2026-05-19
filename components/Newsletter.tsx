const Newsletter = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="rounded-3xl bg-gray-100 px-8 py-14 text-center">
        <h2 className="text-4xl font-bold">Join our Newsletter</h2>
        <p>Get updates on new products, offers and upcoming sales.</p>

        <div className="mx-auto mt-8 flex max-w-md gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-xl border px-4 py-3"
          />
          <button className="rounded-xl bg-black px-6 py-3 text-white">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
