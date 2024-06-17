import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getCurrentUser } from '../../../../api/profileAPI';
import NavbarXYZ from "../../../components/xyz/xyz_mobile/NavbarXYZ";
import XYZDashboardContent from "../../../components/xyz/xyz_mobile/XYZDashboardContent";

import vector414Img from "../../../../src/assets/dashboard/vector-414.svg";
import vector412Img from "../../../../src/assets/dashboard/vector-412.svg";
import ellipse8Img from "../../../../src/assets/dashboard/ellipse-8@2x.png";
import rectangle3Img from "../../../../src/assets/dashboard/rectangle-3.svg";
import gembrot4Img from "../../../../src/assets/dashboard/gembrot-4@2x.png";
import bottomElementImg from "../../../../src/assets/dashboard/bottom-element.svg";

function XYZDashboard() {
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
                    <img className="absolute" alt="" src={vector414Img}/>
                    <img className="absolute" src={vector412Img}/>

                    <div className="relative mt-12 ml-7 font-medium text-left text-white">
                        <p className="m-0 text-lg">Hello,</p>
                        <p className="m-0 mb-1 text-lg">{username}</p>
                        <p className="m-0 text-2xl"><b>XYZ</b></p>
                    </div>

                    <img className="absolute top-10 right-7 rounded-full w-11 h-11 object-cover" alt="" src={ellipse8Img}/>
                    <img className="absolute top-1/4 w-full h-[703px]" alt="" src={rectangle3Img}/>
                   
                    <img className="absolute top-16 right-16 w-[91px] h-[179px] object-cover" alt="" src={gembrot4Img} />

                    <motion.div
                        key="add"
                        initial={{ x: 300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -300, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        >
                        <XYZDashboardContent />
                        
                    </motion.div>

                    <img className="relative w-full top-20" alt="" src={bottomElementImg}/>
                    <NavbarXYZ />
                </div>
            )}
        </div>
    )
}

export default XYZDashboard;
