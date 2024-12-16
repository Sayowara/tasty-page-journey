import { Gift } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const GiftCard = () => {
  return (
    <section id="gift-cards" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto hover:shadow-lg transition-shadow duration-300 animate-fade-in">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl mb-4">Gift Cards</CardTitle>
            <CardDescription className="text-lg">
              Give the gift of exceptional dining
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-6 p-6">
            <Gift className="w-16 h-16 text-accent animate-scale" />
            <p className="text-center text-muted-foreground">
              Perfect for birthdays, anniversaries, or any special occasion. Our gift cards are available in any denomination.
            </p>
            <Button className="w-full sm:w-auto animate-fade-in hover:scale-105 transition-transform duration-300">
              Buy a Gift Card
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default GiftCard;