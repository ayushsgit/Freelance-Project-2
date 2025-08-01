import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  MapPin, 
  Phone, 
  Mail,
  Clock,
  Star
} from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-border">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter for exclusive recipes, special events, and seasonal menu updates
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1"
              />
              <Button className="bg-amber-600 hover:bg-amber-700">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div>
            <h3 className="text-2xl font-bold text-amber-600 mb-4">Savoria</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              A culinary journey that celebrates traditional flavors with modern innovation. 
              Experience exceptional dining in the heart of the city.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <Button variant="outline" size="sm" className="p-2">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="p-2">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="p-2">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#home" className="hover:text-amber-600 transition-colors">Home</a></li>
              <li><a href="#menu" className="hover:text-amber-600 transition-colors">Menu</a></li>
              <li><a href="#about" className="hover:text-amber-600 transition-colors">About Us</a></li>
              <li><a href="#gallery" className="hover:text-amber-600 transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-amber-600 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors">Private Events</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors">Gift Cards</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <p>123 Culinary Street</p>
                  <p>Downtown District</p>
                  <p>New York, NY 10001</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 flex-shrink-0" />
                <p>(555) 123-4567</p>
              </div>
              
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 flex-shrink-0" />
                <p>info@savoria.com</p>
              </div>
            </div>
          </div>

          {/* Hours & Info */}
          <div>
            <h4 className="font-semibold mb-4">Opening Hours</h4>
            <div className="space-y-3 text-muted-foreground text-sm">
              <div className="flex justify-between">
                <span>Mon - Thu</span>
                <span>5:00 PM - 10:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Fri - Sat</span>
                <span>5:00 PM - 11:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>4:00 PM - 9:00 PM</span>
              </div>
            </div>

            <Separator className="my-4" />

            {/* Rating */}
            <div className="text-center p-4 bg-muted/50 rounded-lg">
              <div className="flex items-center justify-center mb-2">
                <Star className="h-5 w-5 text-amber-500 fill-current" />
                <Star className="h-5 w-5 text-amber-500 fill-current" />
                <Star className="h-5 w-5 text-amber-500 fill-current" />
                <Star className="h-5 w-5 text-amber-500 fill-current" />
                <Star className="h-5 w-5 text-amber-500 fill-current" />
              </div>
              <p className="text-sm font-medium">4.9/5 Rating</p>
              <p className="text-xs text-muted-foreground">Based on 1,200+ reviews</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2024 Savoria Restaurant. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-muted-foreground hover:text-amber-600 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-amber-600 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-amber-600 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}