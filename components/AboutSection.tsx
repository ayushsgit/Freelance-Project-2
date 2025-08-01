import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Award, Users, Clock, MapPin } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Restaurant Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Story
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Founded in 2008 by Chef Alessandro Moretti, Savoria began as a small family restaurant with a big dream: 
              to bring authentic Italian flavors to the heart of the city while embracing modern culinary innovations.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              What started in a cozy 20-seat space has grown into a celebrated dining destination, but our commitment 
              to quality, family recipes, and exceptional hospitality remains unchanged. Every dish tells a story of 
              tradition, passion, and the finest ingredients sourced from around the world.
            </p>
            
            {/* Values */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <Award className="h-6 w-6 text-amber-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Excellence</h4>
                  <p className="text-sm text-muted-foreground">Uncompromising quality in every dish</p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="h-6 w-6 text-amber-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Family</h4>
                  <p className="text-sm text-muted-foreground">Treating every guest like family</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-amber-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Tradition</h4>
                  <p className="text-sm text-muted-foreground">Honoring time-tested recipes</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-amber-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Local</h4>
                  <p className="text-sm text-muted-foreground">Supporting local farmers & producers</p>
                </div>
              </div>
            </div>

            <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
              Learn More About Us
            </Button>
          </div>

          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Restaurant interior"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
            {/* Floating Stats Card */}
            <Card className="absolute -bottom-8 -left-8 p-6 shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-1">15+</div>
                <div className="text-sm text-muted-foreground">Years of Excellence</div>
              </div>
            </Card>
          </div>
        </div>

        {/* Chef Section */}
        <div className="bg-muted/30 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Meet Our Chef</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The culinary mastermind behind our exceptional dishes
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Chef Alessandro Moretti"
                className="w-80 h-80 object-cover rounded-full mx-auto lg:mx-0 shadow-2xl"
              />
            </div>

            <div>
              <h4 className="text-2xl font-bold mb-2">Chef Alessandro Moretti</h4>
              <p className="text-amber-600 font-semibold mb-6">Executive Chef & Founder</p>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                With over two decades of culinary experience across Michelin-starred restaurants in Italy and France, 
                Chef Alessandro brings an unparalleled level of expertise and passion to Savoria. His innovative 
                approach to traditional Italian cuisine has earned numerous accolades and a devoted following.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-background p-4 rounded-lg">
                  <div className="text-2xl font-bold text-amber-600">3</div>
                  <div className="text-sm text-muted-foreground">Michelin Stars</div>
                </div>
                <div className="bg-background p-4 rounded-lg">
                  <div className="text-2xl font-bold text-amber-600">25+</div>
                  <div className="text-sm text-muted-foreground">Awards Won</div>
                </div>
              </div>

              <blockquote className="italic text-muted-foreground border-l-4 border-amber-600 pl-4">
                "Cooking is not just about feeding the body, it's about nourishing the soul and creating memories 
                that last a lifetime."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}