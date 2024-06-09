import { useState, useEffect } from 'react';
import Sidebar from '../../../components/xyz/Sidebar';
import bell from '../../../assets/xyz/bell.svg';
import profilepic from "../../../assets/desktop/profilepicdesktop.svg";
import ShipmentTrackerMap from '../../../components/xyz/ShipmentTrackerMap';

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
                <div className="flex justify-between items-center mb-5">
                    <h1 className='text-4xl font-semibold text-left ml-6 mt-6'>Shipment Tracker</h1>
                    <span className="flex items-center mr-6 mt-6">
                        <img src={bell} className="mr-4" alt="notification" />
                        <img src={profilepic} alt='profile picture' />
                    </span>
                </div>

                <h2 className='text-left font-medium text-sm ml-6 mb-5'> Get updated on the delivery of your package: </h2>

                <div className="flex w-1/2 ml-6 mb-4">
                    <input
                        type="text"
                        placeholder="Enter Shipping ID:"
                        className="border p-2 rounded-lg w-full"
                        onChange={(e) => setTempID(e.target.value)}
                    />
                    <button className="ml-2 p-2 bg-gray-200 text-black-300 rounded-lg" onClick={handleSetShipment}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </button>
                </div>

                <div className="flex flex-col md:flex-row ml-6 h-full overflow-auto">
                    <div className="flex-auto border border-black mr-4 mb-4 overflow-hidden">
                        <ShipmentTrackerMap shipmentToTrack={shipment} />
                    </div>

                    <div className="flex-col md:w-1/3 bg-gray-100 rounded-lg p-4 overflow-y-auto">
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
            </div>
        </div>
    );
};

export default ShipmentTracker;
