
export interface Project {
  id: number;
  title: string;
  category: 'site-web' | 'e-commerce' | 'application' | 'branding';
  description: string;
  image: string;
  client: string;
  slug: string;
  year?: string;
  tags?: string[];
  challenge?: string;
  solution?: string;
  results?: string;
  technologies?: string[];
  testimonial?: {
    content: string;
    author: string;
    position: string;
  };
  gallery?: string[];
  nextProject?: string;
  prevProject?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Lumina Fashion",
    category: "e-commerce",
    description: "Boutique en ligne de mode avec une expérience d'achat immersive et intuitive.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    client: "Lumina",
    slug: "lumina-fashion",
    year: "2023",
    tags: ["E-commerce", "UX/UI", "Responsive", "Paiement en ligne"],
    challenge: "Créer une expérience d'achat en ligne qui reflète l'élégance et la sophistication de la marque Lumina tout en garantissant une navigation fluide et une conversion optimale des visiteurs.",
    solution: "Nous avons développé une plateforme e-commerce sur mesure avec une architecture centrée sur l'expérience utilisateur. L'interface minimaliste met en valeur les produits avec des animations subtiles et un système de filtrage avancé pour une recherche facile.",
    results: "Une augmentation de 45% du taux de conversion et une réduction de 30% du taux d'abandon de panier dans les trois mois suivant le lancement. Le temps moyen passé sur le site a augmenté de 2 minutes.",
    technologies: ["React", "Node.js", "Stripe", "MongoDB", "AWS"],
    testimonial: {
      content: "L'équipe a parfaitement compris notre vision et a créé une boutique en ligne qui non seulement reflète l'essence de notre marque, mais améliore aussi significativement notre présence sur le marché digital.",
      author: "Sophie Martin",
      position: "Directrice Marketing, Lumina"
    },
    gallery: [
      "https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    ],
    nextProject: "fresh-market",
    prevProject: "novatech"
  },
  {
    id: 2,
    title: "Evergreen Solutions",
    category: "site-web",
    description: "Site vitrine pour une entreprise de solutions écologiques innovantes.",
    image: "https://images.unsplash.com/photo-1545128485-c400ce7b17d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    client: "Evergreen",
    slug: "evergreen-solutions",
    year: "2022",
    tags: ["Site Vitrine", "Écologie", "One-Page", "Animations"],
    challenge: "Concevoir un site web qui transmet l'engagement d'Evergreen Solutions pour l'environnement tout en présentant leurs services de manière claire et impactante.",
    solution: "Création d'un site one-page avec des sections bien définies, utilisant des animations à l'apparition pour engager les visiteurs. Une palette de couleurs naturelles et des visuels inspirés de la nature renforcent l'identité écologique de la marque.",
    results: "Le site a généré une augmentation de 60% des demandes de devis et a été salué pour son design innovant dans plusieurs publications spécialisées en développement durable.",
    technologies: ["HTML5", "CSS3", "JavaScript", "GSAP", "WordPress"],
    testimonial: {
      content: "Notre nouveau site reflète parfaitement notre mission et nos valeurs. Il a transformé notre façon de communiquer avec notre public cible.",
      author: "Thomas Durant",
      position: "CEO, Evergreen Solutions"
    },
    gallery: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    ],
    nextProject: "panorama-hotels",
    prevProject: "la-piazzetta-carte-fidelite"
  },
  {
    id: 3,
    title: "La Piazzetta - Carte de fidélité",
    category: "branding",
    description: "Conception de cartes de fidélité attractives pour renforcer l’engagement des clients de La Piazzetta.",
    image: "/img/projects/1518456343338.jpg",
    client: "La Piazzetta",
    slug: "la-piazzetta-carte-fidelite",
    year: "2024",
    tags: ["Branding", "Identité visuelle", "Flyer", "Print"],
    challenge: "Créer des cartes de fidélité esthétiques et pratiques, en accord avec l’image de La Piazzetta, tout en incitant les clients à revenir régulièrement.",
    solution: "Design élégant et cohérent avec l’identité visuelle du restaurant, impression de qualité et format pratique pour une utilisation quotidienne.",
    results: "Une augmentation de la fidélisation client grâce à un support attractif et fonctionnel, renforçant la relation entre le restaurant et sa clientèle.",
    technologies: ["Adobe Creative Suite", "Illustrator", "Photoshop", "InDesign"],
    testimonial: {
      content: "L'identité visuelle créée capture parfaitement l'essence de notre marque - artisanale, authentique et passionnée. Elle nous aide à raconter notre histoire sans même dire un mot.",
      author: "Antoine Lefèvre",
      position: "Fondateur, La Piazzetta"
    },
    gallery: [
      "/img/projects/1518456343338.jpg"
    ],
    nextProject: "evergreen-solutions",
    prevProject: "la-piazzetta-flyer-carte-menus"
  },
  {
    id: 4,
    title: "La Piazzetta - Flyer carte des menus",
    category: "branding",
    description: "Création de flyers et menus élégants pour sublimer l’identité visuelle de La Piazzetta.",
    image: "/img/projects/1518057111178.jpg",
    client: "La Piazzetta",
    slug: "la-piazzetta-flyer-carte-menus",
    year: "2024",
    tags: ["Branding", "Identité visuelle", "Flyer", "Print"],
    challenge: "La Piazzetta, un restaurant italien, souhaitait moderniser ses supports de communication tout en conservant l’élégance et l’authenticité de son identité visuelle. L’objectif était de créer des flyers et des cartes de menu attrayants, clairs et engageants pour améliorer l’expérience client et booster la visibilité du restaurant.",
    solution: "Nous avons conçu des supports graphiques en mettant en avant l’authenticité des plats et l’ambiance chaleureuse du restaurant. Le design intègre des éléments visuels rappelant l’Italie, une typographie élégante et une mise en page structurée pour une lecture fluide.",
    results: "Des flyers impactants qui attirent l’attention et incitent à la découverte du restaurant. Des cartes de menus modernes, faciles à lire et mettant en valeur les spécialités de La Piazzetta. Une meilleure cohérence visuelle qui renforce l’image de marque et améliore l’expérience client sur place.",
    technologies: ["Adobe Creative Suite", "Illustrator", "Photoshop", "InDesign"],
    testimonial: {
      content: "L'identité visuelle créée capture parfaitement l'essence de notre marque - artisanale, authentique et passionnée. Elle nous aide à raconter notre histoire sans même dire un mot.",
      author: "Antoine Lefèvre",
      position: "Fondateur, La Piazzetta"
    },
    gallery: [
      "/img/projects/1518057111178.jpg",
      "/img/projects/1518435461178.jpg",
      "/img/projects/1556467641178.jpg"
    ],
    nextProject: "la-piazzetta-carte-fidelite",
    prevProject: "urban-mobility"
  },
  {
    id: 5,
    title: "Urban Mobility",
    category: "application",
    description: "Application de mobilité urbaine avec services de location et navigation.",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    client: "CityMove",
    slug: "urban-mobility",
    year: "2023",
    tags: ["Application Mobile", "Mobilité", "Géolocalisation", "React Native"],
    challenge: "Développer une solution de mobilité urbaine intégrant différents modes de transport partagés (vélos, trottinettes, voitures) avec un système de réservation et de navigation en temps réel.",
    solution: "Création d'une application mobile cross-platform avec React Native, intégrant des API de cartographie et de géolocalisation avancées, un système de paiement sécurisé et une interface minimaliste pour une utilisation intuitive même en déplacement.",
    results: "L'application est désormais utilisée dans 5 grandes villes européennes avec plus de 200 000 utilisateurs actifs mensuels. Réduction mesurée de 15% de l'empreinte carbone liée aux déplacements urbains des utilisateurs.",
    technologies: ["React Native", "MapBox API", "Node.js", "MongoDB", "Stripe"],
    testimonial: {
      content: "Urban Mobility a transformé la façon dont nos citoyens se déplacent. La facilité d'utilisation de l'application et la richesse des options de transport proposées en font un outil essentiel pour une ville plus verte.",
      author: "Marie Dubois",
      position: "Responsable Innovation, CityMove"
    },
    gallery: [
      "https://images.unsplash.com/photo-1556767576-5ec41e3239ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556767576-cf0a4a80e5b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1521118702313-63fca89fe1fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    ],
    nextProject: "artisan-coffee",
    prevProject: "nutritrack"
  },
  {
    id: 6,
    title: "Panorama Hotels",
    category: "site-web",
    description: "Plateforme de réservation pour une chaîne d'hôtels de luxe avec expérience utilisateur optimisée.",
    image: "https://images.unsplash.com/photo-1596436889106-be35e843f974?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    client: "Panorama Group",
    slug: "panorama-hotels",
    year: "2023",
    tags: ["Site Web", "Réservation", "Hôtellerie", "Luxe", "UX"],
    challenge: "Créer une plateforme de réservation en ligne reflétant l'expérience de luxe des hôtels Panorama, avec un système de réservation intuitif et des visuels immersifs.",
    solution: "Développement d'un site web avec des animations fluides et des transitions élégantes, intégrant un système de réservation avancé avec visualisation en 3D des chambres et des espaces communs. Implémentation d'un système de recommandation personnalisé basé sur les préférences des clients.",
    results: "Augmentation de 70% des réservations directes en ligne, réduisant la dépendance aux plateformes tierces. Amélioration de 40% du taux de conversion des visiteurs en clients.",
    technologies: ["Next.js", "Three.js", "Strapi CMS", "PostgreSQL", "Netlify"],
    testimonial: {
      content: "Notre nouvelle plateforme de réservation offre une expérience digitale à la hauteur de notre service hôtelier. L'élégance du design et la fluidité du processus de réservation impressionnent régulièrement nos clients.",
      author: "Philippe Moreau",
      position: "Directeur Digital, Panorama Group"
    },
    gallery: [
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    ],
    nextProject: "fresh-market",
    prevProject: "evergreen-solutions"
  },
  {
    id: 7,
    title: "FreshMarket",
    category: "e-commerce",
    description: "Marketplace en ligne pour produits alimentaires locaux et bio.",
    image: "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    client: "Fresh Co.",
    slug: "fresh-market",
    year: "2022",
    tags: ["E-commerce", "Marketplace", "Bio", "Local"],
    challenge: "Développer une plateforme de commerce en ligne connectant les producteurs locaux et bio directement aux consommateurs, avec gestion des vendeurs multiples, livraisons et système de paiement sécurisé.",
    solution: "Création d'une marketplace complète avec espaces vendeurs personnalisés, système de géolocalisation pour trouver les producteurs à proximité, et fonctionnalités de planification de livraison avancées. Implémentation d'un système de notation et d'avis pour renforcer la confiance.",
    results: "Plus de 300 producteurs locaux inscrits dans les 6 premiers mois et 28 000 utilisateurs actifs. Contribution à la réduction de 40% de l'empreinte carbone liée à la distribution alimentaire pour les utilisateurs de la plateforme.",
    technologies: ["Shopify", "React", "Node.js", "MongoDB", "Google Maps API"],
    testimonial: {
      content: "FreshMarket nous a permis d'atteindre des clients que nous n'aurions jamais pu toucher avec nos méthodes traditionnelles. L'interface est aussi simple pour nous producteurs que pour les clients.",
      author: "Jean Dupont",
      position: "Agriculteur Bio, Membre de Fresh Co."
    },
    gallery: [
      "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    ],
    nextProject: "novatech",
    prevProject: "panorama-hotels"
  },
  {
    id: 8,
    title: "NovaTech",
    category: "branding",
    description: "Refonte complète de l'identité de marque pour une entreprise technologique.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    client: "Nova Innovations",
    slug: "novatech",
    year: "2022",
    tags: ["Branding", "Identité visuelle", "Tech", "Modernisation"],
    challenge: "Moderniser l'identité visuelle d'une entreprise technologique établie depuis 20 ans pour refléter son évolution vers l'innovation tout en préservant sa réputation de fiabilité et d'expertise.",
    solution: "Refonte complète de l'identité de marque avec création d'un nouveau logo épuré, une typographie personnalisée, une palette de couleurs moderne, et développement d'un système de design cohérent pour toutes les communications numériques et imprimées.",
    results: "Augmentation de 45% de la reconnaissance de marque dans les études post-refonte. Perception de la marque significativement améliorée, notamment auprès des jeunes talents et des clients des secteurs émergents.",
    technologies: ["Adobe Creative Suite", "Figma", "After Effects", "Blender 3D"],
    testimonial: {
      content: "La nouvelle identité visuelle nous a permis de nous repositionner sur le marché. Nous sommes désormais perçus comme l'entreprise innovante que nous sommes vraiment, tout en conservant la confiance établie avec nos clients historiques.",
      author: "Alexandre Chen",
      position: "PDG, Nova Innovations"
    },
    gallery: [
      "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    ],
    nextProject: "lumina-fashion",
    prevProject: "fresh-market"
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

export const getProjectsByCategory = (category: string): Project[] => {
  return projects.filter(project => project.category === category);
};
