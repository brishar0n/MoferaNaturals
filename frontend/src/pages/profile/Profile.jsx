import React, { useEffect, useState } from 'react' 
import bgupper from '../../assets/profile/element1.svg'
import bglower from '../../assets/profile/element2.svg'
import NavigationBar from "../../components/centra/CentraNavbar.jsx";
import { motion } from "framer-motion";
import ProfileContent from '../../components/profile/ProfileContent';
import NavbarGH from '../../components/guard_harbour/NavbarGH';
import { getCurrentUser } from '../../../api/profileAPI';
import NavbarXYZ from '../../components/xyz/xyz_mobile/NavbarXYZ';
import mascotAddSide from '../../assets/AddPage/mascotAddSide.svg';

function Profile() {
    const [isMobile, setIsMobile] = React.useState(false);
    const [role, setRole] = useState("");
    const [username, setUsername]= useState("");

    useEffect(() => {
      function handleResize() {
        setIsMobile(window.innerWidth < 600);
      }
  
      handleResize();
      window.addEventListener("resize", handleResize);
  
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
      const fetchData = async () => {
          try {
              const user = await getCurrentUser();
              console.log(user);
              
              setRole(user.role);
              setUsername(user.username);
          } catch (err) {
              console.error("Error: ", err);
          }
      };

      fetchData();
  }, []);
  
    return (
      <div className='bg-white w-screen h-screen overflow-auto'>
        {isMobile && (
          <>
            <div className='relative'>
              <img src={bgupper} className="absolute -top-10"/>
            </div>
            
            <motion.div
              key="profile"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
                <div className='relative'>
                  <img src={mascotAddSide} className="absolute right-0 bottom-10 z-50"></img>
                  <ProfileContent role={role} name={username}/>
                  <img src={bglower} className=" bottom-0 z-0"/>
                </div>
              
            </motion.div>
            
            {role === "centra" && (
              <NavigationBar/> 
            )}
            {role === "GuardHarbor" && (
              <NavbarGH/> 
            )}
            {role === "xyz" && (
              <NavbarXYZ/> 
            )}
          </>
        )}
      </div>
    )
}

export default Profile;