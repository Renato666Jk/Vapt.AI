
import React from 'react';

// This file simulates a backend API. In a real application, these functions
// would make network requests to a server.

export interface KpiData {
    totalValue: string;
    valueChange: string;
    stockHealth: number;
    ruptureItems: number;
}

export interface AiSuggestion {
    type: 'price' | 'supplier';
    title: string;
    description: string;
    color: string;
    icon: string;
}

export interface InventoryItem {
    name: string;
    sku: string;
    price: string;
    lot: string;
    expiry: string;
    stock: number;
    status: 'ok' | 'low';
    imageUrl: string;
}

export interface DashboardData {
    kpi: KpiData;
    suggestions: AiSuggestion[];
    inventory: InventoryItem[];
}

// New interface for the scanned product data
export interface ScannedProduct {
  name: string;
  brand?: string | null;
  category: string;
  price: number;
  suggested_price?: number;
  price_reason?: string;
  profit_margin?: number;
  market_position?: 'competitivo' | 'premium' | 'econômico';
}


const mockKpiData: KpiData = {
    totalValue: "145.250,00",
    valueChange: "+12%",
    stockHealth: 94,
    ruptureItems: 5,
};

const mockAiSuggestions: AiSuggestion[] = [
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

const mockInventoryItems: InventoryItem[] = [
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

// Simulate a network request
const apiCall = <T,>(data: T, delay = 1500): Promise<T> => 
    new Promise(resolve => setTimeout(() => resolve(data), delay));


export const fetchDashboardData = (): Promise<DashboardData> => {
    return apiCall({
        kpi: mockKpiData,
        suggestions: mockAiSuggestions,
        inventory: mockInventoryItems,
    });
};

// Simulate the call to the 'analyze-image' Supabase function
export const analyzeProductImage = (base64Image: string): Promise<{ product: ScannedProduct }> => {
    console.log("Analisando imagem (simulado)...", base64Image.substring(0, 30) + "...");

    const mockProduct: ScannedProduct = {
        name: "Tinta Acrílica Premium",
        brand: "VAPT Tintas",
        category: "Pintura",
        price: 129.90,
        suggested_price: 129.90,
        price_reason: "O preço está alinhado com a média do mercado para tintas de alta qualidade, garantindo boa competitividade.",
        profit_margin: 35,
        market_position: 'premium',
    };

    return apiCall({ product: mockProduct }, 2500); // Simulate a 2.5 second AI processing time
};
