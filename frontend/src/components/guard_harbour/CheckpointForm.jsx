import { CgAdd } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import SuccessNotification from "../SuccessNotification";
import { useState } from "react";

function CheckpointForm() {
    const navigate = useNavigate();
    const [formSubmitted, setFormSubmitted] = useState(false);

    function handleView() {
        navigate("/viewcheckpoint");
    }

    function handleSubmit(event) {
        event.preventDefault();
        setFormSubmitted(true);
    }

    return (
        <div>
            {formSubmitted && <SuccessNotification htmlContent="You have successfully added checkpoint data." />}

            <div className="flex flex-col items-center">
                <div className="flex pt-16 z-10 items-center justify-center mb-5">
                    <p className="font-bold text-primary text-3xl"> Checkpoints </p>
                </div>


                <div className="bg-white w-2/3 rounded-full z-20 mb-3">
                    <div className="flex text-s gap-1 font-medium p-1">
                        <p className="w-48 bg-tertiary rounded-full text-white p-1"> Add </p>
                        <p className="w-48 rounded-full p-1" onClick={handleView}> View </p>
                    </div>
                </div>
            </div>


            <div className='pb-36'>
                <form className='bg-white mb-5 w-3/4 mx-auto py-5 px-7 rounded-2xl text-left relative mt-5 flex flex-col' onSubmit={handleSubmit}>
                    <p className="text-center primary font-bold mb-5 text-3xl">Checkpoint Data</p>

                    <label htmlFor="shippingId" className='items-start text-xs mb-2 font-medium'>Shipping ID:</label>
                    <input type="number" id="shippingId" className='mb-2 rounded-md bg-quinary px-2 py-1 w-full text-xs border-none' required/>
                                
                    <label htmlFor="totalPackagesSent" className='items-start text-xs mb-2 font-medium'>Total Packages Sent:</label>
                    <input type="number" id="totalPackagesSent" className='mb-2 rounded-md bg-quinary px-2 py-1 w-full text-xs border-none' required/>

                    <label htmlFor="centra" className='items-start text-xs mb-2 font-medium'>Unit Centra:</label>
                    <input type="number" id="centra" className='mb-2 rounded-md bg-quinary px-2 py-1 w-full text-xs border-none' required/>

                    <label htmlFor="arrivalDate" className='items-start text-xs mb-2 font-medium'>Arrival Date:</label>
                    <input type="date" className="rounded-md bg-quinary py-2 px-2 text-xs mb-3" required/>

                    <label htmlFor="arrivalTime" className='items-start text-xs mb-2 font-medium'>Arrival Time:</label>
                    <input type="time" className="rounded-md bg-quinary py-2 px-2 text-xs mb-3" required/>

                    <label htmlFor="packageId" className='items-start text-xs mb-2 font-medium'>Package ID: </label>
                    <input type="number" id="packageId" className='mb-2 rounded-md bg-quinary px-2 py-1 w-full text-xs border-none' required/>

                    <label htmlFor="totalPackagesArrived" className='items-start text-xs mb-2 font-medium'>Total Packages Arrived: </label>
                    <input type="number" id="totalPackagesArrived" className='mb-2 rounded-md bg-quinary px-2 py-1 w-full text-xs border-none' required/>

                    <div className='mx-auto mt-2'>
                        <button className='bg-secondary text-white rounded-3xl px-7 py-2 font-medium hover:bg-primary flex gap-2 items-center' type="submit"><CgAdd />ADD</button>
                    </div>

                    <div className='mx-auto mt-2 mb-5'>
                        <button className='bg-secondary text-white rounded-3xl px-7 py-2 font-medium hover:bg-primary items-center gap-2 flex'><CgAdd />ADD NOTES</button>
                    </div>
                </form>
            </div>
        </div>
    
    )
}

export default CheckpointForm;