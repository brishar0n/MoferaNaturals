import NavbarGH from '../../components/guard_harbour/NavbarGH';
import { useState, useEffect } from 'react'
import bgshipmentnotif from '../../assets/guardharbour/bgshipmentnotif.svg';
import ShipmentNotifHeader from '../../components/guard_harbour/ShipmentNotifHeader';
import NotificationList from '../../components/guard_harbour/NotificationList';

function ShipmentNotification() {
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
        <div className='bg-quaternary w-screen h-screen overflow-y-scroll'>
            {isMobile && (
                <>
                    <div className='h-screen absolute inset-0 flex justify-end top-16'>
                        <img src={bgshipmentnotif} alt="bgshipmentnotif"/>
                    </div>
                    <ShipmentNotifHeader />
                    <NotificationList />
                    <NavbarGH />
                </>
            )}
        </div>
    )
}

export default ShipmentNotification;