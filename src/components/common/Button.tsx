
import React from 'react';
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-medium transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2",
          {
            'primary': 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500',
            'secondary': 'bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500',
            'ghost': 'bg-transparent text-gray-900 hover:bg-gray-100 focus:ring-gray-500'
          }[variant],
          {
            'sm': 'px-3 py-1.5 text-sm',
            'md': 'px-4 py-2 text-base',
            'lg': 'px-6 py-3 text-lg'
          }[size],
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
