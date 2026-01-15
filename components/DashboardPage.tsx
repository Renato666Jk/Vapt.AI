
import React from 'react';

// Mock Data for the Dashboard
const kpiData = {
    totalValue: "145.250,00",
    valueChange: "+12%",
    stockHealth: 94,
    ruptureItems: 5,
};

const aiSuggestions = [
    {
        type: 'price',
        title: 'Reajuste de Preço',
        description: 'Aumentar <strong>Cimento CP-II</strong> para <span class="text-white font-bold">R$ 29,90</span> para manter margem de 5%.',
        color: 'primary',
        icon: 'price_check',
    },
    {
        type: 'supplier',
        title: 'Novo Fornecedor',
        description: 'Economia estimada de <span class="text-white font-bold">R$ 1.200</span> em compras de Aço com fornecedor \'MetalSul\'.',
        color: 'blue-500',
        icon: 'local_shipping',
    },
];

const inventoryItems = [
    {
        name: "Parafusadeira Bosch 12V",
        sku: "SKU-902",
        price: "359,90",
        lot: "A-12",
        expiry: "N/A",
        stock: 12,
        status: 'ok',
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVCbNDO5Asb95PBn6b51Lh8P2mvurb-yo0AhjxbWfVk8ILKV3pNqUot42U390O2EdnVbH2PW-ShwI_UP-GHUfSR9jG84bHwIVSWiLLXsabig4rFPb8wSyqH8Ks8io4EPN64Em4Pe4zd-FWH3b8Csprxqzgi1ktpk33RRXf7nN-PSLHWNhrY4HWoMGyebuKNLgLZbL2l90gmoV1bKFbVHqEQoiLPe3t2ORPEA1AWadU2PUyBjz85LILK7-FINqnlC8x7b7a7WyuKs2r",
    },
    {
        name: "Cimento CP-II 50kg",
        sku: "SKU-003",
        price: "28,50",
        lot: "C-99",
        expiry: "N/A",
        stock: 3,
        status: 'low',
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8EObc0JqOXTgwxuPtiUeV_DkSFxQtkWyAr6-2qJXm4VNL8OUuAjmc0iZ91Ij-yv5Me9IucHbfDrVlPFC9CO_Ol6O2hLkFBaTDaewqubOB1D0LbAw_nca7WK9qzD-NgYI9_FjKESOTXGz2MAq0vKzzbujVJvNkiw66oeI4QFol2yl0bJuASlDdrT5lznhEcutVAf1xruepcysrAnlUZdIkmKHhMrcX-pTt29qkFU46-NgKMEowuJnMzAboM4NkVgvjw4lWvZimXZ6B",
    },
    {
        name: "Compensado Naval 15mm",
        sku: "SKU-105",
        price: "115,00",
        lot: "B-05",
        expiry: "N/A",
        stock: 45,
        status: 'ok',
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDeaUfwTCGyo-VZ2ybx2sFe4voMrWErPze9DS-YH-HevLfl2yG6nWr_3FF6dZ3W9noG7sO9zAzEWQpZkgvzTb5aLUDulKk6MeWPa_noRAbs5C8bLR9zdUCeeKdxjLuAK2h9vL5k7hs9Ke4jqsU1-V4q25VbkJoRI-54k73U0Jki-EbcLUBqedql47DskDu48phj1Tq8gGBxpRpZYLDTf05QrBz74l6NzgugJqwJ-w6EUpnKrTFhIEuWQf_CRHYtOPlNXGMkgkD0NqbJ",
    },
];

const categories = ["Todos", "Material Básico", "Ferramentas", "Elétrica", "Hidráulica"];

