import { Truck, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const Delivery = () => {
  return (
    <section id="delivery" className="py-20">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl mb-4">Delivery Service</CardTitle>
            <CardDescription className="text-lg">
              Enjoy our delicious meals at home
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-6 p-6">
            <div className="flex gap-4">
              <Truck className="w-12 h-12 text-accent" />
              <MapPin className="w-12 h-12 text-accent" />
            </div>
            <p className="text-center text-muted-foreground">
              Fast and reliable delivery service straight to your doorstep. Available within our delivery zone.
            </p>
            <Button className="w-full sm:w-auto animate-fade-in">
              Order Delivery Now
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Delivery;