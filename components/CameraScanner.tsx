import React, { useRef, useEffect, useState } from 'react';
import { MaterialIcon } from './ui/MaterialIcon';
import { NeonButton } from './ui/NeonButton';
import { VaptBadge } from './ui/VaptBadge';
import { GlassCard } from './ui/GlassCard';
import { ScannedProduct, analyzeProductImage } from '../services/api';

interface CameraScannerProps {
    mode: 'product' | 'invoice';
    onClose: () => void;
    onProductScanned: (product: ScannedProduct) => void;
    onInvoiceScanned: (items: any[]) => void;
    speak?: (text: string) => void;
}

// Mock invoice data for simulation
const MOCK_INVOICE_ITEMS = [
    { name: 'Caixa de Parafusos 5mm', category: 'Fixadores', price: 25.50, quantity: 10 },
    { name: 'Luva de Segurança (Par)', category: 'EPI', price: 12.00, quantity: 20 },
    { name: 'Fita Veda Rosca 10m', category: 'Hidráulica', price: 3.75, quantity: 50 },
];

export const CameraScanner: React.FC<CameraScannerProps> = ({ mode, onClose, onProductScanned, onInvoiceScanned, speak }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [scanStatus, setScanStatus] = useState('');
    const [scannedData, setScannedData] = useState<ScannedProduct | any[] | null>(null);
    const [showResult, setShowResult] = useState(false);

    useEffect(() => {
        const startCamera = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
                if (videoRef.current) videoRef.current.srcObject = stream;
            } catch (e) {
                console.error("Camera error:", e);
                onClose();
            }
        };
        startCamera();
        return () => {
            if (videoRef.current?.srcObject) {
                (videoRef.current.srcObject as MediaStream).getTracks().forEach(t => t.stop());
            }
        };
    }, [onClose]);

    const processScan = async () => {
        setIsProcessing(true);
        setScanStatus(mode === 'product' ? 'Analisando produto...' : 'Lendo nota fiscal...');
        
        // Simulate API call and processing
        await new Promise(res => setTimeout(res, 2500)); 

        if (mode === 'product') {
            const { product } = await analyzeProductImage("mock-base64");
            setScannedData(product);
            speak?.(`Produto identificado: ${product.name}`);
        } else {
            setScannedData(MOCK_INVOICE_ITEMS);
            speak?.(`${MOCK_INVOICE_ITEMS.length} itens encontrados na nota fiscal.`);
        }
        
        setShowResult(true);
        setIsProcessing(false);
    };

    const confirmScan = () => {
        if (!scannedData) return;
        if (mode === 'product') {
            onProductScanned(scannedData as ScannedProduct);
        } else {
            onInvoiceScanned(scannedData as any[]);
        }
        onClose();
    };
    
    return (
        <div className="fixed inset-0 bg-background-dark z-[100] flex flex-col fade-in">
            <header className="sticky top-0 z-50 glass-panel border-b border-white/10">
                <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <button onClick={onClose} className="p-2 rounded-full hover:bg-surface-dark"><MaterialIcon name="close" /></button>
                        <span className="font-bold text-white">Scanner VAPT.AI</span>
                    </div>
                     <VaptBadge variant="pro">{mode === 'product' ? 'Produto' : 'Nota Fiscal'}</VaptBadge>
                </div>
            </header>

            {!showResult ? (
                 <div className="flex-1 flex flex-col items-center justify-center p-4">
                    <div className="relative w-full max-w-md aspect-[3/4] rounded-3xl overflow-hidden border-2 border-primary/40 shadow-glow">
                        <video ref={videoRef} autoPlay playsInline muted className="w-full h-full object-cover" />
                        <div className="absolute inset-8 border border-primary/20 rounded-2xl pointer-events-none" />
                        <div className="absolute top-0 w-full h-1 bg-primary/50 animate-scan-vertical" />
                        {isProcessing && (
                            <div className="absolute inset-0 bg-background-dark/80 flex flex-col items-center justify-center gap-4 backdrop-blur-md">
                                <MaterialIcon name="psychology" size="xl" className="text-primary animate-pulse" />
                                <p className="text-xs font-black uppercase text-primary tracking-[0.3em]">{scanStatus}</p>
                            </div>
                        )}
                    </div>
                    <div className="mt-8 flex flex-col items-center gap-4 w-full max-w-xs">
                        <p className="text-xs text-white/50 uppercase text-center">{mode === 'product' ? 'Aponte para o código de barras' : 'Centralize a nota fiscal'}</p>
                        <NeonButton onClick={processScan} disabled={isProcessing} icon="center_focus_strong" size="lg">
                            {isProcessing ? 'Processando...' : 'Escanear'}
                        </NeonButton>
                    </div>
                </div>
            ) : (
                <div className="flex-1 flex flex-col p-4 overflow-y-auto">
                    <div className="max-w-md mx-auto w-full space-y-6 py-8">
                         <div className="text-center space-y-2">
                             <h2 className="text-xl font-bold text-white">{mode === 'product' ? 'Produto Identificado!' : 'Itens da Nota Fiscal'}</h2>
                         </div>
                         <GlassCard padding="lg" className="space-y-4">
                            {mode === 'product' && scannedData && !Array.isArray(scannedData) && (
                                <>
                                    <h3 className="text-lg font-bold text-white">{(scannedData as ScannedProduct).name}</h3>
                                    <p className="text-3xl font-black text-primary">R$ {(scannedData as ScannedProduct).price.toFixed(2)}</p>
                                </>
                            )}
                            {mode === 'invoice' && scannedData && Array.isArray(scannedData) && (
                                <ul className="space-y-2">
                                    {scannedData.map((item, i) => (
                                        <li key={i} className="text-sm text-white/80">{item.quantity}x {item.name}</li>
                                    ))}
                                </ul>
                            )}
                         </GlassCard>
                         <div className="space-y-3">
                             <NeonButton onClick={confirmScan} className="w-full" icon="add_circle" size="lg">Adicionar ao Estoque</NeonButton>
                             <NeonButton variant="secondary" onClick={() => setShowResult(false)} className="w-full" icon="refresh">Escanear Novamente</NeonButton>
                         </div>
                    </div>
                </div>
            )}
        </div>
    );
};
