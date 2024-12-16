import "@fontsource/playfair-display";
import "@fontsource/inter";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MenuSection from "@/components/Menu";
import GiftCard from "@/components/GiftCard";
import Delivery from "@/components/Delivery";
import Pickup from "@/components/Pickup";
import Reservation from "@/components/Reservation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <MenuSection />
        <GiftCard />
        <Delivery />
        <Pickup />
        <Reservation />
      </main>
      <Footer />
    </div>
  );
};

export default Index;