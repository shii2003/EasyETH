import React from 'react';
import SendToWindow from './SendToWindow';
import SendersWindow from './SendersWindow';
import Navbar from '../Navbar/Navbar';



const HomePage: React.FC = () => {

    return (
        <>
            <Navbar />
            <div className='flex items-center  flex-col gap-6'>
                <div className='flex items-center justify-center flex-col gap-4  mt-14'>
                    <SendToWindow />
                    <SendersWindow />
                </div>
            </div>
        </>
    )
}
export default HomePage;