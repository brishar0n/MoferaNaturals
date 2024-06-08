import { useState, useEffect } from 'react'
import Sidebar from '../../../components/xyz/Sidebar';
import ArrivedPackagesTable from '../../../components/xyz/ArrivedPackagesTable';
import profilepic from "../../../assets/desktop/profilepicdesktop.svg";
import bell from "../../../assets/desktop/bellicon.svg";

const ArrivedPackages = ({ children }) => {
    return (
        <div className='bg-primary w-screen h-screen overflow-hidden flex'>
            <Sidebar />
            <div className='flex-1 bg-white rounded-xl mt-3 mr-3 mb-3 p-4 overflow-y-auto'>
                <div className="flex justify-between items-center mb-2">
                    <h1 className='text-4xl font-semibold text-left ml-6 mt-6'>Arrived Packages</h1>

                    <span className="flex items-center mr-6 mt-6">
                        <img src={bell} className="mr-4" alt="notification" />
                        <img src={profilepic} alt='profile picture' />
                    </span>
                </div>

                <h2 className='text-left font-medium text-sm ml-6 mb-5'> Track the status of your packages: </h2>
          
                <div className='bg-quinary rounded-xl mt-4 mx-6'>
                    <ArrivedPackagesTable/>
                </div>
            </div>
        </div>
    )
}

export default ArrivedPackages;
