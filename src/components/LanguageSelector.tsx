
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import { Globe } from "lucide-react";

export default function LanguageSelector({ className }: { className?: string }) {
  const { language, changeLanguage } = useLanguage();

  return (
    <div className={cn("relative group", className)}>
      <button 
        className="flex items-center space-x-1 glass px-2 py-1 rounded-md transition-all duration-300 hover:bg-afh/10"
        aria-label="Change language"
      >
        <Globe className="h-4 w-4" />
        <span className="uppercase text-sm">{language}</span>
      </button>
      
      <div className="absolute right-0 mt-2 w-24 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
        <div className="glass-card rounded-md p-1 shadow-lg">
          <button
            onClick={() => changeLanguage("en")}
            className={cn(
              "w-full text-left px-3 py-2 rounded text-sm transition-colors",
              language === "en" ? "bg-afh/10 text-afh" : "hover:bg-afh/5"
            )}
          >
            English
          </button>
          <button
            onClick={() => changeLanguage("fr")}
            className={cn(
              "w-full text-left px-3 py-2 rounded text-sm transition-colors",
              language === "fr" ? "bg-afh/10 text-afh" : "hover:bg-afh/5"
            )}
          >
            Français
          </button>
        </div>
      </div>
    </div>
  );
}
