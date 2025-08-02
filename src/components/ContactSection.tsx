import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Badge } from "./ui/badge";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Calendar,
  Users,
  Star
} from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-amber-600 border-amber-600">
            Get In Touch
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Visit Us Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We'd love to welcome you to Savoria. Make a reservation or get in touch for any inquiries
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Location */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <MapPin className="h-6 w-6 text-amber-600 mr-3" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-2">123 Culinary Street</p>
                <p className="text-lg mb-2">Downtown District</p>
                <p className="text-lg mb-4">New York, NY 10001</p>
                <p className="text-muted-foreground">
                  Located in the heart of downtown, easily accessible by subway and with valet parking available.
                </p>
              </CardContent>
            </Card>

            {/* Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Clock className="h-6 w-6 text-amber-600 mr-3" />
                  Opening Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Monday - Thursday</span>
                    <span className="font-medium">5:00 PM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Friday - Saturday</span>
                    <span className="font-medium">5:00 PM - 11:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium">4:00 PM - 9:00 PM</span>
                  </div>
                </div>
                <p className="text-muted-foreground mt-4 text-sm">
                  Last seating 30 minutes before closing. Holiday hours may vary.
                </p>
              </CardContent>
            </Card>

            {/* Contact Details */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Phone className="h-6 w-6 text-amber-600 mr-3" />
                  Contact Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-muted-foreground mr-3" />
                  <div>
                    <p className="font-medium">(555) 123-4567</p>
                    <p className="text-sm text-muted-foreground">Reservations & General Inquiries</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-muted-foreground mr-3" />
                  <div>
                    <p className="font-medium">info@savoria.com</p>
                    <p className="text-sm text-muted-foreground">Email us anytime</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-muted-foreground mr-3" />
                  <div>
                    <p className="font-medium">events@savoria.com</p>
                    <p className="text-sm text-muted-foreground">Private events & catering</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Reservation Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Calendar className="h-6 w-6 text-amber-600 mr-3" />
                  Make a Reservation
                </CardTitle>
                <p className="text-muted-foreground">
                  Book your table and let us create an unforgettable dining experience for you
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="Enter your phone number" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="date">Date</Label>
                      <Input id="date" type="date" />
                    </div>
                    <div>
                      <Label htmlFor="time">Time</Label>
                      <select id="time" className="w-full p-2 border border-border rounded-md bg-background">
                        <option>5:00 PM</option>
                        <option>5:30 PM</option>
                        <option>6:00 PM</option>
                        <option>6:30 PM</option>
                        <option>7:00 PM</option>
                        <option>7:30 PM</option>
                        <option>8:00 PM</option>
                        <option>8:30 PM</option>
                        <option>9:00 PM</option>
                        <option>9:30 PM</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="guests">Guests</Label>
                      <select id="guests" className="w-full p-2 border border-border rounded-md bg-background">
                        <option>1 Guest</option>
                        <option>2 Guests</option>
                        <option>3 Guests</option>
                        <option>4 Guests</option>
                        <option>5 Guests</option>
                        <option>6 Guests</option>
                        <option>7+ Guests</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="occasion">Special Occasion (Optional)</Label>
                    <select id="occasion" className="w-full p-2 border border-border rounded-md bg-background">
                      <option value="">Select an occasion</option>
                      <option>Birthday</option>
                      <option>Anniversary</option>
                      <option>Date Night</option>
                      <option>Business Dinner</option>
                      <option>Celebration</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="requests">Special Requests</Label>
                    <Textarea 
                      id="requests" 
                      placeholder="Any dietary restrictions, seating preferences, or special requests..."
                      rows={3}
                    />
                  </div>

                  <Button size="lg" className="w-full bg-amber-600 hover:bg-amber-700">
                    Book Table
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    You will receive a confirmation email within 30 minutes. For same-day reservations, please call us directly.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <Card className="text-center p-4">
                <Star className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                <div className="text-2xl font-bold">4.9</div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </Card>
              <Card className="text-center p-4">
                <Users className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                <div className="text-2xl font-bold">1000+</div>
                <div className="text-sm text-muted-foreground">Happy Guests</div>
              </Card>
              <Card className="text-center p-4">
                <Clock className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm text-muted-foreground">Years</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}