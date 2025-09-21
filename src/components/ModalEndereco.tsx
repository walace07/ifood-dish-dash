import { MapPin, Search, X, Home, Briefcase, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface Endereco {
  id: string;
  tipo: 'casa' | 'trabalho' | 'favorito';
  titulo: string;
  endereco: string;
  complemento?: string;
}

interface ModalEnderecoProps {
  isOpen: boolean;
  onClose: () => void;
  enderecoAtual: string;
  onSelectEndereco: (endereco: string) => void;
}

const ModalEndereco = ({ isOpen, onClose, enderecoAtual, onSelectEndereco }: ModalEnderecoProps) => {
  const [busca, setBusca] = useState("");

  const enderecossalvos: Endereco[] = [
    {
      id: "1",
      tipo: "casa",
      titulo: "Casa",
      endereco: "R. Augusta, 123 - Consolação",
      complemento: "Apto 45"
    },
    {
      id: "2", 
      tipo: "trabalho",
      titulo: "Trabalho",
      endereco: "Av. Paulista, 1000 - Bela Vista",
      complemento: "14º andar"
    },
    {
      id: "3",
      tipo: "favorito",
      titulo: "Academia",
      endereco: "R. Oscar Freire, 500 - Jardins"
    }
  ];

  const getIcon = (tipo: string) => {
    switch (tipo) {
      case 'casa': return Home;
      case 'trabalho': return Briefcase;
      case 'favorito': return Heart;
      default: return MapPin;
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-40 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Modal */}
        <div 
          className="bg-background rounded-lg max-w-md w-full max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <h2 className="text-lg font-semibold text-foreground">
              Onde você quer receber seu pedido?
            </h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-8 w-8"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Illustration and Description */}
          <div className="px-6 py-4 text-center">
            <div className="w-24 h-24 bg-ifood-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-12 w-12 text-ifood-red" />
            </div>
            <p className="text-foreground-secondary text-sm mb-6">
              Digite o seu endereço ou escolha um dos seus endereços salvos
            </p>
          </div>

          {/* Search Input */}
          <div className="px-6 mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground-tertiary h-4 w-4" />
              <Input
                type="text"
                placeholder="Digite seu endereço"
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Saved Addresses */}
          <div className="px-6 pb-6">
            <h3 className="text-sm font-medium text-foreground mb-3">
              Endereços salvos
            </h3>
            <div className="space-y-2">
              {enderecossalvos.map((endereco) => {
                const IconComponent = getIcon(endereco.tipo);
                return (
                  <button
                    key={endereco.id}
                    onClick={() => {
                      onSelectEndereco(endereco.endereco);
                      onClose();
                    }}
                    className="w-full flex items-start gap-3 p-3 rounded-lg hover:bg-background-secondary transition-colors text-left"
                  >
                    <div className="p-2 bg-ifood-red/10 rounded-full">
                      <IconComponent className="h-4 w-4 text-ifood-red" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground text-sm">
                        {endereco.titulo}
                      </h4>
                      <p className="text-foreground-secondary text-xs">
                        {endereco.endereco}
                      </p>
                      {endereco.complemento && (
                        <p className="text-foreground-tertiary text-xs">
                          {endereco.complemento}
                        </p>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Action Button */}
          <div className="px-6 pb-6">
            <Button 
              className="w-full bg-ifood-red hover:bg-ifood-red-dark text-white"
              onClick={() => {
                if (busca) {
                  onSelectEndereco(busca);
                  onClose();
                }
              }}
              disabled={!busca}
            >
              Confirmar endereço
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalEndereco;