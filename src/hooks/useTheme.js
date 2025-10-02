"use client";
import { useTheme as useNextTheme } from "next-themes";
import { useEffect, useState } from "react";

export function useTheme() {
  const { theme, setTheme, systemTheme, themes } = useNextTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // تشخیص تم سیستم
  const currentTheme = theme === "system" ? systemTheme : theme;

  const toggleTheme = () => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  return {
    theme: currentTheme,
    systemTheme,
    setTheme,
    toggleTheme,
    mounted,
    isDark: currentTheme === "dark",
    isLight: currentTheme === "light",
    isSystem: theme === "system"
  };
}