// Tyrone
import React, { useState, useEffect } from 'react' 
import { useNavigate, useParams } from "react-router-dom";
import bgright from '../../assets/trackshippingtwo/bg-right.svg'
import backarrow from '../../assets/trackshippingtwo/backarrow.svg'
import truck from '../../assets/trackshippingtwo/truck.svg'
import NavigationBar from "../../components/centra/CentraNavbar.jsx";
import NavbarGH from '../../components/guard_harbour/NavbarGH';
import '../../style/centra/ShipmentHeader.css';
import { getCurrentUser } from '../../../api/profileAPI';
import { getPackages as getCentraPackages, getShippingInfo as getCentraShippingInfo, getCheckpoints as getCentraCheckpoints, getReceptionPackages as getCentraReceptionPackages } from "../../../api/centraAPI";
import { getPackages as getGHPackages, getShippingInfo as getGHShippingInfo, getCheckpoints as getGHCheckpoints, getReceptionPackages as getGHReceptionPackages} from "../../../api/guardHarborAPI";
import TrackShippingDetails from '../../components/centra/TrackShippingDetails';
import { useNavigate } from 'react-router-dom';


function TrackShippingID() {
    const { shippingId } = useParams();
    const parsedShippingId = parseInt(shippingId);

    const [isMobile, setIsMobile] = useState(false);
    const [shipmentData, setShipmentData] = useState([]);
    const [packageData, setPackageData] = useState([]);
    const [checkpointData, setCheckpointData] = useState([]);
    const [receptionData, setReceptionData] = useState([]);
    const [loading, setLoading] = useState(true);
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
      const timeout = setTimeout(() => {
        if (!isMobile) {
          navigate('/warningpage');
        } 
      }, 750);
  
      return () => clearTimeout(timeout);
    }, [isMobile, navigate]);

    useEffect(() => {
      async function fetchData() {
          try {
              const user = await getCurrentUser();
              setRole(user.role);

              let shippingResponse, packagesResponse, checkpointsResponse, receptionResponse;

              if (role === "centra") {
                [shippingResponse, packagesResponse, checkpointsResponse, receptionResponse] = await Promise.all([
                  getCentraShippingInfo(shippingId),
                  getCentraPackages(shippingId),
                  getCentraCheckpoints(shippingId),
                  getCentraReceptionPackages(shippingId)

                ]);
              } else if (role === "GuardHarbor") {
                [shippingResponse, packagesResponse, checkpointsResponse, receptionResponse] = await Promise.all([
                  getGHShippingInfo(shippingId),
                  getGHPackages(shippingId),
                  getGHCheckpoints(shippingId),
                  getGHReceptionPackages(shippingId)
                ]);
              }
       
              const shipment = shippingResponse.data.find(item => item.id === parsedShippingId);
              const pkg = packagesResponse.data.find(item => item.shipping_id === parsedShippingId);
              const checkpoint = checkpointsResponse.data.find(item => item.shipping_id === parsedShippingId);
              const reception = receptionResponse.data.find(item => item.receptionId === pkg?.xyz_id);

              setShipmentData(shipment);
              setPackageData(pkg);
              setCheckpointData(checkpoint);
              setReceptionData(reception);

              console.log(shipmentData);
              console.log(packageData);
              console.log(checkpointData);
              console.log(receptionData);
              
              setLoading(false);  // Data has been fetched, set loading to false
          } catch (err) {
              console.error("Error fetching data: ", err);
              setLoading(false);  // Even if there is an error, we need to stop loading
          }
      }

      fetchData();
    }, [parsedShippingId, role]);

    if (loading) {
      return <div className='bg-quaternary w-screen h-screen text-white '>Loading...</div>; // You can add a spinner or any loading indicator here
    }

    const formatDate = (dateString) => {
      const [year, month, day] = dateString.split('-');
      const date = new Date(`${year}-${month}-${day}`);
    
      const options = {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      };
    
      return date.toLocaleDateString('en-US', options);
    };

    const formatTime = (timeString) => {
      const [hour, minute, second] = timeString.split(':');
      let period = 'AM';
      let hourInt = parseInt(hour, 10);
    
      if (hourInt >= 12) {
        period = 'PM';
        if (hourInt > 12) hourInt -= 12;
      } else if (hourInt === 0) {
        hourInt = 12;
      }
    
      return `${hourInt}:${minute} ${period}`;
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
            <div className="overflow-auto md:h-auto bg-primary min-h-screen resize-none pb-36">
              <img src={bgright} className='w-screen fixed flex justify-end'/>
              <img src={truck} className='absolute flex right-0 top-28 z-51 truck'/>
              <img src={backarrow} className="absolute top-16 left-8" onClick={handleBack}/>
            
              <p className='text-3xl font-bold text-white flex text-left mt-12 ml-24 z-30'> Track <br></br> Shipping </p>
              
              <div>
                <TrackShippingDetails 
                  shipmentData={shipmentData}
                  packageData={packageData}
                  checkpointData={checkpointData}
                  receptionData={receptionData}
                  formatDate={formatDate}
                  formatTime={formatTime}
                  shippingId={parsedShippingId}
                />
              </div>
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
