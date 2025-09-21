import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { promocoes } from "@/data/mockData";
import { useState, useRef } from "react";

const CarrosselPromocoes = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
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
    <section className="py-6 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Left Arrow */}
          {canScrollLeft && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scroll('left')}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-background/90 hover:bg-background shadow-lg rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          )}

          {/* Promotions Container */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onScroll={(e) => {
              const target = e.target as HTMLDivElement;
              setCanScrollLeft(target.scrollLeft > 0);
              setCanScrollRight(
                target.scrollLeft < target.scrollWidth - target.clientWidth
              );
            }}
          >
            {promocoes.map((promocao) => (
              <div
                key={promocao.id}
                className="flex-shrink-0 w-80 sm:w-96 cursor-pointer group"
                onClick={() => window.open(promocao.link, '_blank')}
              >
                <div className="relative rounded-xl overflow-hidden shadow-md group-hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={promocao.imageUrl}
                    alt={promocao.altText}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://via.placeholder.com/400x200/EA4335/FFFFFF?text=Promoção";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          {canScrollRight && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scroll('right')}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-background/90 hover:bg-background shadow-lg rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default CarrosselPromocoes;