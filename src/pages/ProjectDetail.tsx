import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CalendarDays, User } from "lucide-react";
import { projects } from "@/data/projects";
import { useLanguage } from "@/contexts/LanguageContext";

// Update ProjectCategory type to include all possible categories
type ProjectCategory = "site-web" | "print" | "digital" | "branding" | "e-commerce" | "application";

export default function ProjectDetail() {
  const { projectId } = useParams();
  const { t, language } = useLanguage();
  const [project, setProject] = useState<any>(null);

  useEffect(() => {
    const fetchProject = async () => {
      // Find the project with the matching ID
      const foundProject = projects.find((p) => p.id === Number(projectId));
      if (foundProject) {
        setProject(foundProject);
      }
    };

    fetchProject();
  }, [projectId]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="loading">Loading...</div>
      </div>
    );
  }

  // Function to get category badge color
  const getCategoryColor = (category: ProjectCategory) => {
    switch (category) {
      case "site-web":
      case "e-commerce":
      case "application":
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
          <h1 className="text-3xl font-bold mb-4">{project.name}</h1>
          <div className="flex items-center space-x-3 mb-4">
            <span className={`inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium ${getCategoryColor(project.category)}`}>
              {project.category}
            </span>
            <div className="flex items-center text-muted-foreground">
              <CalendarDays className="mr-1 h-4 w-4" />
              {project.date}
            </div>
          </div>

          <img
            src={project.image}
            alt={project.name}
            className="rounded-2xl shadow-lg mb-6 w-full object-cover"
            style={{ maxHeight: '500px' }}
          />

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                {t("portfolio.client")}:
              </h3>
              <p className="text-muted-foreground mb-4">{project.client}</p>

              <h3 className="text-xl font-semibold mb-2">Description:</h3>
              <p className="text-muted-foreground">{project.description}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Technologies:</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies && project.technologies.map((tech: string) => (
                  <span key={tech} className="inline-flex items-center rounded-full px-3 py-0.5 text-sm font-medium bg-secondary text-secondary-foreground">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
