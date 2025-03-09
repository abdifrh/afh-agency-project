
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const navLinks = [
    { name: "Accueil", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Articles", path: "/articles" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "À propos", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];
  
  const socialLinks = [
    { 
      icon: <Instagram className="h-5 w-5" />, 
      path: "https://instagram.com/afhagency", 
      label: "Instagram" 
    },
    { 
      icon: <Facebook className="h-5 w-5" />, 
      path: "https://www.facebook.com/profile.php?id=61573906681452", 
      label: "Facebook" 
    },
    { 
      icon: <Linkedin className="h-5 w-5" />, 
      path: "https://fr.linkedin.com/company/afhagency", 
      label: "LinkedIn" 
    },
  ];

  return (
    <footer className="glass border-t border-white/10 dark:border-white/5">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img 
                src="/lovable-uploads/e616b606-b422-4899-a03c-02767eef8b81.png" 
                alt="AFH Agency" 
                className="h-12" 
              />
            </Link>
            <p className="text-muted-foreground mb-6">
              Nous transformons les idées en expériences digitales captivantes, favorisant la croissance et la réussite de votre entreprise ✨
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 flex items-center justify-center rounded-full bg-afh/10 hover:bg-afh/20 text-afh transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className="text-muted-foreground hover:text-afh transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nos Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-muted-foreground hover:text-afh transition-colors">Conseil & Stratégie 💡</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-afh transition-colors">Développement Web 💻</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-afh transition-colors">Design Graphique 🎨</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-afh transition-colors">Marketing Digital 📈</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-afh transition-colors">Formation & Support 🛠️</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contactez-nous</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MapPin className="h-5 w-5 text-afh mr-3" />
                <span className="text-muted-foreground">Strasbourg, France</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-afh mr-3" />
                <span className="text-muted-foreground">+33 7 50 01 58 96</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-afh mr-3" />
                <span className="text-muted-foreground">contact@afh-agency.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 dark:border-white/5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} AFH Agency. Tous droits réservés.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/about" className="text-sm text-muted-foreground hover:text-afh transition-colors">
              Mentions légales
            </Link>
            <span className="text-muted-foreground">|</span>
            <Link to="/about" className="text-sm text-muted-foreground hover:text-afh transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
