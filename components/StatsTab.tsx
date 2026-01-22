
import React from 'react';
import { MaterialIcon } from './ui/MaterialIcon';

interface StatsTabProps {
    stats: {
        categoryCount: Record<string, number>;
        itemCount: number;
    };
}

const CategoryBar: React.FC<{ category: string; count: number; maxCount: number }> = ({ category, count, maxCount }) => {
    const percentage = maxCount > 0 ? (count / maxCount) * 100 : 0;
    return (
        <div className="flex items-center gap-4">
            <span className="text-xs text-white/60 w-28 truncate text-right">{category}</span>
            <div className="flex-1 h-6 bg-db-surface rounded-md overflow-hidden">
                <div 
                    className="h-full bg-primary/80 rounded-md flex items-center justify-end px-2"
                    style={{ width: `${percentage}%` }}
                >
                    <span className="text-xs font-bold text-black">{count}</span>
                </div>
            </div>
        </div>
    );
};

export const StatsTab: React.FC<StatsTabProps> = ({ stats }) => {
    // FIX: Changed the sort function to use standard syntax (a, b) => b[1] - a[1] to ensure correct type inference and prevent arithmetic errors.
    const sortedCategories = Object.entries(stats.categoryCount).sort((a, b) => b[1] - a[1]);
    const maxCount = sortedCategories.length > 0 ? sortedCategories[0][1] : 0;

    return (
        <div className="space-y-6">
            <div className="text-center">
                <h1 className="text-2xl font-bold text-white">Análise de Estoque</h1>
                <p className="text-sm text-white/50">Visão geral das categorias de produtos.</p>
            </div>
            
            <div className="glass-panel p-4 sm:p-6 rounded-xl">
                <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <MaterialIcon name="category" className="text-primary"/>
                    Distribuição por Categoria
                </h2>
                {sortedCategories.length > 0 ? (
                     <div className="space-y-3">
                        {sortedCategories.map(([category, count]) => (
                            <CategoryBar key={category} category={category} count={count} maxCount={maxCount} />
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-white/40 py-8">Nenhuma categoria para analisar.</p>
                )}
            </div>
        </div>
    );
};
