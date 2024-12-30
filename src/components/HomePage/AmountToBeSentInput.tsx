"use client"
import React, { useState } from 'react';
import Image from 'next/image';

import { FaGasPump } from "react-icons/fa";
import { useSendTransaction } from 'wagmi';
import { parseEther } from "viem";
import { FaCheckCircle } from "react-icons/fa";
import { useTransactionDetails } from '@/context/TransactionContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AmountToBeSentInput: React.FC = () => {

    const [gasFee, setGasFee] = useState<string | null>(null);
    const { amountToTransfer, setAmountToTransfer, receiversWalletAddress } = useTransactionDetails();
    const { sendTransaction, isPending, data: hash, isSuccess, error } = useSendTransaction();

    const CustomToast: React.FC<{ message: string; emoji: string }> = ({ message, emoji }) => (
        <div className='custom-toast'>
            <span className='emoji'>
                {emoji}
            </span>
            {message}
        </div>
    );

    async function sendTx() {
        if (!amountToTransfer) {
            console.log("amout to transfer is missing")
            toast(
                <CustomToast
                    message='Amount to transfer is missing.'
                    emoji='🚨'
                />
            );
            return;
        }
        if (!receiversWalletAddress) {
            toast(
                <CustomToast
                    message="Receiver's wallet address is missing."
                    emoji='❌'
                />
            );
            return;
        }
        try {
            toast(
                <CustomToast
                    message="Transaction is pending..." emoji="⏳"
                />,
                { autoClose: false }
            );
            await sendTransaction({
                to: receiversWalletAddress as `0x${string}`,
                value: parseEther(amountToTransfer.toString()),
            })
            toast.dismiss();
            // toast.success(
            //     <CustomToast
            //         message="Transaction successful!"
            //         emoji="✔️"
            //     />
            // );
        } catch (error) {
            toast.dismiss();
            toast.error(
                <CustomToast
                    message="Transaction failed!"
                    emoji="❌"
                />
            );
        }
    }

    return (
        <div className='flex-col p-4'>
            <ToastContainer
                hideProgressBar
                autoClose={3000}

                theme="dark"
                className="custom-toast-container"
            />
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
                    disabled={isPending}
                    className='flex items-center justify-center bg-rose-400 py-2 px-4 rounded-md font-semibold bg-opacity-85 hover:bg-opacity-45'>
                    send
                </button>



            </div>
            <div className='flex py-1 px-2 items-center '>
                <FaGasPump className='text-slate-300 text-sm' />
                <p className='text-sm px-2 text-slate-300'>gas fee:</p>
            </div>
            {isPending && <div>confirming transaction...</div>}
            {hash &&
                <div className='flex flex-col px-2 py-1 gap-2'>
                    <p className='flex gap-2  items-center text-sm text-neutral-400 '>
                        Transaction Successul
                        <FaCheckCircle className='text-green-500' />
                    </p>
                    <div className='flex flex-col px-2 py-1 border text-sm border-green-500 rounded-md bg-green-500 bg-opacity-10' >
                        <p className='text-neutral-400 font-medium'>
                            Transaction hash:
                        </p>
                        <p className='text-blue-500 underline'>
                            {hash}
                        </p>
                    </div>
                </div>
            }

        </div>
    )
}
export default AmountToBeSentInput;