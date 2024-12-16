import "@fontsource/playfair-display";
import "@fontsource/inter";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MenuSection from "@/components/Menu";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <MenuSection />
      <Footer />
    </div>
  );
};

export default Index;