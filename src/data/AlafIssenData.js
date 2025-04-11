

export  const AlafIssenProducts = [{
    id: 1,
    name: "Aliment pour Vaches Premium",
    category: "Élevage Bovin",
    description:
      "Aliment complet naturel, riche en protéines et vitamines, pour améliorer la production de lait et favoriser une croissance saine des vaches.",
    image: "imgs/coww-feed.webp",
    price: 60,
    oldPrice: 70,
    rating: 4.9,
    tags: ["fermier", "plein air", "naturel"],
    url: "/poulet-fermier-marron",
    isNew: true,
    minQuantity: 500, // Added minimum quantity
    addWith:50,
  },
  {
    id: 2,
    name: "Aliment pour Poussins Premium",
    category: "Aliment pour Poulet",
    description:
      "Aliment complet, riche en protéines et vitamines, favorisant une croissance saine et rapide des poussins.",
    image:
      "imgs/flake-feed.jpeg",
    price: 25,
    oldPrice: 40,
    rating: 5.0,
    tags: ["bio", "élevé en liberté", "fermier"],
    url: "/poulet-blanc-bio",
    discount: 10,
    minQuantity: 500, // Added minimum quantity
    addWith:50
  },
  {
    id: 3,
    name: "Aliment pour Poulet Premium",
    category: "Aliment pour Poulet",
    description:
      "Aliment complet, riche en protéines et vitamines pour une croissance rapide et une bonne production, qu’il s’agisse de viande ou d'œufs.",
    image:
      "imgs/feed-poulet.jpg",
    price: 45,
    rating: 4.9,
    tags: ["bio", "élevé en liberté", "fermier"],
    url: "/poulet-blanc-bio",
    discount: 10,
    minQuantity: 500, // Added minimum quantity
    addWith:50
  },
  {
    id: 4,
    name: "Aliment pour Moutons Premium",
    category: "Élevage Bétail",
    description:
      "Aliment complet, riche en protéines et vitamines, favorisant une croissance saine, une bonne reproduction et une prise de poids optimale.",
    image:
      "imgs/sheep-feed.jpg",
    price: 55,
    oldPrice: 65,
    rating: 4.8,
    tags: ["fermier", "naturel", "qualité supérieure"],
    url: "/poulet-fermier-clair",
    minQuantity: 500, // Added minimum quantity
    addWith:50,

  },
  {
    id: 5,
    name: "Aliment pour Lapins Premium",
    category: "Alimentation pour Lapins",
    description:
      "Aliment complet, riche en fibres, protéines et vitamines pour une croissance saine, une bonne digestion et une meilleure production de viande et de fourrure.",
    image:
      "imgs/rabbet-feed.jpg",
    price: 40,
    oldPrice: 55,
    rating: 5.0,
    tags: ["lapins", "biologique", "sans OGM", "alimentation saine"],
    url: "/trio-poussins-bio",
    isNew: true,
    minQuantity: 500, // Added minimum quantity
    addWith:50,

  },
  {
    id: 6,
    name: "Aliment pour Chèvres Premium",
    category: "Élevage Bétail",
    description:
      "Aliment complet pour chèvres, riche en protéines et vitamines, favorisant une croissance saine et améliorant la production de lait et de viande. Idéal pour maintenir la santé des chèvres.",
    image:
      "imgs/goat-feed.webp",
    price: 53.7,
    oldPrice: 60,
    rating: 4.9,
    tags: ["chèvres", "biologique", "sans OGM", "alimentation saine"],
    url: "/trio-poussins-bio",
    isNew: false,
    discount: 15,
    minQuantity: 500, // Added minimum quantity
    addWith:50,

  },
];