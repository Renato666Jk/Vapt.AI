
import React from 'react';

interface HeaderProps {
    onLoginClick: () => void;
    onNavigateHome: () => void;
    onNavigateToFeatures: () => void;
    onNavigateToHowItWorks: () => void;
    onScrollToPricing: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLoginClick, onNavigateHome, onNavigateToFeatures, onNavigateToHowItWorks, onScrollToPricing }) => {
    return (
        <header className="sticky top-0 z-50 glass-panel border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
                <button onClick={onNavigateHome} className="flex items-center gap-2 cursor-pointer" aria-label="Página Inicial">
                    <span className="material-symbols-outlined text-primary text-3xl">qr_code_scanner</span>
                    <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white">VAPT<span className="text-primary">.AI</span></h1>
                </button>
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
                    <button onClick={onNavigateToFeatures} className="hover:text-primary transition-colors">Funcionalidades</button>
                    <button onClick={onNavigateToHowItWorks} className="hover:text-primary transition-colors">Como Funciona</button>
                    <button onClick={onScrollToPricing} className="hover:text-primary transition-colors">Planos</button>
                </nav>
                <div className="flex items-center gap-4">
                    <button onClick={onLoginClick} className="hidden md:block text-white hover:text-primary font-medium text-sm transition-colors">Login</button>
                    <button onClick={onScrollToPricing} className="bg-primary hover:bg-primary-dim text-black font-bold text-sm px-4 py-2 sm:px-5 sm:py-2.5 rounded-full transition-colors shadow-[0_0_15px_rgba(19,236,91,0.3)]">
                        Testar Grátis
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
