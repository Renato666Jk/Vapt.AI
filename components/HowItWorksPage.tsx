
import React from 'react';

const StepCard: React.FC<{ icon: string; title: string; description: string; step: number }> = ({ icon, title, description, step }) => (
    <div className="relative glass-panel-light p-6 rounded-2xl border border-white/10 flex flex-col items-center text-center">
        <div className="absolute -top-5 -left-5 w-12 h-12 bg-primary/10 border-2 border-primary/30 rounded-full flex items-center justify-center text-primary font-bold text-lg font-display backdrop-blur-sm">
            {step}
        </div>
        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4 border border-primary/30">
            <span className="material-symbols-outlined text-primary text-3xl">{icon}</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-sm text-white/60">{description}</p>
    </div>
);


const HowItWorksPage: React.FC = () => {
    return (
        <div className="w-full max-w-5xl mx-auto">
            <div className="text-center mb-12 md:mb-20">
                <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                    Simples, Rápido e <span className="text-primary">Eficiente</span>
                </h1>
                <p className="text-white/60 mt-4 max-w-2xl mx-auto text-base md:text-lg">
                    Veja como é fácil implementar e utilizar o VAPT.AI no seu dia a dia em apenas 3 passos.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative">
                 <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-0 w-full h-px border-t-2 border-dashed border-white/10 -z-10"></div>
                <StepCard
                    step={1}
                    icon="app_registration"
                    title="Cadastre-se"
                    description="Crie sua conta em segundos. Importe seus produtos via planilha ou comece do zero."
                />
                <StepCard
                    step={2}
                    icon="barcode_scanner"
                    title="Escaneie e Registre"
                    description="Use qualquer celular para escanear códigos de barras, registrar entradas, saídas e movimentações."
                />
                <StepCard
                    step={3}
                    icon="monitoring"
                    title="Gerencie com IA"
                    description="Acompanhe seu dashboard em tempo real e receba insights da nossa IA para otimizar seu estoque."
                />
            </div>
        </div>
    );
};

export default HowItWorksPage;
