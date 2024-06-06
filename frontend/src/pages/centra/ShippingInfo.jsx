// Tyrone
import React, { useEffect } from 'react' 
import bglowerleft from '../../assets/shipping/bg_lower_left.svg'
import bglowerright from '../../assets/shipping/bg_lower_right.svg'
import NavigationBar from "../../components/centra/CentraNavbar.jsx";
import '../../style/Shipping.css'
import ShippingForm from '../../components/centra/ShippingForm';
import { motion } from "framer-motion";

export const ShippingInfo = () => {
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
      <div className='bg-primary w-screen h-screen overflow-auto'>
        {isMobile && (
          <>
            <div className='h-screen absolute inset-0 flex'>
              <img src={bglowerleft} className="w-screen fixed bottom-0"/>
              <img src={bglowerright} className="w-screen fixed bottom-0"/>
              
            </div>
            
            <motion.div
              key="add"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ShippingForm />
            </motion.div>
            
            <NavigationBar/> 
          </>
        )}
      </div>
    )
}
