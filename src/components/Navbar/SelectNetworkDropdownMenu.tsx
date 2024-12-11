import React, { useEffect, useRef, useState } from 'react';
import { IoMdArrowDropdown } from "react-icons/io";

const MAINNET = 'Mainnet';
const SEPOLIA = 'Sepolia';
type availableNetworks = 'Mainnet' | 'Sepolia';


const SelectNetworkDropdownMenu: React.FC = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<availableNetworks>(MAINNET);
    const networkDropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => setIsOpen(prev => !prev);

    const selectOption = (option: availableNetworks) => {
        setSelectedOption(option);
        setIsOpen(false);
    }

    const handleClickOutside = (e: MouseEvent) => {
        if (networkDropdownRef.current && !networkDropdownRef.current.contains(e.target as Node)) {
            setIsOpen(false);
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        }
    }, []);
    return (
        <div className='relative' ref={networkDropdownRef}>
            <button
                className=' flex gap-2 p-2 bg-gradient-to-b from-rose-400 via-rose-500 to-rose-800 hover:bg-gradient-to-t from-rose-400 via-rose-500 to-rose-800   text-white rounded-md focus:outline-none font-semibold focus:rose-600'
                onClick={toggleDropdown}
            >
                {selectedOption}
                <IoMdArrowDropdown className='mt-2' />
            </button>
            {isOpen && (
                <ul className='absolute mt-2 bg-rose-400  bg-opacity-15  rounded-md shadow-lg w-full font-semibold'>
                    <li
                        className='p-2 cursor-pointer hover:bg-opacity-15 font-semibold'
                        onClick={() => selectOption(MAINNET)}
                    >
                        Mainnet
                    </li>
                    <li
                        className='p-2 cursor-pointer hover:rose-400'
                        onClick={() => selectOption(SEPOLIA)}
                    >
                        Sepolia
                    </li>
                </ul>
            )}
        </div>
    );


}
export default SelectNetworkDropdownMenu;


