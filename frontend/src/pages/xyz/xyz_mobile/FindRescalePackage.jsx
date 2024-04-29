import NavbarXYZ from '../../../components/xyz/xyz_mobile/NavbarXYZ.jsx'
import SearchRescale from '../../../components/xyz/xyz_mobile/SearchRescale.jsx'
import { useState, useEffect } from 'react'

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
                    <SearchRescale />
                    <NavbarXYZ />
                </>
            )}
        </div>
    )
}

export default FindRescalePackage;
