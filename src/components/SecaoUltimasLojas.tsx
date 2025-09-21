import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ultimasLojas } from "@/data/mockData";

const LojaCardResumido = ({ loja }: { loja: { id: number; nome: string; logoUrl: string } }) => {
  return (
    <div className="ifood-card ifood-card-hover p-4 cursor-pointer">
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 rounded-lg overflow-hidden bg-background-secondary flex-shrink-0">
          <img
            src={loja.logoUrl}
            alt={loja.nome}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = `https://via.placeholder.com/48x48/EA4335/FFFFFF?text=${loja.nome.charAt(0)}`;
            }}
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-medium text-foreground text-sm truncate">
            {loja.nome}
          </p>
          <p className="text-xs text-foreground-secondary">
            Loja parceira
          </p>
        </div>
      </div>
    </div>
  );
};

const SecaoUltimasLojas = () => {
  return (
    <section className="py-8 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-foreground">
            Últimas Lojas
          </h2>
          <Button
            variant="ghost"
            className="text-ifood-red hover:text-ifood-red-dark font-medium text-sm"
          >
            Ver mais
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>

        {/* Lojas Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {ultimasLojas.map((loja) => (
            <LojaCardResumido key={loja.id} loja={loja} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecaoUltimasLojas;