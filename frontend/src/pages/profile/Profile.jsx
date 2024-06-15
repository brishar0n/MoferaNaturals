import React, { useEffect, useState } from 'react';
import axios from 'axios';
import bgupper from '../../assets/profile/element1.svg';
import bglower from '../../assets/profile/element2.svg';
import NavigationBar from "../../components/centra/CentraNavbar.jsx";
import { motion } from "framer-motion";
import ProfileContent from '../../components/profile/ProfileContent';
import NavbarGH from '../../components/guard_harbour/NavbarGH';

function Profile() {
    const [isMobile, setIsMobile] = useState(false);
    const [user, setUser] = useState({
        role: "",
        username: "",
    });

    useEffect(() => {
      function handleResize() {
        setIsMobile(window.innerWidth < 600);
      }

      handleResize();
      window.addEventListener("resize", handleResize);

      // Fetch current user details
      axios.get('https://mofera-backend-fork-o1xucajgl-mofera-2.vercel.app/profile/me')
        .then(response => {
            setUser(response.data); // Assuming response.data has user details
        })
        .catch(error => {
            console.error("Error fetching current user:", error);
        });

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
                    <ProfileContent role={user.role} name={user.username}/>
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

export default Profile;
