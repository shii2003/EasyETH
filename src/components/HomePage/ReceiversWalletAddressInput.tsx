"use client";

import React, { useState } from 'react';

const ReceiversWalletAddressInput: React.FC = () => {

    const [receiversWalletAddress, setReceiversWalletAddress] = useState<string>("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setReceiversWalletAddress(e.target.value);
    }

    return (
        <div className='p-4 flex gap-3 rounded-md bg-gradient-to-b from-rose-400  to-rose-700 '>

            <div className=' w-full'>
                <p
                    className='text-white text-2xl font-semibold  mb-2'
                >To</p>
                <p className=' px-2 text-sm text-white'>Enter recivers wallet address</p>
                <input
                    type='text'
                    value={receiversWalletAddress}
                    onChange={handleInputChange}
                    placeholder='0x1234........abcd'
                    className='w-full px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-400'
                />
            </div>
        </div>
    )
}
export default ReceiversWalletAddressInput;