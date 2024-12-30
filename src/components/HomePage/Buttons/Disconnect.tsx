'use client';
import { useWallet } from '@/context/WalletContext';
import React from 'react';
import { useDisconnect } from 'wagmi';

type DisconnectProps = {

};

const Disconnect: React.FC<DisconnectProps> = () => {
    const { disconnect } = useDisconnect();
    const { connectedWallet, setConnectedWallet } = useWallet();

    const handleDisconnect = () => {
        disconnect();
        setConnectedWallet(null);
    }
    return (
        <button
            disabled={connectedWallet === null}
            onClick={handleDisconnect}
            className={` ${connectedWallet === null ? ' bg-opacity-45 cursor-not-allowed' : ' bg-opacity-85 cursor-pointer '} px-4 py-2 bg-rose-400  rounded-md font-semibold hover:bg-opacity-45`}
        >
            disconnect
        </button>
    )
}
export default Disconnect;