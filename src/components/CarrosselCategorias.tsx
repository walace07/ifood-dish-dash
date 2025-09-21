import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { categories } from "@/data/mockData";
import { useState, useRef } from "react";

const CategoriaItem = ({ categoria }: { categoria: { id: number; nome: string; imageUrl: string } }) => {
  return (
    <div className="flex-shrink-0 w-20 text-center group cursor-pointer">
      <div className="w-16 h-16 mx-auto mb-2 rounded-full overflow-hidden bg-background-secondary group-hover:scale-105 transition-transform duration-200">
        <img
          src={categoria.imageUrl}
          alt={categoria.nome}
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "https://via.placeholder.com/64x64?text=" + categoria.nome.charAt(0);
          }}
        />
      </div>
      <p className="text-xs text-foreground-secondary group-hover:text-foreground font-medium">
        {categoria.nome}
      </p>
    </div>
  );
};

const CarrosselCategorias = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      const newScrollLeft = scrollRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      scrollRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
      
      setTimeout(() => {
        if (scrollRef.current) {
          setCanScrollLeft(scrollRef.current.scrollLeft > 0);
          setCanScrollRight(
            scrollRef.current.scrollLeft < scrollRef.current.scrollWidth - scrollRef.current.clientWidth
          );
        }
      }, 300);
    }
  };

  return (
    <section className="py-6 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Left Arrow */}
          {canScrollLeft && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-background/80 hover:bg-background shadow-md rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          )}

          {/* Categories Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onScroll={(e) => {
              const target = e.target as HTMLDivElement;
              setCanScrollLeft(target.scrollLeft > 0);
              setCanScrollRight(
                target.scrollLeft < target.scrollWidth - target.clientWidth
              );
            }}
          >
            {categories.map((categoria) => (
              <CategoriaItem key={categoria.id} categoria={categoria} />
            ))}
          </div>

          {/* Right Arrow */}
          {canScrollRight && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-background/80 hover:bg-background shadow-md rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default CarrosselCategorias;