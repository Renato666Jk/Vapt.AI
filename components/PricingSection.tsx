
import React from 'react';

const PricingSection: React.FC = () => {
    return (
        <section id="pricing-section" className="py-10 border-t border-white/5 relative">
            <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="text-center mb-10 relative z-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Planos Simples e Transparentes</h2>
                <p className="text-white/60">Comece pequeno e cresça com a VAPT.AI</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto relative z-10">
                <div className="glass-panel-light p-6 md:p-8 rounded-3xl border border-white/10 flex flex-col gap-6 order-2 md:order-1">
                    <div>
                        <h3 className="text-xl font-bold text-white">Modo Teste</h3>
                        <p className="text-white/50 text-sm mt-1">Para conhecer a ferramenta.</p>
                    </div>
                    <div className="flex items-baseline gap-1">
                        <span className="text-3xl sm:text-4xl font-bold text-white">Grátis</span>
                    </div>
                    <ul className="flex flex-col gap-3 flex-1">
                        <li className="flex items-center gap-3 text-sm text-white/70">
                            <span className="material-symbols-outlined text-white/40 text-[18px]">check</span>
                            <span>Limitado a <strong>10 produtos</strong></span>
                        </li>
                        <li className="flex items-center gap-3 text-sm text-white/70">
                            <span className="material-symbols-outlined text-white/40 text-[18px]">check</span>
                            <span>Funcionalidades básicas</span>
                        </li>
                        <li className="flex items-center gap-3 text-sm text-white/30 decoration-dashed line-through">
                            <span className="material-symbols-outlined text-[18px]">close</span>
                            <span>IA Sugestiva</span>
                        </li>
                    </ul>
                    <button className="w-full bg-transparent hover:bg-white/5 border border-white/20 text-white font-bold py-3 px-6 rounded-full transition-all text-sm">
                        CRIAR CONTA GRÁTIS
                    </button>
                </div>
                <div className="relative rounded-3xl bg-[#1c1f1d] border border-primary/50 shadow-[0_0_40px_-10px_rgba(19,236,91,0.2)] overflow-hidden flex flex-col gap-6 p-6 md:p-8 order-1 md:order-2 transform md:scale-105">
                    <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                    <div className="flex justify-between items-start">
                        <div>
                            <div className="inline-block bg-primary text-background-dark text-[10px] font-bold px-2 py-0.5 rounded-full mb-2 uppercase tracking-wide">
                                Recomendado
                            </div>
                            <h3 className="text-xl font-bold text-white">Assinatura PRO</h3>
                        </div>
                        <div className="text-right">
                            <span className="block text-3xl sm:text-4xl font-bold text-white tracking-tighter">R$ 19,99</span>
                            <span className="text-xs text-white/50">/mês</span>
                        </div>
                    </div>
                    <div className="h-px bg-white/10 w-full"></div>
                    <ul className="flex flex-col gap-3 flex-1">
                        <li className="flex items-center gap-3 text-sm text-white">
                            <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                            <span>Produtos <strong>ILIMITADOS</strong></span>
                        </li>
                        <li className="flex items-center gap-3 text-sm text-white">
                            <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                            <span>Comando de Voz Ativo</span>
                        </li>
                        <li className="flex items-center gap-3 text-sm text-white">
                            <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                            <span>Relatórios via WhatsApp</span>
                        </li>
                        <li className="flex items-center gap-3 text-sm text-white">
                            <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                            <span>IA Sugestiva (Preço &amp; Estoque)</span>
                        </li>
                        <li className="flex items-center gap-3 text-sm text-white">
                            <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                            <span>Scanner &amp; Notas Fiscais</span>
                        </li>
                    </ul>
                    <button className="w-full bg-primary hover:bg-[#11d651] text-background-dark font-bold py-4 px-6 rounded-full shadow-[0_0_20px_rgba(19,236,91,0.4)] flex items-center justify-center gap-2 mt-2 group transition-all">
                        <span>ASSINAR AGORA</span>
                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-lg">arrow_forward</span>
                    </button>
                    <div className="flex items-center justify-center gap-3 opacity-50 text-[10px] uppercase font-bold text-white">
                        <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">qr_code</span> Pix</span>
                        <span className="w-1 h-1 bg-white/30 rounded-full"></span>
                        <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">credit_card</span> Cartão</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
