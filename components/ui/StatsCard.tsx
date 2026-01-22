import React from 'react';
import { MaterialIcon } from './MaterialIcon';

interface StatsCardProps {
    icon: string;
    label: string;
    value: string;
    variant?: 'default' | 'warning';
}

export const StatsCard: React.FC<StatsCardProps> = ({ icon, label, value, variant = 'default' }) => {
    const variantClasses = {
        default: {
            iconBg: 'bg-primary/20',
            iconColor: 'text-primary',
        },
        warning: {
            iconBg: 'bg-yellow-400/20',
            iconColor: 'text-yellow-400',
        }
    };

    const selectedVariant = variantClasses[variant];

    return (
        <div className="glass-panel p-4 rounded-xl flex items-center gap-4">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${selectedVariant.iconBg}`}>
                <MaterialIcon name={icon} className={selectedVariant.iconColor} size="lg" />
            </div>
            <div>
                <p className="text-xs text-white/60 uppercase tracking-wider">{label}</p>
                <p className="text-lg font-bold text-white">{value}</p>
            </div>
        </div>
    );
};
