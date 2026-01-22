
import React from 'react';

interface MaterialIconProps {
  name: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const sizeClasses = {
  sm: 'text-base',
  md: 'text-xl',
  lg: 'text-2xl',
  xl: 'text-4xl',
};

export const MaterialIcon: React.FC<MaterialIconProps> = ({ name, className = '', size = 'md' }) => {
  const finalClassName = `material-symbols-outlined ${sizeClasses[size]} ${className}`;
  return (
    <span className={finalClassName} aria-hidden="true">
      {name}
    </span>
  );
};