const DashboardPage: React.FC = () => {
    return (
        <div className="bg-db-background-dark font-db-display text-white">
            <div className="relative flex min-h-screen w-full flex-col overflow-hidden pb-24">
                {/* Header: TopAppBar */}
                <header className="sticky top-0 z-40 border-b border-db-secondary/50" style={{ background: 'rgba(28, 39, 31, 0.7)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}>
                    <div className="flex items-center p-4 justify-between">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <div className="bg-center bg-no-repeat bg-cover rounded-full size-10 border-2 border-primary" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAln3U8Yxh-Cin1crWh8TFRzOQZzLkJGdKcrUCODJxiwN2XUmXI8m9DizZP6nhQhHVnBeuiAcpzXo3QKBbnEVROQt0yYvI3nuE90NhyizTzhzeM8fiRB00Lu4G0_7TiDmlsR8Ph0S_X7ux5UKErkBeR5CnNmSjwSMlsKz4HzPkp3tbTQsNGURS2CNzsjald5GzLiWb9rR5yLSLK79C97Sb3Hm-XFzUHsNE3Vcjo5UzSCANGF8voF2cToNsEIQc3eHppTVYSRwUp5Z-W")` }}></div>
                                <div className="absolute -bottom-1 -right-1 bg-primary text-black text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-[#111813]">PRO</div>
                            </div>
                            <div className="flex flex-col">
                                <h2 className="text-white text-lg font-extrabold leading-none tracking-tight">VAPT.AI</h2>
                                <span className="text-primary text-xs font-bold tracking-wider uppercase">Acesso Completo</span>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <button className="relative text-white hover:text-primary transition-colors">
                                <span className="material-symbols-outlined">notifications</span>
                                <span className="absolute top-0 right-0 size-2.5 bg-red-500 rounded-full border border-[#111813]"></span>
                            </button>
                            <button className="text-white hover:text-primary transition-colors">
                                <span className="material-symbols-outlined">settings</span>
                            </button>
                        </div>
                    </div>
                </header>

                {/* Utility Bar: Search & Actions */}
                <section className="px-4 py-4 flex flex-col gap-3">
                    <div className="relative w-full group">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <span className="material-symbols-outlined text-gray-400 group-focus-within:text-primary transition-colors">search</span>
                        </div>
                        <input className="block w-full p-3 pl-10 text-sm text-white bg-db-surface border border-db-secondary rounded-lg focus:ring-primary focus:border-primary placeholder-gray-500 shadow-sm" placeholder="Buscar por código, nome ou lote..." type="text"/>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                            <button className="p-1 text-gray-400 hover:text-white"><span className="material-symbols-outlined">qr_code_scanner</span></button>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <button className="flex items-center justify-center gap-2 bg-db-surface border border-db-secondary hover:border-primary/50 active:bg-primary/20 p-3 rounded-lg transition-all group">
                            <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">mic</span>
                            <span className="text-sm font-bold uppercase tracking-wide">Comando Voz</span>
                        </button>
                        <button className="flex items-center justify-center gap-2 bg-db-surface border border-db-secondary hover:border-[#25D366]/50 active:bg-[#25D366]/20 p-3 rounded-lg transition-all group">
                            <span className="material-symbols-outlined text-[#25D366] group-hover:scale-110 transition-transform">share</span>
                            <span className="text-sm font-bold uppercase tracking-wide">Relatório Zap</span>
                        </button>
                    </div>
                </section>

                {/* KPI Stats Cards */}
                <section className="px-4 pb-2">
                    <div className="grid grid-cols-1 gap-4">
                        <div className="relative overflow-hidden rounded-xl border border-db-secondary bg-gradient-to-br from-db-surface to-[#111813] p-5 shadow-lg">
                            <div className="absolute top-0 right-0 p-3 opacity-10"><span className="material-symbols-outlined text-6xl text-white">attach_money</span></div>
                            <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-1">Valor Total em Estoque</p>
                            <div className="flex items-baseline gap-2">
                                <h3 className="text-3xl font-black text-white tracking-tight">R$ {kpiData.totalValue}</h3>
                            </div>
                            <div className="mt-3 flex items-center gap-2">
                                <span className="flex items-center text-xs font-bold text-black bg-primary px-2 py-0.5 rounded">
                                    <span className="material-symbols-outlined text-[14px] mr-0.5">trending_up</span> {kpiData.valueChange}
                                </span>
                                <span className="text-xs text-gray-500">vs. mês anterior</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="rounded-xl border border-db-secondary bg-db-surface/50 p-4 flex flex-col justify-between">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-gray-400 text-xs font-bold uppercase">Saúde</span>
                                    <span className="material-symbols-outlined text-primary text-xl">health_and_safety</span>
                                </div>
                                <div className="flex items-end gap-2">
                                    <span className="text-2xl font-bold text-white">{kpiData.stockHealth}%</span>
                                </div>
                                <div className="w-full bg-gray-700 h-1.5 rounded-full mt-2 overflow-hidden">
                                    <div className="bg-primary h-1.5 rounded-full" style={{ width: `${kpiData.stockHealth}%` }}></div>
                                </div>
                            </div>
                            <div className="rounded-xl border border-red-900/50 bg-red-900/10 p-4 flex flex-col justify-between">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-red-400 text-xs font-bold uppercase">Ruptura</span>
                                    <span className="material-symbols-outlined text-red-500 text-xl">warning</span>
                                </div>
                                <div className="flex items-end gap-2">
                                    <span className="text-2xl font-bold text-white">{kpiData.ruptureItems}</span>
                                    <span className="text-xs text-red-400 mb-1">Itens</span>
                                </div>
                                <p className="text-[10px] text-red-300/70 mt-1">Abaixo do mínimo</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* AI Insights Section */}
                <section className="px-4 py-6">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="material-symbols-outlined text-primary animate-pulse">auto_awesome</span>
                        <h2 className="text-lg font-bold text-white uppercase tracking-wider">Sugestões VAPT.AI</h2>
                    </div>
                    <div className="flex overflow-x-auto gap-4 pb-4 hide-scrollbar snap-x">
                        {aiSuggestions.map((suggestion, index) => (
                            <div key={index} className="snap-center shrink-0 w-[85%] max-w-[320px] rounded-xl border border-db-secondary bg-db-surface p-4 relative overflow-hidden group">
                                <div className={`absolute top-0 left-0 w-1 h-full ${suggestion.color === 'primary' ? 'bg-primary' : `bg-${suggestion.color}`}`}></div>
                                <div className="flex justify-between items-start mb-3">
                                    <div className="flex items-center gap-2">
                                        <div className={`p-2 rounded-lg ${suggestion.color === 'primary' ? 'bg-primary/20 text-primary' : `bg-${suggestion.color}/20 text-${suggestion.color.replace('-500', '-400')}`}`}>
                                            <span className="material-symbols-outlined text-lg">{suggestion.icon}</span>
                                        </div>
                                        <span className={`text-sm font-bold ${suggestion.color === 'primary' ? 'text-primary' : `text-${suggestion.color.replace('-500', '-400')}`}`}>{suggestion.title}</span>
                                    </div>
                                    <button className="text-gray-400 hover:text-white"><span className="material-symbols-outlined text-lg">close</span></button>
                                </div>
                                <p className="text-gray-300 text-sm mb-3" dangerouslySetInnerHTML={{ __html: suggestion.description }}></p>
                                {suggestion.type === 'price' ? (
                                    <button className="w-full py-2 bg-primary text-black text-sm font-bold rounded hover:bg-white transition-colors">Aplicar Sugestão</button>
                                ) : (
                                    <button className="w-full py-2 bg-[#2a3830] border border-db-secondary text-white hover:border-blue-400 text-sm font-bold rounded transition-colors">Ver Detalhes</button>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Inventory List */}
                <section className="flex-1 bg-[#111813] px-4 pt-2">
                    <div className="flex justify-between items-center mb-4 sticky top-0">
                        <h2 className="text-xl font-bold text-white uppercase tracking-tight">Inventário</h2>
                        <div className="flex gap-2">
                            <button className="p-2 rounded-lg bg-db-surface border border-db-secondary text-gray-300 hover:text-white hover:border-primary"><span className="material-symbols-outlined text-xl">filter_list</span></button>
                            <button className="p-2 rounded-lg bg-db-surface border border-db-secondary text-gray-300 hover:text-white hover:border-primary"><span className="material-symbols-outlined text-xl">sort</span></button>
                        </div>
                    </div>
                    <div className="flex gap-2 overflow-x-auto pb-4 hide-scrollbar">
                        {categories.map((cat, index) => (
                            <button key={cat} className={`px-4 py-1.5 rounded-full text-sm font-bold whitespace-nowrap ${index === 0 ? 'bg-primary text-black' : 'bg-db-surface border border-db-secondary text-gray-300 hover:bg-[#2a3830]'}`}>{cat}</button>
                        ))}
                    </div>
                    <div className="flex flex-col gap-3 pb-6">
                        {inventoryItems.map((item, index) => (
                            <div key={index} className={`flex items-center gap-3 p-3 rounded-lg bg-db-surface border transition-colors ${item.status === 'low' ? 'border-red-500/30 hover:border-red-500/50' : 'border-db-secondary hover:border-gray-500'} relative overflow-hidden`}>
                                {item.status === 'low' && <div className="absolute right-0 top-0 size-3 bg-red-500 blur-md opacity-20"></div>}
                                <div className="size-16 shrink-0 rounded bg-gray-700 bg-cover bg-center" style={{ backgroundImage: `url("${item.imageUrl}")`}}></div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-start">
                                        <h3 className="text-white font-bold text-sm truncate pr-2">{item.name}</h3>
                                        {item.status === 'low' ? (
                                            <span className="flex items-center text-[10px] font-bold text-red-400 bg-red-900/20 px-1.5 py-0.5 rounded border border-red-900/30">BAIXO</span>
                                        ) : (
                                            <span className="text-xs font-mono text-gray-400">#{item.sku}</span>
                                        )}
                                    </div>
                                    <p className="text-primary font-bold text-base mt-0.5">R$ {item.price}</p>
                                    <p className="text-xs text-gray-500 mt-1">Lote: {item.lot}</p>
                                </div>
                                <div className="flex flex-col items-center gap-1 bg-[#111813] p-1 rounded border border-db-secondary/50">
                                    <button className="size-6 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 rounded"><span className="material-symbols-outlined text-sm">add</span></button>
                                    <span className={`text-sm font-bold ${item.status === 'low' ? 'text-red-500' : 'text-white'}`}>{item.stock.toString().padStart(2, '0')}</span>
                                    <button className="size-6 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 rounded"><span className="material-symbols-outlined text-sm">remove</span></button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Bottom Navigation */}
                <nav className="fixed bottom-0 z-50 w-full border-t border-db-secondary/50 pb-5 pt-3" style={{ background: 'rgba(28, 39, 31, 0.7)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}>
                    <div className="grid grid-cols-4 items-center">
                        <a className="flex flex-col items-center gap-1 text-primary" href="#"><span className="material-symbols-outlined filled">dashboard</span><span className="text-[10px] font-bold tracking-wide">Início</span></a>
                        <a className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-colors" href="#"><span className="material-symbols-outlined">qr_code_2</span><span className="text-[10px] font-bold tracking-wide">Scan</span></a>
                        <a className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-colors" href="#"><span className="material-symbols-outlined">inventory_2</span><span className="text-[10px] font-bold tracking-wide">Itens</span></a>
                        <a className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-colors" href="#"><span className="material-symbols-outlined">bar_chart</span><span className="text-[10px] font-bold tracking-wide">Relat.</span></a>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default DashboardPage;
