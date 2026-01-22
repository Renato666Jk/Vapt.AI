
import React, { useState } from 'react';
import { DockNavigation, TabType } from './DockNavigation';
import { VoiceFeedbackToast } from './VoiceFeedbackToast';
import { InventoryTab } from './InventoryTab';
import { StatsTab } from './StatsTab';
import { InvoiceTab } from './InvoiceTab';
import { CameraScanner } from './CameraScanner';
import { WhatsAppSettings } from './WhatsAppSettings';
import { useStockItems } from '../hooks/useStockItems';
import { useVoiceFeedback } from '../hooks/useVoiceFeedback';
import { ScannedProduct } from '../services/api';
import { MaterialIcon } from './ui/MaterialIcon';
import { VaptBadge } from './ui/VaptBadge';

// This is the new "Dashboard Pro" page
export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<TabType>('inventory');
  const [isScanning, setIsScanning] = useState(false);
  const [scanMode, setScanMode] = useState<'product' | 'invoice'>('product');
  const [isRecording, setIsRecording] = useState(false);
  const [showWhatsAppSettings, setShowWhatsAppSettings] = useState(false);
  
  const { items, addItem, updateQuantity, deleteItem, stats } = useStockItems();
  const { voiceFeedback, speak } = useVoiceFeedback();

  const startScan = (mode: 'product' | 'invoice' = 'product') => {
    setScanMode(mode);
    setIsScanning(true);
  };

  const toggleRecording = () => {
    const newMode = !isRecording;
    setIsRecording(newMode);
    speak(newMode ? 'Comando de voz ativado. Fale o que precisa.' : 'Comando de voz desativado');
  };

  const handleProductScanned = (product: ScannedProduct) => {
    // FIX: Added missing 'quantity' property. A newly scanned product should have a quantity of 1.
    addItem({
      name: product.name,
      brand: product.brand || null,
      category: product.category,
      price: product.price,
      quantity: 1,
    });
     speak(`${product.name} adicionado ao estoque.`);
  };

  const handleInvoiceScanned = (invoiceItems: Array<{ name: string; category: string; price: number; quantity: number }>) => {
    invoiceItems.forEach(item => {
      addItem({
        name: item.name,
        brand: null,
        category: item.category,
        price: item.price,
        quantity: item.quantity,
      });
    });
    speak(`${invoiceItems.length} itens da nota fiscal foram adicionados.`);
  };

  return (
    <div className="min-h-screen bg-db-background-dark font-db-display text-white pb-40 selection:bg-primary/30">
        <header className="sticky top-0 z-40 border-b border-db-secondary/50" style={{ background: 'rgba(28, 39, 31, 0.7)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}>
            <div className="flex items-center p-4 justify-between max-w-4xl mx-auto">
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <div className="bg-center bg-no-repeat bg-cover rounded-full size-10 border-2 border-primary" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAln3U8Yxh-Cin1crWh8TFRzOQZzLkJGdKcrUCODJxiwN2XUmXI8m9DizZP6nhQhHVnBeuiAcpzXo3QKBbnEVROQt0yYvI3nuE90NhyizTzhzeM8fiRB00Lu4G0_7TiDmlsR8Ph0S_X7ux5UKErkBeR5CnNmSjwSMlsKz4HzPkp3tbTQsNGURS2CNzsjald5GzLiWb9rR5yLSLK79C97Sb3Hm-XFzUHsNE3Vcjo5UzSCANGF8voF2cToNsEIQc3eHppTVYSRwUp5Z-W")` }}></div>
                        <VaptBadge variant="pro" className="absolute -bottom-1 -right-2 !px-1.5 !py-0 !text-[9px]">PRO</VaptBadge>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-white text-lg font-extrabold leading-none tracking-tight">VAPT.AI</h2>
                        <span className="text-primary text-xs font-bold tracking-wider uppercase">Acesso Completo</span>
                    </div>
                </div>
                <div className="flex gap-3">
                    <button className="relative text-white hover:text-primary transition-colors">
                        <MaterialIcon name="notifications" />
                        <span className="absolute top-0 right-0 size-2.5 bg-red-500 rounded-full border border-db-background-dark"></span>
                    </button>
                </div>
            </div>
        </header>
        
      <VoiceFeedbackToast message={voiceFeedback} />

      <main className="p-4 sm:p-6 max-w-4xl mx-auto space-y-8">
        {activeTab === 'inventory' && (
          <InventoryTab
            items={items}
            stats={stats}
            onUpdateQuantity={updateQuantity}
            onDeleteItem={deleteItem}
          />
        )}

        {activeTab === 'stats' && (
          <StatsTab stats={stats} />
        )}

        {activeTab === 'invoice' && (
          <InvoiceTab onStartScan={() => startScan('invoice')} />
        )}
      </main>

      <DockNavigation
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onScan={() => startScan('product')}
        isRecording={isRecording}
        toggleRecording={toggleRecording}
        onWhatsAppSettings={() => setShowWhatsAppSettings(true)}
      />

      {isScanning && (
        <CameraScanner
          mode={scanMode}
          onClose={() => setIsScanning(false)}
          onProductScanned={handleProductScanned}
          onInvoiceScanned={handleInvoiceScanned}
          speak={speak}
        />
      )}

      <WhatsAppSettings
        isOpen={showWhatsAppSettings}
        onClose={() => setShowWhatsAppSettings(false)}
      />
    </div>
  );
}
