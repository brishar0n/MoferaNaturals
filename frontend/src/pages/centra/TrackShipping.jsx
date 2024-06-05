// Tyrone
import React, { useEffect } from 'react' 
import bgleft from '../../assets/trackshipping/bgleft.svg'
import NavigationBar from "../../components/centra/CentraNavbar.jsx";
import '../../style/Shipping.css'
import TrackShippingSearch from '../../components/centra/TrackShippingSearch';

function TrackShipping() {
    const [isMobile, setIsMobile] = React.useState(false);

    const shippingData = [
      {"shippingId": 1, "expedition": "JNE", "shippingDate": "26-05-2024", "shippingTime": "9:45 PM"},
      {"shippingId": 2, "expedition": "JNT", "shippingDate": "27-05-2024", "shippingTime": "10:45 PM"},
      {"shippingId": 3, "expedition": "SiCepat", "shippingDate": "28-05-2024", "shippingTime": "11:45 PM"},
      {"shippingId": 4, "expedition": "JNE", "shippingDate": "29-05-2024", "shippingTime": "12:45 AM"}
  ]

  const packageData = [
      {"packageId": 101, "shippingId": 1, "weight": 30},
      {"packageId": 102, "shippingId": 1, "weight": 20},
      {"packageId": 103, "shippingId": 2, "weight": 10},
      {"packageId": 104, "shippingId": 2, "weight": 15},
      {"packageId": 105, "shippingId": 3, "weight": 21},
      {"packageId": 106, "shippingId": 3, "weight": 16},
      {"packageId": 107, "shippingId": 4, "weight": 19},
      {"packageId": 108, "shippingId": 4, "weight": 15},
      {"packageId": 109, "shippingId": 1, "weight": 50},
      {"packageId": 110, "shippingId": 1, "weight": 45}
  ]

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
            <div className="overflow-auto h-[calc(100vh-6rem)] md:h-auto bg-quaternary min-h-screen flex flex-col items-center overflow-auto resize-none pb-36">
              <img src={bgleft} className='fixed left-0 '/>
              <TrackShippingSearch 
                shippingData={shippingData}
                packageData={packageData}
              />
            </div>

            <NavigationBar/>
          </>
            )}
        </div>
    )
}

export default TrackShipping;
