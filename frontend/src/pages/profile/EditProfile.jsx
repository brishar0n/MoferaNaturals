import React, { useEffect, useState } from 'react' 
import bgupper from '../../assets/profile/element1.svg'
import bglower from '../../assets/profile/element2.svg'
import NavigationBar from "../../components/centra/CentraNavbar.jsx";
import { motion } from "framer-motion";
import EditProfileContent from '../../components/profile/EditProfileContent';
import NavbarGH from '../../components/guard_harbour/NavbarGH';
import { putProfile, getCurrentUser } from '../../../api/profileAPI.js';

function EditProfile() {
    const [isMobile, setIsMobile] = React.useState(false);
    const [role, setRole] = useState("");
    const [username, setUsername]= useState("");
    const [email, setEmail] = useState("");
    const [centraUnit, setCentraUnit] = useState(0);
    const [formSubmitted, setFormSubmitted] = useState(false);

    useEffect(() => {
      function handleResize() {
        setIsMobile(window.innerWidth < 600);
      }
  
      handleResize();
      window.addEventListener("resize", handleResize);
  
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    function handleSubmit(data) {
        data.event.preventDefault();
        putProfile({
          "username": data.newName,
          "new_password": data.newPassword,
          "confirm_password": data.confirmPassword,
          "email": data.newEmail
        })
        setFormSubmitted(true);
    }

    useEffect(() => {
      const fetchData = async () => {
          try {
              const user = await getCurrentUser();
              console.log(user);
              
              setRole(user.role);
              setUsername(user.username);
              setCentraUnit(user.centra_unit);
              setEmail(user.email);
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
              key="editprofile"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
                <div className='relative'>
                  <img src="src/assets/AddPage/mascotAddSide.svg" className="absolute right-0 bottom-10 z-50"></img>
                    <EditProfileContent 
                        role={role} 
                        name={username} 
                        email={email} 
                        centraUnit={centraUnit}
                        handleSubmit={handleSubmit}
                        formSubmitted={formSubmitted}
                    />
                    <img src={bglower} className="bottom-0"/>
                </div>
              
            </motion.div>
            
            {role === "centra" && (
              <NavigationBar/> 
            )}
            {role === "GuardHarbor" && (
              <NavbarGH/> 
            )}
          </>
        )}
      </div>
    )
}

export default EditProfile;