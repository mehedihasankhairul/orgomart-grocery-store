import CategorySlider from "../components/CategorySlider";
import HeroSection from "../components/HeroSection";
import Products from "../components/Products";

const Home = () => (
  <div className="flex flex-col min-h-screen overflow-hidden">
    <HeroSection />
    <main className="flex-grow container mx-auto">
      <CategorySlider />
      <Products />
    </main>
  </div>
);

export default Home;
