
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Accueil", path: "/", emoji: "🏠" },
    { name: "Services", path: "/services", emoji: "⚙️" },
    { name: "Articles", path: "/articles", emoji: "📝" },
    { name: "Portfolio", path: "/portfolio", emoji: "💼" },
    { name: "À propos", path: "/about", emoji: "ℹ️" },
    { name: "Contact", path: "/contact", emoji: "✉️" },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled 
          ? "glass py-3 shadow-md" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center group">
          <img 
            src="/lovable-uploads/e616b606-b422-4899-a03c-02767eef8b81.png" 
            alt="AFH Agency" 
            className="h-10 transition-transform duration-300 group-hover:scale-110" 
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center space-x-1 hover:scale-105",
                  location.pathname === link.path
                    ? "text-afh font-semibold" 
                    : "hover:text-afh"
                )}
              >
                <span>{link.emoji}</span>
                <span>{link.name}</span>
              </Link>
            ))}
          </div>
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation */}
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="ml-4 p-2 glass rounded-md transition-all duration-300 hover:scale-105"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 animate-fade-in" />
            ) : (
              <Menu className="h-6 w-6 animate-fade-in" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="glass md:hidden absolute top-full left-0 right-0 shadow-xl animate-fade-in">
          <div className="p-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={cn(
                  "block px-4 py-3 rounded-md text-center transition-all duration-300 flex items-center justify-center space-x-2",
                  location.pathname === link.path
                    ? "bg-afh/10 text-afh font-semibold"
                    : "hover:bg-afh/5 hover:scale-105"
                )}
              >
                <span>{link.emoji}</span>
                <span>{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
