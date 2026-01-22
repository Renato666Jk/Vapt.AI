import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/Dialog';
import { NeonButton } from './ui/NeonButton';
import { MaterialIcon } from './ui/MaterialIcon';

interface WhatsAppSettingsProps {
    isOpen: boolean;
    onClose: () => void;
}

export const WhatsAppSettings: React.FC<WhatsAppSettingsProps> = ({ isOpen, onClose }) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                        <MaterialIcon name="share" className="text-green-400" />
                        Relatórios via WhatsApp
                    </DialogTitle>
                    <DialogDescription>
                        Configure seu número para receber relatórios de estoque automaticamente.
                    </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 pt-4">
                     <label className="flex flex-col gap-2">
                        <span className="text-white text-xs font-bold uppercase tracking-wider ml-1">Seu Número</span>
                        <div className="relative group">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-primary transition-colors material-symbols-outlined">phone</span>
                            <input className="w-full bg-db-background-dark text-white border border-db-secondary rounded-lg h-12 pl-12 pr-4 focus:ring-0 focus:border-primary transition-all placeholder-white/30 text-base" placeholder="(55) 99123-4567" type="tel" />
                        </div>
                    </label>
                    <NeonButton onClick={onClose} icon="save">
                        Salvar Configuração
                    </NeonButton>
                </div>
            </DialogContent>
        </Dialog>
    );
};
