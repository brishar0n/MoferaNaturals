import React from "react";
import {useState, useEffect} from 'react'
import '../../style/App.css';
import NavigationBar from "../centra/CentraNavbar";
import CentraNotification from "./CentraNotification";
import CentraNotificationList from "./CentraNotificationList";
import greenShape from "../../../src/assets/notifications/green-shape.svg"
import warningSprite from "../../../src/assets/notifications/warning-sprite.svg"
import { useNavigate } from "react-router-dom";


function Notify() {
    const [isMobile, setIsMobile] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 600);
        };

        // Initial check on component mount
        handleResize();

        // Add event listener to update isMobile when window is resized
        window.addEventListener('resize', handleResize);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const timeout = setTimeout(() => {
          if (!isMobile) {
            navigate('/warningpage');
          } 
        }, 750);
    
        return () => clearTimeout(timeout);
      }, [isMobile, navigate]);

    const handleBack = () => navigate("/dashboard");
  
  
    return (
        <div className='bg-primary h-screen'>
            {isMobile && (
            <>
                <div className="overflow-auto h-[calc(100vh-6rem)] md:h-auto bg-primary min-h-screen flex flex-col items-center overflow-auto resize-none pb-36">
                    <img src={greenShape} className="fixed z-0 top-48 w-screen"></img>
                    <img src={warningSprite} className='w-45 z-20 absolute bottom-20 right-1'/>
                        
                    <br></br>
                    <br></br>

                    {/* <img src="src/assets/notifications/bb-notif.svg" onClick={handleBack} className="absolute left-6 top-16 pt-2"></img> */}

                    <div className="flex flex-col gap-2 justify-center pt-5 z-20">
                        <p className="font-semibold text-white text-3xl">Notifications </p>
                        <p className="text-xs font-medium text-white">Notified updates and expected timing</p>
                    </div>
            
                    <br></br>

                    <CentraNotificationList />
                </div>

                <NavigationBar></NavigationBar>
                
            </>
            )}
        </div>
    )
  }
  
  export default Notify;