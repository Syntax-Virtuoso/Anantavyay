import React, { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { Github } from 'lucide-react';
import { MobileMenu } from './MobileMenu';
import { Logo } from './Logo';
import type { Theme } from '../types/theme';

interface NavbarProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export function Navbar({ theme, setTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white dark:bg-gray-900 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Features</a>
            <a href="https://github.com/Syntax-Virtuoso/Anantavyay/" target="_blank" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Documentation</a>
            <a href="https://github.com/Syntax-Virtuoso/Anantavyay/issues" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" target="_blank">Community</a>
            <a
              href="https://github.com/Syntax-Virtuoso/Anantavyay"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <Github className="w-5 h-5" />
            </a>
            <ThemeToggle theme={theme} setTheme={setTheme} />
          </div>

          {/* Mobile Menu */}
          <MobileMenu 
            theme={theme} 
            setTheme={setTheme} 
            isOpen={isOpen} 
            setIsOpen={setIsOpen} 
          />
        </div>
      </div>
    </nav>
  );
}