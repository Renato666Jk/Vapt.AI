
import React from 'react';

const FeaturesSection: React.FC = () => {
    return (
        <section className="flex flex-col gap-10 relative">
            <div className="text-center space-y-3 relative z-10 max-w-2xl mx-auto">
                <p className="text-primary font-bold uppercase tracking-widest text-sm">Funcionalidades Principais</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-white">DOMINE SEU ESTOQUE</h2>
                <p className="text-white/50 px-4 sm:px-0">Todas as ferramentas que você precisa em uma única plataforma web integrada.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <article className="md:col-span-2 relative group neubrutalist-border rounded-2xl bg-background-dark overflow-hidden min-h-[400px] transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:-translate-y-1">
                    <img alt="Celular escaneando um produto com a câmera, mostrando o foco na ação de escaneamento" className="absolute inset-0 w-full h-full object-cover opacity-80 z-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_nwQ2QwR3oY-h8zgsld4tYBVxtKRZTmehVxpSmU88eFhjwY4zwfjgK73jb-jB5S2HFw9O_YGhcvMdo7WGwAXNlAzNzPn0H44tru-95dcrWHkAJ74vz26EFFQDh2iynTHz_xxX25UhezyhfQH6215LK84otraDn6De5zMo8LprR5KbGxLDR7zFvomxyYT9m7q-6dRuLShtQO1TSg-UGU6JwB1VyOe3gf-3Fy9zTibl-LwNMgqM5dvyYRK9eMfupnNzD5MbRZHyAph9" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent z-10"></div>

                    <div className="relative z-30 top-6 left-6 pr-6">
                        <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(19,236,91,0.5)]"></span>
                            Scanner Pro
                        </h3>
                        <p className="text-gray-400 text-sm mt-2 max-w-sm">
                            Transforme a câmera do celular em um leitor industrial. Foco automático e identificação instantânea.
                        </p>
                    </div>

                    <div className="absolute inset-0 z-20 pointer-events-none">
                        <div className="absolute top-[52%] left-[42%] -translate-x-1/2 -translate-y-1/2 w-64 h-40 border-2 border-primary rounded-lg flex flex-col items-center justify-center overflow-hidden animate-pulse-slow">
                            <div className="w-full h-0.5 bg-primary shadow-[0_0_35px_#13ec5b] animate-scan-vertical absolute left-0"></div>
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(19,236,91,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(19,236,91,0.1)_1px,transparent_1px)] bg-[size:10px_10px] opacity-30"></div>
                            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary"></div>
                            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary"></div>
                            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary"></div>
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary"></div>
                        </div>
                        <div className="absolute bottom-[15%] right-[10%] animate-scan-result z-30">
                            <div className="relative bg-[#0a0c0b]/90 backdrop-blur-md border border-primary/40 rounded-lg p-4 shadow-xl flex flex-col gap-1 min-w-[160px]">
                                <div className="absolute top-1/2 -left-3 w-3 h-px bg-primary/40"></div>
                                <div className="absolute top-1/2 -left-3 w-1 h-1 bg-primary rounded-full shadow-[0_0_5px_#13ec5b]"></div>
                                <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-1">
                                    <span className="text-[10px] text-primary font-bold tracking-widest uppercase">Barcode Detected</span>
                                    <span className="material-symbols-outlined text-sm text-primary">qr_code_2</span>
                                </div>
                                <div className="flex flex-col gap-0.5">
                                    <span className="text-sm font-bold text-white">Produto #8842</span>
                                    <span className="text-[10px] text-white/50">Estoque: 128 un.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="relative group neubrutalist-border rounded-2xl bg-background-dark overflow-hidden min-h-[400px] transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:-translate-y-1">
                    <div className="absolute inset-0 w-full h-full bg-cover bg-center opacity-40 blur-sm z-0 transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCgQ8SA1ivMVNijRqPcyEiS3Vnm0_DXA5P670_TafwegpehxTtq_QwFb121wB-tmrvRizAOct1jVOfOkpfnJ5TT4xB6oRjgEYrFNVsHmGYZ1bJXYyCGe0DzS4SYAViDCh-h4EnP5kY56tRKhZcMHSLDsEgqVk8qUIRI743U34et0EV2pVXgyUad6JlHdAhD0Vk5VtFSBt9_dIx4f2ha50xEbIGG1zH_cXqiEqSpftmCG8wfOnK4acz7sftSiQamDYBKg_EgTQ8Tg3-h')" }} aria-hidden="true"></div>
                    <div className="absolute inset-0 bg-black/50 z-10 transition-opacity group-hover:opacity-40"></div>
                    <div className="relative z-20 top-6 left-6 right-6">
                        <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-2">
                            <span className="material-symbols-outlined text-primary">mic</span>
                            Operação Mãos Livres
                        </h3>
                        <p className="text-xs text-gray-400">"VAPT, localizar produto 8842." Use comandos de voz para registrar entradas, saídas e consultar o estoque.</p>
                    </div>
                    <div className="absolute inset-0 z-10 flex flex-col justify-center items-center p-6 mt-10">
                        <div className="w-full space-y-3">
                             <div className="flex justify-end">
                                <div className="bg-primary/20 backdrop-blur border border-primary/20 rounded-2xl rounded-tr-sm px-4 py-2 text-xs text-primary max-w-[80%]">
                                    "VAPT, localizar produto 8842."
                                </div>
                            </div>
                            <div className="flex justify-start">
                                <div className="bg-white/10 backdrop-blur border border-white/10 rounded-2xl rounded-tl-sm px-4 py-2 text-sm text-white max-w-[80%] flex items-start gap-2">
                                    <span className="material-symbols-outlined text-base text-primary mt-0.5">pin_drop</span>
                                    <div>
                                        <p className="font-bold">Corredor C, Prateleira 5.</p>
                                        <p className="text-xs text-white/60">128 unidades em estoque.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="relative group neubrutalist-border rounded-2xl bg-background-dark overflow-hidden min-h-[400px] flex flex-col">
                    <div className="p-6 pb-0 z-10">
                        <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-2">
                            <span className="material-symbols-outlined text-primary">grid_view</span>
                            Dashboard em Tempo Real
                        </h3>
                        <p className="text-xs text-gray-400">Dashboard completo com indicadores de nível crítico e curva ABC.</p>
                    </div>
                    
                    <div className="scene w-full flex-grow flex justify-center items-center min-h-0 px-6">
                        <div className="monitor">
                        <div className="screen">
                            <div className="screen-title">Relatório de Controle de Estoque</div>
                            <div className="legend">
                            <span><span className="legend-box min"></span>Mínimo</span>
                            <span><span className="legend-box med"></span>Máximo</span>
                            <span><span className="legend-box real"></span>Atual</span>
                            </div>
                            <div className="chart">
                                <div className="y-axis-labels">
                                    <span>1k</span>
                                    <span>800</span>
                                    <span>400</span>
                                    <span>0</span>
                                </div>
                                <div className="bars">
                                    <div className="bar-group">
                                    <div className="bar"></div>
                                    <div className="label">Mês 1</div>
                                    </div>
                                    <div className="bar-group">
                                    <div className="bar short"></div>
                                    <div className="label">Mês 2</div>
                                    </div>
                                    <div className="bar-group">
                                    <div className="bar medium"></div>
                                    <div className="label">Mês 3</div>
                                    </div>
                                    <div className="bar-group">
                                    <div className="bar tall"></div>
                                    <div className="label">Mês 4</div>
                                    </div>
                                </div>
                                <div className="line min-line"></div>
                                <div className="line trend-line"></div>
                            </div>
                        </div>
                        <div className="stand"></div>
                        </div>
                    </div>
                </article>
                <article className="relative group neubrutalist-border rounded-2xl bg-background-dark overflow-hidden min-h-[400px] transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:-translate-y-1">
                    <div className="absolute inset-0 w-full h-full bg-cover bg-center opacity-50 blur-[1px] z-0 transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDxMMluGVEeDaynajUKIOp4XxGz9kxcUpAjYJvsT2SZ8bNhqqyLqw5TG_SBhrUFpSqcE2dCn3IIKJWss1uiSvaOTWFy4llFR9jezkYgKwdlu__ipXCDvY9HuUZSuyMiRay07Yh31_DjLDK31OJOfHqkd3uQIkcQ4cbBVm2nTz7SixWKow0_qkXrHCPyTau7A9jeKGH03cQn-QTrv6ELkAOav-57QQhVSciOd32tUlAlyIptSwIVthuwT6qJlR6jwXXrpMHXD47eyP0S')" }} aria-hidden="true"></div>
                    <div className="absolute inset-0 bg-black/60 z-10"></div>
                    <div className="relative z-20 top-6 left-6 right-6">
                        <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-2">
                            <span className="material-symbols-outlined text-primary">auto_awesome</span>
                            Previsão de Demanda com IA
                        </h3>
                        <p className="text-xs text-gray-400">Nossa IA analisa tendências para sugerir pontos de reposição, evitando rupturas e excesso de estoque.</p>
                    </div>
                    <div className="absolute inset-0 z-20 flex items-center justify-center p-4">
                        <div className="bg-[#1a1a1a]/95 backdrop-blur-xl border border-primary/20 p-4 rounded-2xl shadow-[0_0_30px_rgba(19,236,91,0.15)] w-full max-w-xs animate-float transform scale-90 hover:scale-100 transition-transform duration-500">
                            <span className="text-[10px] text-primary uppercase tracking-widest font-bold mb-2 block">Previsão de Demanda: Produto #8842</span>
                            <div className="relative h-24">
                                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 50">
                                    <path d="M 0 50 L 100 50" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"></path>
                                    <path d="M 0 25 L 100 25" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"></path>
                                    <path d="M 0 0 L 100 0" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"></path>
                                    <path d="M 0 40 C 20 10, 40 30, 60 20 L 70 25" stroke="#13ec5b" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M 70 25 C 80 30, 90 15, 100 20" stroke="#FFFFFF" fill="none" strokeWidth="1" strokeDasharray="2 2"></path>
                                </svg>
                            </div>
                            <div className="flex justify-between text-[10px] mt-2 text-white/50">
                                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-sm bg-primary"></span>Vendas</span>
                                <span className="flex items-center gap-1.5"><span className="w-2 h-0.5 rounded-sm bg-white"></span>Previsão IA</span>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="relative group neubrutalist-border rounded-2xl bg-background-dark overflow-hidden min-h-[400px] transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:-translate-y-1 flex flex-col">
                    <div className="absolute inset-0 w-full h-full bg-cover bg-center opacity-50 blur-[1px] z-0 transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }} aria-hidden="true"></div>
                    <div className="absolute inset-0 bg-black/60 z-10"></div>
                    
                    <div className="relative z-20 p-6 flex-grow flex flex-col">
                        <div>
                            <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-2">
                                <span className="material-symbols-outlined text-primary">bar_chart</span>
                                Relatórios Automatizados
                            </h3>
                            <p className="text-xs text-white/80">Gere relatórios de giro e inventário com um clique. Agende envios para seu WhatsApp ou e-mail.</p>
                        </div>
                        
                        <div className="mt-auto">
                           <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-primary/20 text-left animate-float">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h4 className="font-bold text-white">Novo Relatório Enviado</h4>
                                        <p className="text-xs text-white/80">Enviado para seu WhatsApp.</p>
                                    </div>
                                    <div className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-green-500/20 flex-shrink-0">
                                        <span className="material-symbols-outlined text-white">maps_ugc</span>
                                    </div>
                                </div>
                                <div className="h-px bg-white/10 my-3"></div>
                                <div className="bg-gray-800/60 p-2 rounded-md flex items-center gap-2 border border-white/10">
                                    <span className="material-symbols-outlined text-primary text-xl">description</span>
                                    <div className="flex-grow">
                                        <p className="text-xs font-bold text-white">Relatorio_Giro_Out24.pdf</p>
                                        <p className="text-[10px] text-white/50">Status: Entregue</p>
                                    </div>
                                    <span className="material-symbols-outlined text-sky-400 text-base">done_all</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default FeaturesSection;
