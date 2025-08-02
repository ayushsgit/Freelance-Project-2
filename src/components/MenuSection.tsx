import { useState } from 'react';
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Leaf, Flame, Star } from 'lucide-react';

const menuCategories = [
  {
    id: 'appetizers',
    name: 'Appetizers',
    description: 'Start your culinary journey',
    items: [
      {
        id: 1,
        name: 'Burrata with Prosciutto',
        description: 'Creamy burrata cheese with aged prosciutto, arugula, and balsamic glaze',
        price: '$18',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        isVegetarian: true,
        isSpicy: false,
        isChefSpecial: false
      },
      {
        id: 2,
        name: 'Tuna Tartare',
        description: 'Fresh yellowfin tuna with avocado, sesame oil, and microgreens',
        price: '$22',
        image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        isVegetarian: false,
        isSpicy: false,
        isChefSpecial: true
      },
      {
        id: 3,
        name: 'Truffle Arancini',
        description: 'Crispy risotto balls filled with truffle and parmigiano reggiano',
        price: '$16',
        image: 'https://images.unsplash.com/photo-1551218372-a8789b81b253?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        isVegetarian: true,
        isSpicy: false,
        isChefSpecial: false
      }
    ]
  },
  {
    id: 'mains',
    name: 'Main Courses',
    description: 'Our signature entrees',
    items: [
      {
        id: 4,
        name: 'Osso Buco alla Milanese',
        description: 'Braised veal shanks with saffron risotto and gremolata',
        price: '$42',
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        isVegetarian: false,
        isSpicy: false,
        isChefSpecial: true
      },
      {
        id: 5,
        name: 'Branzino al Sale',
        description: 'Mediterranean sea bass baked in sea salt crust with herbs and lemon',
        price: '$38',
        image: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        isVegetarian: false,
        isSpicy: false,
        isChefSpecial: false
      },
      {
        id: 6,
        name: 'Pappardelle al Tartufo',
        description: 'House-made pappardelle with black truffle, butter, and parmigiano',
        price: '$32',
        image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        isVegetarian: true,
        isSpicy: false,
        isChefSpecial: false
      }
    ]
  },
  {
    id: 'desserts',
    name: 'Desserts',
    description: 'Sweet endings to remember',
    items: [
      {
        id: 7,
        name: 'Tiramisu della Casa',
        description: 'Traditional tiramisu with espresso-soaked ladyfingers and mascarpone',
        price: '$14',
        image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        isVegetarian: true,
        isSpicy: false,
        isChefSpecial: false
      },
      {
        id: 8,
        name: 'Panna Cotta ai Frutti di Bosco',
        description: 'Vanilla panna cotta with wild berry compote and mint',
        price: '$12',
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        isVegetarian: true,
        isSpicy: false,
        isChefSpecial: true
      }
    ]
  }
];

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState('appetizers');

  return (
    <section id="menu" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-amber-600 border-amber-600">
            Culinary Excellence
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Menu
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated selection of dishes, each crafted with the finest ingredients 
            and prepared with passion
          </p>
        </div>

        {/* Menu Categories */}
        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12 h-auto p-1 bg-background">
            {menuCategories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="flex flex-col py-4 px-6 data-[state=active]:bg-amber-600 data-[state=active]:text-white"
              >
                <span className="font-semibold">{category.name}</span>
                <span className="text-xs text-[rgba(0,0,255,1)] data-[state=active]:text-amber-100 mt-1">
                  {category.description}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>

          {menuCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item) => (
                  <Card key={item.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                    {/* Image */}
                    <div className="relative overflow-hidden">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.name}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      
                      {/* Badges */}
                      <div className="absolute top-4 left-4 flex gap-2">
                        {item.isChefSpecial && (
                          <Badge className="bg-amber-600 hover:bg-amber-700">
                            <Star className="h-3 w-3 mr-1" />
                            Chef's Special
                          </Badge>
                        )}
                        {item.isVegetarian && (
                          <Badge variant="secondary" className="bg-green-100 text-green-800">
                            <Leaf className="h-3 w-3 mr-1" />
                            Vegetarian
                          </Badge>
                        )}
                        {item.isSpicy && (
                          <Badge variant="destructive">
                            <Flame className="h-3 w-3 mr-1" />
                            Spicy
                          </Badge>
                        )}
                      </div>

                      {/* Price */}
                      <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full font-bold">
                        {item.price}
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-amber-600 transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Can't find what you're looking for? Our chef can create custom dishes upon request.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Download Full Menu
            </button>
            <button className="border border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Order Online
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}