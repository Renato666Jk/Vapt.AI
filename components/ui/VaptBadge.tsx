
import React from 'react';

interface VaptBadgeProps {
  children: React.ReactNode;
  variant?: 'demo' | 'pro' | 'success' | 'warning';
  className?: string;
}

export const VaptBadge: React.FC<VaptBadgeProps> = ({ children, variant = 'success', className = '' }) => {
  const baseClasses = 'text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full inline-block';

  const variantClasses = {
    demo: 'bg-yellow-400/20 text-yellow-300 border border-yellow-400/30',
    pro: 'bg-purple-400/20 text-purple-300 border border-purple-400/30',
    success: 'bg-primary/20 text-primary border border-primary/30',
    warning: 'bg-orange-400/20 text-orange-300 border border-orange-400/30',
  };

  const finalClassName = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <span className={finalClassName}>
      {children}
    </span>
  );
};
