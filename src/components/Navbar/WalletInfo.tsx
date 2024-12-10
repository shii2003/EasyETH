"use client"

import React, { useState } from 'react';
import SelectNetworkDropdownMenu from './SelectNetworkDropdownMenu';
import ConnectWallet from './ConnectWallet';

const WalletInfo: React.FC = () => {
    const [network, setNetwork] = useState<string>('Mainnet');
    const handleNetworkChange = (network: string) => {
        setNetwork(network);

    };
    return (
        <div className='flex gap-5'>
            <SelectNetworkDropdownMenu />
            <ConnectWallet />
        </div>
    )
}
export default WalletInfo;
