// Tyrone
import React from 'react';
import ShippingProgress from './ShippingProgress';
import '../../style/centra/ShipmentHeader.css';
import { motion } from "framer-motion";

function TrackShippingDetails({shipmentData, shippingId, packageData, checkpointData, receptionData, formatDate, formatTime}) {
    return (
        <div>
            <div className='relative text-left mt-6 ml-12'>
                <p className='text-1xl text-white'> Locate your expected <br></br> time arrival </p>

                <p className='text-1xl mt-4 text-white'> Expected Time Arrival </p>
                <p className='text-base text-white mt-1'> 
                Date: <span className='font-bold'>
                    {shipmentData && shipmentData.eta_datetime ? formatDate(shipmentData.eta_datetime.split('T')[0]) : 'N/A'}
                </span>
                </p>
                <p className='text-base text-white'> 
                Time: <span className='font-bold'>
                    {shipmentData && shipmentData.eta_datetime ? formatTime(shipmentData.eta_datetime.split('T')[1]) : 'N/A'}
                </span>
                </p>

                <p className='text-base text-white mt-2 w-1/2'> 
                Sent with: <span className='font-medium underline'>
                    {shipmentData && shipmentData.expedition ? shipmentData.expedition : 'N/A'}
                </span>
                </p>

                {/* <p className='text-sm mt-2 text-white'> Sent with <span className='underline font-medium'>{shipmentData.expedition}</span></p> */}
            </div>

            <motion.div
                key="add"
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ duration: 0.5 }}
                >
                <div className='flex items-center justify-center mx-auto z-40 mt-5 relative w-5/6'>
                    <ShippingProgress formatDate={formatDate} formatTime={formatTime} shippingId={shippingId} shipmentData={shipmentData} packageData={packageData} checkpointData={checkpointData} receptionData={receptionData}/>
                </div>
            </motion.div>
        </div>
     
    );
};

export default TrackShippingDetails;
