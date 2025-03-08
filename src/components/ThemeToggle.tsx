
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={cn(
        "glass p-2 rounded-full transition-all duration-300 hover:shadow-md hover:scale-110",
        theme === "dark" 
          ? "hover:shadow-yellow-300/20 hover:bg-yellow-300/10" 
          : "hover:shadow-slate-700/20 hover:bg-slate-700/10"
      )}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-yellow-300 animate-pulse-slow" />
      ) : (
        <Moon className="h-5 w-5 text-slate-700 animate-pulse-slow" />
      )}
    </button>
  );
}
