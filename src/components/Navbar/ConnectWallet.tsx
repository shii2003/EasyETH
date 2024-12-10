import { useState } from "react";

import { ImCancelCircle } from "react-icons/im";

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
                className="p-2 bg-gradient-to-b from-rose-400 via-rose-500 to-rose-800  text-white rounded-md font-semibold"
            >
                {connectedWallet ? connectedWallet : "Connect Wallet"}
            </button>

            {isMenuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">

                    <div className="flex-col gap-3 bg-neutral-900 flex  rounded-lg shadow-md w-[320px] max-w-md p-6 relative border-2 border-neutral-800">
                        <button
                            onClick={closeMenu}
                            className=" bg-rose-400 absolute top-2 right-2 p-1 rounded-full text-white hover:bg-rose-500"
                        >
                            <ImCancelCircle
                                className="text-rose-50"
                                width={20}
                                height={20}
                            />
                        </button>
                        <div className="flex w-full flex-col items-center p-3  gap-2 ">
                            {["Injected", "Metamask", "Safe", "Backpack"].map((option) => (
                                <button
                                    key={option}
                                    onClick={() => handleWalletSelection(option)} // Set wallet and close menu
                                    className="px-4 py-3 w-full   rounded-md font font-semibold border-2 border-neutral-800 hover:bg-neutral-800 text-white"
                                >
                                    {option}
                                </button>
                            ))}
                        </div>

                    </div>
                </div>
            )

            }
        </>
    )
}
export default ConnectWallet;