import React from 'react';
import WalletInfo from './WalletInfo';

const Navbar: React.FC = () => {

    return (
        <div>
            <div className=" mx-auto flex justify-between items-center p-2 pl-5 pr-5 max-w-screen-xl">
                {/* Logo */}
                <div className=" pb-3 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-rose-200 via-rose-500 to-rose-900 text-transparent bg-clip-text">
                    EasyETH
                </div>
                <WalletInfo />

            </div>
        </div>
    )
}
export default Navbar;