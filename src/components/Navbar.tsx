import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", to: "hero" },
    { name: "Menu", to: "menu" },
    { name: "Gift Cards", to: "gift-cards" },
    { name: "Delivery", to: "delivery" },
    { name: "Pickup", to: "pickup" },
    { name: "Reservation", to: "reservation" },
  ];

  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-md z-50 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-playfair font-bold">
            Restaurant Name
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
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
                className="nav-link"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu */}
          {isOpen && (
            <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md md:hidden">
              <div className="flex flex-col items-center space-y-4 py-4">
                {navItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="nav-link"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;