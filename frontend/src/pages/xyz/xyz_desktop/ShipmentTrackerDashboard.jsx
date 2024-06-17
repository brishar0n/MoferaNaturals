import React, { useState } from 'react';
import Sidebar from "../../../components/xyz/Sidebar";
import BarChart from "./BarChart";
import RecentActivities from "./RecentActivities";
import SearchForm from "./Search";
import ShipmentLink from './../../../components/xyz/ShipmentLink';
import { IoNotifications } from "react-icons/io5";
import { motion } from "framer-motion";

import profilepic from "../../../assets/desktop/profilepicdesktop.svg";

const activities = [
  { day: new Date().toLocaleString(), time: '10 mins ago', description: 'Centra 1 just added 30kg of wet leaves data into the system.', image: 'src/assets/DashboardDesktop/ellipse-10@2x.png' },
  { day: new Date().toLocaleString(), time: '10 mins ago', description: 'Centra 1 just added 30kg of wet leaves data into the system.', image: 'src/assets/DashboardDesktop/ellipse-9@2x.png' },
  { day: new Date().toLocaleString(), time: '10 mins ago', description: 'Centra 1 just added 30kg of wet leaves data into the system.', image: 'src/assets/DashboardDesktop/ellipse-22@2x.png' },
  { day: new Date().toLocaleString(), time: '10 mins ago', description: 'Centra 1 just added 30kg of wet leaves data into the system.', image: 'src/assets/DashboardDesktop/ellipse-18@2x.png' },
];

const shippingData = [
    { id: "SHIPID#12034", fromCentra: "Centra Unit 1", weight: "30 kg", dateShipped: "31 July 2023", expedition: "JNE", arrivalTime: "1 May 2024", status: "Pending", img: profilepic},
    { id: "SHIPID#12034", fromCentra: "Centra Unit 1", weight: "30 kg", dateShipped: "31 July 2023", expedition: "JNE", arrivalTime: "1 May 2024", status: "Pending", img: profilepic},
    { id: "SHIPID#12034", fromCentra: "Centra Unit 1", weight: "30 kg", dateShipped: "31 July 2023", expedition: "JNE", arrivalTime: "1 May 2024", status: "Pending", img: profilepic},
    { id: "SHIPID#12034", fromCentra: "Centra Unit 1", weight: "30 kg", dateShipped: "31 July 2023", expedition: "JNE", arrivalTime: "1 May 2024", status: "Arrived at Guard Harbour", img: profilepic},
];


