import { Search, ShoppingBag, MapPin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { menuItems } from "@/data/mockData";

const HeaderSuperior = () => {
  return (
    <header className="bg-background border-b border-border">
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
            >
              <MapPin className="h-4 w-4" />
              <span className="text-sm">
                R. Augusta, 123
              </span>
              <ChevronDown className="h-4 w-4" />
            </Button>

            {/* Shopping Bag */}
            <Button
              variant="ghost"
              size="icon"
              className="relative text-foreground-secondary hover:text-ifood-red"
            >
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-ifood-red text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Button>
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
  );
};

export default HeaderSuperior;