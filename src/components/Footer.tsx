import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscription");
  };

  return (
    <footer className="bg-secondary py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
            <p className="mb-2">123 Restaurant Street</p>
            <p className="mb-2">New York, NY 10001</p>
            <p className="mb-2">Phone: (555) 123-4567</p>
            <p>Email: info@restaurant.com</p>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Newsletter</h3>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white"
              />
              <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white">
                Subscribe
              </Button>
            </form>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p>&copy; 2024 Restaurant Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;