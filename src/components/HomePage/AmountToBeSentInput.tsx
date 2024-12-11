"use client"
import React, { useState } from 'react';
import Image from 'next/image';

import { FaGasPump } from "react-icons/fa";

const AmountToBeSentInput: React.FC = () => {

    const [gasFee, setGasFee] = useState<string | null>(null);
    const [amoutToTransfer, setAmountToTransfer] = useState<number>(0);
    return (
        <div className='flex-col p-4'>
            <div className='flex  gap-3'>

                <input className='w-full px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-400'
                    placeholder='0.05'
                />
                <div className='flex items-center justify-center bg-rose-400 bg-opacity-85 py-2 px-4 rounded-md'>
                    <p className='font-semibold'>ETH</p>
                    <Image
                        src='/eth-logo.svg'
                        alt='ethLogo'
                        width={25}
                        height={25}
                    />
                </div>
                <div className='flex items-center justify-center bg-rose-400 py-2 px-4 rounded-md font-semibold bg-opacity-85 hover:bg-opacity-45'>
                    send
                </div>

            </div>
            <div className='flex py-1 px-2 items-center '>
                <FaGasPump className='text-slate-300 text-sm' />
                <p className='text-sm px-2 text-slate-300'>gas fee:</p>
            </div>

        </div>
    )
}
export default AmountToBeSentInput;