import { useState } from "react";
import HeaderSuperior from "@/components/HeaderSuperior";
import CarrosselCategorias from "@/components/CarrosselCategorias";
import CarrosselPromocoes from "@/components/CarrosselPromocoes";
import SecaoUltimasLojas from "@/components/SecaoUltimasLojas";
import CarrosselProdutosPromocionais from "@/components/CarrosselProdutosPromocionais";
import BarraFiltros from "@/components/BarraFiltros";
import GridLojas from "@/components/GridLojas";
import BotaoVerMais from "@/components/BotaoVerMais";
import Footer from "@/components/Footer";
import { restaurantesData } from "@/data/mockData";

const Index = () => {
  const [restaurantes, setRestaurantes] = useState(restaurantesData.slice(0, 8));
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [enderecoAtual, setEnderecoAtual] = useState("R. Augusta, 123");
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleVerMais = async () => {
    setLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Add more restaurants from the remaining restaurantesData
    const nextRestaurantes = restaurantesData.slice(restaurantes.length, restaurantes.length + 4);
    setRestaurantes(prev => [...prev, ...nextRestaurantes]);
    setHasMore(restaurantes.length + 4 < restaurantesData.length);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <HeaderSuperior 
        enderecoAtual={enderecoAtual}
        onEnderecoChange={setEnderecoAtual}
        cartItems={cartItems}
        cartTotal={cartTotal}
        isCartOpen={isCartOpen}
        onCartToggle={() => setIsCartOpen(!isCartOpen)}
      />
      
      {/* Categories Carousel */}
      <CarrosselCategorias />
      
      {/* Promotions Carousel */}
      <CarrosselPromocoes />
      
      {/* Latest Stores Section */}
      <SecaoUltimasLojas />
      
      {/* Promotional Products Carousel */}
      <CarrosselProdutosPromocionais />
      
      {/* Filters Bar - This becomes sticky */}
      <BarraFiltros />
      
      {/* Main Restaurants Grid */}
      <GridLojas restaurantes={restaurantes} />
      
      {/* Load More Button */}
      <BotaoVerMais 
        onClick={handleVerMais}
        loading={loading}
        hasMore={hasMore}
      />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
