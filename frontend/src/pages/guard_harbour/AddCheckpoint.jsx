import CheckpointForm from '../../components/guard_harbour/CheckpointForm';
import NavbarGH from '../../components/guard_harbour/NavbarGH';
import { useState, useEffect } from 'react'
import bgcheckpoint1 from '../../assets/guardharbour/bgcheckpoint1.svg';

function AddCheckpoint() {
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
                    <div className='h-screen absolute inset-0 flex justify-end -top-10'>
                        <img src={bgcheckpoint1} alt="bgcheckpoint1"/>
                    </div>
                    <CheckpointForm />
                    <NavbarGH />
                </>
            )}
        </div>

    )
}

export default AddCheckpoint;