import React, { createContext, useContext, useState, ReactNode } from 'react';
import Toast from '@/app/components/Toast';

interface ToastContextProps {
  showToast: (message: string, type?: 'error' | 'success') => void;
}

interface ToastProviderProps {
  children: ReactNode;
}

interface ToastState {
  message: string;
  isVisible: boolean;
  type: 'error' | 'success';
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const [toast, setToast] = useState<ToastState>({
    message: '',
    type: 'error',
    isVisible: false,
  });

  const showToast = (message: string, type: 'error' | 'success' = 'error') => {
    setToast({ message, type, isVisible: true });
    setTimeout(() => {
      setToast({ message: '', type, isVisible: false });
    }, 5000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast.isVisible && <Toast message={toast.message} type={toast.type} />}
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
