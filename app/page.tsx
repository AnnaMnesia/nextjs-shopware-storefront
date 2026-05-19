import { Navbar, Hero, Products, Newsletter, Footer } from "@/components";

const Home = () => {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />
      <Hero />
      <Products />
      <Newsletter />
      <Footer />
    </main>
  );
};

export default Home;
