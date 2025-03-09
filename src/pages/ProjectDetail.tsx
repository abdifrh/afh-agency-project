
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, ExternalLink, Clock, Calendar, Tag, User, CheckCircle } from "lucide-react";
import { getProjectBySlug, Project } from "../data/projects";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [activeImage, setActiveImage] = useState<number>(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (slug) {
      const foundProject = getProjectBySlug(slug);
      if (foundProject) {
        setProject(foundProject);
      } else {
        navigate("/portfolio", { replace: true });
      }
    }
  }, [slug, navigate]);

  if (!project) {
    return (
      <div className="min-h-screen pt-24 bg-gradient-light dark:bg-gradient-dark flex items-center justify-center">
        <div className="glass-card p-10 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-4">Chargement du projet...</h2>
          <p className="text-muted-foreground">
            Veuillez patienter pendant que nous récupérons les informations du projet.
          </p>
        </div>
      </div>
    );
  }

  // Different layouts based on project category
  const renderProjectContent = () => {
    switch (project.category) {
      case 'site-web':
        return renderWebsiteLayout();
      case 'e-commerce':
        return renderEcommerceLayout();
      case 'application':
        return renderApplicationLayout();
      case 'branding':
        return renderBrandingLayout();
      default:
        return renderDefaultLayout();
    }
  };

  const renderWebsiteLayout = () => (
    <div className="grid md:grid-cols-3 gap-8 mb-16">
      <div className="md:col-span-2">
        <div className="sticky top-28 space-y-8">
          <div className="glass-card p-6 rounded-xl overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-auto rounded-lg shadow-lg" 
            />
          </div>
          
          {project.gallery && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Aperçu du projet</h3>
              <div className="relative">
                <div className="glass-card rounded-xl overflow-hidden">
                  <img 
                    src={project.gallery[activeImage]} 
                    alt={`${project.title} gallery`} 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                
                {project.gallery.length > 1 && (
                  <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex justify-between px-4">
                    <button 
                      onClick={() => setActiveImage((prev) => (prev === 0 ? project.gallery!.length - 1 : prev - 1))}
                      className="bg-white/80 dark:bg-black/50 p-2 rounded-full hover:bg-white dark:hover:bg-black transition-colors"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button 
                      onClick={() => setActiveImage((prev) => (prev === project.gallery!.length - 1 ? 0 : prev + 1))}
                      className="bg-white/80 dark:bg-black/50 p-2 rounded-full hover:bg-white dark:hover:bg-black transition-colors"
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                )}
              </div>
              
              {project.gallery.length > 1 && (
                <div className="flex justify-center space-x-2 mt-4">
                  {project.gallery.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(index)}
                      className={`h-2 w-2 rounded-full transition-all ${
                        activeImage === index ? "bg-afh w-4" : "bg-gray-300 dark:bg-gray-600"
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      
      <div className="space-y-8">
        <div className="glass-card p-6 rounded-xl">
          <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
          <p className="text-muted-foreground mb-6">{project.description}</p>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2 text-afh" />
              <span className="text-sm font-medium">Client: {project.client}</span>
            </div>
            {project.year && (
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2 text-afh" />
                <span className="text-sm font-medium">Année: {project.year}</span>
              </div>
            )}
            <div className="flex items-center">
              <Tag className="h-4 w-4 mr-2 text-afh" />
              <span className="text-sm font-medium">Catégorie: {project.category.replace("-", " ")}</span>
            </div>
          </div>
          
          {project.tags && (
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, index) => (
                <span key={index} className="px-3 py-1 bg-afh/10 text-afh rounded-full text-xs font-medium">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        
        <div className="glass-card p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-4">Le projet</h3>
          
          {project.challenge && (
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2">Défi</h4>
              <p className="text-muted-foreground">{project.challenge}</p>
            </div>
          )}
          
          {project.solution && (
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2">Solution</h4>
              <p className="text-muted-foreground">{project.solution}</p>
            </div>
          )}
          
          {project.results && (
            <div>
              <h4 className="text-lg font-semibold mb-2">Résultats</h4>
              <p className="text-muted-foreground">{project.results}</p>
            </div>
          )}
        </div>
        
        {project.technologies && (
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Technologies</h3>
            <div className="space-y-2">
              {project.technologies.map((tech, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-afh" />
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {project.testimonial && (
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Témoignage client</h3>
            <blockquote className="border-l-4 border-afh pl-4 italic text-muted-foreground">
              "{project.testimonial.content}"
            </blockquote>
            <div className="mt-4">
              <p className="font-medium">{project.testimonial.author}</p>
              <p className="text-sm text-muted-foreground">{project.testimonial.position}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const renderEcommerceLayout = () => (
    <div className="space-y-12">
      <div className="glass-card p-8 rounded-xl overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-block glass px-3 py-1 rounded-full text-xs font-semibold text-afh mb-4">
              {project.category.replace("-", " ")}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
            <p className="text-lg text-muted-foreground mb-6">{project.description}</p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <p className="text-sm text-muted-foreground">Client</p>
                <p className="font-medium">{project.client}</p>
              </div>
              {project.year && (
                <div>
                  <p className="text-sm text-muted-foreground">Année</p>
                  <p className="font-medium">{project.year}</p>
                </div>
              )}
            </div>
            
            {project.tags && (
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 glass text-xs font-medium rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
          
          <div className="relative group overflow-hidden rounded-xl">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-auto rounded-lg transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Le défi</h2>
          <p className="text-muted-foreground">{project.challenge}</p>
          
          <h2 className="text-2xl font-bold">Notre solution</h2>
          <p className="text-muted-foreground">{project.solution}</p>
        </div>
        
        <div className="glass-card p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-4">Résultats clés</h3>
          
          <div className="space-y-4">
            {project.results && project.results.split('. ').map((result, index) => (
              result.trim() && (
                <div key={index} className="flex items-start">
                  <div className="bg-afh/20 p-2 rounded-full mr-3 mt-1">
                    <CheckCircle className="h-4 w-4 text-afh" />
                  </div>
                  <p>{result.trim().endsWith('.') ? result.trim() : `${result.trim()}.`}</p>
                </div>
              )
            ))}
          </div>
        </div>
      </div>
      
      {project.gallery && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Galerie</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {project.gallery.map((image, index) => (
              <div key={index} className="glass-card p-2 rounded-xl overflow-hidden group">
                <img 
                  src={image} 
                  alt={`${project.title} gallery ${index + 1}`} 
                  className="w-full h-48 object-cover rounded-lg transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
            ))}
          </div>
        </div>
      )}
      
      {project.testimonial && (
        <div className="glass-card p-8 rounded-xl">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="md:w-1/3">
              <h3 className="text-xl font-bold mb-3">Ce que dit notre client</h3>
              <p className="font-medium">{project.testimonial.author}</p>
              <p className="text-sm text-muted-foreground">{project.testimonial.position}</p>
            </div>
            
            <div className="md:w-2/3">
              <blockquote className="text-lg italic text-muted-foreground">
                "{project.testimonial.content}"
              </blockquote>
            </div>
          </div>
        </div>
      )}
      
      {project.technologies && (
        <div className="flex flex-wrap gap-4 justify-center">
          {project.technologies.map((tech, index) => (
            <span key={index} className="px-4 py-2 glass rounded-full text-sm font-medium">
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );

  const renderApplicationLayout = () => (
    <div className="space-y-12">
      <div className="glass-card p-8 rounded-xl overflow-hidden relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-1/2 h-1/2 rounded-br-full bg-afh/5 blur-3xl"></div>
        </div>
        
        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block glass px-3 py-1 rounded-full text-xs font-semibold text-afh mb-4">
              {project.category.replace("-", " ")}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
            <p className="text-lg text-muted-foreground mb-6">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags && project.tags.map((tag, index) => (
                <span key={index} className="px-3 py-1 glass text-xs font-medium rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-sm text-muted-foreground">Client</p>
                <p className="font-medium">{project.client}</p>
              </div>
              {project.year && (
                <div>
                  <p className="text-sm text-muted-foreground">Année</p>
                  <p className="font-medium">{project.year}</p>
                </div>
              )}
            </div>
          </div>
          
          <div className="relative aspect-[9/16] max-w-xs mx-auto">
            <div className="absolute inset-0 rounded-[2rem] overflow-hidden border-8 border-gray-800 dark:border-gray-900 bg-black">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-gray-800 dark:bg-gray-900 rounded-b-xl"></div>
          </div>
        </div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="glass-card p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-4">Le défi</h3>
          <p className="text-muted-foreground">{project.challenge}</p>
        </div>
        
        <div className="glass-card p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-4">Notre solution</h3>
          <p className="text-muted-foreground">{project.solution}</p>
        </div>
        
        <div className="glass-card p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-4">Résultats</h3>
          <p className="text-muted-foreground">{project.results}</p>
        </div>
      </div>
      
      {project.gallery && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Aperçu de l'application</h2>
          <div className="flex gap-4 overflow-x-auto pb-4">
            {project.gallery.map((image, index) => (
              <div key={index} className="flex-shrink-0 w-64 aspect-[9/19] relative">
                <div className="absolute inset-0 rounded-[2rem] overflow-hidden border-8 border-gray-800 dark:border-gray-900 bg-black">
                  <img 
                    src={image} 
                    alt={`${project.title} screen ${index + 1}`} 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {project.technologies && (
        <div className="glass-card p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-4">Technologies utilisées</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {project.technologies.map((tech, index) => (
              <div key={index} className="glass text-center p-3 rounded-lg">
                <span className="font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {project.testimonial && (
        <div className="glass-card p-8 rounded-xl">
          <h3 className="text-xl font-bold mb-6 text-center">Témoignage</h3>
          <blockquote className="text-lg italic text-muted-foreground text-center mb-6">
            "{project.testimonial.content}"
          </blockquote>
          <div className="text-center">
            <p className="font-medium">{project.testimonial.author}</p>
            <p className="text-sm text-muted-foreground">{project.testimonial.position}</p>
          </div>
        </div>
      )}
    </div>
  );

  const renderBrandingLayout = () => (
    <div className="space-y-12">
      <div className="relative">
        <div className="aspect-video overflow-hidden rounded-xl">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="container mx-auto px-6 py-12">
              <div className="inline-block glass px-3 py-1 rounded-full text-xs font-semibold text-white mb-4">
                {project.category.replace("-", " ")}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{project.title}</h1>
              <p className="text-lg text-white/80 max-w-2xl">{project.description}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-8">
            <div className="glass-card p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-6">À propos du projet</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Défi</h3>
                  <p className="text-muted-foreground">{project.challenge}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Approche</h3>
                  <p className="text-muted-foreground">{project.solution}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Résultats</h3>
                  <p className="text-muted-foreground">{project.results}</p>
                </div>
              </div>
            </div>
            
            {project.gallery && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Éléments de l'identité visuelle</h2>
                <div className="grid gap-6">
                  {project.gallery.map((image, index) => (
                    <div key={index} className="glass-card rounded-xl overflow-hidden">
                      <img 
                        src={image} 
                        alt={`${project.title} branding ${index + 1}`} 
                        className="w-full h-auto" 
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <div className="space-y-8">
            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Informations</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Client</p>
                  <p className="font-medium">{project.client}</p>
                </div>
                
                {project.year && (
                  <div>
                    <p className="text-sm text-muted-foreground">Année</p>
                    <p className="font-medium">{project.year}</p>
                  </div>
                )}
                
                {project.tags && (
                  <div>
                    <p className="text-sm text-muted-foreground">Services</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags.map((tag, index) => (
                        <span key={index} className="px-3 py-1 glass text-xs font-medium rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {project.technologies && (
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Outils utilisés</h3>
                <div className="space-y-2">
                  {project.technologies.map((tech, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-afh" />
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {project.testimonial && (
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Témoignage client</h3>
                <blockquote className="border-l-4 border-afh pl-4 italic text-muted-foreground mb-4">
                  "{project.testimonial.content}"
                </blockquote>
                <p className="font-medium">{project.testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{project.testimonial.position}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const renderDefaultLayout = () => (
    <div className="grid md:grid-cols-2 gap-8 mb-16">
      <div>
        <div className="glass-card p-6 rounded-xl overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-auto rounded-lg shadow-lg" 
          />
        </div>
        
        {project.gallery && (
          <div className="mt-8 grid grid-cols-3 gap-4">
            {project.gallery.map((image, index) => (
              <div 
                key={index} 
                className={`glass-card p-2 rounded-xl overflow-hidden cursor-pointer ${activeImage === index ? 'ring-2 ring-afh' : ''}`}
                onClick={() => setActiveImage(index)}
              >
                <img 
                  src={image} 
                  alt={`${project.title} thumbnail ${index + 1}`} 
                  className="w-full h-24 object-cover rounded-lg" 
                />
              </div>
            ))}
          </div>
        )}
      </div>
      
      <div className="space-y-8">
        <div className="glass-card p-6 rounded-xl">
          <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
          <p className="text-muted-foreground mb-6">{project.description}</p>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <p className="text-sm text-muted-foreground">Client</p>
              <p className="font-medium">{project.client}</p>
            </div>
            
            {project.year && (
              <div>
                <p className="text-sm text-muted-foreground">Année</p>
                <p className="font-medium">{project.year}</p>
              </div>
            )}
            
            <div>
              <p className="text-sm text-muted-foreground">Catégorie</p>
              <p className="font-medium capitalize">{project.category.replace("-", " ")}</p>
            </div>
          </div>
          
          {project.tags && (
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, index) => (
                <span key={index} className="px-3 py-1 bg-afh/10 text-afh rounded-full text-xs font-medium">
                  {tag}
                </span>
              ))}
            </div>
          )}
          
          {project.challenge && (
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2">Défi</h4>
              <p className="text-muted-foreground">{project.challenge}</p>
            </div>
          )}
          
          {project.solution && (
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2">Solution</h4>
              <p className="text-muted-foreground">{project.solution}</p>
            </div>
          )}
          
          {project.results && (
            <div>
              <h4 className="text-lg font-semibold mb-2">Résultats</h4>
              <p className="text-muted-foreground">{project.results}</p>
            </div>
          )}
        </div>
        
        {project.technologies && (
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span key={index} className="px-3 py-1 glass rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {project.testimonial && (
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Témoignage client</h3>
            <blockquote className="border-l-4 border-afh pl-4 italic text-muted-foreground mb-4">
              "{project.testimonial.content}"
            </blockquote>
            <p className="font-medium">{project.testimonial.author}</p>
            <p className="text-sm text-muted-foreground">{project.testimonial.position}</p>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen pt-24 bg-gradient-light dark:bg-gradient-dark">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8">
          <Link to="/portfolio" className="inline-flex items-center text-afh hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour au portfolio
          </Link>
        </div>
        
        {renderProjectContent()}
        
        {/* Navigation between projects */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 mt-16">
          <div className="flex justify-between">
            {project.prevProject && (
              <Link 
                to={`/portfolio/${project.prevProject}`} 
                className="inline-flex items-center group"
              >
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                <span>Projet précédent</span>
              </Link>
            )}
            
            {project.nextProject && (
              <Link 
                to={`/portfolio/${project.nextProject}`} 
                className="inline-flex items-center ml-auto group"
              >
                <span>Projet suivant</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
