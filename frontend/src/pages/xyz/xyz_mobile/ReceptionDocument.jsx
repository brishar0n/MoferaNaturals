import NavbarXYZ from '../../../components/xyz/xyz_mobile/NavbarXYZ.jsx'
import { useState, useEffect } from 'react'
import elementrecdoc1 from '../../../assets/xyz/elementrecdoc1.svg'
import elementrecdoc2 from '../../../assets/xyz/elementrecdoc2.svg'
import elementrecdoc3 from '../../../assets/xyz/elementrecdoc3.svg'
import ReceiptDocumentation from '../../../components/xyz/xyz_mobile/ReceiptDocumentation.jsx'

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
        <div className='overflow-auto h-[calc(100vh-6rem)] md:h-auto bg-quaternary min-h-screen flex flex-col items-center pt-4 resize-none pb-24"'>
            {isMobile && (
                <>
                    <div className='relative'>
                        <div className='absolute top-0 left-0'>
                            <img src={elementrecdoc1} alt="elementrecdoc1"/>
                        </div>
                        <div className='absolute  right-0 top'>
                            <img src={elementrecdoc2} alt="elementrecdoc2"/>
                        </div>
                        <div className='absolute  left-0 bottom'>
                            <img src={elementrecdoc3} alt="elementrecdoc3"/>
                        </div>
                    </div>
                    
                    <ReceiptDocumentation />
                    <NavbarXYZ />
                </>
            )}
        </div>

    )
}

export default ReceptionDocument;