import { useState, useEffect } from 'react'
import Sidebar from '../../../components/xyz/Sidebar';
import ArrivedPackagesTable from '../../../components/xyz/ArrivedPackagesTable';
import bell from '../../../assets/xyz/bell.svg';

const ArrivedPackages = ({ children }) => {
    return (
        <div className='bg-quaternary w-screen h-screen overflow-hidden flex flex-row'>
            <Sidebar/>

            <div className='flex-1 p-4'>
                <p className='text-left md:text-4xl ml-8 mt-16 font-bold w-full'>
                    Arrived Packages
                </p>

                <button className='absolute top-8 right-24 px-2 py-2 bg-nonary rounded-full'>
                    <img src={bell}></img>
                </button>

                <div className='mt-20'>
                    <ArrivedPackagesTable/>
                </div>
            </div>
        </div>
    )
}

export default ArrivedPackages;
