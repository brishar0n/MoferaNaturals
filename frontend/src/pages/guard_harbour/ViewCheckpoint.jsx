import CheckpointSearch from '../../components/guard_harbour/CheckpointSearch';
import NavbarGH from '../../components/guard_harbour/NavbarGH';
import { useState, useEffect } from 'react'
import bgcheckpoint2 from '../../assets/guardharbour/bgcheckpoint2.svg';

function ViewCheckpoint() {
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
                    <div className='h-screen absolute inset-0 flex justify-start'>
                        <img src={bgcheckpoint2} alt="bgcheckpoint2"/>
                    </div>
                    <CheckpointSearch />
                    <NavbarGH />
                </>
            )}
        </div>

    )
}

export default ViewCheckpoint;