
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="border-t border-white/10 bg-black/40 backdrop-blur-sm mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8 md:gap-6">
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-2xl">qr_code_scanner</span>
                    <span className="text-lg font-bold text-white">VAPT<span className="text-primary">.AI</span></span>
                </div>
                <p className="text-xs text-white/30">
                    © 2025 VAPT.AI Tecnologia Industrial Ltda. Todos os direitos reservados.
                </p>
                <div className="flex gap-6 text-xs text-white/50">
                    <a className="hover:text-white transition-colors" href="/">Termos de Uso</a>
                    <a className="hover:text-white transition-colors" href="/">Privacidade</a>
                    <a className="hover:text-white transition-colors" href="/">Suporte</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
