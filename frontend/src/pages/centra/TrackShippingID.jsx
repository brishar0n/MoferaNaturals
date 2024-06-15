// Tyrone
import React, { useState, useEffect } from 'react' 
import { useNavigate, useParams } from "react-router-dom";
import bgright from '../../assets/trackshippingtwo/bg-right.svg'
import backarrow from '../../assets/trackshippingtwo/backarrow.svg'
import truck from '../../assets/trackshippingtwo/truck.svg'
import NavigationBar from "../../components/centra/CentraNavbar.jsx";
import NavbarGH from '../../components/guard_harbour/NavbarGH';
import ShippingProgress from '../../components/centra/ShippingProgress.jsx';
import '../../style/centra/ShipmentHeader.css';
import { motion } from "framer-motion";
import { getCurrentUser } from '../../../api/profileAPI';
import { getPackages, getShippingInfo, getCheckpoints } from "../../../api/centraAPI";
// import { getPackages, getShippingInfo, getCheckpoints } from "../../../api/guardHarborAPI";

function TrackShippingID() {
    const { shippingId } = useParams();
    const parsedShippingId = parseInt(shippingId);

    const [isMobile, setIsMobile] = useState(false);
    const [shippings, setShippings] = useState([]);
    const [packages, setPackages] = useState([]);
    const [checkpoints, setCheckpoints] = useState([]);
    const navigate = useNavigate();
    const [role, setRole] = useState("");

    useEffect(() => {
      function handleResize() {
        setIsMobile(window.innerWidth < 600);
      }
  
      handleResize();
      window.addEventListener("resize", handleResize);
  
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
      async function fetchData() {
          try {
              const user = await getCurrentUser();
              console.log(user);
              setRole(user.role);

              const shippingResponse = await getShippingInfo();
              console.log("Shipping response data:", shippingResponse.data);
              setShippings(shippingResponse.data);

              const packagesResponse = await getPackages();
              console.log("Packages response data:", packagesResponse.data);
              setPackages(packagesResponse.data);

              const checkpointsResponse = await getCheckpoints();
              setCheckpoints(checkpointsResponse.data);
          } catch (err) {
              console.error("Error fetching data: ", err);
          }
      }

      fetchData();
    }, []);

    useEffect(() => {
      console.log("Updated shippings:", shippings);
    }, [shippings]);

    useEffect(() => {
      console.log("Updated packages:", packages);
    }, [packages]);

    const shipmentData = shippings.find(item => item.id === parsedShippingId);
    const packageData = packages.find(item => item.shipping_id === parsedShippingId);
    const checkpointData = checkpoints.find(item => item.shipping_id === parsedShippingId);
    // const receptionData = receptionXYZ.find(item => item.receptionId === packageData.xyz_id);

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

    const handleBack = () => {
      if (role === "centra") {
        navigate("/trackshipping");
      } else if (role === "GuardHarbor") {
        navigate("/shipmentnotification");
      }
    }
  
    return (
      <div>
        {isMobile && (
          <>
            <div className="overflow-auto  md:h-auto bg-primary min-h-screen resize-none pb-36">
              <img src={bgright} className='w-screen fixed flex justify-end'/>
              <img src={truck} className='absolute flex right-0 top-28 z-51 truck'/>
              <img src={backarrow} className="absolute top-16 left-8" onClick={handleBack}/>
            
              <p className='text-3xl font-bold text-white flex text-left mt-12 ml-24 z-30'> Track <br></br> Shipping </p>
              
              <div className='relative text-left mt-6 ml-12'>
                <p className='text-1xl text-white'> Locate your expected <br></br> time arrival </p>

                <p className='text-1xl mt-4 text-white'> Expected Time Arrival </p>
                <p className='text-base text-white mt-1'> Date: <span className='font-bold'>{shipmentData.eta_datetime.split('T')[0]}</span></p>
                <p className='text-base text-white'> Time: <span className='font-bold'>{shipmentData.eta_datetime.split('T')[1]}</span></p>

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

            {role === "centra" ? (
              <NavigationBar />
            ) : (
              <NavbarGH />
            )} 
            
          </>
        )}
      </div>
    );
};

export default TrackShippingID;
