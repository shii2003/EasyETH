import React, { useState } from 'react';
import ConnectWallet, { availableWallets } from './Buttons/ConnectWallet';
import Disconnect from './Buttons/Disconnect';
import { useAccount } from 'wagmi';

type SendersWindowProps = {

};

const SendersWindow: React.FC<SendersWindowProps> = () => {
    const { address } = useAccount();
    return (
        <div className='border border-neutral-800 rounded-md w-full'>
            <div className=' w-full p-4'>
                <p
                    className='text-slate-300 text-2xl font-semibold  mb-2'
                >From</p>
                <div className='flex gap-2'>
                    <div
                        className={`w-full px-4 py-2  font-semibold bg-neutral-900 border-b-2 border-neutral-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-400 ${address ? 'text-white' : 'text-gray-600'}`}
                    >
                        {address ? address : "connect wallet to see address"}
                    </div>
                    <ConnectWallet
                        buttonStyle="bg-rose-400 bg-opacity-85"
                        buttonTitle="connect"
                    />
                </div>
                <div className='flex mt-5 items-center justify-center'>
                    <Disconnect />
                </div>
            </div>
        </div>
    )
}
export default SendersWindow;