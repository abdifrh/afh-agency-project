
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

const Articles = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const articles = [
    {
      id: 1,
      title: "Les tendances du design web en 2024",
      excerpt: "Découvrez les dernières tendances en matière de design web qui domineront cette année.",
      category: "Design",
      date: "15 Mai 2024",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1000",
    },
    {
      id: 2,
      title: "Comment optimiser la vitesse de chargement de votre site",
      excerpt: "Guide complet pour améliorer les performances de votre site web et offrir une meilleure expérience utilisateur.",
      category: "Développement",
      date: "28 Avril 2024",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1580894912989-0bc892f4efd0?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1000",
    },
    {
      id: 3,
      title: "L'importance du SEO pour votre stratégie digitale",
      excerpt: "Pourquoi le référencement naturel reste essentiel pour votre visibilité en ligne et comment l'optimiser.",
      category: "Marketing",
      date: "10 Avril 2024",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1000",
    },
    {
      id: 4,
      title: "Le Glassmorphism : une tendance durable ?",
      excerpt: "Analyse de la popularité croissante du glassmorphism dans le design d'interface et son avenir.",
      category: "Design",
      date: "2 Avril 2024",
      readTime: "4 min",
      image: "https://images.unsplash.com/photo-1631549916768-4119b4123a21?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1000",
    },
    {
      id: 5,
      title: "Comment créer une stratégie de contenu efficace",
      excerpt: "Les étapes clés pour développer une stratégie de contenu qui engage votre audience et favorise la conversion.",
      category: "Marketing",
      date: "25 Mars 2024",
      readTime: "7 min",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1000",
    },
    {
      id: 6,
      title: "Introduction à l'accessibilité web",
      excerpt: "Comment rendre votre site web accessible à tous les utilisateurs, y compris ceux ayant des handicaps.",
      category: "Développement",
      date: "15 Mars 2024",
      readTime: "9 min",
      image: "https://images.unsplash.com/photo-1573495612937-f01934eeaaa7?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1000",
    },
  ];

  const filteredArticles = articles.filter(article => 
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-24 bg-gradient-light dark:bg-gradient-dark">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Articles & Insights</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explorez nos derniers articles sur le design, le développement web et le marketing digital.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-12">
          <div className="glass rounded-full flex items-center px-4 py-2">
            <Search className="h-5 w-5 text-muted-foreground mr-2" />
            <input
              type="text"
              placeholder="Rechercher un article..."
              className="bg-transparent border-none focus:outline-none flex-1 text-foreground placeholder-muted-foreground"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredArticles.map((article) => (
            <Link 
              key={article.id} 
              to={`/articles/${article.id}`}
              className="group"
            >
              <article className="glass-card rounded-xl overflow-hidden h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="glass px-3 py-1 rounded-full text-xs font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <span>{article.date}</span>
                    <span className="mx-2">•</span>
                    <span>{article.readTime} de lecture</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-afh transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 flex-1">
                    {article.excerpt}
                  </p>
                  <div className="text-sm font-medium text-afh">
                    Lire l'article
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium mb-2">Aucun résultat trouvé</h3>
            <p className="text-muted-foreground">
              Essayez avec d'autres termes de recherche.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Articles;
