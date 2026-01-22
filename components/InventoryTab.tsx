import React from 'react';
import { StockItem } from '../hooks/useStockItems';
import { MaterialIcon } from './ui/MaterialIcon';
import { StatsCard } from './ui/StatsCard';

interface InventoryTabProps {
    items: StockItem[];
    stats: { totalValue: number; itemCount: number; lowStockCount: number };
    onUpdateQuantity: (id: string, change: number) => void;
    onDeleteItem: (id: string) => void;
}

export const InventoryTab: React.FC<InventoryTabProps> = ({ items, stats, onUpdateQuantity, onDeleteItem }) => {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <StatsCard
                    icon="payments"
                    label="Valor Total"
                    value={`R$ ${stats.totalValue.toFixed(2)}`}
                />
                <StatsCard
                    icon="inventory_2"
                    label="Itens Únicos"
                    value={`${stats.itemCount}`}
                />
                <StatsCard
                    icon="trending_down"
                    label="Baixo Estoque"
                    value={`${stats.lowStockCount} Produtos`}
                    variant={stats.lowStockCount > 0 ? 'warning' : 'default'}
                />
            </div>

            <div>
                <h2 className="text-xl font-bold text-white mb-4">Itens em Estoque</h2>
                {items.length === 0 ? (
                    <div className="text-center py-10 glass-panel rounded-xl">
                        <MaterialIcon name="inventory" size="xl" className="text-white/30 mb-2" />
                        <p className="text-white/60">Nenhum item no inventário.</p>
                        <p className="text-sm text-white/40">Use o scanner para adicionar produtos.</p>
                    </div>
                ) : (
                    <div className="space-y-3">
                        {items.map(item => (
                            <div key={item.id} className={`flex items-center gap-3 p-3 rounded-lg bg-db-surface border transition-colors ${item.quantity <= 5 ? 'border-red-500/30' : 'border-db-secondary'}`}>
                                <div className="size-16 shrink-0 rounded bg-db-secondary bg-cover bg-center" style={{ backgroundImage: `url("${item.imageUrl}")`}}>
                                    {!item.imageUrl && <MaterialIcon name="inventory_2" className="text-white/30 w-full h-full flex items-center justify-center" size="lg" />}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-white font-bold text-sm truncate pr-2">{item.name}</h3>
                                    <p className="text-primary font-bold text-base mt-0.5">R$ {item.price.toFixed(2)}</p>
                                    <p className="text-xs text-gray-500 mt-1">{item.brand || item.category}</p>
                                </div>
                                <div className="flex flex-col items-center gap-1 bg-db-background-dark p-1 rounded border border-db-secondary/50">
                                    <button onClick={() => onUpdateQuantity(item.id, 1)} className="size-6 flex items-center justify-center text-gray-400 hover:text-white hover:bg-db-secondary rounded"><MaterialIcon name="add" size="sm" /></button>
                                    <span className={`text-sm font-bold w-6 text-center ${item.quantity <= 5 ? 'text-red-500' : 'text-white'}`}>{item.quantity}</span>
                                    <button onClick={() => onUpdateQuantity(item.id, -1)} className="size-6 flex items-center justify-center text-gray-400 hover:text-white hover:bg-db-secondary rounded"><MaterialIcon name="remove" size="sm" /></button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};
