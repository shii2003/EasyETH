import React from 'react';
import ReceiversWalletAddressInput from './ReceiversWalletAddressInput';
import AmountToBeSentInput from './AmountToBeSentInput';



const SendToWindow: React.FC = () => {

    return (
        <div className='border border-neutral-800 rounded-md'>
            <ReceiversWalletAddressInput />
            <AmountToBeSentInput />
        </div>
    )
}
export default SendToWindow;