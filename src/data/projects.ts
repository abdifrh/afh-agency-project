
export interface Project {
  id: number;
  title: string;
  category: 'site-web' | 'print' | 'digital' | 'branding';
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
    title: "Carte de visite",
    category: "print",
    description: "Création de cartes de visite professionnelles et percutantes pour un taxi à Sélestat.",
    image: "/img/projects/1334654638.jpg",
    client: "Taxi Etoile Séléstat",
    slug: "taxi-etoile-selestat-carte-visite",
    year: "2025",
    tags: ["Branding", "Identité visuelle", "Carte de visite", "Print"],
    challenge: "Fournir un support de communication efficace et élégant, en adéquation avec l’identité visuelle du taxi, pour faciliter la prise de contact et renforcer la notoriété.",
    solution: "Conception de cartes de visite recto-verso avec un design équilibré : un côté jaune et un côté noir, respectant l’image du service tout en assurant une lisibilité optimale des informations.",
    results: "Une image de marque renforcée, une meilleure mémorisation auprès des clients et une carte de visite distinctive qui inspire confiance et professionnalisme.",
    technologies: ["Adobe Creative Suite", "Illustrator", "Photoshop", "InDesign"],
    gallery: [
      "/img/projects/1334654638.jpg"
    ],
    nextProject: "indian-burger-carte-fidelite",
    prevProject: ""
  },
  {
    id: 2,
    title: "Carte de fidélité",
    category: "print",
    description: "Création de cartes de fidélité aux couleurs d'Indian Burger pour booster la rétention client.",
    image: "/img/projects/1325645638.jpg",
    client: "Indian Burger",
    slug: "indian-burger-carte-fidelite",
    year: "2025",
    tags: ["Branding", "Identité visuelle", "Carte de fidélitié", "Print"],
    challenge: "Développer un support de fidélisation attractif et en cohérence avec l’identité visuelle du snack, tout en encourageant les clients à revenir régulièrement.",
    solution: "Conception de cartes de fidélité au design dynamique, en jaune pour respecter l’image de marque existante, avec une mise en page claire et incitative.",
    results: "Une meilleure fidélisation des clients, un engagement renforcé et une augmentation des visites grâce à une carte pratique et visuellement impactante.",
    technologies: ["Adobe Creative Suite", "Illustrator", "Photoshop", "InDesign"],
    gallery: [
      "/img/projects/1325645638.jpg"
    ],
    nextProject: "la-piazzetta-carte-fidelite",
    prevProject: "taxi-etoile-selestat-carte-visite"
  },
  {
    id: 3,
    title: "Carte de fidélité",
    category: "print",
    description: "Conception de cartes de fidélité attractives pour renforcer l’engagement des clients de La Piazzetta.",
    image: "/img/projects/1518456343338.jpg",
    client: "La Piazzetta",
    slug: "la-piazzetta-carte-fidelite",
    year: "2024",
    tags: ["Branding", "Identité visuelle", "Carte de fidélité", "Print"],
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
    nextProject: "la-piazzetta-flyer-carte-menus",
    prevProject: "indian-burger-carte-fidelite"
  },
  {
    id: 4,
    title: "Flyer carte des menus",
    category: "print",
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
    nextProject: "site-web-taxi-etoile-selestat",
    prevProject: "la-piazzetta-carte-fidelite"
  },
  {
    id: 5,
    title: "Site vitrine",
    category: "site-web",
    description: "Création d’un site vitrine moderne et fonctionnel pour Taxi Étoile Sélestat, facilitant la réservation et la mise en relation avec les clients.",
    image: "/img/projects/1515465723425.jpg",
    client: "Taxi Etoile Séléstat",
    slug: "site-web-taxi-etoile-selestat",
    year: "2025",
    tags: ["Site vitrine", "Responsive", "Taxi", "Séléstat", "UX"],
    challenge: "Offrir une présence en ligne professionnelle et accessible, permettant aux clients de découvrir les services, de réserver facilement et d’obtenir rapidement les informations essentielles.",
    solution: "Développement d’un site vitrine épuré et intuitif, optimisé pour mobile et ordinateur, avec une navigation fluide, des appels à l’action clairs et un design en harmonie avec l’identité visuelle de l’entreprise.",
    results: "Une visibilité renforcée, une meilleure accessibilité pour les clients, et un outil efficace pour générer des réservations et fidéliser la clientèle.",
    technologies: ["Vite", "TypeScript", "React", "shadcn-ui", "Tailwind CSS"],
    gallery: [
      "/img/projects/1515465723425.jpg",
      "/img/projects/1457657638425.jpg"
    ],
    nextProject: "logo-taxi-etoile-selestat",
    prevProject: "la-piazzetta-flyer-carte-menus"
  },
  {
    id: 6,
    title: "Logo & Identité visuelle",
    category: "branding",
    description: "Création d’un logo unique et professionnel pour Taxi Étoile Sélestat, reflétant son identité et sa fiabilité.",
    image: "/img/projects/155673243235.jpg",
    client: "Taxi Etoile Séléstat",
    slug: "logo-taxi-etoile-selestat",
    year: "2025",
    tags: ["Site vitrine", "Responsive", "Taxi", "Séléstat", "UX"],
    challenge: "Concevoir une identité visuelle reconnaissable et moderne, qui véhicule professionnalisme et confiance tout en se démarquant des autres services de taxi.",
    solution: "Un logo épuré intégrant des éléments évoquant à la fois l’univers du transport et l’étoile, en cohérence avec le nom de l’entreprise. Une palette de couleurs jaune et noir a été utilisée pour rappeler l’univers du taxi et assurer une forte visibilité.",
    results: "Un logo distinctif et mémorable, renforçant la notoriété de Taxi Étoile Sélestat et facilitant son identification par les clients.",
    technologies: ["Adobe Creative Suite", "Illustrator", "Photoshop"],
    gallery: [
      "/img/projects/155673243235.jpg",
      "/img/projects/4436563443542.jpg",
      "/img/projects/4643278689435.jpg"
    ],
    nextProject: "",
    prevProject: "site-web-taxi-etoile-selestat"
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

export const getProjectsByCategory = (category: string): Project[] => {
  return projects.filter(project => project.category === category);
};
