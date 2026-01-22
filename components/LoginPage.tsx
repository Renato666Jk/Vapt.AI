import React from 'react';

interface LoginPageProps {
    onNavigateHome: () => void;
    onLoginSuccess: () => void;
    onAccessDemo: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onNavigateHome, onLoginSuccess, onAccessDemo }) => {
    return (
        <div className="relative min-h-screen w-full flex flex-col items-center justify-center p-4 sm:p-6 overflow-hidden industrial-grid font-body fade-in">
            <button 
                onClick={onNavigateHome} 
                className="absolute top-4 left-4 sm:top-6 sm-left-6 z-20 flex items-center gap-2 text-[#9db9a6] hover:text-primary transition-colors group"
                aria-label="Voltar para a página inicial"
            >
                <span className="material-symbols-outlined transition-transform group-hover:-translate-x-1">arrow_back</span>
                <span className="text-sm font-bold uppercase tracking-wider hidden sm:block">Voltar</span>
            </button>
            
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="w-full max-w-[400px] flex flex-col gap-6 relative z-10">
                <div className="text-center mb-2">
                    <div onClick={onNavigateHome} className="inline-flex items-center justify-center gap-2 mb-2 cursor-pointer transition-transform duration-300 hover:scale-105">
                        <span className="material-symbols-outlined text-primary text-4xl">inventory_2</span>
                        <h1 className="text-white tracking-tighter text-5xl font-bold leading-none">VAPT<span className="text-primary">.AI</span></h1>
                    </div>
                    <p className="text-[#9db9a6] text-sm font-medium tracking-wide uppercase opacity-80">Gestão de Estoque Industrial</p>
                </div>

                <div className="glass-panel rounded-3xl p-6 sm:p-8 w-full shadow-2xl relative">
                    <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-primary/50 rounded-tl-lg m-2"></div>
                    <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-primary/50 rounded-tr-lg m-2"></div>
                    <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-primary/50 rounded-bl-lg m-2"></div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-primary/50 rounded-br-lg m-2"></div>

                    <form className="flex flex-col gap-5">
                        <label className="flex flex-col gap-2">
                            <span className="text-white text-xs font-bold uppercase tracking-wider ml-1">Email Corporativo</span>
                            <div className="relative group">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-white/30 group-focus-within:text-primary transition-colors">alternate_email</span>
                                <input type="email" placeholder="seu.email@empresa.com" className="w-full bg-black/30 border border-white/10 rounded-lg py-3 px-4 pl-12 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"/>
                            </div>
                        </label>
                        <label className="flex flex-col gap-2">
                            <span className="text-white text-xs font-bold uppercase tracking-wider ml-1">Senha</span>
                            <div className="relative group">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-white/30 group-focus-within:text-primary transition-colors">lock</span>
                                <input type="password" placeholder="••••••••••" className="w-full bg-black/30 border border-white/10 rounded-lg py-3 px-4 pl-12 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"/>
                            </div>
                        </label>
                        <button 
                            type="button"
                            onClick={onLoginSuccess}
                            className="w-full bg-primary hover:bg-primary-dim text-black font-bold py-3.5 rounded-lg text-sm uppercase tracking-wider transition-colors shadow-[0_0_20px_rgba(19,236,91,0.3)] mt-2"
                        >
                            Entrar na Plataforma
                        </button>
                    </form>
                    
                    <div className="relative flex py-5 items-center">
                        <div className="flex-grow border-t border-white/10"></div>
                        <span className="flex-shrink mx-4 text-white/30 text-xs font-bold uppercase">Ou</span>
                        <div className="flex-grow border-t border-white/10"></div>
                    </div>

                    <button 
                        onClick={onAccessDemo}
                        className="w-full glass-panel-light text-white font-bold py-3.5 rounded-lg text-sm uppercase tracking-wider transition-colors hover:bg-white/10 flex items-center justify-center gap-2"
                    >
                        <span className="material-symbols-outlined text-lg">play_circle</span>
                        Acessar Demonstração
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
