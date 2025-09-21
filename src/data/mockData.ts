// Mock data for iFood clone

export const categories = [
  { id: 1, nome: "Pizza", imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=150&h=150&fit=crop&crop=center" },
  { id: 2, nome: "Hambúrguer", imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=150&h=150&fit=crop&crop=center" },
  { id: 3, nome: "Açaí", imageUrl: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=150&h=150&fit=crop&crop=center" },
  { id: 4, nome: "Japonesa", imageUrl: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=150&h=150&fit=crop&crop=center" },
  { id: 5, nome: "Brasileira", imageUrl: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=150&h=150&fit=crop&crop=center" },
  { id: 6, nome: "Doces", imageUrl: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=150&h=150&fit=crop&crop=center" },
  { id: 7, nome: "Italiana", imageUrl: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=150&h=150&fit=crop&crop=center" },
  { id: 8, nome: "Saudável", imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=150&h=150&fit=crop&crop=center" }
];

export const promocoes = [
  { id: 1, imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&h=300&fit=crop", altText: "Promoção Pizza", link: "#" },
  { id: 2, imageUrl: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&h=300&fit=crop", altText: "Promoção Hambúrguer", link: "#" },
  { id: 3, imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=300&fit=crop", altText: "Promoção Especial", link: "#" }
];

export const ultimasLojas = [
  { id: 1, nome: "McDonald's", logoUrl: "https://images.unsplash.com/photo-1613769049987-b31b641f25b1?w=80&h=80&fit=crop&crop=center" },
  { id: 2, nome: "Burger King", logoUrl: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=80&h=80&fit=crop&crop=center" },
  { id: 3, nome: "Subway", logoUrl: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=80&h=80&fit=crop&crop=center" },
  { id: 4, nome: "Pizza Hut", logoUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=80&h=80&fit=crop&crop=center" },
  { id: 5, nome: "KFC", logoUrl: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=80&h=80&fit=crop&crop=center" }
];

export const produtosPromocionais = [
  {
    id: 1,
    nome: "Big Mac Combo",
    imageUrl: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=200&h=200&fit=crop",
    precoOriginal: 29.90,
    precoComDesconto: 24.90
  },
  {
    id: 2,
    nome: "Pizza Margherita",
    imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=200&h=200&fit=crop",
    precoOriginal: 45.00,
    precoComDesconto: 35.00
  },
  {
    id: 3,
    nome: "Açaí 500ml",
    imageUrl: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=200&h=200&fit=crop",
    precoOriginal: 18.90,
    precoComDesconto: 15.90
  },
  {
    id: 4,
    nome: "Combo Sushi",
    imageUrl: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=200&h=200&fit=crop",
    precoOriginal: 65.00,
    precoComDesconto: 52.00
  }
];

export const restaurantesData = [
  {
    id: 1,
    logoUrl: "https://images.unsplash.com/photo-1613769049987-b31b641f25b1?w=100&h=100&fit=crop&crop=center",
    nome: "McDonald's",
    avaliacao: 4.5,
    tipoCozinha: "Lanches",
    distancia: "0.8 km",
    tempoEntrega: "25-35 min",
    taxaEntrega: "Grátis",
    promocao: "Entrega grátis",
    imagemDestaque: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&h=200&fit=crop"
  },
  {
    id: 2,
    logoUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=100&h=100&fit=crop&crop=center",
    nome: "Pizzaria Bella Napoli",
    avaliacao: 4.7,
    tipoCozinha: "Pizza",
    distancia: "1.2 km",
    tempoEntrega: "35-45 min",
    taxaEntrega: "R$ 3,99",
    promocao: "20% OFF",
    imagemDestaque: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&h=200&fit=crop"
  },
  {
    id: 3,
    logoUrl: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=100&h=100&fit=crop&crop=center",
    nome: "Sushi House",
    avaliacao: 4.8,
    tipoCozinha: "Japonesa",
    distancia: "2.1 km",
    tempoEntrega: "40-50 min",
    taxaEntrega: "R$ 5,99",
    promocao: null,
    imagemDestaque: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=300&h=200&fit=crop"
  },
  {
    id: 4,
    logoUrl: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=100&h=100&fit=crop&crop=center",
    nome: "Restaurante do João",
    avaliacao: 4.3,
    tipoCozinha: "Brasileira",
    distancia: "0.5 km",
    tempoEntrega: "20-30 min",
    taxaEntrega: "Grátis",
    promocao: "Frete grátis",
    imagemDestaque: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&h=200&fit=crop"
  },
  {
    id: 5,
    logoUrl: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=100&h=100&fit=crop&crop=center",
    nome: "Doçaria Sweet Life",
    avaliacao: 4.6,
    tipoCozinha: "Doces & Sobremesas",
    distancia: "1.8 km",
    tempoEntrega: "30-40 min",
    taxaEntrega: "R$ 2,99",
    promocao: "Novidade",
    imagemDestaque: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=300&h=200&fit=crop"
  },
  {
    id: 6,
    logoUrl: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=100&h=100&fit=crop&crop=center",
    nome: "Açaí Premium",
    avaliacao: 4.4,
    tipoCozinha: "Açaí & Vitaminas",
    distancia: "1.5 km",
    tempoEntrega: "15-25 min",
    taxaEntrega: "R$ 1,99",
    promocao: "15% OFF",
    imagemDestaque: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=300&h=200&fit=crop"
  },
  {
    id: 7,
    logoUrl: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=100&h=100&fit=crop&crop=center",
    nome: "Italiana Nonna Mia",
    avaliacao: 4.9,
    tipoCozinha: "Italiana",
    distancia: "2.8 km",
    tempoEntrega: "45-55 min",
    taxaEntrega: "R$ 6,99",
    promocao: null,
    imagemDestaque: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=300&h=200&fit=crop"
  },
  {
    id: 8,
    logoUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=100&h=100&fit=crop&crop=center",
    nome: "Green Bowls",
    avaliacao: 4.5,
    tipoCozinha: "Saudável",
    distancia: "1.1 km",
    tempoEntrega: "25-35 min",
    taxaEntrega: "R$ 3,49",
    promocao: "Vegano",
    imagemDestaque: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=200&fit=crop"
  }
];

// Dados adicionais para a funcionalidade "Ver mais"
export const maisRestaurantes = [
  {
    id: 9,
    logoUrl: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=100&h=100&fit=crop&crop=center",
    nome: "Frango Assado Express",
    avaliacao: 4.2,
    tipoCozinha: "Frango Assado",
    distancia: "2.2 km",
    tempoEntrega: "30-40 min",
    taxaEntrega: "R$ 4,99",
    promocao: null,
    imagemDestaque: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=300&h=200&fit=crop"
  },
  {
    id: 10,
    logoUrl: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=100&h=100&fit=crop&crop=center",
    nome: "Sanduicheria Central",
    avaliacao: 4.1,
    tipoCozinha: "Sanduíches",
    distancia: "0.9 km",
    tempoEntrega: "20-30 min",
    taxaEntrega: "Grátis",
    promocao: "Entrega grátis",
    imagemDestaque: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=300&h=200&fit=crop"
  }
];

export const menuItems = [
  { name: "Início", href: "/" },
  { name: "Restaurantes", href: "/restaurantes", active: true },
  { name: "Mercados", href: "/mercados" },
  { name: "Farmácias", href: "/farmacias" },
  { name: "Pets", href: "/pets" },
  { name: "Bebidas", href: "/bebidas" }
];

export const footerData = {
  institucional: [
    { name: "Sobre o iFood", href: "#" },
    { name: "Carreiras", href: "#" },
    { name: "Imprensa", href: "#" },
    { name: "Investidores", href: "#" }
  ],
  descubra: [
    { name: "Cadastre seu restaurante", href: "#" },
    { name: "Seja um entregador", href: "#" },
    { name: "iFood Card", href: "#" },
    { name: "Programa de Fidelidade", href: "#" }
  ],
  social: [
    { name: "Facebook", href: "#", icon: "facebook" },
    { name: "Instagram", href: "#", icon: "instagram" },
    { name: "Twitter", href: "#", icon: "twitter" },
    { name: "YouTube", href: "#", icon: "youtube" }
  ]
};