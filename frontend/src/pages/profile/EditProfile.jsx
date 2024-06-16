import React, { useEffect, useState } from 'react';
import axios from 'axios';
import bgupper from '../../assets/profile/element1.svg';
import bglower from '../../assets/profile/element2.svg';
import NavigationBar from "../../components/centra/CentraNavbar.jsx";
import { motion } from "framer-motion";
import EditProfileContent from '../../components/profile/EditProfileContent';
import NavbarGH from '../../components/guard_harbour/NavbarGH';

function EditProfile() {
    const [isMobile, setIsMobile] = useState(false);
    const [user, setUser] = useState({
        role: "",
        username: "",
        email: "",
        centraUnit: ""
    });
    const [formSubmitted, setFormSubmitted] = useState(false);

    useEffect(() => {
      function handleResize() {
        setIsMobile(window.innerWidth < 600);
      }
  
      handleResize();
      window.addEventListener("resize", handleResize);

      // Fetch current user details
      axios.get('/profile')
        .then(response => {
            setUser(response.data);
        })
        .catch(error => {
            console.error("Error fetching current user:", error);
        });
  
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    function handleSubmit(data) {
        data.event.preventDefault();
        axios.put('https://mofera-backend-fork-o1xucajgl-mofera-2.vercel.app/update_profile', {
          username: data.newName,
          new_password: data.newPassword,
          confirm_password: data.confirmPassword,
          email: data.newEmail,
          centra_unit: user.role === 'centra' ? data.centraUnit : undefined
        })
        .then(response => {
            setFormSubmitted(true);
            setUser(response.data); // Update user data with the response
        })
        .catch(error => {
            console.error("Error updating profile:", error);
        });
    }
  
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
                        role={user.role} 
                        name={user.username} 
                        email={user.email} 
                        centraUnit={user.centraUnit}
                        handleSubmit={handleSubmit}
                        formSubmitted={formSubmitted}
                    />
                    <img src={bglower} className="bottom-0"/>
                </div>
              
            </motion.div>
            
            {user.role === "centra" && (
              <NavigationBar/> 
            )}
            {user.role === "guardHarbour" && (
              <NavbarGH/> 
            )}
          </>
        )}
      </div>
    )
}

export default EditProfile;
