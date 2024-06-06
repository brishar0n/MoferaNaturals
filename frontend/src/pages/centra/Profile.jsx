import React, { useEffect, useState } from 'react' 
import bgupper from '../../assets/profile/element1.svg'
import bglower from '../../assets/profile/element2.svg'
import NavigationBar from "../../components/centra/CentraNavbar.jsx";
import { motion } from "framer-motion";
import ProfileContent from '../../components/centra/ProfileContent';

function Profile() {
    const [isMobile, setIsMobile] = React.useState(false);
    const [role, setRole] = useState("centra");
    const [name, setName] = useState("Oowwwlaf");

    useEffect(() => {
      function handleResize() {
        setIsMobile(window.innerWidth < 600);
      }
  
      handleResize();
      window.addEventListener("resize", handleResize);
  
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
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
              key="profile"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
                <div className='relative z-40'>
                    <ProfileContent role={role} name={name}/>
                </div>
              
            </motion.div>
            
            <NavigationBar/> 
          </>
        )}
      </div>
    )
}

export default Profile;