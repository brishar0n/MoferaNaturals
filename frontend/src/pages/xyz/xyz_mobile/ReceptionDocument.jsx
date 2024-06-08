import NavbarXYZ from '../../../components/xyz/xyz_mobile/NavbarXYZ.jsx'
import { useState, useEffect } from 'react'
import elementrecdoc1 from '../../../assets/xyz/elementrecdoc1.svg'
import elementrecdoc2 from '../../../assets/xyz/elementrecdoc2.svg'
import elementrecdoc3 from '../../../assets/xyz/elementrecdoc3.svg'
import ReceiptDocumentation from '../../../components/xyz/xyz_mobile/ReceiptDocumentation.jsx'
import { motion } from "framer-motion";

function ReceptionDocument() {
    const [isMobile, setIsMobile] = useState(false);

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

    return (
        <div className='overflow-auto md:h-auto bg-quaternary min-h-screen flex flex-col items-center pt-4 resize-none pb-24 h-screen'>
            {isMobile && (
                <>
                    <div className=''>
                        <div className='fixed top-0 left-0'>
                            <img src={elementrecdoc1} alt="elementrecdoc1"/>
                        </div>
                        <div className='fixed  right-0 -bottom-3'>
                            <img src={elementrecdoc2} alt="elementrecdoc2"/>
                        </div>
                        <div className='fixed  left-0 bottom-0'>
                            <img src={elementrecdoc3} alt="elementrecdoc3"/>
                        </div>
                    </div>

                    <motion.div
                            key="add"
                            initial={{ x: 300, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -300, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                    >
                        <ReceiptDocumentation />
                    </motion.div>
                    
                    <NavbarXYZ />
                </>
            )}
        </div>

    )
}

export default ReceptionDocument;