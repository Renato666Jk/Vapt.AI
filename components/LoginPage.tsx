
import React, { useState } from 'react';

interface LoginPageProps {
    onNavigateHome: () => void;
    onLoginSuccess: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onNavigateHome, onLoginSuccess }) => {
    // A animação de saída agora é gerenciada pelo componente App,
    // então o estado isExiting não é mais necessário aqui.
    
    return (
        <div className="relative min-h-screen w-full flex flex-col items-center justify-center p-4 sm:p-6 overflow-hidden industrial-grid font-body fade-in">
            <button 
                onClick={onNavigateHome} 
                className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 flex items-center gap-2 text-[#9db9a6] hover:text-primary transition-colors group"
                aria-label="Voltar para a página inicial"
            >
                <span className="material-symbols-outlined transition-transform group-hover:-translate-x-1">arrow_back</span>
                <span className="text-sm font-bold uppercase tracking-wider hidden sm:block">Voltar</span>
            </button>
            
            {/* Ambient Glow */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>

            {/* Main Content Wrapper */}
            <div className="w-full max-w-[400px] flex flex-col gap-6 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-2">
                    <div onClick={onNavigateHome} className="inline-flex items-center justify-center gap-2 mb-2 cursor-pointer transition-transform duration-300 hover:scale-105">
                        <span className="material-symbols-outlined text-primary text-4xl">inventory_2</span>
                        <h1 className="text-white tracking-tighter text-5xl font-bold leading-none">VAPT<span className="text-primary">.AI</span></h1>
                    </div>
                    <p className="text-[#9db9a6] text-sm font-medium tracking-wide uppercase opacity-80">Gestão de Estoque Industrial</p>
                </div>

                {/* Main Form Card */}
                <div className="glass-panel rounded-3xl p-6 sm:p-8 w-full shadow-2xl relative">
                    {/* Decorative Corner Accents (Industrial Feel) */}
                    <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-primary/50 rounded-tl-lg m-2"></div>
                    <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-primary/50 rounded-tr-lg m-2"></div>
                    <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-primary/50 rounded-bl-lg m-2"></div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-primary/50 rounded-br-lg m-2"></div>

                    <form className="flex flex-col gap-5">
                        {/* Email Input */}
                        <label className="flex flex-col gap-2">
                            <span className="text-white text-xs font-bold uppercase tracking-wider ml-1">Email Corporativo</span>
                            <div className="relative group">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9db9a6] group-focus-within:text-primary transition-colors material-symbols-outlined">mail</span>
                                <input className="w-full bg-[#0a110c] text-white border border-[#3b5443] rounded-full h-14 pl-12 pr-4 focus:ring-0 focus:border-primary transition-all placeholder-[#4a5e50] text-base" placeholder="operador@empresa.com" type="email" />
                            </div>
                        </label>

                        {/* Password Input */}
                        <label className="flex flex-col gap-2">
                            <div className="flex justify-between items-center ml-1">
                                <span className="text-white text-xs font-bold uppercase tracking-wider">Senha</span>
                                <a className="text-[10px] text-[#9db9a6] hover:text-primary transition-colors uppercase font-bold tracking-wide" href="#">Esqueci a senha</a>
                            </div>
                            <div className="relative group">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9db9a6] group-focus-within:text-primary transition-colors material-symbols-outlined">lock</span>
                                <input className="w-full bg-[#0a110c] text-white border border-[#3b5443] rounded-full h-14 pl-12 pr-12 focus:ring-0 focus:border-primary transition-all placeholder-[#4a5e50] text-base" placeholder="••••••••" type="password" />
                                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9db9a6] hover:text-white transition-colors flex items-center justify-center" type="button">
                                    <span className="material-symbols-outlined text-[20px]">visibility</span>
                                </button>
                            </div>
                        </label>

                        {/* Login Button */}
                        <button onClick={onLoginSuccess} className="mt-2 w-full bg-primary hover:bg-[#3aff7d] text-[#050a07] h-14 rounded-full font-bold text-lg tracking-wide uppercase shadow-neo active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all flex items-center justify-center gap-2" type="button">
                            <span>Entrar</span>
                            <span className="material-symbols-outlined text-[20px] font-bold">arrow_forward</span>
                        </button>

                        {/* Divider */}
                        <div className="relative py-2 flex items-center justify-center">
                            <div className="h-px bg-[#3b5443] w-full absolute"></div>
                            <span className="bg-[#15231a] px-3 text-xs text-[#9db9a6] relative z-10 rounded-full font-medium">OU</span>
                        </div>

                        {/* Google Login */}
                        <button className="w-full bg-white hover:bg-gray-100 text-[#050a07] h-14 rounded-full font-bold text-sm tracking-wide uppercase shadow-sm active:scale-[0.98] transition-all flex items-center justify-center gap-3" type="button">
                            <img alt="Google Logo" className="w-5 h-5" data-alt="Logotipo colorido do Google" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA603QlJQaFwU-AeKTprKFF2SAcqOx9YnNdOPd6N_MVQ3NvRYad9xjW9kF21Mql6kZx6XrMbz6YLV6wr_7ghPBHEga3yfLYvEzYGX5l7Kvi-u6BKwVZnoYpJTCvZpS5EdOQpfTg9TYtIKhmlbpwhU_cOFK8mYQWNzrL9B7jX95usgaF1OmD3Uq9VGwz_5q1xfT8mEbFi73pCbrQRwPE6Ow_NrY_ifXmvTMcluCLrOfsHZLPJBV9wW3qW2F51AQnKzf4XyKA9sbRuINu" />
                            <span>Entrar com Google</span>
                        </button>
                    </form>
                </div>

                {/* Demo / Pricing Section */}
                <div className="relative group cursor-pointer">
                    <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="glass-panel rounded-2xl p-4 border border-primary/30 flex flex-col items-center text-center relative z-10 hover:border-primary/60 transition-colors">
                        <div className="absolute -top-3 bg-[#0a110c] border border-primary text-primary px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                            Modo Demonstração
                        </div>
                        <h3 className="text-white font-bold text-lg mt-1">Testar sem compromisso</h3>
                        <p className="text-[#9db9a6] text-sm mb-4 leading-tight px-2">Gerencie até <span className="text-white font-bold">10 produtos</span> gratuitamente.</p>
                        <button className="w-full border-2 border-dashed border-primary/50 hover:border-primary hover:bg-primary/10 text-primary h-12 rounded-xl font-bold text-sm uppercase tracking-wide transition-all flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined text-[18px]">rocket_launch</span>
                            <span>Acessar Demo</span>
                        </button>
                        <p className="text-[#5c7a65] text-[10px] mt-3 font-medium">Plano Pro: Acesso ilimitado por <span className="text-white">R$ 19,99/mês</span></p>
                    </div>
                </div>

                {/* Register Footer */}
                <div className="text-center">
                    <p className="text-[#9db9a6] text-sm">
                        Ainda não possui conta?
                        <a className="text-primary hover:text-white font-bold underline decoration-2 underline-offset-4 transition-colors" href="#">Cadastre-se</a>
                    </p>
                </div>
            </div>

            {/* Background Image/Texture Hint */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-repeat z-0" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC8dxRfTwk1dw-fEMRV-s98rJL9J76OWFtOXFOOhU6yUzYRj2kl1PJ0XkrUzRzdZxRVsDM9N3LLLUkfC45jqBcVjdUfb4g29Wvw4296ymP9OvZjstcGV1rNfQLbn1CEDgqLtMOedUeTfWor533DwTLCjUuJEH6W7xtKK4Y5VwrrEGVuy4Y8zuqfA2ZIsKMiCSKnUi2I7Qyjf7tBwIOReKAIrMuqiQU__BKoDFLzmEFRvkCnBAsFKbToegZ1_ExG7D9VdX3W6qNXkUIJ')" }}></div>
        </div>
    );
};

export default LoginPage;
