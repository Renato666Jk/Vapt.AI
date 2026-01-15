
import React from 'react';

const HeroSection: React.FC = () => {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col gap-6 order-2 lg:order-1">
                <div className="inline-flex self-start items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                    <span className="text-xs font-bold text-primary uppercase tracking-wide">Controle Total em Tempo Real</span>
                </div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-none tracking-tight">ADEUS, CAOS<br />NO ESTOQUE</h2>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-lg">
                    Esqueça planilhas manuais e sistemas complexos. Transforme a gestão do seu armazém com Inteligência Artificial e usabilidade industrial.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-2">
                    <button className="bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                        Começar Agora
                        <span className="material-symbols-outlined text-lg">arrow_forward</span>
                    </button>
                    <button className="glass-panel-light text-white font-bold py-3 px-8 rounded-full hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined text-lg">play_circle</span>
                        Ver Demo
                    </button>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="glass-panel p-4 rounded-xl border-red-500/20 bg-red-900/5 flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-red-400">
                            <span className="material-symbols-outlined">history_toggle_off</span>
                            <h4 className="text-xs font-bold uppercase">Antes</h4>
                        </div>
                        <p className="text-sm text-white/60">Contagens manuais e erros constantes.</p>
                    </div>
                    <div className="glass-panel p-4 rounded-xl border-primary/30 bg-primary/5 flex flex-col gap-2 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 blur-xl rounded-full -mr-4 -mt-4"></div>
                        <div className="flex items-center gap-2 text-primary">
                            <span className="material-symbols-outlined">bolt</span>
                            <h4 className="text-xs font-bold uppercase">VAPT.AI</h4>
                        </div>
                        <p className="text-sm text-white/80">Precisão absoluta e agilidade instantânea.</p>
                    </div>
                </div>
            </div>
            <div className="relative order-1 lg:order-2 h-[350px] sm:h-[450px] lg:h-[600px]">
                <div className="absolute inset-0 rounded-3xl neubrutalist-border overflow-hidden">
                    <div className="absolute top-6 left-6 w-8 h-8 border-t-4 border-l-4 border-primary z-30"></div>
                    <div className="absolute bottom-6 right-6 w-8 h-8 border-b-4 border-r-4 border-primary z-30"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent z-10 opacity-60"></div>
                    <div className="h-full w-full bg-cover bg-center transition-transform hover:scale-105 duration-700" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCgGSp9-7X7DadSBWzvunhIP0bvcS6pcSON8kC3le62OCz_ZZGAmqJWIzydqbdvFVIMVVoakeYCgqY7lU2oDaf8mbGCPFK_8hoqmQd-YJM5pP_47v1nBy6Rvf8j8djKaPK-ATcfiVgmexYbozzIVDS-Z9qrxJzY2rXSn53s1UleLDyztqhOqzXwkn5H_KVPPae9N25Ne2Zh_een2vLlRMqn-0xsqqkKA0Rl5zNHTx5CvhuBPEiuPun3VEqREhXvJNXjr0WefXgOwrNL')" }}></div>
                    <div className="absolute bottom-8 left-8 right-8 z-20">
                        <div className="glass-panel p-4 rounded-xl flex items-center gap-4 border border-white/20">
                            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-black font-bold">
                                <span className="material-symbols-outlined">check</span>
                            </div>
                            <div>
                                <div className="text-sm font-bold text-white">Estoque Atualizado</div>
                                <div className="text-xs text-white/50">Última sincronização: Agora mesmo</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
