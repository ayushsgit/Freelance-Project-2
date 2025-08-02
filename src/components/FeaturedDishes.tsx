import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Star, Clock, Users } from 'lucide-react';

const featuredDishes = [
  {
    id: 1,
    name: "Wagyu Beef Tenderloin",
    description: "Premium grade A5 Wagyu beef with truffle sauce, roasted vegetables, and red wine reduction",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$85",
    rating: 4.9,
    time: "25 min",
    category: "Main Course",
    isSignature: true
  },
  {
    id: 2,
    name: "Lobster Thermidor",
    description: "Fresh Atlantic lobster with creamy cognac sauce, gratinated cheese, and herb butter",
    image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$68",
    rating: 4.8,
    time: "30 min",
    category: "Seafood",
    isSignature: true
  },
  {
    id: 3,
    name: "Duck Confit",
    description: "Slow-cooked duck leg with cherry gastrique, roasted root vegetables, and crispy potatoes",
    image: "https://images.unsplash.com/photo-1432139509613-5c4255815697?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$42",
    rating: 4.7,
    time: "35 min",
    category: "Main Course",
    isSignature: false
  }
];

export function FeaturedDishes() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-amber-600 border-amber-600">
            Signature Collection
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Featured Dishes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our chef's carefully crafted specialties, each dish tells a story of passion and culinary artistry
          </p>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDishes.map((dish) => (
            <Card key={dish.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
              {/* Image */}
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {dish.isSignature && (
                  <Badge className="absolute top-4 left-4 bg-amber-600 hover:bg-amber-700">
                    Chef's Special
                  </Badge>
                )}
                <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-lg font-bold">
                  {dish.price}
                </div>
              </div>

              <CardContent className="p-6">
                {/* Category */}
                <Badge variant="secondary" className="mb-3">
                  {dish.category}
                </Badge>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-amber-600 transition-colors">
                  {dish.name}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {dish.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-amber-500 mr-1" />
                    <span>{dish.rating}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{dish.time}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    <span>2-4 people</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}