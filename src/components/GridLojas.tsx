import { Star, Clock, Truck } from "lucide-react";
import { restaurantesData } from "@/data/mockData";

interface Restaurante {
  id: number;
  logoUrl: string;
  nome: string;
  avaliacao: number;
  tipoCozinha: string;
  distancia: string;
  tempoEntrega: string;
  taxaEntrega: string;
  promocao: string | null;
  imagemDestaque: string;
}

const LojaCardCompleto = ({ restaurante }: { restaurante: Restaurante }) => {
  return (
    <div className="ifood-card ifood-card-hover cursor-pointer group">
      {/* Restaurant Image */}
      <div className="relative h-32 rounded-t-lg overflow-hidden">
        <img
          src={restaurante.imagemDestaque}
          alt={restaurante.nome}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = `https://via.placeholder.com/300x128/EA4335/FFFFFF?text=${restaurante.nome.charAt(0)}`;
          }}
        />
        
        {/* Promotion Badge */}
        {restaurante.promocao && (
          <div className="absolute top-2 left-2">
            <span className="bg-ifood-red text-white text-xs px-2 py-1 rounded-md font-medium">
              {restaurante.promocao}
            </span>
          </div>
        )}
        
        {/* Delivery Fee Badge */}
        <div className="absolute top-2 right-2">
          <span className={`text-xs px-2 py-1 rounded-md font-medium ${
            restaurante.taxaEntrega === "Grátis" 
              ? "bg-success text-white" 
              : "bg-background/90 text-foreground"
          }`}>
            {restaurante.taxaEntrega === "Grátis" ? "Frete Grátis" : restaurante.taxaEntrega}
          </span>
        </div>
      </div>

      {/* Restaurant Info */}
      <div className="p-4">
        <div className="flex items-start space-x-3">
          {/* Logo */}
          <div className="w-12 h-12 rounded-lg overflow-hidden bg-background-secondary flex-shrink-0">
            <img
              src={restaurante.logoUrl}
              alt={restaurante.nome}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = `https://via.placeholder.com/48x48/EA4335/FFFFFF?text=${restaurante.nome.charAt(0)}`;
              }}
            />
          </div>

          {/* Restaurant Details */}
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-foreground text-base mb-1 truncate">
              {restaurante.nome}
            </h3>
            
            <p className="text-sm text-foreground-secondary mb-2">
              {restaurante.tipoCozinha}
            </p>

            {/* Rating and Info */}
            <div className="flex items-center space-x-4 text-xs text-foreground-secondary">
              {/* Rating */}
              <div className="flex items-center space-x-1">
                <Star className="w-3 h-3 fill-rating-star text-rating-star" />
                <span className="font-medium">{restaurante.avaliacao}</span>
              </div>

              {/* Distance */}
              <div className="flex items-center space-x-1">
                <span>{restaurante.distancia}</span>
              </div>

              {/* Delivery Time */}
              <div className="flex items-center space-x-1">
                <Clock className="w-3 h-3" />
                <span>{restaurante.tempoEntrega}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface GridLojasProps {
  restaurantes: Restaurante[];
}

const GridLojas = ({ restaurantes }: GridLojasProps) => {
  return (
    <section className="py-8 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Results Count */}
        <div className="mb-6">
          <p className="text-foreground-secondary text-sm">
            {restaurantes.length} restaurantes encontrados
          </p>
        </div>

        {/* Restaurants Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {restaurantes.map((restaurante) => (
            <LojaCardCompleto key={restaurante.id} restaurante={restaurante} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GridLojas;