'use client'
import { useWallet } from "@/context/WalletContext";
import { useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import { useConnect } from "wagmi";


export type availableWallets = 'Metamask' | 'Backpack' | 'Safe' | 'Injected' | 'Phantom';

type ConnectWalletProps = {
    buttonStyle: string;
    buttonTitle: string;
};

const ConnectWallet: React.FC<ConnectWalletProps> = ({ buttonStyle, buttonTitle }) => {
    const { connectors, connect } = useConnect();
    const { connectedWallet, setConnectedWallet } = useWallet();
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const openMenu = () => setIsMenuOpen(true);
    const closeMenu = () => setIsMenuOpen(false);

    const handleWalletSelection = async (connector: any) => {
        try {
            await connect({ connector });
            setConnectedWallet(connector.name);
            closeMenu();
        } catch (error) {
            console.log("Failed to connect wallet:", error);
        }
    }


    return (
        <>
            <button
                onClick={openMenu}
                className={`p-2 text-white rounded-md font-semibold ${buttonStyle}`}
            >
                {connectedWallet ? connectedWallet : buttonTitle}
            </button>

            {isMenuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="flex-col gap-3 bg-neutral-900 flex rounded-lg shadow-md w-[320px] max-w-md p-6 relative border-2 border-neutral-800">
                        <button
                            onClick={closeMenu}
                            className="bg-rose-400 absolute top-2 right-2 p-1 rounded-full text-white hover:bg-rose-500"
                        >
                            <ImCancelCircle className="text-rose-50" width={20} height={20} />
                        </button>
                        <div className="flex w-full flex-col items-center p-3 gap-2">
                            {connectors.map((connector) => (
                                <button
                                    key={connector.uid}
                                    onClick={() => handleWalletSelection(connector)} // Set wallet and close menu
                                    className="px-4 py-3 w-full rounded-md font font-semibold border-2 border-neutral-800 hover:bg-neutral-800 text-white"
                                >
                                    {connector.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
export default ConnectWallet;