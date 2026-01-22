import { useState, useCallback } from 'react';

export const useVoiceFeedback = () => {
    const [voiceFeedback, setVoiceFeedback] = useState<string | null>(null);

    const speak = useCallback((text: string) => {
        setVoiceFeedback(text);
        
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'pt-BR';
            window.speechSynthesis.speak(utterance);
        }

        setTimeout(() => {
            setVoiceFeedback(null);
        }, 4000);
    }, []);

    return { voiceFeedback, speak };
};
