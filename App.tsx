
import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage';
import FeaturesPage from './components/FeaturesPage';
import HowItWorksPage from './components/HowItWorksPage';
import TransitionScreen from './components/LoadingScreen';
import DashboardPage from './components/DashboardPage';
import DemoPage from './components/DemoPage';
import { ScannedProduct } from './services/api';
import ToastContainer from './components/ui/Toast';

type Page = 'landing' | 'login' | 'features' | 'how-it-works' | 'dashboard' | 'demo';

export interface ToastMessage {
    id: number;
    title: string;
    description: string;
    variant: 'success' | 'destructive';
}

const App: React.FC = () => {
    const [page, setPage] = useState<Page>('landing');
    const [renderedPage, setRenderedPage] = useState<Page>(page);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [toasts, setToasts] = useState<ToastMessage[]>([]);

    const showToast = useCallback((title: string, description: string, variant: 'success' | 'destructive' = 'success') => {
        const newToast: ToastMessage = { id: Date.now(), title, description, variant };
        setToasts(currentToasts => [...currentToasts, newToast]);
    }, []);

    const navigate = (targetPage: Page) => {
        if (page === targetPage || isTransitioning) return;
        
        setIsTransitioning(true);
        setPage(targetPage);
        
        setTimeout(() => {
            setRenderedPage(targetPage);
            window.scrollTo(0, 0); // Scroll to top on page change
            setTimeout(() => {
                setIsTransitioning(false);
            }, 300);
        }, 800);
    };
    
    const handleScrollToPricing = () => {
        if (page === 'landing' && !isTransitioning) {
            document.getElementById('pricing-section')?.scrollIntoView({ behavior: 'smooth' });
            return;
        }

        setIsTransitioning(true);
        setPage('landing');

        setTimeout(() => {
            setRenderedPage('landing');
             setTimeout(() => {
                document.getElementById('pricing-section')?.scrollIntoView({ behavior: 'smooth' });
                setIsTransitioning(false);
            }, 300);
        }, 800);
    };
    
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        setIsLoaded(true);
    }, []);
    
    const speak = (text: string) => {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'pt-BR';
            window.speechSynthesis.speak(utterance);
        }
    };

    const renderAppPage = () => {
        switch(renderedPage) {
            case 'dashboard':
                return <DashboardPage />;
            case 'demo':
                return <DemoPage onNavigate={navigate} showToast={showToast} speak={speak} />;
            default:
                return null;
        }
    }

    const renderMarketingContent = () => {
        switch (renderedPage) {
            case 'login':
                return <LoginPage onNavigateHome={() => navigate('landing')} onLoginSuccess={() => navigate('dashboard')} onAccessDemo={() => navigate('demo')} />;
            case 'features':
                return <FeaturesPage />;
            case 'how-it-works':
                return <HowItWorksPage />;
            case 'landing':
            default:
                return (
                    <>
                        <HeroSection />
                        <FeaturesSection />
                        <PricingSection />
                    </>
                );
        }
    };

    const isAppPage = renderedPage === 'dashboard' || renderedPage === 'demo';

    return (
        <>
            <ToastContainer toasts={toasts} setToasts={setToasts} />
            {isTransitioning && <TransitionScreen />}
            
            {isAppPage ? (
                <div className={`transition-opacity duration-300 ${isLoaded && !isTransitioning ? 'opacity-100' : 'opacity-0'}`}>
                    {renderAppPage()}
                </div>
            ) : (
                <div className={`transition-opacity duration-300 ${isLoaded && !isTransitioning ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="fixed inset-0 z-0 bg-grid-pattern pointer-events-none"></div>
                    <div className="fixed top-[-10%] right-[-10%] w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
                    <div className="fixed bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

                    <div className="relative z-10 flex flex-col min-h-screen w-full">
                        <Header 
                            onLoginClick={() => navigate('login')}
                            onNavigateHome={() => navigate('landing')}
                            onNavigateToFeatures={() => navigate('features')}
                            onNavigateToHowItWorks={() => navigate('how-it-works')}
                            onScrollToPricing={handleScrollToPricing}
                        />
                        <main className="flex-1 flex flex-col w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-10 gap-12 md:gap-16">
                            {renderMarketingContent()}
                        </main>
                        <Footer />
                    </div>
                </div>
            )}
        </>
    );
};

export default App;
