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
                        name={username} 
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
            {role === "GuardHarbor" && (
              <NavbarGH/> 
            )}
          </>
        )}
      </div>
    )
}

export default EditProfile;