import { useState } from "react";

type availableWallets = 'Metamask' | 'Backpack' | 'Safe' | 'Injected';

const ConnectWallet: React.FC = () => {

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [connectedWallet, setConnectedWallet] = useState<availableWallets | null>(null);

    const openMenu = () => setIsMenuOpen(true);
    const closeMenu = () => setIsMenuOpen(false);

    const handleWalletSelection = (walletName: availableWallets) => {
        setConnectedWallet(walletName);
        closeMenu();
    }


    return (
        <>
            <button
                onClick={openMenu}
                className="p-2 bg-rose-800 bg-opacity-40 border border-rose-900 text-white rounded-md font-semibold"
            >
                {connectedWallet ? connectedWallet : "Connect Wallet"}
            </button>

            {isMenuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">

                    <div className="bg-gradient-to-t from-rose-700 from-10%  to-neutral-900 to-90% flex  rounded-lg shadow-lg border-neutral-800 border max-w-md p-6 relative">

                        <div className="flex  flex-col items-center p-3  gap-2 ">
                            {["Injected", "Metamask", "Safe", "Backpack"].map((option) => (
                                <button
                                    key={option}
                                    onClick={() => handleWalletSelection(option)} // Set wallet and close menu
                                    className="px-4 py-2 w-full bg-neutral-900   rounded-md hover:bg-neutral-800 text-white"
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                        <button
                            onClick={closeMenu}
                            className="absolute top-2 p-2 left-2 text-gray-600 hover:text-gray-800"
                        >
                            ✖
                        </button>
                    </div>
                </div>
            )

            }
        </>
    )
}
export default ConnectWallet;