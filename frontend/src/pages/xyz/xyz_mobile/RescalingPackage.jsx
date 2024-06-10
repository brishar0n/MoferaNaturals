import NavbarXYZ from '../../../components/xyz/xyz_mobile/NavbarXYZ.jsx'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import jsonData from '../../../../data.json'
import RescaleHeader from '../../../components/xyz/xyz_mobile/RescaleHeader.jsx'
import PackageDetails from '../../../components/xyz/xyz_mobile/PackageDetails.jsx'
import MaterialsToCover from '../../../components/xyz/xyz_mobile/MaterialsToCover.jsx'
import '../../../style/xyz/xyz_mobile/RescalePackage.css'
import rescaleBg from '../../../assets/xyz/bgrescale.svg'
import { motion } from 'framer-motion';

function RescalingPackage() {
    const { packageId } = useParams();
    const parsedPackageId = parseInt(packageId);
      
    const packages = [
        { id: 200420, weight: 10, expDate: "2024-05-01", status: "READY TO SHIP", shippingId: null, xyz_id: null, centraUnit: 1 },
        { id: 200421, weight: 5, expDate: "2024-06-15", status: "SHIPPING", shippingId: 1, xyz_id: null, centraUnit: 2 },   // 
        { id: 200422, weight: 0, expDate: "2024-06-19", status: "CANCELLED", shippingId: 2, xyz_id: null, centraUnit: 3 },  // not arrived in gh
        { id: 200423, weight: 8, expDate: "2024-07-10", status: "CONFIRMED", shippingId: 2, xyz_id: null, centraUnit: 3 },  // confirmed by gh
        { id: 200424, weight: 10, expDate: "2024-04-01", status: "ARRIVED", shippingId: 3, xyz_id: 101, centraUnit: 4 },  // received by xyz
        { id: 200425, weight: 5, expDate: "2024-06-15", status: "EXPIRED", shippingId: 4, xyz_id: 102, centraUnit: 5 }, // package not sent and expired
        { id: 200426, weight: 8, expDate: "2024-06-16", status: "SHIPPING", shippingId: 5, xyz_id: null, centraUnit: 6 }, 
        { id: 200427, weight: 8, expDate: "2024-07-19", status: "CONFIRMED", shippingId: 6, xyz_id: null, centraUnit: 7 }, 
        { id: 200428, weight: 29, expDate: "2024-08-27", status: "ARRIVED", shippingId: 7, xyz_id: 103, centraUnit: 7 }, 
        { id: 200429, weight: 19, expDate: "2024-06-03", status: "EXPIRED", shippingId: 8, xyz_id: null, centraUnit: 7 }, 
    ];

    const packageData = packages.find(item => item.id === parsedPackageId);
    const navigate = useNavigate();
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

    if (!packageData) {
        // If packageData is not found, you can render a message or redirect to an error page
        return <p>Package not found</p>;
    }

    async function handleBack() {
        navigate(`/findrescale`);
    }


    return (
        <div className='bg-quaternary w-screen h-screen overflow-y-scroll'>
            {isMobile && (
                <>
                    <div className='h-screen absolute inset-0 flex justify-end z-0'>
                        <img src={rescaleBg} alt="rescaleBg"/>
                    </div>
                    <div className="pb-36 z-10">
                        <RescaleHeader handleBack={handleBack} />
                        <motion.div
                            key="add"
                            initial={{ x: 300, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -300, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            >
                            <form>
                                <PackageDetails packageData={packageData} />
                                <MaterialsToCover />
                                <div className='relative'>
                                    <button className='bg-secondary text-white rounded-3xl px-7 py-2 font-medium hover:bg-primary'>Rescale</button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                    <NavbarXYZ/>
                </>
                
            )}
        </div>
        
    )
}

export default RescalingPackage;
