"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

type AuthModalView = 'LOGIN' | 'PAYMENT' | 'HIDDEN';

interface AuthModalContextType {
  view: AuthModalView;
  openLogin: () => void;
  openPayment: () => void;
  closeModal: () => void;
}

const AuthModalContext = createContext<AuthModalContextType | undefined>(undefined);

export function AuthModalProvider({ children }: { children: ReactNode }) {
  const [view, setView] = useState<AuthModalView>('HIDDEN');

  const openLogin = () => setView('LOGIN');
  const openPayment = () => setView('PAYMENT');
  const closeModal = () => setView('HIDDEN');

  return (
    <AuthModalContext.Provider value={{ view, openLogin, openPayment, closeModal }}>
      {children}
    </AuthModalContext.Provider>
  );
}

export function useAuthModal() {
  const context = useContext(AuthModalContext);
  if (context === undefined) {
    throw new Error('useAuthModal must be used within an AuthModalProvider');
  }
  return context;
}
