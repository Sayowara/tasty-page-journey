import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="hero" className="hero-section min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 bg-black/40" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
          Experience Culinary Excellence
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Indulge in a symphony of flavors crafted with passion and precision
        </p>
        <Button
          className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg animate-slide-up"
          style={{ animationDelay: '0.4s' }}
          onClick={() => {
            const reservationSection = document.getElementById('reservation');
            reservationSection?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Make a Reservation
        </Button>
      </div>
    </section>
  );
};

export default Hero;