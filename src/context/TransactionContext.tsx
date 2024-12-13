"use client"

import { createContext, useContext, useState } from "react"



interface TransactionContextProps {
    receiversWalletAddress: string;
    setReceiversWalletAddress: (address: string) => void;
    amountToTransfer: number | null;
    setAmountToTransfer: (amount: number | null) => void;
};

const TransactionContext = createContext<TransactionContextProps | undefined>(undefined);
export const TransactionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [receiversWalletAddress, setReceiversWalletAddress] = useState<string>("");
    const [amountToTransfer, setAmountToTransfer] = useState<number | null>(null);

    return (
        <TransactionContext.Provider
            value={{ receiversWalletAddress, setReceiversWalletAddress, amountToTransfer, setAmountToTransfer }}
        >
            {children}
        </TransactionContext.Provider>
    );
};

export const useTransactionDetails = (): TransactionContextProps => {
    const context = useContext(TransactionContext);
    if (!context) {
        throw new Error("useTransaction must be used within a TransactionProvider");
    }
    return context;
}
