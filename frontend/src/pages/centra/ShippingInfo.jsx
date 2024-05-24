// Tyrone
import React, { useState, useEffect } from 'react' 
import { useNavigate } from "react-router-dom";
import box from '../../assets/shipping/box-with-tape.svg'
import backarrow from '../../assets/shipping/back_arrow.svg'
import bglowerleft from '../../assets/shipping/bg_lower_left.svg'
import bglowerright from '../../assets/shipping/bg_lower_right.svg'
import mascot from '../../assets/shipping/mascot.svg'
import NavigationBar from "../../components/centra/CentraNavbar.jsx";
import '../../style/Shipping.css'
import ShippingForm from '../../components/centra/ShippingForm';

export const ShippingInfo = () => {
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
      <div className='bg-primary w-screen h-screen overflow-auto'>
        {isMobile && (
          <>
            <div className='h-screen absolute inset-0 flex'>
              <img src={bglowerleft} className="w-screen fixed bottom-0"/>
              <img src={bglowerright} className="w-screen fixed bottom-0"/>
              
            </div>
            
            <ShippingForm />
            <NavigationBar/> 
          </>
        )}
      </div>
    )
}
