
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Search, 
  Calendar, 
  Clock, 
  Tag,
  ChevronRight
} from "lucide-react";
import { articlesData } from "../data/articles";
import { cn } from "@/lib/utils";

export default function Articles() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Get unique categories
  const categories = Array.from(new Set(articlesData.map(article => article.category)));
  
  // Filter articles based on search term and category
  const filteredArticles = articlesData.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? article.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">📝 Nos Articles</h1>
        <p className="text-lg max-w-2xl mx-auto opacity-80">
          Découvrez nos derniers articles sur le marketing digital, le développement web, le design et plus encore.
        </p>
      </div>

      <div className="mb-12 animate-slide-up">
        <div className="glass-card p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher un article..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="glass-input w-full pl-10 py-3 rounded-lg focus:outline-none"
              />
            </div>
            
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setSelectedCategory(null)}
                className={cn(
                  "px-4 py-2 rounded-full transition-all duration-300",
                  !selectedCategory 
                    ? "bg-afh text-white"
                    : "glass hover:bg-afh/10"
                )}
              >
                Tous
              </button>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={cn(
                    "px-4 py-2 rounded-full transition-all duration-300",
                    selectedCategory === category 
                      ? "bg-afh text-white"
                      : "glass hover:bg-afh/10"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {filteredArticles.length === 0 ? (
          <div className="text-center py-20 glass-card">
            <h2 className="text-2xl font-semibold mb-4">Aucun article trouvé</h2>
            <p>Essayez avec d'autres termes de recherche ou catégories</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <Link 
                to={`/articles/${article.slug}`}
                key={article.id}
                className="group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <article className="glass-card rounded-xl overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:shadow-afh/10 hover:-translate-y-2">
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center text-sm mb-2 space-x-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{article.readTime} min</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center mb-4">
                      <Tag className="h-4 w-4 mr-2 text-afh" />
                      <span className="text-sm font-medium">{article.category}</span>
                    </div>
                    
                    <h2 className="text-xl font-bold mb-3 transition-all duration-300 group-hover:text-afh">{article.title}</h2>
                    
                    <p className="text-sm opacity-80 mb-4">{article.excerpt}</p>
                    
                    <div className="mt-auto flex items-center font-medium text-afh">
                      <span>Lire l'article</span>
                      <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
