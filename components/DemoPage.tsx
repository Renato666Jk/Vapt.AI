import React, { useState } from 'react';
import { MaterialIcon } from './ui/MaterialIcon';
import { NeonButton } from './ui/NeonButton';
import { GlassCard } from './ui/GlassCard';
import { VaptBadge } from './ui/VaptBadge';
import { StatsCard } from './ui/StatsCard';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/Dialog';
import { DemoScanner } from './DemoScanner';
import { useDemoMode, DemoItem } from '../hooks/useDemoMode';
import { ScannedProduct } from '../services/api';

interface DemoPageProps {
    onNavigate: (page: 'landing' | 'login' | 'demo') => void;
    showToast: (title: string, description: string, variant?: 'success' | 'destructive') => void;
    speak: (text: string) => void;
}

export default function DemoPage({ onNavigate, showToast, speak }: DemoPageProps) {
  const [showLimitModal, setShowLimitModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showScanner, setShowScanner] = useState(false);
  
  const { 
    demoItems, 
    addDemoItem, 
    updateDemoQuantity, 
    isLimitReached,
    DEMO_LIMIT 
  } = useDemoMode();

  const pixKey = "51994004829";
  const pixValue = "19.99";
  const pixName = "VAPT Terminal";
  const pixCity = "Brasil";
  
  const calculateCRC16 = (str: string) => {
    let crc = 0xFFFF;
    for (let i = 0; i < str.length; i++) {
      crc ^= str.charCodeAt(i) << 8;
      for (let j = 0; j < 8; j++) {
        if (crc & 0x8000) {
          crc = (crc << 1) ^ 0x1021;
        } else {
          crc <<= 1;
        }
      }
    }
    return (crc & 0xFFFF).toString(16).toUpperCase().padStart(4, '0');
  };

  const generatePixPayload = () => {
    const payload = [
      "00020126",
      `36${String(14 + pixKey.length).padStart(2, '0')}0014BR.GOV.BCB.PIX01${String(pixKey.length).padStart(2, '0')}${pixKey}`,
      "52040000",
      "5303986",
      `54${String(pixValue.length).padStart(2, '0')}${pixValue}`,
      "5802BR",
      `59${String(pixName.length).padStart(2, '0')}${pixName}`,
      `60${String(pixCity.length).padStart(2, '0')}${pixCity}`,
      "62070503***",
      "6304"
    ].join("");
    const crc16 = calculateCRC16(payload);
    return payload + crc16;
  };
  
  const pixPayload = generatePixPayload();
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(pixPayload)}`;

  const totalValue = demoItems.reduce((sum, item) => sum + (item.price || 0) * item.quantity, 0);
  const lowStockCount = demoItems.filter(item => item.quantity <= 2).length;

  const handleOpenScanner = () => {
    if (isLimitReached) {
      setShowLimitModal(true);
    } else {
      setShowScanner(true);
    }
  };

  const handleProductScanned = (product: ScannedProduct) => {
    const success = addDemoItem({
      name: product.name,
      brand: product.brand || null,
      category: product.category,
      price: product.price
    });

    if (success) {
      showToast("Produto Adicionado!", `${product.name} foi adicionado ao estoque.`);
    } else {
      setShowLimitModal(true);
    }
  };

  return (
    <div className="min-h-screen bg-background-dark font-body pb-24">
      <header className="sticky top-0 z-50 glass-panel border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => onNavigate('landing')} className="p-2 rounded-full hover:bg-surface-dark">
              <MaterialIcon name="arrow_back" size="sm" />
            </button>
            <div className="flex items-center gap-2">
              <span className="font-bold text-white">VAPT.AI</span>
              <VaptBadge variant="demo">DEMO</VaptBadge>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-6 space-y-6">
        <GlassCard className="border-primary/30" padding="md">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex-1 min-w-[200px]">
              <p className="text-sm text-white/60 mb-2">Limite do Inventário</p>
              <div className="flex items-center gap-3">
                <div className="flex-1 h-2 bg-surface-dark rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full transition-all" 
                    style={{ width: `${(demoItems.length / DEMO_LIMIT) * 100}%` }}
                  />
                </div>
                <span className="text-sm font-bold text-white">{demoItems.length}/{DEMO_LIMIT}</span>
              </div>
              <p className="text-xs text-white/60 mt-2">
                Desbloqueie slots ilimitados por apenas R$ 19,99/mês.
              </p>
            </div>
            <NeonButton 
              size="md" 
              icon="bolt" 
              onClick={() => setShowPaymentModal(true)}
              className="px-6 py-2.5 text-xs"
            >
              ASSINAR AGORA
            </NeonButton>
          </div>
        </GlassCard>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <StatsCard 
            icon="payments" 
            label="Valor Total" 
            value={`R$ ${totalValue.toFixed(2)}`}
          />
          <StatsCard 
            icon="inventory_2" 
            label="Itens" 
            value={`${demoItems.length} / ${DEMO_LIMIT}`}
          />
          <StatsCard 
            icon="trending_down" 
            label="Baixo Estoque" 
            value={`${lowStockCount} Produtos`}
            variant={lowStockCount > 0 ? "warning" : "default"}
          />
        </div>

        <GlassCard padding="md" className="border-l-4 border-l-primary">
          <div className="flex items-start gap-3">
            <MaterialIcon name="auto_awesome" className="text-primary mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-white mb-1">VAPT.AI Insight</p>
              <p className="text-sm text-white/70">
                {demoItems.length === 0 
                  ? "Use o scanner para identificar produtos e receber sugestões de preço da IA."
                  : lowStockCount > 0
                    ? `Atenção: ${lowStockCount} produto(s) com estoque baixo. Considere reabastecer.`
                    : "O giro do seu estoque está sendo monitorado. Sugestões avançadas no plano Pro."}
              </p>
            </div>
          </div>
        </GlassCard>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">Itens Recentes</h2>
            {demoItems.length > 5 && (
              <button className="text-sm text-primary hover:underline">Ver todos</button>
            )}
          </div>

          {demoItems.length === 0 ? (
            <GlassCard padding="lg" className="text-center">
              <MaterialIcon name="qr_code_scanner" size="xl" className="text-white/40 mb-4" />
              <p className="text-white/70 font-medium">Nenhum produto cadastrado</p>
              <p className="text-sm text-white/60 mt-1 mb-4">
                Aponte a câmera para um produto e nossa IA irá identificá-lo automaticamente.
              </p>
              <NeonButton onClick={handleOpenScanner} icon="center_focus_strong">
                Escanear Primeiro Produto
              </NeonButton>
            </GlassCard>
          ) : (
            <div className="space-y-3">
              {demoItems.slice(0, 5).map((item) => (
                <GlassCard key={item.id} padding="md" className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-surface-dark flex items-center justify-center">
                    <MaterialIcon name="inventory_2" className="text-white/60" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-white truncate">{item.name}</p>
                    <p className="text-xs text-white/60">
                      R$ {item.price?.toFixed(2) || '0.00'} • {item.category}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => updateDemoQuantity(item.id, -1)}
                      className="w-8 h-8 rounded-lg bg-surface-dark flex items-center justify-center hover:bg-db-secondary"
                    >
                      <MaterialIcon name="remove" size="sm" />
                    </button>
                    <span className="w-8 text-center font-bold text-lg">{item.quantity}</span>
                    <button 
                      onClick={() => updateDemoQuantity(item.id, 1)}
                      className="w-8 h-8 rounded-lg bg-surface-dark flex items-center justify-center hover:bg-db-secondary"
                    >
                      <MaterialIcon name="add" size="sm" />
                    </button>
                  </div>
                </GlassCard>
              ))}
              
              {demoItems.length > 5 && (
                <div className="flex items-center justify-center gap-2 p-3 text-white/60 text-sm">
                  <MaterialIcon name="lock" size="sm" />
                  <span>Histórico completo no Pro</span>
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      <nav className="fixed bottom-0 left-0 right-0 glass-panel border-t border-white/10" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
        <div className="max-w-4xl mx-auto px-4 py-2 flex items-center justify-around">
          <button className="flex flex-col items-center gap-1 text-primary w-16">
            <MaterialIcon name="dashboard" />
            <span className="text-xs">Início</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-white/60 hover:text-white w-16">
            <MaterialIcon name="inventory_2" />
            <span className="text-xs">Estoque</span>
          </button>
          <button 
            onClick={handleOpenScanner}
            className="w-16 h-16 -mt-8 rounded-full bg-primary text-black flex items-center justify-center shadow-glow"
          >
            <MaterialIcon name="qr_code_scanner" size="lg" />
          </button>
          <button className="flex flex-col items-center gap-1 text-white/60 hover:text-white w-16">
            <MaterialIcon name="bar_chart" />
            <span className="text-xs">Relat.</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-white/60 hover:text-white w-16">
            <MaterialIcon name="settings" />
            <span className="text-xs">Ajustes</span>
          </button>
        </div>
      </nav>

      {showScanner && (
        <DemoScanner
          onClose={() => setShowScanner(false)}
          onProductScanned={handleProductScanned}
          speak={speak}
          showToast={showToast}
        />
      )}

      <Dialog open={showLimitModal} onOpenChange={setShowLimitModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <MaterialIcon name="warning" className="text-yellow-400" />
              Limite Atingido
            </DialogTitle>
            <DialogDescription>
              Você atingiu o limite de {DEMO_LIMIT} produtos no modo demo.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-3 pt-4">
            <NeonButton icon="bolt" onClick={() => { setShowLimitModal(false); setShowPaymentModal(true); }}>
              Assinar Pro (R$ 19,99)
            </NeonButton>
            <NeonButton variant="secondary" onClick={() => { setShowLimitModal(false); onNavigate('login'); }}>
              Voltar
            </NeonButton>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showPaymentModal} onOpenChange={setShowPaymentModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Pagamento via PIX</DialogTitle>
             <DialogDescription>
              Escaneie o QR Code para assinar o plano Pro.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center space-y-4 py-4">
            <div className="bg-white p-3 rounded-xl">
              <img src={qrCodeUrl} alt="QR Code PIX" className="w-[200px] h-[200px]" />
            </div>
            <p className="text-2xl font-bold text-primary" style={{ textShadow: '0 0 10px #13ec5b' }}>R$ 19,99</p>
            <NeonButton variant="secondary" className="w-full" icon="content_copy" onClick={() => { navigator.clipboard.writeText(pixPayload); showToast("Copiado!", "Código PIX copiado para a área de transferência."); }}>
              Copiar Código
            </NeonButton>
            <button className="text-sm text-white/60 hover:text-white" onClick={() => { setShowPaymentModal(false); onNavigate('login'); }}>
              Já paguei, ir para login
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
