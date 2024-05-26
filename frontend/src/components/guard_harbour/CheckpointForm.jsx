import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CgAdd } from "react-icons/cg";
import SuccessNotification from "../SuccessNotification";
import AddNotesModal from "./AddNotesModal";
import PackageIDInput from "../centra/PackageIDInput";

function CheckpointForm() {
    const navigate = useNavigate();
    const [formSubmitted, setFormSubmitted] = useState(false);

    const [shippingId, setShippingId] = useState('');
    const [totalPackagesSent, setTotalPackagesSent] = useState('');
    const [centra, setCentra] = useState('');
    const [arrivalDate, setArrivalDate] = useState('');
    const [arrivalTime, setArrivalTime] = useState('');
    const [totalPackagesArrived, setTotalPackagesArrived] = useState('');
    const [selectedPackageIDs, setSelectedPackageIDs] = useState([]);

    const [isOpen, setIsOpen] = useState(false);
    const [notes, setNotes] = useState('');

    const shippingData = [
        { shippingId: 1, unitCentra: 10 },
        { shippingId: 2, unitCentra: 20 },
        // Add more shipping data as needed
    ];
    
    const packageData = [
        { packageId: 123, shippingId: null, unitCentra: 10 },
        { packageId: 127, shippingId: 1, unitCentra: 20 },
        { packageId: 102, shippingId: 2, unitCentra: 10 },
        { packageId: 19, shippingId: 1, unitCentra: 20 },
        { packageId: 40, shippingId: 2, unitCentra: 4 },
        { packageId: 51, shippingId: null, unitCentra: 13 },
        { packageId: 63, shippingId: 1, unitCentra: 12 },
      ];
    

    function handleView() {
        navigate("/viewcheckpoint");
    }

    function handleSubmit(event) {
        event.preventDefault();
        setFormSubmitted(true);
    }

    function handleEdit() {
        setNotes('');
    }

    function handleSave() {
        setNotes(notes); // Update the saved notes with the edited notes
        toggleModal(); // Close the modal
    }

    function toggleModal() {
        setIsOpen(!isOpen);
    }

    function handleShippingIDChange(e) {
        const selectedShippingId = Number(e.target.value);
        setShippingId(selectedShippingId);
        setSelectedPackageIDs([]);
        setTotalPackagesArrived(0); 

        const shipping = shippingData.find(data => data.shippingId == selectedShippingId);
        const packages = packageData.filter(pkg => pkg.shippingId == selectedShippingId);
        setTotalPackagesSent(packages.length);
        setCentra(shipping ? shipping.unitCentra : '');
    }

    function handlePackageIDChange(selectedPackageIDs) {
        setSelectedPackageIDs(selectedPackageIDs);
        setTotalPackagesArrived(selectedPackageIDs.length);  
    };

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
                <div className='bg-white mb-5 w-3/4 mx-auto py-5 px-7 rounded-2xl text-left relative mt-5 flex flex-col' onSubmit={handleSubmit}>
                    <form>
                        <p className="text-center primary font-bold mb-5 text-3xl">Checkpoint Data</p>

                        <label htmlFor="shippingId" className='items-start text-xs mb-2 font-medium'>Shipping ID:</label>
                        <select
                            id="shippingId"
                            className='mb-2 rounded-md bg-quinary px-2 py-1 w-full text-xs border-none'
                            value={shippingId}
                            onChange={handleShippingIDChange}
                            required
                        >
                            <option value="" disabled>Select Shipping ID</option>
                            {shippingData.map(({ shippingId }) => (
                                <option key={shippingId} value={shippingId}>
                                    {shippingId}
                                </option>
                            ))}
                        </select>
                                    
                        <label htmlFor="totalPackagesSent" className='items-start text-xs mb-2 font-medium'>Total Packages Sent:</label>
                        <input 
                            type="number" 
                            id="totalPackagesSent" 
                            className='mb-2 rounded-md bg-quinary px-2 py-1 w-full text-xs border-none' 
                            value={totalPackagesSent}
                            readOnly
                        />

                        <label htmlFor="centra" className='items-start text-xs mb-2 font-medium'>Unit Centra:</label>
                        <input 
                            type="number" 
                            id="centra" 
                            className='mb-2 rounded-md bg-quinary px-2 py-1 w-full text-xs border-none' 
                            value={centra}
                            readOnly
                        />

                        <label htmlFor="arrivalDate" className='items-start text-xs mb-2 font-medium'>Arrival Date:</label>
                        <input 
                            type="date" 
                            className="rounded-md bg-quinary py-2 px-2 text-xs mb-3 w-full"
                            value={arrivalDate}
                            onChange={(e) => setArrivalDate(e.target.value)}
                            required 
                        />

                        <label htmlFor="arrivalTime" className='items-start text-xs mb-2 font-medium'>Arrival Time:</label>
                        <input 
                            type="time" 
                            className="rounded-md bg-quinary py-2 px-2 text-xs mb-3 w-full"
                            value={arrivalTime}
                            onChange={(e) => setArrivalTime(e.target.value)}
                            required 
                        />

                        <label htmlFor="packageId" className='items-start text-xs mb-2 font-medium'>Package ID: </label>
                        <PackageIDInput
                            shippingID={shippingId}
                            onPackageIDChange={handlePackageIDChange}
                        />

                        <label htmlFor="totalPackagesArrived" className='items-start text-xs mb-2 font-medium'>Total Packages Arrived: </label>
                        <input 
                            type="number" 
                            id="totalPackagesArrived" 
                            className='mb-2 rounded-md bg-quinary px-2 py-1 w-full text-xs border-none'
                            value={totalPackagesArrived}
                            readOnly 
                        />

                        <div className='mx-auto mt-2 flex justify-center'>
                            <button className='bg-secondary text-white rounded-3xl px-7 py-2 font-medium hover:bg-primary flex gap-2 items-center' type="submit"><CgAdd />ADD</button>
                        </div>
                    </form>

                    <div className='mx-auto mt-2 mb-5'>
                        <button className='bg-secondary text-white rounded-3xl px-7 py-2 font-medium hover:bg-primary items-center gap-2 flex' onClick={toggleModal}><CgAdd />ADD NOTES</button>

                        <AddNotesModal
                            isOpen={isOpen}
                            toggleModal={toggleModal}
                            handleEdit={handleEdit}
                            handleSave={handleSave}
                            savedNotes={notes}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckpointForm;
