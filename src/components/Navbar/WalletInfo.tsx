"use client"

import React, { useState } from 'react';
import SelectNetworkDropdownMenu from './SelectNetworkDropdownMenu';

const WalletInfo: React.FC = () => {
    const [network, setNetwork] = useState<string>('Mainnet');
    const handleNetworkChange = (network: string) => {
        setNetwork(network);

    };
    return (
        <div>
            <SelectNetworkDropdownMenu />
        </div>
    )
}
export default WalletInfo;
