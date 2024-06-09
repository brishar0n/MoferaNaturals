import React, { useEffect, useState } from 'react' 
import bgupper from '../../assets/profile/element1.svg'
import bglower from '../../assets/profile/element2.svg'
import NavigationBar from "../../components/centra/CentraNavbar.jsx";
import { motion } from "framer-motion";
import EditProfileContent from '../../components/profile/EditProfileContent';
import NavbarGH from '../../components/guard_harbour/NavbarGH';

function EditProfile() {
    const [isMobile, setIsMobile] = React.useState(false);
    const role = "centra";
    const name = "Oowwwlaf";
    const email = "Oowwwlaf@gmail.com";
    const centraUnit = 1;
    const [formSubmitted, setFormSubmitted] = useState(false);

    useEffect(() => {
      function handleResize() {
        setIsMobile(window.innerWidth < 600);
      }
  
      handleResize();
      window.addEventListener("resize", handleResize);
  
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    function handleSubmit(event) {
        event.preventDefault();
        setFormSubmitted(true);
    }
  
    return (
      <div className='bg-white w-screen h-screen overflow-auto'>
        {isMobile && (
          <>
            <div className='h-screen absolute inset-0 flex'>
              <img src={bgupper} className="w-screen fixed -top-10"/>
              <img src={bglower} className="w-screen fixed bottom-0"/>
              <img src="src/assets/AddPage/mascotAddSide.svg" className="absolute right-0 bottom-10 z-50"></img>
            </div>
            
            <motion.div
              key="editprofile"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
                <div className='relative z-40'>
                    <EditProfileContent 
                        role={role} 
                        name={name} 
                        email={email} 
                        centraUnit={centraUnit}
                        handleSubmit={handleSubmit}
                        formSubmitted={formSubmitted}
                    />
                </div>
              
            </motion.div>
            
            {role === "centra" && (
              <NavigationBar/> 
            )}
            {role === "guardHarbour" && (
              <NavbarGH/> 
            )}
          </>
        )}
      </div>
    )
}

export default EditProfile;