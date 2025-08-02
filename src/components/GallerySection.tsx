import { useState } from 'react';
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    alt: 'Restaurant main dining room',
    category: 'Interior',
    title: 'Main Dining Room'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    alt: 'Signature beef dish',
    category: 'Food',
    title: 'Wagyu Beef Tenderloin'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1551218372-a8789b81b253?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    alt: 'Truffle pasta',
    category: 'Food',
    title: 'Truffle Pasta Special'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1559329007-40df8c9f5af8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    alt: 'Private dining room',
    category: 'Interior',
    title: 'Private Dining Room'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    alt: 'Fresh seafood platter',
    category: 'Food',
    title: 'Fresh Seafood Selection'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    alt: 'Dessert presentation',
    category: 'Food',
    title: 'Artisan Desserts'
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    alt: 'Restaurant bar area',
    category: 'Interior',
    title: 'Bar & Lounge'
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    alt: 'Appetizer plating',
    category: 'Food',
    title: 'Artisanal Appetizers'
  }
];

export function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState<number | null>(null);

  const categories = ['All', 'Food', 'Interior'];
  
  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (imageId: number) => {
    setLightboxImage(imageId);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (lightboxImage === null) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === lightboxImage);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setLightboxImage(filteredImages[newIndex].id);
  };

  const currentLightboxImage = filteredImages.find(img => img.id === lightboxImage);

  return (
    <section id="gallery" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-amber-600 border-amber-600">
            Visual Experience
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the ambiance and artistry that makes Savoria a truly special dining destination
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-muted rounded-lg p-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <Card 
              key={image.id} 
              className={`overflow-hidden cursor-pointer group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 ${
                index % 7 === 0 || index % 7 === 3 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              onClick={() => openLightbox(image.id)}
            >
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={image.src}
                  alt={image.alt}
                  className={`w-full object-cover group-hover:scale-110 transition-transform duration-500 ${
                    index % 7 === 0 || index % 7 === 3 ? 'h-96' : 'h-48'
                  }`}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                    <Badge className="mb-2 bg-amber-600">
                      {image.category}
                    </Badge>
                    <h3 className="text-lg font-semibold">{image.title}</h3>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxImage && currentLightboxImage && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <div className="relative max-w-6xl max-h-full">
              <ImageWithFallback
                src={currentLightboxImage.src}
                alt={currentLightboxImage.alt}
                className="max-w-full max-h-full object-contain"
              />
              
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Navigation */}
              <button
                onClick={() => navigateLightbox('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={() => navigateLightbox('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 text-white">
                <Badge className="mb-2 bg-amber-600">
                  {currentLightboxImage.category}
                </Badge>
                <h3 className="text-xl font-semibold">{currentLightboxImage.title}</h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}