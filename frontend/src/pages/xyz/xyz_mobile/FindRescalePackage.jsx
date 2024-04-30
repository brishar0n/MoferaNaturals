import NavbarXYZ from '../../../components/xyz/xyz_mobile/NavbarXYZ.jsx'
import SearchRescale from '../../../components/xyz/xyz_mobile/SearchRescale.jsx'
import { useState, useEffect } from 'react'
import rescaleBg from '../../../assets/xyz/bgrescale.svg'

function FindRescalePackage() {
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
                    <div className='h-screen absolute inset-0 flex justify-end'>
                        <img src={rescaleBg} alt="rescaleBg"/>
                    </div>
                    <SearchRescale />
                    <NavbarXYZ />
                </>
            )}
        </div>
    )
}

export default FindRescalePackage;
