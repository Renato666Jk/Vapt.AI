import React, { useEffect } from 'react';
import { MaterialIcon } from './MaterialIcon';

interface DialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    children: React.ReactNode;
}

export const Dialog: React.FC<DialogProps> = ({ open, onOpenChange, children }) => {
    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onOpenChange(false);
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [onOpenChange]);

    if (!open) return null;

    return (
        <div 
            className="fixed inset-0 z-[101] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 fade-in"
            onClick={() => onOpenChange(false)}
            role="dialog"
            aria-modal="true"
        >
            {children}
        </div>
    );
};

export const DialogContent: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
    <div 
        onClick={(e) => e.stopPropagation()} 
        className={`w-full max-w-md bg-db-surface rounded-2xl border border-db-secondary p-6 shadow-2xl relative ${className}`}
    >
        {children}
    </div>
);

export const DialogHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
    <div className={`flex flex-col space-y-1.5 text-center sm:text-left ${className}`}>
        {children}
    </div>
);

export const DialogTitle: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
    <h2 className={`text-lg font-semibold leading-none tracking-tight text-white ${className}`}>
        {children}
    </h2>
);

export const DialogDescription: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
    <p className={`text-sm text-white/60 ${className}`}>
        {children}
    </p>
);
