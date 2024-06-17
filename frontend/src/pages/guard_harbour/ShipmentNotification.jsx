import NavbarGH from '../../components/guard_harbour/NavbarGH';
import { useState, useEffect } from 'react'
import bgshipmentnotif from '../../assets/guardharbour/bgshipmentnotif.svg';
import ShipmentNotifHeader from '../../components/guard_harbour/ShipmentNotifHeader';
import NotificationList from '../../components/guard_harbour/NotificationList';
import { getGuardHarborNotification } from '../../../api/guardHarborAPI';

function ShipmentNotification() {
    const [isMobile, setIsMobile] = useState(false);

    const [notifications, setNotifications] = useState([])

    useEffect(() => {
        const fetchNotification = async () => {
            const response = await getGuardHarborNotification();
            console.log(response);
            if(response.data) setNotifications(response.data);
        }
        
        fetchNotification();
    }, [])

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

    const formatDate = (dateString) => {
        const [day, month, year] = dateString.split('-');
        const date = new Date(`${year}-${month}-${day}`);
    
        const options = {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        };
        
        return date.toLocaleDateString('en-US', options);
      };

    return (
        <div className='bg-quaternary w-screen h-screen overflow-y-scroll'>
            {isMobile && (
                <>
                    <div className='h-screen absolute inset-0 flex justify-end top-16'>
                        <img src={bgshipmentnotif} alt="bgshipmentnotif"/>
                    </div>
                    <ShipmentNotifHeader />
                    <NotificationList formatDate={formatDate} notifications={notifications}/>
                    <NavbarGH />
                </>
            )}
        </div>
    )
}

export default ShipmentNotification;