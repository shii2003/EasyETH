"use client"
import React, { useState } from 'react';
import Image from 'next/image';

import { FaGasPump } from "react-icons/fa";
import { useSendTransaction } from 'wagmi';
import { parseEther } from "viem";
import { useTransactionDetails } from '@/context/TransactionContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AmountToBeSentInput: React.FC = () => {

    const [gasFee, setGasFee] = useState<string | null>(null);
    const { amountToTransfer, setAmountToTransfer, receiversWalletAddress } = useTransactionDetails();
    const { sendTransaction, isPending, data: hash, isSuccess, error } = useSendTransaction();

    async function sendTx() {
        if (!amountToTransfer || !receiversWalletAddress) {
            toast.error("Missing required fields for transaction.", {
                position: "top-right",
                theme: "dark",
                progressClassName: "bg-rose-400"

            });
            return;
        };
        try {
            await sendTransaction({
                to: receiversWalletAddress as `0x${string}`,
                value: parseEther(amountToTransfer.toString()),
            })
        } catch (error) {
            toast.error("Transaction failed:", {
                position: "top-right",
                theme: "dark",
                progressClassName: "bg-rose-400"
            });
        }
    }

    return (
        <div className='flex-col p-4'>
            <ToastContainer />
            <div className='flex  gap-3'>
                <div className='flex-col grow '>
                    <input
                        type='number'
                        className='w-full px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-400'
                        placeholder='0.05 wei'
                        value={amountToTransfer ?? ""}
                        onChange={(e) => {
                            const inputValue = e.target.value;
                            if (!isNaN(Number(inputValue)) || inputValue === "") {
                                setAmountToTransfer(inputValue ? parseFloat(inputValue) : null);
                            }
                        }}

                    />
                </div>
                <div className='flex items-center justify-center bg-rose-400 bg-opacity-85 py-2 px-4 rounded-md'>
                    <p className='font-semibold'>ETH</p>
                    <Image
                        src='/eth-logo.svg'
                        alt='ethLogo'
                        width={25}
                        height={25}
                    />
                </div>

                <button
                    onClick={() => sendTx()}
                    disabled={!amountToTransfer || !receiversWalletAddress || isPending}
                    className='flex items-center justify-center bg-rose-400 py-2 px-4 rounded-md font-semibold bg-opacity-85 hover:bg-opacity-45'>
                    send
                </button>



            </div>
            <div className='flex py-1 px-2 items-center '>
                <FaGasPump className='text-slate-300 text-sm' />
                <p className='text-sm px-2 text-slate-300'>gas fee:</p>
            </div>
            {isPending && <div>confirming transaction...</div>}
            {hash && <div> Transaction hash: {hash}</div>}
        </div>
    )
}
export default AmountToBeSentInput;