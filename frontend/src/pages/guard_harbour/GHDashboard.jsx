import { useState, useEffect } from "react";
import GuardHarbourDashboardContent from "../../components/guard_harbour/GuardHarbourDashboardContent";
import NavbarGH from "../../components/guard_harbour/NavbarGH";
import { motion } from "framer-motion";
import { getCurrentUser } from '../../../api/profileAPI';
import { useNavigate } from "react-router-dom";
import vector414 from "../../../src/assets/dashboard/vector-414.svg";
import vector412 from "../../../src/assets/dashboard/vector-412.svg";
import ellipse from "../../../src/assets/dashboard/ellipse-8@2x.png";
import rectangle from "../../../src/assets/dashboard/rectangle-3.svg";
import gembrot from "../../../src/assets/dashboard/gembrot-4@2x.png";
import bottomElement from "../../../src/assets/dashboard/bottom-element.svg";

function GHDashboard() {
    const [isMobile, setIsMobile] = useState(false);
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

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
        const timeout = setTimeout(() => {
          if (!isMobile) {
            navigate('/warningpage');
          } 
        }, 750);
    
        return () => clearTimeout(timeout);
      }, [isMobile, navigate]);

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
                    <img className="absolute" alt="Vector 414" src={vector414} />
                    <img className="absolute" alt="Vector 412" src={vector412} />

                    <div className="relative mt-12 ml-7 font-medium text-left text-white">
                        <p className="m-0 text-lg">Hello,</p>
                        <p className="m-0 mb-1 text-lg">{username}</p>
                        <p className="m-0 text-2xl"><b>Guard Harbour</b></p>
                    </div>

                    <img className="absolute top-10 right-7 rounded-full w-11 h-11 object-cover" alt="Ellipse" src={ellipse} />
                    <img className="absolute top-1/4 w-full h-[703px]" alt="Rectangle" src={rectangle} />
                   
                    <img className="absolute top-16 right-16 w-[91px] h-[179px] object-cover" alt="Gembrot" src={gembrot} />

                    <motion.div
                        key="add"
                        initial={{ x: 300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -300, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <GuardHarbourDashboardContent />
                    </motion.div>

                    <img className="relative w-full top-20" alt="Bottom Element" src={bottomElement} />
                    <NavbarGH />
                </div>
            )}
        </div>
    );
}

export default GHDashboard;
