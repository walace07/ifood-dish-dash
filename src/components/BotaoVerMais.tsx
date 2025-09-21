import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BotaoVerMaisProps {
  onClick: () => void;
  loading?: boolean;
  hasMore?: boolean;
}

const BotaoVerMais = ({ onClick, loading = false, hasMore = true }: BotaoVerMaisProps) => {
  if (!hasMore) {
    return (
      <div className="py-8 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-foreground-secondary text-sm">
              Você já viu todos os restaurantes disponíveis na sua região
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Button
            onClick={onClick}
            disabled={loading}
            size="lg"
            variant="outline"
            className="ifood-button-secondary px-8 py-3 font-medium"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Carregando mais restaurantes...
              </>
            ) : (
              "Ver mais restaurantes"
            )}
          </Button>
          <p className="text-xs text-foreground-tertiary mt-2">
            Descubra ainda mais opções de entrega na sua região
          </p>
        </div>
      </div>
    </div>
  );
};

export default BotaoVerMais;