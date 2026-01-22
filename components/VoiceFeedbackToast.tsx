import React from 'react';
import { MaterialIcon } from './ui/MaterialIcon';

interface VoiceFeedbackToastProps {
    message: string | null;
}

export const VoiceFeedbackToast: React.FC<VoiceFeedbackToastProps> = ({ message }) => {
    if (!message) return null;

    return (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[100] w-full max-w-md px-4 fade-in">
            <div className="bg-db-surface/80 backdrop-blur-xl border border-primary/30 rounded-lg p-3 flex items-center justify-center gap-3 shadow-2xl">
                <MaterialIcon name="mic" className="text-primary animate-pulse" />
                <p className="text-sm text-white font-medium text-center">{message}</p>
            </div>
        </div>
    );
};
