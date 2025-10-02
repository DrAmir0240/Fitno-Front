"use client";
import { useTheme } from "@/hooks/useTheme";
import { Button } from "@/components/ui";
import { BiSun, BiMoon, BiDesktop } from "react-icons/bi";

export function ThemeToggle() {
  const { theme, setTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" disabled>
        <BiDesktop className="h-4 w-4" />
      </Button>
    );
  }

  return (
    <div className="flex items-center justify-center gap-1 bg-gray-100 dark:bg-gray-800 rounded-full p-1">
      <Button
        variant={theme === "light" ? "default" : "ghost"}
        size="icon"
        onClick={() => setTheme("light")}
        className={`rounded-full h-8 w-8 ${
          theme === "light" 
            ? "bg-white text-gray-900 shadow-sm" 
            : "text-gray-600 dark:text-gray-400"
        }`}
      >
        <BiSun className="h-4 w-4" />
      </Button>
      
      <Button
        variant={theme === "system" ? "default" : "ghost"}
        size="icon"
        onClick={() => setTheme("system")}
        className={`rounded-full h-8 w-8 ${
          theme === "system" 
            ? "bg-white text-gray-900 shadow-sm" 
            : "text-gray-600 dark:text-gray-400"
        }`}
      >
        <BiDesktop className="h-4 w-4" />
      </Button>
      
      <Button
        variant={theme === "dark" ? "default" : "ghost"}
        size="icon"
        onClick={() => setTheme("dark")}
        className={`rounded-full h-8 w-8 ${
          theme === "dark" 
            ? "bg-gray-900 text-white shadow-sm" 
            : "text-gray-600 dark:text-gray-400"
        }`}
      >
        <BiMoon className="h-4 w-4" />
      </Button>
    </div>
  );
}