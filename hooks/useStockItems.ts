
import { useState, useMemo } from 'react';

export interface StockItem {
  id: string;
  name: string;
  brand?: string | null;
  category: string;
  price: number;
  quantity: number;
  barcode?: string | null;
  imageUrl?: string;
}

const INITIAL_STOCK: StockItem[] = [
    {
        // FIX: Removed 'sku' and 'status' properties as they are not defined in the StockItem interface.
        id: '1', name: "Parafusadeira Bosch 12V", price: 359.90, quantity: 12, brand: 'Bosch', category: 'Ferramentas',
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVCbNDO5Asb95PBn6b51Lh8P2mvurb-yo0AhjxbWfVk8ILKV3pNqUot42U390O2EdnVbH2PW-ShwI_UP-GHUfSR9jG84bHwIVSWiLLXsabig4rFPb8wSyqH8Ks8io4EPN64Em4Pe4zd-FWH3b8Csprxqzgi1ktpk33RRXf7nN-PSLHWNhrY4HWoMGyebuKNLgLZbL2l90gmoV1bKFbVHqEQoiLPe3t2ORPEA1AWadU2PUyBjz85LILK7-FINqnlC8x7b7a7WyuKs2r",
    },
    {
        // FIX: Removed 'sku' and 'status' properties as they are not defined in the StockItem interface.
        id: '2', name: "Cimento CP-II 50kg", price: 28.50, quantity: 3, brand: 'Votorantim', category: 'Material Básico',
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8EObc0JqOXTgwxuPtiUeV_DkSFxQtkWyAr6-2qJXm4VNL8OUuAjmc0iZ91Ij-yv5Me9IucHbfDrVlPFC9CO_Ol6O2hLkFBaTDaewqubOB1D0LbAw_nca7WK9qzD-NgYI9_FjKESOTXGz2MAq0vKzzbujVJvNkiw66oeI4QFol2yl0bJuASlDdrT5lznhEcutVAf1xruepcysrAnlUZdIkmKHhMrcX-pTt29qkFU46-NgKMEowuJnMzAboM4NkVgvjw4lWvZimXZ6B",
    },
    {
        // FIX: Removed 'sku' and 'status' properties as they are not defined in the StockItem interface.
        id: '3', name: "Compensado Naval 15mm", price: 115.00, quantity: 45, brand: 'Madeireira XYZ', category: 'Madeiras',
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDeaUfwTCGyo-VZ2ybx2sFe4voMrWErPze9DS-YH-HevLfl2yG6nWr_3FF6dZ3W9noG7sO9zAzEWQpZkgvzTb5aLUDulKk6MeWPa_noRAbs5C8bLR9zdUCeeKdxjLuAK2h9vL5k7hs9Ke4jqsU1-V4q25VbkJoRI-54k73U0Jki-EbcLUBqedql47DskDu48phj1Tq8gGBxpRpZYLDTf05QrBz74l6NzgugJqwJ-w6EUpnKrTFhIEuWQf_CRHYtOPlNXGMkgkD0NqbJ",
    },
];

export const useStockItems = () => {
    const [items, setItems] = useState<StockItem[]>(INITIAL_STOCK);

    const stats = useMemo(() => {
        const totalValue = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const itemCount = items.length;
        const lowStockCount = items.filter(item => item.quantity <= 5).length;
        const categoryCount = items.reduce((acc, item) => {
            acc[item.category] = (acc[item.category] || 0) + 1;
            return acc;
        }, {} as Record<string, number>);

        return { totalValue, itemCount, lowStockCount, categoryCount };
    }, [items]);

    const addItem = (item: Omit<StockItem, 'id'>) => {
        const existingItem = items.find(i => i.name.toLowerCase() === item.name.toLowerCase());
        if (existingItem) {
            updateQuantity(existingItem.id, item.quantity || 1);
        } else {
            const newItem: StockItem = {
                ...item,
                id: Date.now().toString(),
                quantity: item.quantity || 1,
            };
            setItems(prev => [newItem, ...prev]);
        }
    };

    const updateQuantity = (itemId: string, change: number) => {
        setItems(prev =>
            prev.map(item => {
                if (item.id === itemId) {
                    const newQuantity = item.quantity + change;
                    return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
                }
                return item;
            }).filter((item): item is StockItem => item !== null)
        );
    };

    const deleteItem = (itemId: string) => {
        setItems(prev => prev.filter(item => item.id !== itemId));
    };

    return { items, addItem, updateQuantity, deleteItem, stats };
};
