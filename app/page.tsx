import { Navbar, Hero, Products } from "@/components";

const Home = () => {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />
      <Hero />
      <Products />
    </main>
  );
};

export default Home;
