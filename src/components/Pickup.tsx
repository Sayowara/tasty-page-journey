import { Package } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const Pickup = () => {
  return (
    <section id="pickup" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto hover:shadow-lg transition-shadow duration-300 animate-fade-in">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl mb-4">Pickup Service</CardTitle>
            <CardDescription className="text-lg">
              Skip the wait, order ahead
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-6 p-6">
            <Package className="w-16 h-16 text-accent animate-scale" />
            <p className="text-center text-muted-foreground">
              Place your order online and pick it up at your convenience. Ready in just 20 minutes!
            </p>
            <Button className="w-full sm:w-auto animate-fade-in hover:scale-105 transition-transform duration-300">
              Order Pickup Now
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Pickup;