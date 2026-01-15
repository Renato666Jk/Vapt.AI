
import React from 'react';

const GlitchLetter: React.FC<{ char: string, delay: number }> = ({ char, delay }) => (
    <span
        className="animate-glitch"
        style={{
            animationDelay: `${delay}ms`,
            textShadow: '0 0 5px currentColor, 0 0 10px currentColor',
        }}
    >
        {char}
    </span>
);

const TransitionScreen: React.FC = () => {
    const logoText = "VAPT.AI";

    return (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background-dark fade-in">
            {/* Scan lines effect */}
            <div
                className="absolute inset-0 opacity-20 animate-scan-lines"
                style={{
                    backgroundImage: 'linear-gradient(0deg, transparent 50%, rgba(19, 236, 91, 0.5) 50%)',
                    backgroundSize: '100% 4px',
                }}
            ></div>
            
            {/* Grid pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            
            <div className="relative flex flex-col items-center justify-center gap-4">
                <span className="material-symbols-outlined text-primary text-6xl animate-glitch" style={{ animationDelay: '100ms', textShadow: '0 0 15px #13ec5b' }}>
                    inventory_2
                </span>
                <h1 className="text-white tracking-tighter text-5xl font-bold leading-none flex">
                    {logoText.split('').map((char, index) => {
                        if (char === '.') {
                            return <span key={index} className="text-primary">{char}</span>;
                        }
                        if (char === 'A' || char === 'I') {
                            return <GlitchLetter key={index} char={char} delay={index * 50 + 150} />;
                        }
                        return <GlitchLetter key={index} char={char} delay={index * 50} />;
                    })}
                </h1>
                <p className="text-primary/50 text-xs font-mono uppercase tracking-widest mt-2 animate-pulse">
                    Initializing Interface...
                </p>
            </div>
        </div>
    );
};

export default TransitionScreen;
