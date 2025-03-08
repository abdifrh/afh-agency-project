
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-light dark:bg-gradient-dark">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="glass-card rounded-2xl p-8 md:p-12 max-w-2xl mx-auto afh-glow">
          <div className="mb-8">
            <div className="relative inline-flex">
              <span className="text-8xl md:text-9xl font-bold opacity-30">404</span>
              <span className="text-8xl md:text-9xl font-bold absolute inset-0 text-afh blur-sm opacity-70">404</span>
              <span className="text-8xl md:text-9xl font-bold absolute inset-0">404</span>
            </div>
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Page non trouvée</h1>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            La page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          
          <Link to="/" className="btn-afh inline-flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
