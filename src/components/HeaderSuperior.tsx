import { Search, ShoppingBag, MapPin, ChevronDown, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { menuItems } from "@/data/mockData";
import MenuUsuarioDropdown from "./MenuUsuarioDropdown";
import CarrinhoLateral from "./CarrinhoLateral";
import ModalEndereco from "./ModalEndereco";
import { useState, useRef, useEffect } from "react";

interface HeaderSuperiorProps {
  enderecoAtual: string;
  onEnderecoChange: (endereco: string) => void;
  cartItems: any[];
  cartTotal: number;
  isCartOpen: boolean;
  onCartToggle: () => void;
}

const HeaderSuperior = ({ 
  enderecoAtual, 
  onEnderecoChange, 
  cartItems, 
  cartTotal, 
  isCartOpen, 
  onCartToggle 
}: HeaderSuperiorProps) => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

  // Close user menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <header className="sticky-header bg-background border-b border-border">
        {/* Top bar */}
        <div className="bg-ifood-red text-white py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center text-sm font-medium">
              Entrega grátis para pedidos acima de R$ 30 • Válido até 31/12
            </div>
          </div>
        </div>

        {/* Main header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="text-ifood-red text-2xl font-bold">
                iFood
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    item.active
                      ? "text-ifood-red bg-ifood-red/10"
                      : "text-foreground-secondary hover:text-ifood-red"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Search Bar */}
            <div className="flex-1 max-w-lg mx-8 hidden md:block">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground-tertiary h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Busque por item ou loja"
                  className="pl-10 pr-4 py-2 w-full bg-background-secondary border-border focus:ring-ifood-red focus:border-ifood-red"
                />
              </div>
            </div>

            {/* Right side */}
            <div className="flex items-center space-x-4">
              {/* Address Selector */}
              <Button
                variant="ghost"
                className="hidden md:flex items-center space-x-2 text-foreground-secondary hover:text-ifood-red"
                onClick={() => setIsAddressModalOpen(true)}
              >
                <MapPin className="h-4 w-4" />
                <span className="text-sm max-w-32 truncate">
                  {enderecoAtual}
                </span>
                <ChevronDown className="h-4 w-4" />
              </Button>

              {/* User Menu */}
              <div className="relative" ref={userMenuRef}>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-foreground-secondary hover:text-ifood-red"
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                >
                  <User className="h-5 w-5" />
                </Button>
                
                <MenuUsuarioDropdown
                  userName="Eduardo"
                  isOpen={isUserMenuOpen}
                  onClose={() => setIsUserMenuOpen(false)}
                />
              </div>

              {/* Shopping Bag */}
              <Button
                variant="ghost"
                size="icon"
                className="relative text-foreground-secondary hover:text-ifood-red"
                onClick={onCartToggle}
              >
                <ShoppingBag className="h-5 w-5" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-ifood-red text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </Button>

              {/* Cart Total Display */}
              {cartTotal > 0 && (
                <span className="hidden md:block text-sm font-medium text-foreground">
                  R$ {cartTotal.toFixed(2).replace('.', ',')}
                </span>
              )}
            </div>
          </div>

          {/* Mobile Search */}
          <div className="md:hidden pb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground-tertiary h-4 w-4" />
              <Input
                type="text"
                placeholder="Busque por item ou loja"
                className="pl-10 pr-4 py-2 w-full bg-background-secondary border-border focus:ring-ifood-red focus:border-ifood-red"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Modals and Sidebars */}
      <CarrinhoLateral
        isOpen={isCartOpen}
        onClose={onCartToggle}
        total={cartTotal}
        items={cartItems}
      />

      <ModalEndereco
        isOpen={isAddressModalOpen}
        onClose={() => setIsAddressModalOpen(false)}
        enderecoAtual={enderecoAtual}
        onSelectEndereco={onEnderecoChange}
      />
    </>
  );
};

export default HeaderSuperior;