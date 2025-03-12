
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CalendarDays } from "lucide-react";
import { getProjectBySlug, Project } from "@/data/projects";
import { useLanguage } from "@/contexts/LanguageContext";

// Update ProjectCategory type to include all possible categories
type ProjectCategory = "site-web" | "print" | "digital" | "branding" | "e-commerce" | "application";

export default function ProjectDetail() {
  const { slug } = useParams();
  const { t, language } = useLanguage();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      setLoading(true);
      if (slug) {
        const foundProject = getProjectBySlug(slug);
        if (foundProject) {
          setProject(foundProject);
        }
      }
      setLoading(false);
    };

    fetchProject();
  }, [slug, language]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="loading">Loading...</div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold">Project not found</h2>
        <p className="mt-4">The project you're looking for doesn't exist or has been removed.</p>
        <Link to={`/${language}/portfolio`} className="btn-primary mt-8 inline-block">
          {t("common.backToPortfolio")}
        </Link>
      </div>
    );
  }

  // Function to get category badge color
  const getCategoryColor = (category: ProjectCategory) => {
    switch (category) {
      case "site-web":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "print":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "digital":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
      case "branding":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
    }
  };

  return (
    <div className="min-h-screen pt-24 bg-gradient-light dark:bg-gradient-dark">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8">
          <Link to={`/${language}/portfolio`} className="btn-secondary">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t("common.backToPortfolio")}
          </Link>
        </div>

        <div className="glass-card rounded-2xl p-8 md:p-12">
          <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className={`inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium ${getCategoryColor(project.category)}`}>
              {project.category === "site-web" 
                ? language === "fr" ? "Site Web" : "Website" 
                : project.category.charAt(0).toUpperCase() + project.category.slice(1)}
            </span>
            {project.year && (
              <div className="flex items-center text-muted-foreground">
                <CalendarDays className="mr-1 h-4 w-4" />
                {project.year}
              </div>
            )}
          </div>

          <img
            src={project.image}
            alt={project.title}
            className="rounded-2xl shadow-lg mb-8 w-full object-cover"
            style={{ maxHeight: '500px' }}
          />

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                {t("portfolio.client")}:
              </h3>
              <p className="text-muted-foreground mb-6">{project.client}</p>

              <h3 className="text-xl font-semibold mb-2">Description:</h3>
              <p className="text-muted-foreground">{project.description}</p>
              
              {project.challenge && (
                <>
                  <h3 className="text-xl font-semibold mb-2 mt-6">
                    {language === "fr" ? "Défi" : "Challenge"}:
                  </h3>
                  <p className="text-muted-foreground">{project.challenge}</p>
                </>
              )}
              
              {project.solution && (
                <>
                  <h3 className="text-xl font-semibold mb-2 mt-6">
                    {language === "fr" ? "Solution" : "Solution"}:
                  </h3>
                  <p className="text-muted-foreground">{project.solution}</p>
                </>
              )}
              
              {project.results && (
                <>
                  <h3 className="text-xl font-semibold mb-2 mt-6">
                    {language === "fr" ? "Résultats" : "Results"}:
                  </h3>
                  <p className="text-muted-foreground">{project.results}</p>
                </>
              )}
            </div>

            <div>
              {project.technologies && project.technologies.length > 0 && (
                <>
                  <h3 className="text-xl font-semibold mb-3">
                    {language === "fr" ? "Technologies" : "Technologies"}:
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="inline-flex items-center rounded-full px-3 py-0.5 text-sm font-medium bg-secondary text-secondary-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                </>
              )}
              
              {project.tags && project.tags.length > 0 && (
                <>
                  <h3 className="text-xl font-semibold mb-3 mt-6">
                    {language === "fr" ? "Tags" : "Tags"}:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="inline-flex items-center rounded-full px-3 py-0.5 text-sm font-medium bg-primary/10 text-primary">
                        {tag}
                      </span>
                    ))}
                  </div>
                </>
              )}
              
              {project.testimonial && (
                <div className="mt-8 p-6 bg-secondary/20 rounded-xl">
                  <p className="italic mb-4">"{project.testimonial.content}"</p>
                  <div className="font-semibold">{project.testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{project.testimonial.position}</div>
                </div>
              )}
            </div>
          </div>
          
          {project.gallery && project.gallery.length > 1 && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">
                {language === "fr" ? "Galerie" : "Gallery"}:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.gallery.map((img, index) => (
                  <img 
                    key={index}
                    src={img}
                    alt={`${project.title} - ${index + 1}`}
                    className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full h-60 object-cover"
                  />
                ))}
              </div>
            </div>
          )}
          
          <div className="mt-12 flex flex-wrap gap-4 justify-between">
            {project.prevProject && (
              <Link 
                to={`/${language}/portfolio/${project.prevProject}`}
                className="btn-secondary"
              >
                ← {language === "fr" ? "Projet précédent" : "Previous project"}
              </Link>
            )}
            {project.nextProject && (
              <Link 
                to={`/${language}/portfolio/${project.nextProject}`}
                className="btn-secondary ml-auto"
              >
                {language === "fr" ? "Projet suivant" : "Next project"} →
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
