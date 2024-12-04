import React from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import type { Theme } from '../types/theme';

interface MobileMenuProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export function MobileMenu({ theme, setTheme, isOpen, setIsOpen }: MobileMenuProps) {
  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-700 dark:text-gray-300 p-2"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 border-b dark:border-gray-800">
          <div className="px-4 py-6 space-y-4">
            <a 
              href="#features" 
              className="block text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
            <a 
              href="https://github.com/Syntax-Virtuoso/Anantavyay/" target="_blank" 
              className="block text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Documentation
            </a>
            <a 
              href="https://github.com/Syntax-Virtuoso/Anantavyay/issues" target="_blank" 
              className="block text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Community
            </a>
            <div className="pt-4">
              <ThemeToggle theme={theme} setTheme={setTheme} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}