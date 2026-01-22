
import React from 'react';
import { MaterialIcon } from './MaterialIcon';

interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: string;
  variant?: 'primary' | 'secondary';
  size?: 'md' | 'lg';
}

export const NeonButton: React.FC<NeonButtonProps> = ({
  children,
  icon,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const baseClasses = 'w-full font-bold uppercase tracking-wider rounded-full flex items-center justify-center gap-2 transition-all duration-300 transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed';

  const variantClasses = {
    primary: 'bg-primary text-black shadow-[0_0_15px_rgba(19,236,91,0.4)] hover:bg-white hover:shadow-[0_0_25px_rgba(19,236,91,0.7)]',
    secondary: 'bg-surface-dark border border-db-secondary text-white/80 hover:border-primary hover:text-white',
  };

  const sizeClasses = {
    md: 'py-3 px-6 text-sm',
    lg: 'py-4 px-8 text-base',
  };

  const finalClassName = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button className={finalClassName} {...props}>
      {icon && <MaterialIcon name={icon} />}
      <span>{children}</span>
    </button>
  );
};
