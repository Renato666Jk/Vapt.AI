import React from 'react';
import { MaterialIcon } from './ui/MaterialIcon';

export type TabType = 'inventory' | 'stats' | 'invoice';

interface DockNavigationProps {
    activeTab: TabType;
    setActiveTab: (tab: TabType) => void;
    onScan: () => void;
    isRecording: boolean;
    toggleRecording: () => void;
    onWhatsAppSettings: () => void;
}

const TABS: { id: TabType; icon: string; label: string }[] = [
    { id: 'inventory', icon: 'inventory_2', label: 'Estoque' },
    { id: 'stats', icon: 'bar_chart', label: 'Análise' },
];

export const DockNavigation: React.FC<DockNavigationProps> = (props) => {
    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
            <div className="max-w-4xl mx-auto px-4">
                 <div className="bg-db-surface/80 backdrop-blur-xl border-t border-db-secondary/50 rounded-t-2xl flex items-center justify-around relative">
                    {TABS.map(tab => (
                        <button key={tab.id} onClick={() => props.setActiveTab(tab.id)}
                            className={`flex flex-col items-center gap-1 w-20 py-2 transition-colors ${props.activeTab === tab.id ? 'text-primary' : 'text-white/60 hover:text-white'}`}>
                            <MaterialIcon name={tab.icon} className={props.activeTab === tab.id ? 'filled' : ''} />
                            <span className="text-xs font-bold">{tab.label}</span>
                        </button>
                    ))}

                    <div className="w-20" /> 
                    
                    <button onClick={() => props.setActiveTab('invoice')}
                        className={`flex flex-col items-center gap-1 w-20 py-2 transition-colors ${props.activeTab === 'invoice' ? 'text-primary' : 'text-white/60 hover:text-white'}`}>
                        <MaterialIcon name="receipt_long" className={props.activeTab === 'invoice' ? 'filled' : ''} />
                        <span className="text-xs font-bold">Notas</span>
                    </button>
                    <button onClick={props.onWhatsAppSettings}
                        className="flex flex-col items-center gap-1 w-20 py-2 text-white/60 hover:text-white transition-colors">
                        <MaterialIcon name="share" />
                        <span className="text-xs font-bold">Exportar</span>
                    </button>
                    
                    <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 flex items-center">
                        <button onClick={props.toggleRecording} className={`transition-all duration-300 w-12 h-12 rounded-full flex items-center justify-center ${props.isRecording ? 'bg-red-500 text-white shadow-lg' : 'bg-db-secondary text-white/70'}`}>
                           <MaterialIcon name="mic" />
                        </button>
                        <div className="h-8 w-px bg-db-secondary/50 mx-1"></div>
                        <button onClick={props.onScan} className="w-16 h-16 rounded-full bg-primary text-black flex items-center justify-center shadow-glow">
                            <MaterialIcon name="qr_code_scanner" size="lg" />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};
