import { X, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CarrinhoLateralProps {
  isOpen: boolean;
  onClose: () => void;
  total: number;
  items: any[]; // Para futuras implementações
}

const CarrinhoLateral = ({ isOpen, onClose, total, items }: CarrinhoLateralProps) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div 
        className={`fixed top-0 right-0 h-full w-96 bg-background border-l border-border z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="text-lg font-semibold text-foreground">Sacola</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="h-8 w-8"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Empty State */}
        {items.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full px-6 pb-20">
            <div className="w-32 h-32 bg-background-secondary rounded-full flex items-center justify-center mb-6">
              <ShoppingBag className="h-16 w-16 text-foreground-tertiary" />
            </div>
            <h3 className="text-xl font-medium text-foreground mb-2">
              Sua sacola está vazia
            </h3>
            <p className="text-foreground-secondary text-center text-sm leading-relaxed">
              Adicione itens dos restaurantes à sua sacola para que apareçam aqui.
            </p>
          </div>
        )}

        {/* Items List (for future implementation) */}
        {items.length > 0 && (
          <div className="flex-1 overflow-y-auto p-4">
            {/* Items will be rendered here */}
          </div>
        )}

        {/* Footer with total and action button (shown when items exist) */}
        {items.length > 0 && (
          <div className="border-t border-border p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-foreground-secondary">Total</span>
              <span className="text-xl font-bold text-foreground">
                R$ {total.toFixed(2).replace('.', ',')}
              </span>
            </div>
            <Button className="w-full bg-ifood-red hover:bg-ifood-red-dark text-white">
              Finalizar pedido
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default CarrinhoLateral;