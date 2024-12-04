import React from 'react';

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="text-2xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
        {'</>'}
      </div>
      <span className="text-xl font-bold text-gray-900 dark:text-white">Anantavyay</span>
    </div>
  );
}