import { useState } from 'react'
import { IoNotifications } from "react-icons/io5";
import { motion } from "framer-motion";
import SearchForm from "./Search";

import Sidebar from '../../../components/xyz/Sidebar';
import PackagesTable from '../../../components/xyz/PackagesTable';
import profilepic from "../../../assets/desktop/profilepicdesktop.svg";

const Packages = ({ children }) => {

    const [isSidebarMinimized, setIsSidebarMinimized] = useState(false);

    const toggleSidebar = () => {
      setIsSidebarMinimized(!isSidebarMinimized);
    }; 

    return (
        <div className='bg-primary w-screen h-screen overflow-hidden flex'>
            <Sidebar isMinimized={isSidebarMinimized} toggleSidebar={toggleSidebar} />
            <div className='flex-1 bg-white rounded-3xl mt-3 mr-3 mb-3 p-4 overflow-y-auto relative'>
                <div className="flex justify-between items-center">
                    <h1 className='text-4xl font-semibold text-left ml-6 mt-3'>Packages</h1>

                    <div className="flex items-center justify-center mt-3 rounded dark:bg-gray-800 relative">
                        <div className='mt-3'>
                            <SearchForm isSidebarMinimized={isSidebarMinimized} />
                        </div>
                        <div className="p-4 bg-quinary rounded-full right-0 top-0 ml-12 mt-3 mr-6">
                            <a href="/dashboard"><IoNotifications className="text-2xl" /></a>
                        </div>
                        <div>
                            <span className="flex items-center mr-7">
                                <img src={profilepic} alt='profile picture' className='flex align-right right-0 top-0 mt-3'/>
                            </span>
                        </div>
                    </div>
                </div>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="flex-1 overflow-y-auto">

                <h2 className='text-left font-medium text-sm ml-6 mb-5'> Track the status of your packages: </h2>
          
                <div className='bg-quinary rounded-xl mt-4 mx-6'>
                    <PackagesTable/>
                </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Packages;
