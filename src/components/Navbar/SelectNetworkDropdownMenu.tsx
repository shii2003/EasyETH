import React, { useRef, useState } from 'react';

type availableNetworks = 'Mainnet' | 'Sepolia';

const SelectNetworkDropdownMenu: React.FC = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<availableNetworks>('Mainnet');
    const networkDropdownRef = useRef<HTMLDivElement>(null);

    return (
        <div className='relative' ref={networkDropdownRef}>
            <button
                className='p-2 bg-rose-800 bg-opacity-40 border-rose-900 text-white rounded-md focus:outline-none focus:rose-600'
            >
                {selectedOption}
            </button>
            {isOpen && (
                <ul className='absolute mt-2 bg-rose-800 border border-rose-950 rounded-md shadow-lg w-full'>
                    <li >
                        Mainnet
                    </li>
                </ul>
            )}
        </div>
    );


}
export default SelectNetworkDropdownMenu;


