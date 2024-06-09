import React from 'react';
import { useState } from 'react';
import '../../../style/xyz/xyz_mobile/ReceptionPackage.css';
import Datepicker from "react-tailwindcss-datepicker"; 
import ReceptionHeader from './ReceptionHeader';
import { useNavigate } from 'react-router-dom';
import PackageIDInput from '../../centra/PackageIDInput';
import SuccessNotification from "../../SuccessNotification";
import FailedNotification from "../../FailedNotification";

function PackageReception({handleSubmit, formSubmitted}) {
    const successMessage = `You have successfully added package reception data.`;
    const [selectedPackageIDs, setSelectedPackageIDs] = useState([]);
    const [receivalDate, setReceivalDate] = useState('');
    const [receivalTime, setReceivalTime] = useState('');
    const [totalPackagesReceived, setTotalPackagesReceived] = useState(0);
    const [totalWeight, setTotalWeight] = useState(0);
    const [centraUnit, setCentraUnit] = useState('');

    const navigate = useNavigate();

    const packageData = [
        { packageId: 123, shippingId: null, unitCentra: 10, weight: 10 },
        { packageId: 127, shippingId: 1, unitCentra: 20, weight: 5 },
        { packageId: 102, shippingId: 2, unitCentra: 10, weight: 15 },
        { packageId: 19, shippingId: 1, unitCentra: 20, weight: 20 },
        { packageId: 40, shippingId: 2, unitCentra: 4, weight: 7 },
        { packageId: 51, shippingId: null, unitCentra: 13, weight: 12 },
        { packageId: 63, shippingId: 1, unitCentra: 12, weight: 8 },
    ];

    function handleReception(){
        navigate(`/receptiondocument`);
    }

    function handlePackageIDChange(selectedPackageIDs) {
        setSelectedPackageIDs(selectedPackageIDs);
        setTotalPackagesReceived(selectedPackageIDs.length);

        let totalWeight = 0;
        let unitCentraArray = [];

        selectedPackageIDs.forEach(id => {
            const packageInfo = packageData.find(pkg => pkg.packageId === id);
            if (packageInfo) {
                totalWeight += packageInfo.weight;
                unitCentraArray.push(packageInfo.unitCentra);
            }
        });
        setTotalWeight(totalWeight);
        setCentraUnit(unitCentraArray.join(", "));
    };
        
    return (
        <div className='pb-36'>
            {formSubmitted && <SuccessNotification htmlContent={successMessage} />}
            {/* {formSubmitted && weight <= 0 && <FailedNotification htmlContent={failedMessage} />} */}

            <ReceptionHeader />

            <form className='bg-white mb-5 w-3/4 mx-auto py-5 px-9 rounded-2xl text-left relative mt-5 flex flex-col' onSubmit={handleSubmit}>
                <label htmlFor="packageId" className='items-start text-xs mb-2 font-medium'>Package ID:</label>
                <PackageIDInput
                    confirmed={true}
                    onPackageIDChange={handlePackageIDChange}
                    required
                />
                            
                <label htmlFor="totalPackagesReceived" className='mt-2 items-start text-xs mb-2 font-medium'>Total Packages Received:</label>
                <input 
                    type="number" 
                    id="totalPackagesReceived" 
                    className='mb-2 rounded-md bg-quinary px-2 py-1 w-full text-xs border-none' 
                    value={totalPackagesReceived}
                    readOnly
                />

                <label htmlFor="weight" className='items-start text-xs mb-2 font-medium'>Total Weight:</label>
                <input 
                    type="number" 
                    id="totalWeight" 
                    className='mb-2 rounded-md bg-quinary px-2 py-1 w-full text-xs border-none' 
                    value={totalWeight}
                    readOnly
                />

                <label htmlFor="receivalDate" className='items-start text-xs mb-2 font-medium'>Receival Date:</label>
                <input 
                    type="date" 
                    className="mb-2 rounded-md bg-quinary px-2 py-1 w-full text-xs border-none"
                    value={receivalDate}
                    onChange={(e) => setReceivalDate(e.target.value)}
                    required 
                />

                <label htmlFor="receivalTime" className='items-start text-xs mb-2 font-medium'>Receival Time:</label>
                <input 
                    type="time" 
                    className="mb-2 rounded-md bg-quinary px-2 py-1 w-full text-xs border-none"
                    value={receivalTime}
                    onChange={(e) => setReceivalTime(e.target.value)}
                    required 
                />

                <label htmlFor="fromCentra" className='items-start text-xs mb-2 font-medium'>From Centra:</label>
                <input 
                    type="string" 
                    id="centraUnit" 
                    className='mb-2 rounded-md bg-quinary px-2 py-1 w-full text-xs border-none' 
                    value={centraUnit}
                    readOnly
                />

                <div className='mx-auto mt-3'>
                    <button className='bg-secondary text-white rounded-3xl px-7 py-2 font-medium hover:bg-primary' onClick={handleReception}>Reception Doc</button>
                </div>

                <div className='flex mx-auto w-full justify-center mt-3'>
                    <div className=''>
                        <button type="submit" className='bg-secondary text-white rounded-3xl px-10 py-2 font-semibold hover:bg-primary'>Submit</button>
                    </div>
                </div>
            </form>

           
        </div>
        
    );
}

export default PackageReception;