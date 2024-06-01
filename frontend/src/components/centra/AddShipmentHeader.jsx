import back from '../../assets/shipping/back.svg'
import box from "../../assets/shipping/box-with-tape.svg"
import { useNavigate } from "react-router-dom";
import "../../style/centra/ShipmentHeader.css"

function AddShipmentHeader() {
    const navigate = useNavigate();
    const handleBack = () => navigate("/centradashboard");

    return (
        <div className='mb-5 z-20 relative'>
            <div className="flex mx-auto flex-col pt-3 ml-6 text-left h-40">
                <button onClick={handleBack} className="absolute left-10 text-gray-600 text-sm font-semibold mt-8 md-flex -top-5">
                    <img src={back} alt="back" className="mt-8" />
                </button>
                <div className="w-1/2 mt-20">
                    <p className='text-3xl text-white font-bold mb-1 ml-5 leading-sm text'>Shipment Information</p>
                </div>
                <div className="absolute right-4 top-10 boxsize">
                    <img src={box} alt="box"/>
                </div>
            </div>
        </div>

// <div>
// <div className="flex place-items-end flex-col pt-3 px-3 text-right relative h-60 ht-96">
//     <button className='absolute p-2 rounded-full left-5 text-white top-5' onClick={handleBack}>
//         <img src={back} alt="back" className="mt-8" />
//     </button>
//     <div className="absolute left-0 mt-5">
//         <img src={rescaleElement} alt="rescaleElement"/>
//     </div>
//     <div className="w-1/2 mr-3 text-position">
//         <p className='text-3xl primary font-bold mb-1 mt-5'>Rescaling</p>
//         <p className='primary leading-norm leading-none'>Scale the package information for safety precautions </p>
//     </div>
// </div>
// </div>
    )
}

export default AddShipmentHeader;