import NavbarXYZ from '../../../components/xyz/xyz_mobile/NavbarXYZ.jsx'
import PackageReception from '../../../components/xyz/xyz_mobile/PackageReception.jsx'
import { useState, useEffect } from 'react'
import receptionBg from '../../../assets/xyz/bgreception.svg'
import '../../../style/xyz/xyz_mobile/ReceptionPackage.css'
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom'


function ReceptionPackage() {
    const [isMobile, setIsMobile] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
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

    function handleSubmit(event) {
        event.preventDefault();
        setFormSubmitted(true);
    }

    return (
        <div className='bg-quaternary w-screen h-screen overflow-y-scroll'>
            {isMobile && (
                <>
                    <div className='h-screen absolute inset-0 flex justify-end -top-10'>
                        <img src={receptionBg} alt="receptionBg"/>
                    </div>
                    <motion.div
                        key="add"
                        initial={{ x: 300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -300, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        >
                        <PackageReception 
                            handleSubmit={handleSubmit}
                            formSubmitted={formSubmitted}
                        />
                    </motion.div>
                    <NavbarXYZ />
                </>
            )}
        </div>
    )
}

export default ReceptionPackage;