import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const navItems = [
    { name: "Home", to: "hero" },
    { name: "Menu", to: "menu" },
    { name: "Gift Cards", to: "gift-cards" },
    { name: "Delivery", to: "delivery" },
    { name: "Pickup", to: "pickup" },
    { name: "Reservation", to: "reservation" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isSticky ? "bg-background/95 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-playfair font-bold text-accent">
            Restaurant Name
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 hover:bg-accent/10 rounded-full transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link cursor-pointer"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu */}
          <div className={`absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md md:hidden transition-all duration-300 ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}>
            <div className="flex flex-col items-center space-y-4 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="nav-link w-full text-center py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;