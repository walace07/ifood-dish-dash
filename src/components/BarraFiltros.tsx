import { SlidersHorizontal, Truck, CreditCard, MapPin, Clock, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

const filtros = [
  { 
    id: "ordenar", 
    label: "Ordenar", 
    icon: SlidersHorizontal,
    hasDropdown: true 
  },
  { 
    id: "entrega-gratis", 
    label: "Entrega Grátis", 
    icon: Truck,
    active: false 
  },
  { 
    id: "vale-refeicao", 
    label: "Vale-refeição", 
    icon: CreditCard,
    active: false 
  },
  { 
    id: "distancia", 
    label: "Distância", 
    icon: MapPin,
    hasDropdown: true 
  },
  { 
    id: "tempo-entrega", 
    label: "Tempo de entrega", 
    icon: Clock,
    hasDropdown: true 
  },
  { 
    id: "mais-filtros", 
    label: "Filtros", 
    icon: Filter,
    hasDropdown: true 
  }
];

const BarraFiltros = () => {
  return (
    <div className="sticky-header bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-4">
          {/* Desktop Filters */}
          <div className="hidden md:flex items-center gap-3 overflow-x-auto">
            {filtros.map((filtro) => {
              const Icon = filtro.icon;
              return (
                <Button
                  key={filtro.id}
                  variant={filtro.active ? "default" : "outline"}
                  size="sm"
                  className={`flex-shrink-0 h-9 px-4 font-medium ${
                    filtro.active 
                      ? "bg-ifood-red text-white hover:bg-ifood-red-dark" 
                      : "ifood-button-secondary"
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {filtro.label}
                  {filtro.hasDropdown && (
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Button>
              );
            })}
          </div>

          {/* Mobile Filters */}
          <div className="md:hidden flex items-center gap-2 overflow-x-auto">
            <Button
              variant="outline"
              size="sm"
              className="flex-shrink-0 ifood-button-secondary"
            >
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              Filtros
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="flex-shrink-0 ifood-button-secondary"
            >
              <Truck className="w-4 h-4 mr-2" />
              Entrega Grátis
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="flex-shrink-0 ifood-button-secondary"
            >
              <Clock className="w-4 h-4 mr-2" />
              Mais rápido
            </Button>
          </div>

          {/* Active Filters Count (Mobile) */}
          <div className="md:hidden mt-2">
            <p className="text-sm text-foreground-secondary">
              347 restaurantes encontrados
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarraFiltros;