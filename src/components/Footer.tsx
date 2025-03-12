
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="glass">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.about.title")}</h3>
            <p className="text-muted-foreground mb-4">
              {t("footer.about.description")}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/afhagency"
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-2 rounded-full hover:bg-afh/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61573906681452"
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-2 rounded-full hover:bg-afh/10 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://fr.linkedin.com/company/afhagency"
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-2 rounded-full hover:bg-afh/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <Link to={`/${language}`} className="text-muted-foreground hover:text-afh transition-colors">
                  {t("navigation.home")}
                </Link>
              </li>
              <li>
                <Link to={`/${language}/services`} className="text-muted-foreground hover:text-afh transition-colors">
                  {t("navigation.services")}
                </Link>
              </li>
              {/* <li>
                <Link to={`/${language}/articles`} className="text-muted-foreground hover:text-afh transition-colors">
                  {t("navigation.articles")}
                </Link>
              </li> */}
              <li>
                <Link to={`/${language}/portfolio`} className="text-muted-foreground hover:text-afh transition-colors">
                  {t("navigation.portfolio")}
                </Link>
              </li>
              <li>
                <Link to={`/${language}/about`} className="text-muted-foreground hover:text-afh transition-colors">
                  {t("navigation.about")}
                </Link>
              </li>
              <li>
                <Link to={`/${language}/contact`} className="text-muted-foreground hover:text-afh transition-colors">
                  {t("navigation.contact")}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.legalLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <Link to={`/${language}/mentions-legales`} className="text-muted-foreground hover:text-afh transition-colors">
                  {t("footer.legal.terms")}
                </Link>
              </li>
              <li>
                <Link to={`/${language}/politique-de-confidentialite`} className="text-muted-foreground hover:text-afh transition-colors">
                  {t("footer.legal.privacy")}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.subscribe.title")}</h3>
            <div className="space-y-4">
              <div className="flex">
                <Input 
                  type="email" 
                  placeholder={t("footer.subscribe.placeholder")}
                  className="rounded-r-none focus-visible:ring-0 focus-visible:ring-offset-0"
                />
                <Button 
                  type="submit" 
                  variant="default" 
                  className="rounded-l-none bg-afh hover:bg-afh/90"
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                {t("footer.subscribe.description")}
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} AFH Agency. {t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
