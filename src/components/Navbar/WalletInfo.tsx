"use client"

import React, { useState } from 'react';
import SelectNetworkDropdownMenu from './SelectNetworkDropdownMenu';

import ConnectWallet, { availableWallets } from '../HomePage/Buttons/ConnectWallet';

const WalletInfo: React.FC = () => {

    const [network, setNetwork] = useState<string>('Mainnet');

    const handleNetworkChange = (network: string) => {
        setNetwork(network);

    };

    return (
        <div className='flex gap-5'>
            <SelectNetworkDropdownMenu />
            <ConnectWallet
                buttonStyle="bg-gradient-to-b from-rose-400 via-rose-500 to-rose-800 hover:bg-gradient-to-t from-rose-400 via-rose-500 to-rose-800"
                buttonTitle='Connect Wallet'
            />
        </div>
    )
}
export default WalletInfo;
