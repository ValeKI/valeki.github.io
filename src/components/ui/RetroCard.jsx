import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const colorStyles = {
  pink: "border-[#F85898]/30 hover:border-[#F85898]/80 shadow-[0_0_15px_rgba(248,88,152,0.05)] hover:shadow-[0_0_20px_rgba(248,88,152,0.2)]",
  blue: "border-[#3CBCFC]/30 hover:border-[#3CBCFC]/80 shadow-[0_0_15px_rgba(60,188,252,0.05)] hover:shadow-[0_0_20px_rgba(60,188,252,0.2)]",
  yellow: "border-[#F8B800]/30 hover:border-[#F8B800]/80 shadow-[0_0_15px_rgba(248,184,0,0.05)] hover:shadow-[0_0_20px_rgba(248,184,0,0.2)]",
  green: "border-[#58D854]/30 hover:border-[#58D854]/80 shadow-[0_0_15px_rgba(88,216,84,0.05)] hover:shadow-[0_0_20px_rgba(88,216,84,0.2)]",
  white: "border-white/10 hover:border-white/50 shadow-[0_0_15px_rgba(255,255,255,0.02)] hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
};

export function RetroCard({ color = 'white', className, children, ...props }) {
  return (
    <div 
      className={cn(
        "p-6 rounded-2xl border bg-[var(--card-bg)] backdrop-blur-md transition-all hover:shadow-xl hover:scale-[1.01] flex flex-col h-full glass-card",
        colorStyles[color],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
