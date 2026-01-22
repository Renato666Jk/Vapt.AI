
import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
}

const paddingClasses = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', padding = 'md' }) => {
  const finalClassName = `glass-panel rounded-2xl border border-white/10 ${paddingClasses[padding]} ${className}`;
  return (
    <div className={finalClassName}>
      {children}
    </div>
  );
};
