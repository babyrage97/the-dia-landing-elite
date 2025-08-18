import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 w-12 h-12 bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-luxury shadow-card hover:shadow-luxury group"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-primary transition-transform group-hover:rotate-90 duration-300" />
      ) : (
        <Moon className="h-5 w-5 text-primary transition-transform group-hover:rotate-12 duration-300" />
      )}
    </Button>
  );
};

export default ThemeToggle;