const ShipmentTrackerDashboard = () => {
    const [isSidebarMinimized, setIsSidebarMinimized] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 4;
    const totalPages = Math.ceil(shippingData.length / rowsPerPage);
    const startRow = (currentPage - 1) * rowsPerPage;
    const endRow = startRow + rowsPerPage;
    const currentData = shippingData.slice(startRow, endRow);

    const toggleSidebar = () => {
        setIsSidebarMinimized(!isSidebarMinimized);
    };

    return (
    <div className="bg-primary w-screen h-screen flex relative">
        <Sidebar isMinimized={isSidebarMinimized} toggleSidebar={toggleSidebar} />
        <div className="flex-1 bg-white rounded-xl mt-3 mr-3 mb-3 p-4 flex flex-col overflow-hidden relative">
        <div className="flex justify-between items-center mb-5">
            <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center justify-around h-28 p-8 bg-quinary rounded-3xl dark:bg-gray-800">
                <div className="flex items-center">
                    <span>
                        <h2 className="text-4xl font-bold">Find your Shipment</h2>
                        <b></b>
                        <div className='mt-3'>
                                <SearchForm isSidebarMinimized={isSidebarMinimized} />
                        </div>
                    </span>
                </div>
            </div>
            
            <ShipmentLink
            trackingNumber={'1223123'} 
            carrier={'SiCepat Express'} 
            status={'Processing'} 
            from={'Bandung'} 
            to={'Surabaya'} 
            startDate={'20 August 2023'} 
            endDate={'31 August 2023'}/>

            <div className="flex items-center justify-center gap-20 h-22 rounded dark:bg-gray-800">
                <div className="p-4 bg-quinary rounded-full absolute right-0 top-0 mr-32 mt-11">
                <a href="/dashboard"><IoNotifications className="text-2xl" /></a>
                </div>
                <div>
                <span className="flex items-center mr-6 mt-6">
                    <img src={profilepic} alt='profile picture' className='flex align-right mb-6 absolute right-0 top-0 mr-12 mt-12'/>
                </span>
                </div>
            </div>
            </div>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="flex-1 overflow-y-auto">
        <div className="flex items-center justify-between h-12 ml-4 mb-4 rounded dark:bg-gray-800">
            <div className="flow-root">
                <p align="left"><span className="text-2xl font-bold">Shipment Tracker</span></p>
                <p>Observe the statistic, information and tracking of your packages</p>
            </div>
            <div className="flex justify-center gap-2">
                <form className="h-10 w-40">
                <select id="times" className="bg-quaternary border border-primary text-primary text-sm 
                focus:ring-primary focus:border-primary block w-full p-1 dark:bg-primary dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:primary dark:focus:border-primary rounded-full py-1 px-1">
                    <option>Select Centra</option>
                    <option>Select Centra 1</option>
                    <option>Select Centra 2</option>
                    <option>Select Centra 3</option>
                </select>
                </form>
                <form className="h-10 w-28">
                <select id="times" className="bg-quaternary border border-primary text-primary text-sm 
                focus:ring-primary focus:border-primary block w-full p-1 dark:bg-primary dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:primary dark:focus:border-primary rounded-full py-1 px-1">
                    <option>Filter</option>
                    <option>Filter 1</option>
                    <option>Filter 2</option>
                    <option>Filter 3</option>
                </select>
                </form>
            </div>
            </div>
            <div className="grid grid-rows grid-cols-2 gap-4 mb-4">
            <div className="row-span-2 flex flex-col h-[600px] bg-quinary rounded-3xl dark:bg-gray-800 p-8">
                <div className="flex justify-between items-center mb-4">
                <div className="text-lg text-black font-semibold">Shipment Statistics</div>
                <form className="h-10 w-28">
                    <select id="times" className="bg-quaternary border border-primary text-primary text-sm 
                    focus:ring-primary focus:border-primary block w-full p-1 dark:bg-primary dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:primary dark:focus:border-primary rounded-full py-1 px-1">
                    <option>Daily</option>
                    <option>Weekly</option>
                    <option>Monthly</option>
                    <option>Annually</option>
                    </select>
                </form>
                </div>
                <div className="flex-1 flex-grow flex-shrink">
                <BarChart />
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="h-30 bg-quinary rounded-3xl flex items-center justify-center dark:bg-gray-800 p-4">
                <div>
                    <p className="text-base">Total Shipments:</p>
                    <p className="text-3xl font-medium">130</p>
                </div>
                </div>
                <div className="h-30 bg-quinary rounded-3xl flex items-center justify-center dark:bg-gray-800 p-4">
                <div>
                    <p className="text-base">Pending Packages:</p>
                    <p className="text-3xl font-medium">40</p>
                </div>
                </div>
                <div className="h-30 bg-quinary rounded-3xl flex items-center justify-center dark:bg-gray-800 p-4">
                <div>
                    <p className="text-base">Arrival at Guard <br /> Harbour:</p>
                    <p className="text-3xl font-medium">10,300 kg</p>
                </div>
                </div>
            </div>
                <div className="flex flex-col bg-quinary rounded-3xl dark:bg-gray-800 p-4">
                    <div className="text-lg text-left text-black font-semibold px-4 mt-4">Recent Activities</div>              
                    <div>
                        <RecentActivities activities={activities} />
                    </div>
                </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="text-xl text-left font-semibold mb-4">Shipping Information</h2>
                <div className="overflow-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50 border border-black rounded-xl">
                        <tr>
                            <th className="px-4 py-2 rounded-tl-lg">Shipping ID</th>
                            <th className="px-4 py-2">From Centra</th>
                            <th className="px-4 py-2">Weight</th>
                            <th className="px-4 py-2">Date Shipped</th>
                            <th className="px-4 py-2">Expedition</th>
                            <th className="px-4 py-2">Arrival Time</th>
                            <th className="px-4 py-2 rounded-tr-lg">Shipping Status</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {currentData.map((item, index) => (
                            <tr key={index}>
                                <td className="px-4 py-2 flex items-center">
                                    <img src={item.img} alt="profile" className="w-6 h-6 rounded-full mr-2" />
                                    {item.id}
                                </td>
                                <td className="px-4 py-2">{item.fromCentra}</td>
                                <td className="px-4 py-2">{item.weight}</td>
                                <td className="px-4 py-2">{item.dateShipped}</td>
                                <td className="px-4 py-2">{item.expedition}</td>
                                <td className="px-4 py-2">{item.arrivalTime}</td>
                                <td className="px-4 py-2">{item.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="mt-4 flex justify-between items-center">
                    <p className="text-sm text-gray-500">Page {currentPage} of {totalPages}</p>
                    <div className="flex space-x-2">
                        <button
                            className="p-2 border rounded-lg"
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                        >
                            {"<"}
                        </button>
                        <button
                            className="p-2 border rounded-lg"
                            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                        >
                            {">"}
                        </button>
                    </div>
                </div>
                </div>
            </div>
            </motion.div>
        </div>
    </div>
  );
}

export default ShipmentTrackerDashboard;
