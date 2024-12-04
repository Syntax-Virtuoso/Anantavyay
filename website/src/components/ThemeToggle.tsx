import React from 'react';
import { Moon, Sun, Monitor } from 'lucide-react';
import type { Theme } from '../types/theme';

interface ThemeToggleProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export function ThemeToggle({ theme, setTheme }: ThemeToggleProps) {
  return (
    <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
      <button
        onClick={() => setTheme('light')}
        className={`p-2 rounded-md ${
          theme === 'light' ? 'bg-white dark:bg-gray-700 shadow-sm' : ''
        }`}
      >
        <Sun className="w-4 h-4" />
      </button>
      <button
        onClick={() => setTheme('system')}
        className={`p-2 rounded-md ${
          theme === 'system' ? 'bg-white dark:bg-gray-700 shadow-sm' : ''
        }`}
      >
        <Monitor className="w-4 h-4" />
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={`p-2 rounded-md ${
          theme === 'dark' ? 'bg-white dark:bg-gray-700 shadow-sm' : ''
        }`}
      >
        <Moon className="w-4 h-4" />
      </button>
    </div>
  );
}