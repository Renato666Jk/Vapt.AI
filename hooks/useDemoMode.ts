import { useState, useMemo } from 'react';

export const DEMO_LIMIT = 10;

export interface DemoItem {
  id: string;
  name: string;
  brand?: string | null;
  category: string;
  price: number;
  quantity: number;
  barcode?: string | null;
}

export const useDemoMode = () => {
  const [demoItems, setDemoItems] = useState<DemoItem[]>([]);

  const isLimitReached = useMemo(() => demoItems.length >= DEMO_LIMIT, [demoItems.length]);

  const addDemoItem = (item: Omit<DemoItem, 'id' | 'quantity'>) => {
    if (isLimitReached) {
      const existingItem = demoItems.find(i => i.name === item.name);
      if (existingItem) {
        // if item exists, just increase quantity
        updateDemoQuantity(existingItem.id, 1);
        return true;
      }
      return false;
    }

    const newItem: DemoItem = {
      ...item,
      id: Date.now().toString(),
      quantity: 1,
    };
    setDemoItems(prev => [newItem, ...prev]);
    return true;
  };

  const updateDemoQuantity = (itemId: string, change: number) => {
    setDemoItems(prev => 
      prev.map(item => {
        if (item.id === itemId) {
          const newQuantity = item.quantity + change;
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
        }
        return item;
      }).filter((item): item is DemoItem => item !== null)
    );
  };

  const deleteDemoItem = (itemId: string) => {
     setDemoItems(prev => prev.filter(item => item.id !== itemId));
  };
  
  return { demoItems, addDemoItem, updateDemoQuantity, deleteDemoItem, isLimitReached, DEMO_LIMIT };
};
