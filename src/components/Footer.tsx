import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { footerData } from "@/data/mockData";

const SocialIcon = ({ icon }: { icon: string }) => {
  const iconMap = {
    facebook: Facebook,
    instagram: Instagram,
    twitter: Twitter,
    youtube: Youtube,
  };
  
  const IconComponent = iconMap[icon as keyof typeof iconMap] || Facebook;
  return <IconComponent className="w-5 h-5" />;
};

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="col-span-1">
              <div className="text-ifood-red text-2xl font-bold mb-4">
                iFood
              </div>
              <p className="text-sm text-background/70 leading-relaxed">
                A maior plataforma de delivery de comida do Brasil. Conectamos você aos melhores restaurantes da sua cidade.
              </p>
            </div>

            {/* Site Institucional */}
            <div>
              <h3 className="font-semibold text-background mb-4">
                Site Institucional
              </h3>
              <ul className="space-y-2">
                {footerData.institucional.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm text-background/70 hover:text-background transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Descubra */}
            <div>
              <h3 className="font-semibold text-background mb-4">
                Descubra
              </h3>
              <ul className="space-y-2">
                {footerData.descubra.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm text-background/70 hover:text-background transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="font-semibold text-background mb-4">
                Redes Sociais
              </h3>
              <div className="flex space-x-4 mb-4">
                {footerData.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-background/70 hover:text-background transition-colors duration-200"
                    aria-label={item.name}
                  >
                    <SocialIcon icon={item.icon} />
                  </a>
                ))}
              </div>
              <p className="text-sm text-background/70">
                Siga-nos nas redes sociais para ficar por dentro das novidades e promoções especiais.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-background/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-background/70">
              © 2024 iFood Clone. Todos os direitos reservados.
            </div>
            <div className="text-sm text-background/70">
              CNPJ: 14.380.200/0001-21
            </div>
          </div>
          <div className="mt-4 text-xs text-background/50 text-center md:text-left">
            Este é um projeto de demonstração criado apenas para fins educacionais.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;