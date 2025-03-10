
import { useState, useRef } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("tous");
  const projectsRef = useRef<HTMLDivElement>(null);

  const filters = [
    { id: "tous", label: "Tous" },
    { id: "site-web", label: "Sites Web" },
    { id: "e-commerce", label: "E-commerce" },
    { id: "application", label: "Applications" },
    { id: "branding", label: "Branding" },
  ];

  const projects = [
    {
      id: 1,
      title: "Taxi Etoile Séléstat - Carte de visite",
      category: "branding",
      description: "Création de cartes de visite professionnelles et percutantes pour un taxi à Sélestat.",
      image: "/img/projects/1334654638.jpg",
      client: "Taxi Etoile Séléstat",
      slug: "taxi-etoile-selestat-carte-visite"
    },
    {
      id: 2,
      title: "Indian Burger - Carte de fidélité",
      category: "branding",
      description: "Création de cartes de fidélité aux couleurs d'Indian Burger pour booster la rétention client.",
      image: "/img/projects/1325645638.jpg",
      client: "Indian Burger",
      slug: "indian-burger-carte-fidelite"
    },
    {
      id: 3,
      title: "La Piazzetta - Carte de fidélité",
      category: "branding",
      description: "Conception de cartes de fidélité attractives pour renforcer l’engagement des clients de La Piazzetta.",
      image: "/img/projects/1518456343338.jpg",
      client: "La Piazzetta",
      slug: "la-piazzetta-carte-fidelite"
    },
    {
      id: 4,
      title: "La Piazzetta - Flyer carte des menus",
      category: "branding",
      description: "Création de flyers et menus élégants pour sublimer l’identité visuelle de La Piazzetta.",
      image: "/img/projects/1518057111178.jpg",
      client: "La Piazzetta",
      slug: "la-piazzetta-flyer-carte-menus"
    },
    {
      id: 5,
      title: "Urban Mobility",
      category: "application",
      description: "Application de mobilité urbaine avec services de location et navigation.",
      image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      client: "CityMove",
      slug: "urban-mobility"
    },
    {
      id: 6,
      title: "Panorama Hotels",
      category: "site-web",
      description: "Plateforme de réservation pour une chaîne d'hôtels de luxe avec expérience utilisateur optimisée.",
      image: "https://images.unsplash.com/photo-1596436889106-be35e843f974?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      client: "Panorama Group",
      slug: "panorama-hotels"
    },
    {
      id: 7,
      title: "FreshMarket",
      category: "e-commerce",
      description: "Marketplace en ligne pour produits alimentaires locaux et bio.",
      image: "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      client: "Fresh Co.",
      slug: "fresh-market"
    },
    {
      id: 8,
      title: "NovaTech",
      category: "branding",
      description: "Refonte complète de l'identité de marque pour une entreprise technologique.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      client: "Nova Innovations",
      slug: "novatech"
    },
  ];

  const filteredProjects = activeFilter === "tous" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handleFilterChange = (filterId: string) => {
    setActiveFilter(filterId);
    // Smooth scroll to projects section when filter changes
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen pt-24 bg-gradient-light dark:bg-gradient-dark">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Notre Portfolio</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Découvrez nos projets récents et laissez-vous inspirer par notre créativité et notre expertise.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => handleFilterChange(filter.id)}
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-afh text-white shadow-md shadow-afh/30"
                  : "glass hover:bg-afh/10"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div ref={projectsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group h-full">
              <div className="glass-card rounded-xl overflow-hidden h-full flex flex-col">
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full">
                      <div className="flex justify-between items-center">
                        <span className="text-white text-sm">{project.client}</span>
                        <Link to={`/portfolio/${project.slug}`} className="bg-afh p-2 rounded-full text-white hover:scale-110 transition-transform">
                          <ArrowUpRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold group-hover:text-afh transition-colors">
                      {project.title}
                    </h3>
                    <span className="glass px-3 py-1 rounded-full text-xs font-medium capitalize">
                      {project.category.replace("-", " ")}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <Link 
                    to={`/portfolio/${project.slug}`}
                    className="mt-auto inline-flex items-center text-sm font-medium text-afh hover:underline"
                  >
                    Voir le projet
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium mb-2">Aucun projet trouvé</h3>
            <p className="text-muted-foreground">
              Nous n'avons pas encore de projets dans cette catégorie.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
