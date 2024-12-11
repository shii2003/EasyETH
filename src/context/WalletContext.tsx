"use client";

import React, { createContext, useContext, useState } from "react";

export type AvailableWallets = "Metamask" | "Backpack" | "Safe" | "Injected" | "Phantom";

interface WalletContextProps {
    connectedWallet: AvailableWallets | null;
    setConnectedWallet: (wallet: AvailableWallets) => void;
}

const WalletContext = createContext<WalletContextProps | undefined>(undefined);

export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [connectedWallet, setConnectedWallet] = useState<AvailableWallets | null>(null);

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
