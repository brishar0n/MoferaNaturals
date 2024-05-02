import NavbarXYZ from '../../../components/xyz/xyz_mobile/NavbarXYZ.jsx'
import RescalePackage from '../../../components/xyz/xyz_mobile/RescalePackage.jsx'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import jsonData from '../../../../data.json'
import RescaleHeader from '../../../components/xyz/xyz_mobile/RescaleHeader.jsx'
import PackageDetails from '../../../components/xyz/xyz_mobile/PackageDetails.jsx'
import MaterialsToCover from '../../../components/xyz/xyz_mobile/MaterialsToCover.jsx'
import '../../../style/xyz/xyz_mobile/RescalePackage.css'
import rescaleBg from '../../../assets/xyz/bgrescale.svg'

// function RescalingPackage() {


//     return (
//         <div className='bg-quaternary w-screen h-screen overflow-y-scroll'>
//             {isMobile && (
//                 <>
//                     <RescalePackage />
//                     <NavbarXYZ />
//                 </>
//             )}
//         </div>
//     )
// }

// export default RescalingPackage;

function RescalingPackage() {
    const { packageId } = useParams();
    const parsedPackageId = parseInt(packageId);
    const packageData = jsonData.find(item => item.packageID === parsedPackageId);
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
                        <form>
                            <PackageDetails packageData={packageData} />
                            <MaterialsToCover />
                            <div className='relative'>
                                <button className='bg-secondary text-white rounded-lg px-5 py-3 font-medium hover:bg-primary'>Rescale</button>
                            </div>
                        </form>
                    </div>
                    <NavbarXYZ />
                </>
                
            )}
        </div>
        
    )
}

export default RescalingPackage;
