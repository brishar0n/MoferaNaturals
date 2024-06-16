import { useState, useEffect } from "react";
import GuardHarbourDashboardContent from "../../components/guard_harbour/GuardHarbourDashboardContent";
import NavbarGH from "../../components/guard_harbour/NavbarGH";
import { motion } from "framer-motion";
import { getCurrentUser } from '../../../api/profileAPI';

function GHDashboard() {
    const [isMobile, setIsMobile] = useState(false);
    const [username, setUsername]= useState("");

    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth < 600);
        };
    
        // Initial check on component mount
        handleResize();
    
        // Add event listener to update isMobile when window is resized
        window.addEventListener("resize", handleResize);
    
        // Clean up event listener on component unmount
        return () => {
          window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const user = await getCurrentUser();
                console.log(user);
                
                setUsername(user.username);
            } catch (err) {
                console.error("Error: ", err);
            }
        };
    
        fetchData();
      }, []);

    return (
        <div className="bg-quaternary w-screen h-screen overflow-y-scroll flex-1">
            {isMobile && (
                <div className="absolute w-screen h-screen overflow-y-scroll">  
                    <img className="absolute" alt="" src={"src/assets/dashboard/vector-414.svg"}/>
                    <img className="absolute" src={"src/assets/dashboard/vector-412.svg"}/>

                    <div className="relative mt-12 ml-7 font-medium text-left text-white">
                        <p className="m-0 text-lg">Hello,</p>
                        <p className="m-0 mb-1 text-lg">{username}</p>
                        <p className="m-0 text-2xl"><b>Guard Harbour</b></p>
                    </div>

                    <img className="absolute top-10 right-7 rounded-full w-11 h-11 object-cover" alt="" src={"src/assets/dashboard/ellipse-8@2x.png"}/>
                    <img className="absolute top-1/4 w-full h-[703px]" alt="" src={"src/assets/dashboard/rectangle-3.svg"}/>
                   
                    <img className="absolute top-16 right-16 w-[91px] h-[179px] object-cover" alt="" src={"src/assets/dashboard/gembrot-4@2x.png"} />

                    <motion.div
                        key="add"
                        initial={{ x: 300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -300, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        >
                        <GuardHarbourDashboardContent />
                        
                    </motion.div>

                    <img className="relative w-full top-20" alt="" src={"src/assets/dashboard/bottom-element.svg"}/>
                    <NavbarGH />
                </div>
            )}
        </div>
    )
}

export default GHDashboard;