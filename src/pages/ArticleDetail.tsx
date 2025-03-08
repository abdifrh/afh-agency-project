
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, User, Clock, Tag } from "lucide-react";
import { cn } from "@/lib/utils";
import { articlesData } from "../data/articles";

export default function ArticleDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the article with matching slug
    const foundArticle = articlesData.find(a => a.slug === slug);
    
    if (foundArticle) {
      setArticle(foundArticle);
    }
    setLoading(false);
  }, [slug]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="glass-card p-8 animate-pulse">
          <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-6"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-8"></div>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-16 md:py-24 text-center">
        <div className="glass-card p-8 animate-fade-in">
          <h1 className="text-3xl font-bold mb-4">Article introuvable</h1>
          <p className="mb-6">L'article que vous recherchez n'existe pas.</p>
          <button 
            onClick={() => navigate('/articles')}
            className="btn-afh"
          >
            Retourner aux articles
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-16 animate-fade-in">
      <button 
        onClick={() => navigate('/articles')} 
        className="flex items-center space-x-2 mb-8 group glass px-4 py-2 rounded-full transition-all duration-300 hover:shadow-md hover:scale-105"
      >
        <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300" />
        <span>Retour aux articles</span>
      </button>

      <div className="glass-card p-6 md:p-8 lg:p-12 rounded-2xl animate-slide-up">
        <div className="aspect-video overflow-hidden rounded-xl mb-8">
          <img 
            src={article.image} 
            alt={article.title} 
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{article.title}</h1>
        
        <div className="flex flex-wrap gap-4 mb-8 text-sm">
          <div className="flex items-center glass px-3 py-1 rounded-full">
            <Calendar className="h-4 w-4 mr-2" />
            <span>{article.date}</span>
          </div>
          <div className="flex items-center glass px-3 py-1 rounded-full">
            <User className="h-4 w-4 mr-2" />
            <span>{article.author}</span>
          </div>
          <div className="flex items-center glass px-3 py-1 rounded-full">
            <Clock className="h-4 w-4 mr-2" />
            <span>{article.readTime} min de lecture</span>
          </div>
          <div className="flex items-center glass px-3 py-1 rounded-full">
            <Tag className="h-4 w-4 mr-2" />
            <span>{article.category}</span>
          </div>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          {article.content.map((section: any, idx: number) => (
            <div key={idx} className="mb-8">
              {section.subheading && (
                <h2 className="text-2xl font-bold mb-4">{section.subheading}</h2>
              )}
              {section.paragraphs.map((paragraph: string, pIdx: number) => (
                <p key={pIdx} className="mb-4 leading-relaxed">{paragraph}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
