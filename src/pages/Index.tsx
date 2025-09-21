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
import { restaurantesData, maisRestaurantes } from "@/data/mockData";

const Index = () => {
  const [restaurantes, setRestaurantes] = useState(restaurantesData);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const handleVerMais = async () => {
    setLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Add more restaurants
    setRestaurantes(prev => [...prev, ...maisRestaurantes]);
    setHasMore(false); // No more restaurants to load in this demo
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <HeaderSuperior />
      
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
