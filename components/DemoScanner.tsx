
import React, { useRef, useEffect, useState } from 'react';
import { MaterialIcon } from './ui/MaterialIcon';
import { NeonButton } from './ui/NeonButton';
import { GlassCard } from './ui/GlassCard';
import { VaptBadge } from './ui/VaptBadge';
import { analyzeProductImage, ScannedProduct } from '../services/api';
import { ToastMessage } from '../App';

interface DemoScannerProps {
  onClose: () => void;
  onProductScanned: (product: ScannedProduct) => void;
  speak?: (text: string) => void;
  showToast: (title: string, description: string, variant: 'success' | 'destructive') => void;
}

export function DemoScanner({ onClose, onProductScanned, speak, showToast }: DemoScannerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [scanStatus, setScanStatus] = useState('');
  const [scannedProduct, setScannedProduct] = useState<ScannedProduct | null>(null);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'environment', width: { ideal: 1280 } }
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (e) {
        console.error('Camera error:', e);
        showToast(
          "Erro de Câmera",
          "Não foi possível acessar a câmera. Verifique as permissões.",
          "destructive"
        );
        onClose();
      }
    };

    startCamera();

    return () => {
      if (videoRef.current?.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach(t => t.stop());
      }
    };
  }, [onClose, showToast]);

  const processScan = async () => {
    if (isProcessing || !videoRef.current || !canvasRef.current) return;

    setIsProcessing(true);
    setScanStatus('Analisando produto...');

    try {
      const canvas = canvasRef.current;
      const video = videoRef.current;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext('2d');
      if (!ctx) throw new Error('Canvas context not available');

      ctx.drawImage(video, 0, 0);
      const base64Image = canvas.toDataURL('image/jpeg', 0.8);

      setScanStatus('IA processando...');

      // Replace Supabase call with local API simulation
      const { product } = await analyzeProductImage(base64Image);

      if (product) {
        setScannedProduct(product);
        setShowResult(true);
        speak?.(`Produto identificado: ${product.name}. Preço sugerido: ${product.price} reais.`);
      } else {
        throw new Error('Produto não identificado');
      }
    } catch (e) {
      console.error('Scan error:', e);
      setScanStatus('Erro no processamento');
      showToast(
        "Erro",
        "Não foi possível identificar o produto. Tente novamente.",
        "destructive"
      );
    } finally {
      setIsProcessing(false);
    }
  };

  const confirmProduct = () => {
    if (scannedProduct) {
      onProductScanned(scannedProduct);
      onClose();
    }
  };

  const retryScan = () => {
    setShowResult(false);
    setScannedProduct(null);
    setScanStatus('');
  };

  const getMarketBadge = (position?: string) => {
    switch (position) {
      case 'premium':
        return <VaptBadge variant="pro">Premium</VaptBadge>;
      case 'econômico':
        return <VaptBadge variant="warning">Econômico</VaptBadge>;
      default:
        return <VaptBadge variant="success">Competitivo</VaptBadge>;
    }
  };

  return (
    <div className="fixed inset-0 bg-background-dark z-[100] flex flex-col fade-in">
      <canvas ref={canvasRef} className="hidden" />
      
      {/* Header */}
      <header className="sticky top-0 z-50 glass-panel border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={onClose} className="p-2 rounded-full hover:bg-surface-dark">
              <MaterialIcon name="close" />
            </button>
            <span className="font-bold text-white">Scanner VAPT.AI</span>
          </div>
          <VaptBadge variant="demo">DEMO</VaptBadge>
        </div>
      </header>

      {!showResult ? (
        /* Camera View */
        <div className="flex-1 flex flex-col items-center justify-center p-4">
          <div className="relative w-full max-w-md aspect-[3/4] rounded-3xl overflow-hidden border-2 border-primary/40 shadow-glow">
            <video ref={videoRef} autoPlay playsInline muted className="w-full h-full object-cover" />
            
            <div className="absolute inset-8 border border-primary/20 rounded-2xl pointer-events-none">
              <div className="absolute -top-1 -left-1 w-10 h-10 border-t-4 border-l-4 border-primary rounded-tl-xl" />
              <div className="absolute -top-1 -right-1 w-10 h-10 border-t-4 border-r-4 border-primary rounded-tr-xl" />
              <div className="absolute -bottom-1 -left-1 w-10 h-10 border-b-4 border-l-4 border-primary rounded-bl-xl" />
              <div className="absolute -bottom-1 -right-1 w-10 h-10 border-b-4 border-r-4 border-primary rounded-br-xl" />
            </div>
            
            <div className="absolute top-0 w-full h-1 bg-primary/50 animate-scan-vertical" style={{ boxShadow: '0 0 15px hsl(var(--primary) / 0.5)' }} />
            
            {isProcessing && (
              <div className="absolute inset-0 bg-background-dark/80 flex flex-col items-center justify-center gap-4 backdrop-blur-md">
                <div className="relative">
                  <MaterialIcon name="psychology" size="xl" className="text-primary animate-pulse" />
                  <div className="absolute inset-0 animate-spin" style={{ animationDuration: '1.5s' }}>
                    <MaterialIcon name="sync" size="xl" className="text-primary/50" />
                  </div>
                </div>
                <p className="text-xs font-black uppercase text-primary tracking-[0.3em] animate-pulse">
                  {scanStatus}
                </p>
              </div>
            )}
          </div>

          <div className="mt-8 flex flex-col items-center gap-4">
            <p className="text-xs text-white/50 font-medium uppercase tracking-widest text-center px-8">
              Aponte a câmera para o produto
            </p>
            <NeonButton
              onClick={processScan}
              disabled={isProcessing}
              icon="center_focus_strong"
              size="lg"
              className="px-12"
            >
              {isProcessing ? 'Processando...' : 'Identificar Produto'}
            </NeonButton>
          </div>
        </div>
      ) : (
        /* Result View */
        <div className="flex-1 flex flex-col p-4 overflow-y-auto">
          <div className="max-w-md mx-auto w-full space-y-6 py-8">
            <div className="text-center space-y-2">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                <MaterialIcon name="check_circle" size="xl" className="text-primary" />
              </div>
              <h2 className="text-xl font-bold text-white">Produto Identificado!</h2>
            </div>

            <GlassCard padding="lg" className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white">{scannedProduct?.name}</h3>
                  {scannedProduct?.brand && (
                    <p className="text-sm text-white/60">{scannedProduct.brand}</p>
                  )}
                </div>
                <VaptBadge variant="success">{scannedProduct?.category}</VaptBadge>
              </div>

              <div className="h-px bg-white/10" />

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <MaterialIcon name="auto_awesome" className="text-primary" />
                  <span className="text-sm font-semibold text-white">Sugestão de Preço IA</span>
                </div>
                
                <div className="flex items-end gap-3">
                  <span className="text-3xl font-black text-primary" style={{ textShadow: '0 0 10px #13ec5b' }}>
                    R$ {scannedProduct?.price?.toFixed(2)}
                  </span>
                  {getMarketBadge(scannedProduct?.market_position)}
                </div>

                {scannedProduct?.profit_margin && (
                  <div className="flex items-center gap-2 text-sm">
                    <MaterialIcon name="trending_up" className="text-primary" />
                    <span className="text-white/60">
                      Margem de lucro sugerida: <span className="font-bold text-primary">{scannedProduct.profit_margin}%</span>
                    </span>
                  </div>
                )}

                {scannedProduct?.price_reason && (
                  <div className="bg-surface-dark/50 rounded-xl p-3 border border-white/10">
                    <p className="text-xs text-white/70 leading-relaxed">
                      <MaterialIcon name="lightbulb" className="inline-block mr-1 text-yellow-400" />
                      {scannedProduct.price_reason}
                    </p>
                  </div>
                )}
              </div>
            </GlassCard>

            <div className="space-y-3">
              <NeonButton 
                onClick={confirmProduct} 
                className="w-full" 
                icon="add_circle"
                size="lg"
              >
                Adicionar ao Estoque
              </NeonButton>
              
              <NeonButton 
                variant="secondary" 
                onClick={retryScan} 
                className="w-full"
                icon="refresh"
              >
                Escanear Outro Produto
              </NeonButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoScanner;
