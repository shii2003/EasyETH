import React from 'react';

type SendersWindowProps = {

};

const SendersWindow: React.FC<SendersWindowProps> = () => {

    return (
        <div className='border border-neutral-800 rounded-md'>
            <div className=' w-full p-4'>
                <p
                    className='text-slate-300 text-2xl font-semibold  mb-2'
                >From</p>
                <div
                    className='w-full px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-400'
                >
                    address
                </div>
            </div>
        </div>
    )
}
export default SendersWindow;