import { useState, useEffect } from 'react';
import { IoNotifications } from "react-icons/io5";
import { motion } from "framer-motion";

import Sidebar from '../../../components/xyz/Sidebar';
import bell from '../../../assets/xyz/bell.svg';
import profilepic from "../../../assets/desktop/profilepicdesktop.svg";
import ShipmentTrackerMap from '../../../components/xyz/ShipmentTrackerMap';
import SearchForm from "../../../components/xyz/ShipmentTrackerSearch";

const shipmentData = {
    '1223123': [
            { lat: -7.797068, lng: 110.370529, status: 'Processing', time: '9:48 AM', details: 'Your product is being processed'},
            { lat: -7.807068, lng: 110.380529, status: 'Packaging', time: '10:26 AM', details: 'Your product is being packaged' },
            { lat: -7.817068, lng: 110.390529, status: 'Shipped', time: '12:36 PM', details: 'Product is currently being shipped out'}
        ],
    '2523423': [
            { lat: 23.05586, lng: 34.23391, status: 'Processing', time: '13:40 PM', details: 'Your product is being processed'},
            { lat: 23.055868, lng: 34.23391, status: 'Packaging', time: '15:30 PM', details: 'Your product is being packaged' },
        ],
};

const ShipmentTracker = ({ children }) => {
    const [shipment, setShipment] = useState(shipmentData['1223123']);
    const [shipmentID, setShipmentID] = useState('1223123');
    const [tempID, setTempID] = useState('1223123');
    const components = {
        TrackerMap: <ShipmentTrackerMap shipmentToTrack={shipment} />
    };

    const handleSetShipment = (event) => {
        if (tempID in shipmentData) {
            setShipmentID(tempID);
        } else {
            console.log('Not found ' + tempID);
        }
    };

    useEffect(() => {
        if (shipmentID in shipmentData) {
            setShipment(shipmentData[shipmentID]);
        }
    }, [shipmentID]);

    return (
        <div className='bg-primary w-screen h-screen flex flex-row overflow-hidden'>
            <Sidebar />
            <div className='flex-1 bg-white rounded-xl mt-3 mr-3 mb-3 p-4 flex flex-col overflow-hidden'>
                <div className="flex justify-between items-center">
                    <h1 className='text-4xl font-semibold text-left ml-6 mt-3'>Shipment Tracker</h1>
                    <div className="p-4 bg-quinary rounded-full right-0 top-0 ml-[567px] mt-6">
                            <a href="/dashboard"><IoNotifications className="text-2xl" /></a>
                    </div>
                        <div>
                            <span className="flex items-center mr-7">
                                <img src={profilepic} alt='profile picture' className='flex align-right right-0 top-0 mt-6'/>
                            </span>
                        </div>
                </div>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="flex-1 overflow-y-auto">
                <h2 className='text-left font-medium text-sm ml-6 mb-5'> Get updated on the delivery of your package: </h2>

                <div className="flex w-1/2 ml-6 mb-4">
                    <p className='mt-2 mr-4'>Enter Shipping ID:</p>
                    <SearchForm />
                </div>

                <div className="flex flex-col md:flex-row ml-6 h-full overflow-auto">
                    <div className="flex-auto border border-black mr-4 mb-4 overflow-hidden">
                        <ShipmentTrackerMap shipmentToTrack={shipment} />
                    </div>

                    <div className="flex-col md:w-1/3 bg-quinary rounded-lg p-4 overflow-y-auto">
                        <h2 className="text-xl font-semibold mb-4">Shipping ID: #{shipmentID}</h2>

                        {shipment.map((location, index) => (
                            <div className="flex items-center mb-12" key={index}>
                                <div className="flex-shrink-0 h-14 w-14 rounded-full bg-green-700 flex items-center justify-center">
                                    {/* Add icon or content */}
                                </div>
                                <div className="ml-8">
                                    <p className="text-sm text-gray-500 text-left">{location.time}</p>
                                    <p className="font-medium text-left">{location.details}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ShipmentTracker;
