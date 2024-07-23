import React, { createContext, useContext, useState, ReactNode } from 'react';
import Toast from '@/app/components/Toast';

interface ToastContextProps {
  showToast: (message: string) => void;
}

interface ToastProviderProps {
  children: ReactNode;
}

interface ToastState {
  message: string;
  isVisible: boolean;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const [toast, setToast] = useState<ToastState>({
    message: '',

    isVisible: false,
  });

  const showToast = (message: string) => {
    setToast({ message, isVisible: true });
    setTimeout(() => {
      setToast({ message: '', isVisible: false });
    }, 3000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast.isVisible && <Toast message={toast.message} />}
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextProps => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
