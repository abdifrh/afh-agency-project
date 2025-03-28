
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { enTranslations } from "../translations/en";
import { frTranslations } from "../translations/fr";

type LanguageContextType = {
  language: string;
  t: (key: string, options?: { returnObjects?: boolean }) => any;
  changeLanguage: (language: string) => void;
};

const defaultLanguage = "en";

const LanguageContext = createContext<LanguageContextType>({
  language: defaultLanguage,
  t: () => "",
  changeLanguage: () => {},
});

export const useLanguage = () => useContext(LanguageContext);

type LanguageProviderProps = {
  children: ReactNode;
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [language, setLanguage] = useState<string>(defaultLanguage);
  
  // Detect language from the URL on initial load and route changes
  useEffect(() => {
    const pathParts = location.pathname.split('/');
    if (pathParts[1] === "fr" || pathParts[1] === "en") {
      setLanguage(pathParts[1]);
    } else if (pathParts[1] === "") {
      // If we're at the root, redirect to the default language
      navigate(`/${defaultLanguage}${location.pathname}`);
    }
  }, [location.pathname, navigate]);

  // Get translation function for the current language
  const getTranslation = (key: string, options?: { returnObjects?: boolean }): any => {
    const translations = language === "fr" ? frTranslations : enTranslations;
    const keys = key.split(".");
    let result: any = translations;
    
    for (const k of keys) {
      if (result && result[k] !== undefined) {
        result = result[k];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
    }
    
    // Return the actual object if returnObjects is true
    if (options?.returnObjects === true) {
      return result;
    }
    
    return typeof result === "string" ? result : key;
  };

  // Change language and update URL
  const changeLanguage = (newLanguage: string) => {
    if (newLanguage !== language) {
      setLanguage(newLanguage);
      
      // Update the URL with the new language prefix
      const pathParts = location.pathname.split('/');
      if (pathParts[1] === "fr" || pathParts[1] === "en") {
        pathParts[1] = newLanguage;
      } else {
        pathParts.splice(1, 0, newLanguage);
      }
      
      const newPath = pathParts.join('/');
      navigate(newPath, { replace: true });
    }
  };

  return (
    <LanguageContext.Provider value={{ language, t: getTranslation, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
