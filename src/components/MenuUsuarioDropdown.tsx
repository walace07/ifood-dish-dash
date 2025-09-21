import { User, MessageCircle, ShoppingBag, Gift, Heart, HelpCircle, Settings, Bell, BellOff, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MenuUsuarioDropdownProps {
  userName: string;
  isOpen: boolean;
  onClose: () => void;
}

const MenuUsuarioDropdown = ({ userName, isOpen, onClose }: MenuUsuarioDropdownProps) => {
  if (!isOpen) return null;

  const menuItems = [
    { icon: MessageCircle, label: "Chats", href: "#" },
    { icon: ShoppingBag, label: "Pedidos", href: "#" },
    { icon: Gift, label: "Meus cupons", href: "#" },
    { icon: Heart, label: "Favoritos", href: "#" },
    { icon: User, label: "Meus dados", href: "#" },
    { icon: HelpCircle, label: "Ajuda", href: "#" },
    { icon: Settings, label: "Configurações", href: "#" },
  ];

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/20 z-40"
        onClick={onClose}
      />
      
      {/* Dropdown Menu */}
      <div className="absolute top-full right-0 mt-2 w-80 bg-background border border-border rounded-lg shadow-lg z-50 overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-border">
          <div className="flex items-center justify-between">
            <h3 className="text-foreground font-medium">Olá, {userName}</h3>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6"
              onClick={onClose}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Notification Card */}
        <div className="p-4 bg-background-secondary border-b border-border">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-ifood-red/10 rounded-full">
              <Bell className="h-4 w-4 text-ifood-red" />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-medium text-foreground mb-1">
                Ative as notificações
              </h4>
              <p className="text-xs text-foreground-secondary mb-2">
                Fique por dentro de promoções exclusivas e do status dos seus pedidos.
              </p>
              <div className="flex gap-2">
                <Button size="sm" className="h-7 text-xs px-3 bg-ifood-red hover:bg-ifood-red-dark">
                  Ativar
                </Button>
                <Button variant="ghost" size="sm" className="h-7 text-xs px-3">
                  <BellOff className="h-3 w-3 mr-1" />
                  Não
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="py-2">
          {menuItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <a
                key={index}
                href={item.href}
                className="flex items-center gap-3 px-4 py-3 text-foreground hover:bg-background-secondary transition-colors duration-200"
              >
                <IconComponent className="h-4 w-4 text-foreground-tertiary" />
                <span className="text-sm">{item.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MenuUsuarioDropdown;