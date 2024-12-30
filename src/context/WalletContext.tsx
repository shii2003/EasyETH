"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type AvailableWallets = string | null;
export const CONNECTED_WALLET = 'connectedWallet';

interface WalletContextProps {
    connectedWallet: AvailableWallets | null;
    setConnectedWallet: (wallet: AvailableWallets) => void;
}

const WalletContext = createContext<WalletContextProps | undefined>(undefined);

export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [connectedWallet, setConnectedWallet] = useState<AvailableWallets | null>(
        () => {
            if (typeof window !== "undefined") {
                return localStorage.getItem(CONNECTED_WALLET);
            }
            return null;
        }
    );

    useEffect(() => {
        if (connectedWallet) {
            localStorage.setItem(CONNECTED_WALLET, connectedWallet);
        } else {
            localStorage.removeItem(CONNECTED_WALLET);
        }
    }, [connectedWallet]);
    return (
        <WalletContext.Provider value={{ connectedWallet, setConnectedWallet }}>
            {children}
        </WalletContext.Provider>
    );
};

export const useWallet = (): WalletContextProps => {
    const context = useContext(WalletContext);
    if (!context) {
        throw new Error("useWallet must be used within a WalletProvider");
    }
    return context;
};
