// Tyrone
import React, { useState, useEffect } from 'react' 
import { useNavigate } from "react-router-dom";
import bgright from '../../assets/trackshippingtwo/bg-right.svg'
import backarrow from '../../assets/trackshippingtwo/backarrow.svg'
import truck from '../../assets/trackshippingtwo/truck.svg'
import jne from '../../assets/trackshippingtwo/jne.svg'
import NavigationBar from "../../components/centra/CentraNavbar.jsx";
import ShippingProgress from '../../components/centra/ShippingProgress.jsx';
import '../../style/Shipping.css'

const progressStages = [
  { timestamp: '2023-01-01 10:00 AM', detail: 'Order Placed', completed: true },
  { timestamp: '2023-01-02 12:00 PM', detail: 'Order Processed', completed: true },
  { timestamp: '2023-01-03 03:00 PM', detail: 'Shipped', completed: false },
  { timestamp: '2023-01-04 05:00 PM', detail: 'In Transit', completed: false },
  { timestamp: '2023-01-05 09:00 AM', detail: 'Delivered', completed: false },
];

const TrackShippingTwo = (etaDate, etaTime) => {
    const [details, setDetails] = useState([]);
    const [isMobile, setIsMobile] = React.useState(false);
    const navigate = useNavigate();

    useEffect(() => {
      function handleResize() {
        setIsMobile(window.innerWidth < 600);
      }
  
      handleResize();
      window.addEventListener("resize", handleResize);
  
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    return (
      <div>
        {isMobile && (
          <>
            <div className="bg-primary w-screen h-screen overflow-y-scroll">

            <img src={bgright} className='w-screen flex justify-end'/>

            <img src={truck} className='absolute flex right-0 top-12 z-51'/>

            <img src={backarrow} className="absolute top-16 left-10" onClick={() => {navigate("/trackshipping");}}/>
          
            <p className='text-4xl font-bold text-white absolute text-left top-12 left-28 '> Track <br></br> Shipping </p>
            
            <p className='text-1xl text-white absolute text-left top-36 left-20 '> Locate your expected <br></br> time arrival </p>
            <p className='text-sm font-medium text-white absolute text-left top-48 left-20 '> Date: </p>
            <p className='text-sm font-medium text-white absolute text-left top-52 left-20 '> Time: </p>

            <div className='fixed inset-0 top-40 flex items-center justify-center z-52'>
              <ShippingProgress shippingId='123AKSDKAJ9' progressStages={progressStages} />
            </div>

            </div>
            <NavigationBar/>
          </>
            )}
        </div>
    );
};

export default TrackShippingTwo;
