import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { produtosPromocionais } from "@/data/mockData";
import { useState, useRef } from "react";

const ProdutoCard = ({ produto }: { 
  produto: { 
    id: number; 
    nome: string; 
    imageUrl: string; 
    precoOriginal: number; 
    precoComDesconto: number;
  } 
}) => {
  return (
    <div className="flex-shrink-0 w-48 ifood-card ifood-card-hover cursor-pointer">
      <div className="p-3">
        {/* Product Image */}
        <div className="w-full h-32 rounded-lg overflow-hidden bg-background-secondary mb-3">
          <img
            src={produto.imageUrl}
            alt={produto.nome}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = `https://via.placeholder.com/192x128/EA4335/FFFFFF?text=${produto.nome.charAt(0)}`;
            }}
          />
        </div>

        {/* Product Info */}
        <div className="space-y-2">
          <h3 className="font-medium text-sm text-foreground line-clamp-2">
            {produto.nome}
          </h3>
          
          {/* Prices */}
          <div className="flex items-center space-x-2">
            <span className="text-xs text-foreground-tertiary line-through">
              R$ {produto.precoOriginal.toFixed(2)}
            </span>
            <span className="text-sm font-bold text-ifood-red">
              R$ {produto.precoComDesconto.toFixed(2)}
            </span>
          </div>
          
          {/* Discount Badge */}
          <div className="inline-flex">
            <span className="bg-ifood-red text-white text-xs px-2 py-1 rounded-md font-medium">
              {Math.round((1 - produto.precoComDesconto / produto.precoOriginal) * 100)}% OFF
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const CarrosselProdutosPromocionais = () => {
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
    <section className="py-8 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-foreground mb-2">
            Produtos em Promoção
          </h2>
          <p className="text-sm text-foreground-secondary">
            Aproveite descontos especiais em produtos selecionados
          </p>
        </div>

        <div className="relative">
          {/* Left Arrow */}
          {canScrollLeft && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-background/90 hover:bg-background shadow-md rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          )}

          {/* Products Container */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onScroll={(e) => {
              const target = e.target as HTMLDivElement;
              setCanScrollLeft(target.scrollLeft > 0);
              setCanScrollRight(
                target.scrollLeft < target.scrollWidth - target.clientWidth
              );
            }}
          >
            {produtosPromocionais.map((produto) => (
              <ProdutoCard key={produto.id} produto={produto} />
            ))}
          </div>

          {/* Right Arrow */}
          {canScrollRight && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-background/90 hover:bg-background shadow-md rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default CarrosselProdutosPromocionais;