import { Calendar, Clock, Users } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { useForm } from "react-hook-form";
import { useToast } from "./ui/use-toast";

interface ReservationForm {
  date: string;
  time: string;
  partySize: string;
}

const Reservation = () => {
  const { toast } = useToast();
  const form = useForm<ReservationForm>();

  const onSubmit = (data: ReservationForm) => {
    toast({
      title: "Reservation Request Received",
      description: `Date: ${data.date}, Time: ${data.time}, Party Size: ${data.partySize}`,
    });
  };

  return (
    <section id="reservation" className="py-20">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto hover:shadow-lg transition-shadow duration-300 animate-fade-in">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl mb-4">Make a Reservation</CardTitle>
            <CardDescription className="text-lg">
              Book your table now
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                      <FormLabel className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" /> Date
                      </FormLabel>
                      <FormControl>
                        <Input 
                          type="date" 
                          {...field} 
                          className="focus:ring-2 focus:ring-accent transition-shadow hover:shadow-md"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="time"
                  render={({ field }) => (
                    <FormItem className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                      <FormLabel className="flex items-center gap-2">
                        <Clock className="w-4 h-4" /> Time
                      </FormLabel>
                      <FormControl>
                        <Input 
                          type="time" 
                          {...field} 
                          className="focus:ring-2 focus:ring-accent transition-shadow hover:shadow-md"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="partySize"
                  render={({ field }) => (
                    <FormItem className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                      <FormLabel className="flex items-center gap-2">
                        <Users className="w-4 h-4" /> Party Size
                      </FormLabel>
                      <FormControl>
                        <Input 
                          type="number" 
                          min="1" 
                          max="20" 
                          placeholder="Number of guests"
                          {...field}
                          className="focus:ring-2 focus:ring-accent transition-shadow hover:shadow-md"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full animate-fade-in hover:scale-105 transition-transform duration-300"
                  style={{ animationDelay: '0.4s' }}
                >
                  Reserve Now
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Reservation;