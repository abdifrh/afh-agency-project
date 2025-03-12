
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

// English versions of the projects
const enProjects: Project[] = [
  {
    id: 1,
    title: "Business Card",
    category: "print",
    description: "Creation of professional and impactful business cards for a taxi service in Sélestat.",
    image: "/img/projects/1334654638.jpg",
    client: "Taxi Etoile Séléstat",
    slug: "taxi-etoile-selestat-carte-visite",
    year: "2025",
    tags: ["Branding", "Visual Identity", "Business Card", "Print"],
    challenge: "Provide an effective and elegant communication tool, in line with the taxi's visual identity, to facilitate contact and strengthen awareness.",
    solution: "Design of double-sided business cards with a balanced design: a yellow side and a black side, respecting the image of the service while ensuring optimal readability of information.",
    results: "A strengthened brand image, better memorization among customers, and a distinctive business card that inspires confidence and professionalism.",
    technologies: ["Adobe Creative Suite", "Illustrator", "Photoshop", "InDesign"],
    gallery: [
      "/img/projects/1334654638.jpg"
    ],
    nextProject: "indian-burger-carte-fidelite",
    prevProject: ""
  },
  {
    id: 2,
    title: "Loyalty Card",
    category: "print",
    description: "Creation of loyalty cards in Indian Burger colors to boost customer retention.",
    image: "/img/projects/1325645638.jpg",
    client: "Indian Burger",
    slug: "indian-burger-carte-fidelite",
    year: "2025",
    tags: ["Branding", "Visual Identity", "Loyalty Card", "Print"],
    challenge: "Develop an attractive loyalty tool consistent with the snack bar's visual identity, while encouraging customers to return regularly.",
    solution: "Design of loyalty cards with a dynamic design, in yellow to respect the existing brand image, with a clear and incentive layout.",
    results: "Better customer loyalty, increased engagement, and an increase in visits thanks to a practical and visually impactful card.",
    technologies: ["Adobe Creative Suite", "Illustrator", "Photoshop", "InDesign"],
    gallery: [
      "/img/projects/1325645638.jpg"
    ],
    nextProject: "la-piazzetta-carte-fidelite",
    prevProject: "taxi-etoile-selestat-carte-visite"
  },
  {
    id: 3,
    title: "Loyalty Card",
    category: "print",
    description: "Design of attractive loyalty cards to strengthen La Piazzetta customer engagement.",
    image: "/img/projects/1518456343338.jpg",
    client: "La Piazzetta",
    slug: "la-piazzetta-carte-fidelite",
    year: "2024",
    tags: ["Branding", "Visual Identity", "Loyalty Card", "Print"],
    challenge: "Create aesthetic and practical loyalty cards, in line with La Piazzetta's image, while encouraging customers to return regularly.",
    solution: "Elegant and consistent design with the restaurant's visual identity, quality printing, and practical format for daily use.",
    results: "An increase in customer loyalty thanks to an attractive and functional tool, strengthening the relationship between the restaurant and its customers.",
    technologies: ["Adobe Creative Suite", "Illustrator", "Photoshop", "InDesign"],
    testimonial: {
      content: "The visual identity created perfectly captures the essence of our brand - artisanal, authentic, and passionate. It helps us tell our story without even saying a word.",
      author: "Antoine Lefèvre",
      position: "Founder, La Piazzetta"
    },
    gallery: [
      "/img/projects/1518456343338.jpg"
    ],
    nextProject: "la-piazzetta-flyer-carte-menus",
    prevProject: "indian-burger-carte-fidelite"
  },
  {
    id: 4,
    title: "Menu Flyer",
    category: "print",
    description: "Creation of elegant flyers and menus to enhance La Piazzetta's visual identity.",
    image: "/img/projects/1518057111178.jpg",
    client: "La Piazzetta",
    slug: "la-piazzetta-flyer-carte-menus",
    year: "2024",
    tags: ["Branding", "Visual Identity", "Flyer", "Print"],
    challenge: "La Piazzetta, an Italian restaurant, wanted to modernize its communication materials while maintaining the elegance and authenticity of its visual identity. The goal was to create attractive, clear, and engaging flyers and menu cards to improve the customer experience and boost the restaurant's visibility.",
    solution: "We designed graphic materials highlighting the authenticity of the dishes and the restaurant's warm atmosphere. The design incorporates visual elements reminiscent of Italy, elegant typography, and a structured layout for fluid reading.",
    results: "Impactful flyers that attract attention and encourage restaurant discovery. Modern, easy-to-read menu cards that highlight La Piazzetta's specialties. Better visual consistency that strengthens the brand image and improves the on-site customer experience.",
    technologies: ["Adobe Creative Suite", "Illustrator", "Photoshop", "InDesign"],
    testimonial: {
      content: "The visual identity created perfectly captures the essence of our brand - artisanal, authentic, and passionate. It helps us tell our story without even saying a word.",
      author: "Antoine Lefèvre",
      position: "Founder, La Piazzetta"
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
    title: "Showcase Website",
    category: "site-web",
    description: "Creation of a modern and functional showcase website for Taxi Étoile Sélestat, facilitating booking and connecting with customers.",
    image: "/img/projects/1515465723425.jpg",
    client: "Taxi Etoile Séléstat",
    slug: "site-web-taxi-etoile-selestat",
    year: "2025",
    tags: ["Showcase Site", "Responsive", "Taxi", "Séléstat", "UX"],
    challenge: "Provide a professional and accessible online presence, allowing customers to discover services, book easily, and quickly obtain essential information.",
    solution: "Development of a clean and intuitive showcase site, optimized for mobile and desktop, with smooth navigation, clear calls to action, and a design in harmony with the company's visual identity.",
    results: "Enhanced visibility, better accessibility for customers, and an effective tool for generating bookings and building customer loyalty.",
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
    title: "Logo & Visual Identity",
    category: "branding",
    description: "Creation of a unique and professional logo for Taxi Étoile Sélestat, reflecting its identity and reliability.",
    image: "/img/projects/155673243235.jpg",
    client: "Taxi Etoile Séléstat",
    slug: "logo-taxi-etoile-selestat",
    year: "2025",
    tags: ["Logo", "Branding", "Visual Identity", "Taxi", "Séléstat"],
    challenge: "Design a recognizable and modern visual identity that conveys professionalism and trust while standing out from other taxi services.",
    solution: "A clean logo integrating elements evoking both the world of transportation and the star, in line with the company name. A yellow and black color palette was used to recall the taxi universe and ensure strong visibility.",
    results: "A distinctive and memorable logo, enhancing Taxi Étoile Sélestat's reputation and facilitating customer identification.",
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

// French versions of the projects
const frProjects: Project[] = [
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
    challenge: "Fournir un support de communication efficace et élégant, en adéquation avec l'identité visuelle du taxi, pour faciliter la prise de contact et renforcer la notoriété.",
    solution: "Conception de cartes de visite recto-verso avec un design équilibré : un côté jaune et un côté noir, respectant l'image du service tout en assurant une lisibilité optimale des informations.",
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
    tags: ["Branding", "Identité visuelle", "Carte de fidélité", "Print"],
    challenge: "Développer un support de fidélisation attractif et en cohérence avec l'identité visuelle du snack, tout en encourageant les clients à revenir régulièrement.",
    solution: "Conception de cartes de fidélité au design dynamique, en jaune pour respecter l'image de marque existante, avec une mise en page claire et incitative.",
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
    description: "Conception de cartes de fidélité attractives pour renforcer l'engagement des clients de La Piazzetta.",
    image: "/img/projects/1518456343338.jpg",
    client: "La Piazzetta",
    slug: "la-piazzetta-carte-fidelite",
    year: "2024",
    tags: ["Branding", "Identité visuelle", "Carte de fidélité", "Print"],
    challenge: "Créer des cartes de fidélité esthétiques et pratiques, en accord avec l'image de La Piazzetta, tout en incitant les clients à revenir régulièrement.",
    solution: "Design élégant et cohérent avec l'identité visuelle du restaurant, impression de qualité et format pratique pour une utilisation quotidienne.",
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
    description: "Création de flyers et menus élégants pour sublimer l'identité visuelle de La Piazzetta.",
    image: "/img/projects/1518057111178.jpg",
    client: "La Piazzetta",
    slug: "la-piazzetta-flyer-carte-menus",
    year: "2024",
    tags: ["Branding", "Identité visuelle", "Flyer", "Print"],
    challenge: "La Piazzetta, un restaurant italien, souhaitait moderniser ses supports de communication tout en conservant l'élégance et l'authenticité de son identité visuelle. L'objectif était de créer des flyers et des cartes de menu attrayants, clairs et engageants pour améliorer l'expérience client et booster la visibilité du restaurant.",
    solution: "Nous avons conçu des supports graphiques en mettant en avant l'authenticité des plats et l'ambiance chaleureuse du restaurant. Le design intègre des éléments visuels rappelant l'Italie, une typographie élégante et une mise en page structurée pour une lecture fluide.",
    results: "Des flyers impactants qui attirent l'attention et incitent à la découverte du restaurant. Des cartes de menus modernes, faciles à lire et mettant en valeur les spécialités de La Piazzetta. Une meilleure cohérence visuelle qui renforce l'image de marque et améliore l'expérience client sur place.",
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
    description: "Création d'un site vitrine moderne et fonctionnel pour Taxi Étoile Sélestat, facilitant la réservation et la mise en relation avec les clients.",
    image: "/img/projects/1515465723425.jpg",
    client: "Taxi Etoile Séléstat",
    slug: "site-web-taxi-etoile-selestat",
    year: "2025",
    tags: ["Site vitrine", "Responsive", "Taxi", "Séléstat", "UX"],
    challenge: "Offrir une présence en ligne professionnelle et accessible, permettant aux clients de découvrir les services, de réserver facilement et d'obtenir rapidement les informations essentielles.",
    solution: "Développement d'un site vitrine épuré et intuitif, optimisé pour mobile et ordinateur, avec une navigation fluide, des appels à l'action clairs et un design en harmonie avec l'identité visuelle de l'entreprise.",
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
    description: "Création d'un logo unique et professionnel pour Taxi Étoile Sélestat, reflétant son identité et sa fiabilité.",
    image: "/img/projects/155673243235.jpg",
    client: "Taxi Etoile Séléstat",
    slug: "logo-taxi-etoile-selestat",
    year: "2025",
    tags: ["Logo", "Branding", "Identité visuelle", "Taxi", "Séléstat"],
    challenge: "Concevoir une identité visuelle reconnaissable et moderne, qui véhicule professionnalisme et confiance tout en se démarquant des autres services de taxi.",
    solution: "Un logo épuré intégrant des éléments évoquant à la fois l'univers du transport et l'étoile, en cohérence avec le nom de l'entreprise. Une palette de couleurs jaune et noir a été utilisée pour rappeler l'univers du taxi et assurer une forte visibilité.",
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

// Return the right set of projects based on language
export const projects = frProjects; // Default export for backward compatibility

// Helper function to get a project by slug, with the correct language
export const getProjectBySlug = (slug: string): Project | undefined => {
  const language = window.location.pathname.split('/')[1];
  const projectSet = language === "fr" ? frProjects : enProjects;
  return projectSet.find(project => project.slug === slug);
};

// Helper function to get projects by category
export const getProjectsByCategory = (category: string): Project[] => {
  const language = window.location.pathname.split('/')[1];
  const projectSet = language === "fr" ? frProjects : enProjects;
  return projectSet.filter(project => project.category === category);
};
