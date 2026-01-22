
import React, { useEffect } from 'react';
import { ToastMessage } from '../../App';
import { MaterialIcon } from './MaterialIcon';

interface ToastItemProps {
  toast: ToastMessage;
  onRemove: (id: number) => void;
}

const ToastItem: React.FC<ToastItemProps> = ({ toast, onRemove }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onRemove(toast.id);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [toast.id, onRemove]);

  const variantClasses = {
    success: {
      bg: 'bg-green-900/50 border-primary/50',
      icon: 'check_circle',
      iconColor: 'text-primary',
    },
    destructive: {
      bg: 'bg-red-900/50 border-red-500/50',
      icon: 'error',
      iconColor: 'text-red-500',
    },
  };

  const selectedVariant = variantClasses[toast.variant];

  return (
    <div className={`w-full max-w-sm rounded-xl p-4 shadow-2xl flex items-start gap-3 glass-panel border ${selectedVariant.bg} fade-in`}>
      <MaterialIcon name={selectedVariant.icon} className={selectedVariant.iconColor} />
      <div className="flex-1">
        <h3 className="font-bold text-white text-sm">{toast.title}</h3>
        <p className="text-white/70 text-xs mt-1">{toast.description}</p>
      </div>
      <button onClick={() => onRemove(toast.id)} className="text-white/50 hover:text-white">
        <MaterialIcon name="close" size="sm" />
      </button>
    </div>
  );
};


interface ToastContainerProps {
    toasts: ToastMessage[];
    setToasts: React.Dispatch<React.SetStateAction<ToastMessage[]>>;
}

const ToastContainer: React.FC<ToastContainerProps> = ({ toasts, setToasts }) => {
    const handleRemove = (id: number) => {
        setToasts(currentToasts => currentToasts.filter(t => t.id !== id));
    };

    return (
        <div className="fixed top-4 right-4 z-[9999] w-full max-w-sm space-y-3">
            {toasts.map(toast => (
                <ToastItem key={toast.id} toast={toast} onRemove={handleRemove} />
            ))}
        </div>
    );
};

export default ToastContainer;
