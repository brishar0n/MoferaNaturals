import { useState, useEffect } from 'react'
import Sidebar from '../../../components/xyz/Sidebar';
import ReceivedPackagesTable from '../../../components/xyz/ReceivedPackagesTable';
import bell from '../../../assets/xyz/bell.svg';

const ReceivedPackage = ({ children }) => {
    return (
        <div className='bg-quaternary w-screen h-screen overflow-hidden flex flex-row'>
            <Sidebar/>

            <div className='flex-1 p-4'>
                <p className='text-left md:text-4xl ml-8 mt-16 font-bold w-full'>
                    Received Packages
                </p>

                <button className='absolute top-8 right-24 px-2 py-2 bg-nonary rounded-full'>
                    <img src={bell}></img>
                </button>

                <div className='mt-20'>
                    <ReceivedPackagesTable/>
                </div>
            </div>
        </div>
    )
}

export default ReceivedPackage;