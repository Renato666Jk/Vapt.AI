import React from 'react';
import { MaterialIcon } from './ui/MaterialIcon';
import { NeonButton } from './ui/NeonButton';

interface InvoiceTabProps {
    onStartScan: () => void;
}

export const InvoiceTab: React.FC<InvoiceTabProps> = ({ onStartScan }) => {
    return (
        <div className="space-y-6 flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center border-2 border-primary/30">
                <MaterialIcon name="receipt_long" size="xl" className="text-primary" />
            </div>
            <div>
                <h1 className="text-2xl font-bold text-white">Importar Nota Fiscal</h1>
                <p className="text-sm text-white/50 mt-2 max-w-md">
                    Use a câmera para escanear uma nota fiscal e adicionar
                    automaticamente múltiplos produtos ao seu inventário.
                </p>
            </div>
            <div className="w-full max-w-xs pt-4">
                <NeonButton onClick={onStartScan} icon="camera_alt" size="lg">
                    Escanear Nota Fiscal
                </NeonButton>
            </div>
        </div>
    );
};
