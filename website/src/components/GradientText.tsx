import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  gradient: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'quinary';
}

const gradients = {
  primary: 'from-blue-500 via-purple-500 to-pink-500',
  secondary: 'from-green-400 via-emerald-500 to-teal-500',
  tertiary: 'from-orange-400 via-red-500 to-purple-500',
  quaternary: 'from-yellow-400 via-orange-500 to-red-500',
  quinary: 'from-indigo-400 via-purple-500 to-pink-500',
};

export function GradientText({ children, className = '', gradient }: GradientTextProps) {
  return (
    <span className={`bg-gradient-to-r ${gradients[gradient]} text-transparent bg-clip-text ${className}`}>
      {children}
    </span>
  );
}