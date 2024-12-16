import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Classic Margherita Pizza",
    description: "Fresh tomatoes, mozzarella, basil, and olive oil",
    price: 14.99,
    image: "/placeholder.svg",
    category: "food"
  },
  {
    id: 2,
    name: "Grilled Salmon",
    description: "Atlantic salmon with lemon butter sauce",
    price: 24.99,
    image: "/placeholder.svg",
    category: "food"
  },
  {
    id: 3,
    name: "Caesar Salad",
    description: "Romaine lettuce, croutons, parmesan cheese",
    price: 10.99,
    image: "/placeholder.svg",
    category: "food"
  },
  {
    id: 4,
    name: "Signature Mojito",
    description: "Fresh mint, lime, rum, and soda water",
    price: 9.99,
    image: "/placeholder.svg",
    category: "drink"
  },
  {
    id: 5,
    name: "Fresh Lemonade",
    description: "House-made with fresh lemons and mint",
    price: 4.99,
    image: "/placeholder.svg",
    category: "drink"
  },
  {
    id: 6,
    name: "Red Wine Sangria",
    description: "Spanish red wine with fresh fruits",
    price: 8.99,
    image: "/placeholder.svg",
    category: "drink"
  }
];

const MenuSection = () => {
  return (
    <section id="menu" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Our Menu</h2>
        
        <Tabs defaultValue="food" className="w-full">
          <TabsList className="grid w-full max-w-[400px] grid-cols-2 mx-auto mb-8">
            <TabsTrigger value="food">Food</TabsTrigger>
            <TabsTrigger value="drink">Drinks</TabsTrigger>
          </TabsList>
          
          <TabsContent value="food" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuItems
                .filter(item => item.category === "food")
                .map(item => (
                  <Card key={item.id} className="group overflow-hidden transition-all duration-300 hover:shadow-lg">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl">{item.name}</CardTitle>
                        <span className="text-lg font-semibold text-primary">
                          ${item.price}
                        </span>
                      </div>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
            </div>
          </TabsContent>
          
          <TabsContent value="drink" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuItems
                .filter(item => item.category === "drink")
                .map(item => (
                  <Card key={item.id} className="group overflow-hidden transition-all duration-300 hover:shadow-lg">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl">{item.name}</CardTitle>
                        <span className="text-lg font-semibold text-primary">
                          ${item.price}
                        </span>
                      </div>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default MenuSection;