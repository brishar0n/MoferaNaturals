import { useState, useEffect } from "react";
import GuardHarbourDashboardContent from "../../components/guard_harbour/GuardHarbourDashboardContent";
import NavbarGH from "../../components/guard_harbour/NavbarGH";
import { motion } from "framer-motion";

function GHDashboard() {
    const [isMobile, setIsMobile] = useState(false);

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

    return (
        <div className="bg-quaternary w-screen h-screen overflow-y-scroll flex-1">
            {isMobile && (
                <div className="absolute w-screen h-screen overflow-y-scroll">  
                    <img className="absolute" alt="" src={"src/assets/dashboard/vector-414.svg"}/>
                    <img className="absolute" src={"src/assets/dashboard/vector-412.svg"}/>

                    <div className="relative mt-12 ml-7 font-medium text-left text-white">
                        <p className="m-0">Hello,</p>
                        <p className="m-0 mb-1">Si Gembrot</p>
                        <p className="m-0 text-2xl"><b>Guard Harbour</b></p>
                    </div>

                    <img className="absolute top-10 right-7 rounded-full w-11 h-11 object-cover" alt="" src={"src/assets/dashboard/ellipse-8@2x.png"}/>
                    <img className="absolute top-1/4 w-full h-[703px]" alt="" src={"src/assets/dashboard/rectangle-3.svg"}/>
                    <img className="fixed bottom-0 w-full" alt="" src={"src/assets/dashboard/bottom-element.svg"}/>
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

                    <NavbarGH />
                </div>
            )}
        </div>
    )
}

export default GHDashboard;