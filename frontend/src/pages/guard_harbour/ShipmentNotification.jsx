import NavbarGH from '../../components/guard_harbour/NavbarGH';
import { useState, useEffect } from 'react'
import bgshipmentnotif from '../../assets/guardharbour/bgshipmentnotif.svg';
import ShipmentNotifHeader from '../../components/guard_harbour/ShipmentNotifHeader';
import NotificationList from '../../components/guard_harbour/NotificationList';

function ShipmentNotification() {
    const [isMobile, setIsMobile] = useState(false);

    const shipmentInfo = [
        {shippingId: 1, expedition: "JNE", shippingDate: "26-05-2024", shippingTime: "9:45 PM", estimatedDate: "01-06-2024", estimatedTime: "9:45 PM"},
        {shippingId: 2, expedition: "JNT", shippingDate: "27-05-2024", shippingTime: "10:45 PM", estimatedDate: "02-06-2024", estimatedTime: "9:45 PM"},
        {shippingId: 3, expedition: "SiCepat", shippingDate: "28-05-2024", shippingTime: "11:45 PM", estimatedDate: "03-06-2024", estimatedTime: "9:45 PM"},
        {shippingId: 4, expedition: "JNE", shippingDate: "29-05-2024", shippingTime: "12:45 AM", estimatedDate: "04-06-2024", estimatedTime: "9:45 PM"},
        {shippingId: 5, expedition: "JNT", shippingDate: "01-06-2024", shippingTime: "01:45 PM", estimatedDate: "05-06-2024", estimatedTime: "9:45 PM"},
        {shippingId: 6, expedition: "JNE", shippingDate: "02-06-2024", shippingTime: "02:45 PM", estimatedDate: "06-06-2024", estimatedTime: "9:45 PM"},
        {shippingId: 7, expedition: "SiCepat", shippingDate: "03-06-2024", shippingTime: "03:45 PM", estimatedDate: "07-06-2024", estimatedTime: "9:45 PM"},
        {shippingId: 8, expedition: "Express", shippingDate: "04-06-2024", shippingTime: "04:45 PM", estimatedDate: "08-06-2024", estimatedTime: "9:45 PM"}
    ]

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
        { id: 200429, weight: 19, expDate: "2024-06-03", status: "EXPIRED", shippingId: 8, xyz_id: 104, centraUnit: 7 }, 
    ];


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
                    <NotificationList formatDate={formatDate} shipmentInfo={shipmentInfo} packages={packages}/>
                    <NavbarGH />
                </>
            )}
        </div>
    )
}

export default ShipmentNotification;