// Tyrone
import React, { useEffect } from 'react' 
import bgleft from '../../assets/trackshipping/bgleft.svg'
import NavigationBar from "../../components/centra/CentraNavbar.jsx";
import '../../style/Shipping.css'
import TrackShippingSearch from '../../components/centra/TrackShippingSearch';

function TrackShipping() {
    const [isMobile, setIsMobile] = React.useState(false);

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
              <TrackShippingSearch />
            </div>

            <NavigationBar/>
          </>
            )}
        </div>
    )
}

export default TrackShipping;
