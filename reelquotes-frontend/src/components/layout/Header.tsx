"use client";

import React from "react";
import { Menu, Sun, Moon } from "lucide-react";

export default function Header() {
  const [isDark, setIsDark] = React.useState(false);

  // Initialize theme based on localStorage or system preference
  React.useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    let shouldBeDark = false;
    
    if (savedTheme) {
      shouldBeDark = savedTheme === 'dark';
    } else {
      shouldBeDark = systemPrefersDark;
    }
    
    setIsDark(shouldBeDark);
    
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <header className="bg-background border-b border-border px-4 py-3 md:px-6">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Left side: Hamburger Menu and Logo */}
        <div className="flex items-center gap-4">
          {/* Hamburger Menu */}
          <button
            className="p-2 hover:bg-secondary rounded-md transition-colors"
            onClick={() => {}}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5 text-foreground" />
          </button>
          
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl md:text-2xl font-bold text-primary">
              ReelQuotes
            </h1>
          </div>
        </div>

        {/* Right side: Browse Link and Theme Toggle */}
        <div className="flex items-center gap-4">
          {/* Browse Titles Link - Hidden on mobile, shown on desktop */}
          <nav className="hidden md:block">
            <a
              href="/browse"
              className="text-foreground hover:text-primary transition-colors px-3 py-2 rounded-md hover:bg-secondary"
            >
              Browse Titles
            </a>
          </nav>
          
          {/* Light/Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 hover:bg-secondary rounded-md transition-colors"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? (
              <Sun className="h-5 w-5 text-foreground" />
            ) : (
              <Moon className="h-5 w-5 text-foreground" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
} 