// Tyrone
import React, { useState, useEffect } from 'react' 
import { useNavigate, useParams } from "react-router-dom";
import bgright from '../../assets/trackshippingtwo/bg-right.svg'
import backarrow from '../../assets/trackshippingtwo/backarrow.svg'
import truck from '../../assets/trackshippingtwo/truck.svg'
import NavigationBar from "../../components/centra/CentraNavbar.jsx";
import ShippingProgress from '../../components/centra/ShippingProgress.jsx';
import '../../style/centra/ShipmentHeader.css';
import { motion } from "framer-motion";

const shippings = [
  {shippingId: 1, expedition: "JNE", shippingDate: "26-05-2024", shippingTime: "9:45 PM", estimatedDate: "01-06-2024", estimatedTime: "9:45 PM"},
  {shippingId: 2, expedition: "JNT", shippingDate: "27-05-2024", shippingTime: "10:45 PM", estimatedDate: "02-06-2024", estimatedTime: "9:45 PM"},
  {shippingId: 3, expedition: "SiCepat", shippingDate: "28-05-2024", shippingTime: "11:45 PM", estimatedDate: "03-06-2024", estimatedTime: "9:45 PM"},
  {shippingId: 4, expedition: "JNE", shippingDate: "29-05-2024", shippingTime: "12:45 AM", estimatedDate: "04-06-2024", estimatedTime: "9:45 PM"}
]

const checkpoints = [
  // {checkpointId: 1, shippingId: 1, checkpointDate: "01-06-2024", checkpointTime: "10:15 AM"},
  {checkpointId: 2, shippingId: 2, checkpointDate: "04-06-2024", checkpointTime: "03:05 PM"},
  {checkpointId: 3, shippingId: 3, checkpointDate: "06-06-2024", checkpointTime: "11:35 PM"},
  {checkpointId: 4, shippingId: 4, checkpointDate: "08-06-2024", checkpointTime: "04:35 PM"},
]

const packages = [
  { id: 200420, weight: 10, expDate: "2024-05-01", status: "READY TO SHIP", shippingId: null, xyz_id: null, centraUnit: 1 },
  { id: 200421, weight: 5, expDate: "2024-06-15", status: "SHIPPING", shippingId: 1, xyz_id: null, centraUnit: 2 },   // 
  { id: 200422, weight: 0, expDate: "2024-06-19", status: "CANCELLED", shippingId: 2, xyz_id: null, centraUnit: 3 },  // not arrived in gh
  { id: 200423, weight: 8, expDate: "2024-07-10", status: "CONFIRMED", shippingId: 2, xyz_id: null, centraUnit: 3 },  // confirmed by gh
  { id: 200424, weight: 10, expDate: "2024-04-01", status: "ARRIVED", shippingId: 3, xyz_id: 101, centraUnit: 4 },  // received by xyz
  { id: 200425, weight: 5, expDate: "2024-06-15", status: "EXPIRED", shippingId: 4, xyz_id: 102, centraUnit: 5 }, // package not sent and expired
];

const receptionXYZ = [
  { receptionId: 101, arrivedDate: "10-06-2024", arrivedTime: "10:12 AM"},
  { receptionId: 102, arrivedDate: "12-06-2024", arrivedTime: "02:06 PM"}
]

const TrackShippingID = (etaDate, etaTime) => {
    const { shippingId } = useParams();
    const parsedShippingId = parseInt(shippingId);
    const shipmentData = shippings.find(item => item.shippingId === parsedShippingId);
    const packageData = packages.find(item => item.shippingId === parsedShippingId);
    const checkpointData = checkpoints.find(item => item.shippingId === parsedShippingId);
    const receptionData = receptionXYZ.find(item => item.receptionId === packageData.xyz_id);
    const navigate = useNavigate();
    
    const [isMobile, setIsMobile] = React.useState(false);

    useEffect(() => {
      function handleResize() {
        setIsMobile(window.innerWidth < 600);
      }
  
      handleResize();
      window.addEventListener("resize", handleResize);
  
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    const formatDate = (dateString) => {
      const [day, month, year] = dateString.split('-');
      const date = new Date(`${year}-${month}-${day}`);
  
      const options = {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
      };
      
      return date.toLocaleDateString('en-US', options);
    };
  
    return (
      <div>
        {isMobile && (
          <>
            <div className="overflow-auto  md:h-auto bg-primary min-h-screen resize-none pb-36">
              <img src={bgright} className='w-screen fixed flex justify-end'/>
              <img src={truck} className='absolute flex right-0 top-28 z-51 truck'/>
              <img src={backarrow} className="absolute top-16 left-8" onClick={() => {navigate("/trackshipping");}}/>
            
              <p className='text-3xl font-bold text-white flex text-left mt-12 ml-24 z-30'> Track <br></br> Shipping </p>
              
              <div className='relative text-left mt-6 ml-12'>
                <p className='text-1xl text-white'> Locate your expected <br></br> time arrival </p>

                <p className='text-1xl mt-4 text-white'> Expected Time Arrival </p>
                <p className='text-base text-white mt-1'> Date: <span className='font-bold'>{formatDate(shipmentData.estimatedDate)}</span></p>
                <p className='text-base text-white'> Time: <span className='font-bold'>{shipmentData.estimatedTime}</span></p>

                <p className='text-sm mt-2 text-white'> Sent with <span className='underline font-medium'>{shipmentData.expedition}</span></p>
              </div>
              

              {/* <div className='flex items-center justify-center z-40 top-80 mt-5 relative w-5/6'>
                <ShippingProgress formatDate={formatDate} shippingId={shippingId} shipmentData={shipmentData} packageData={packageData} checkpointData={checkpointData} receptionData={receptionData}/>
              </div> */}

              <motion.div
                  key="add"
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -300, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className='flex items-center justify-center mx-auto z-40 mt-5 relative w-5/6'>
                    <ShippingProgress formatDate={formatDate} shippingId={shippingId} shipmentData={shipmentData} packageData={packageData} checkpointData={checkpointData} receptionData={receptionData}/>
                  </div>
              </motion.div>
            </div>

            <NavigationBar />
          </>
        )}
      </div>
    );
};

export default TrackShippingID;
