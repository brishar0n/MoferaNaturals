import React, { useState, useEffect } from 'react';
import Sidebar from '../../../components/xyz/Sidebar';
import CentraMonitorTable from '../../../components/xyz/CentraMonitorTable';
import CentraMonitorBar from '../../../components/xyz/CentraMonitorBar';
import profilepic from "../../../assets/desktop/profilepicdesktop.svg";
import bell from "../../../assets/desktop/bellicon.svg";

const CentraActivityMonitor = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const [dataType, setDataType] = useState('Wet Leaves');

  const handleDataTypeChange = (type) => {
    setDataType(type);
  };

  const handleShipmentTrack = () => navigate("/shipmenttracker");

  return (
    <div className='bg-primary w-screen h-screen overflow-hidden flex'>
      <Sidebar />
      <div className='flex-1 bg-white rounded-xl mt-3 mr-3 mb-3 p-4 overflow-y-auto'>
        <div className="flex justify-between items-center mb-5">
          <h1 className='text-4xl font-semibold text-left ml-6 mt-6 mb-3'>Centra Activity Monitor</h1>
          <span className="flex items-center mr-6 mt-6">
            <img src={bell} className="mr-4" alt="notification" />
            <img src={profilepic} alt='profile picture' />
          </span>
        </div>
        <div className="ml-6 mb-5">
          <p className="text-left text-sm bg-quinary text-black border border-green-800 w-fit px-2 rounded">Date: {date.toLocaleDateString()}</p>
        </div>
        <div className='bg-quinary rounded-xl mt-4 mx-6'>
          <CentraMonitorTable dataType={dataType} handleDataTypeChange={handleDataTypeChange} />
        </div>
        <div className='flex flex-col lg:flex-row justify-between mt-4 mx-6 mb-4'>
          <div className='bg-quinary rounded-xl lg:w-2/3 lg:mr-2 p-4 mb-4 lg:mb-0'>
            <h2 className='text-left font-medium text-xl ml-2 pt-2'>Statistics</h2>
            <CentraMonitorBar />
          </div>
          <div className='bg-quinary rounded-xl lg:w-1/3 lg:ml-2 p-4'>
            <h2 className='text-left font-medium text-xl ml-2 pt-2'>Shipped Packages</h2>
            <div className='mt-4'>
              <p className='text-left ml-3 mt-10'>Total Packages Sent:</p>
              <p className='text-left text-xl font-medium ml-3 mt-4'>300</p>
              <br />
              <p className='text-left ml-3'>Pending Packages:</p>
              <p className='text-left text-xl font-medium ml-3 mt-4'>105</p>
              <br />
              <p className='text-left ml-3'>Packages Arrived:</p>
              <p className='text-left text-xl font-medium ml-3 mt-4'>195</p>
              <br />
              <button className='mt-4 bg-primary rounded-3xl text-white py-2 px-4' onClick={handleShipmentTrack}>View Shipment Tracker</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CentraActivityMonitor;
