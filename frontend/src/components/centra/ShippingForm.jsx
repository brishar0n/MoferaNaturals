import { useNavigate } from "react-router-dom";
import SuccessNotification from "../SuccessNotification";
import { useState, useEffect } from "react";
import PackageIDInput from "./PackageIDInput";
import { addShippingInfo, getPackagesWithStatus, } from "../../../api/centraAPI"

import AddShipmentHeader from "./AddShipmentHeader";

function ShippingForm() {
    const navigate = useNavigate();
    const [formSubmitted, setFormSubmitted] = useState(false);

    const [weight, setWeight] = useState(0);
    const [total, setTotal] = useState(0);
    const [expedition, setExpedition] = useState("");
    const [shippingDate, setShippingDate] = useState("");
    const [shippingTime, setShippingTime] = useState("");
    const [packageData, setPackageData] = useState([]);
    const [packages, setPackages] = useState([]);

    // const packageData = {
    //     123: { weight: 10 },
    //     127: { weight: 5 },
    //     102: { weight: 15 },
    //     19: { weight: 20 },
    //     40: { weight: 7 },
    //     51: { weight: 12 },
    //     63: { weight: 8 }
    // };

    useEffect(() => {
        const fetchPackage = async () => {
            const response = await getPackagesWithStatus(0)
            if(response && response.data) {
                setPackageData(response.data)
            }
        }
        fetchPackage()
        console.log(packageData)
        
    }, [])

    function handlePackageIDChange(selectedPackageIDs) {
        let totalWeight = 0;
        selectedPackageIDs.forEach(id => {
            const packageInfo = packageData.find(pkg => pkg.id === id);;
            if (packageInfo) {
                totalWeight += packageInfo.weight;
            }
        });

        setWeight(totalWeight);
        setTotal(selectedPackageIDs.length);
        setPackages(selectedPackageIDs)
        console.log(selectedPackageIDs)
    };

    function handleView() {
        navigate("/viewcheckpoint");
    }

    function handleSubmit(event) {
        event.preventDefault();

        const data = {
            packages,
            expedition,
            "total_packages": total,
            "total_weight": weight,
            "departure_datetime": shippingDate+"T"+shippingTime
        }
        addShippingInfo(data)

        setFormSubmitted(true);
    }

    // const handleWeightChange = (event) => {
    //     setWeight(event.target.value);
    // };
    
    const handleShippingDateChange = (event) => {
        setShippingDate(event.target.value);
    };

    const handleShippingTimeChange = (event) => {
        setShippingTime(event.target.value);
    };
    
    const handleExpeditionChange = (event) => {
        setExpedition(event.target.value);
    }
  
    // const handleTotalChange = (event) => {
    //     setTotal(event.target.value)
    // }

    return (
        <div>
            {formSubmitted && <SuccessNotification htmlContent="You have successfully shipped the packages."/>}

            <AddShipmentHeader/>

            <div className='pb-36 z-0'>
                <div className='bg-white mb-5 w-5/6 mx-auto py-7 px-9 rounded-2xl text-left relative mt-5 flex flex-col shadow-lg' onSubmit={handleSubmit}>
                    <form>

                        <label htmlFor="packageId" className='items-start mb-2 text-xs font-medium'>Package IDs:</label>
                        <PackageIDInput onPackageIDChange={handlePackageIDChange} packageData={packageData}/>
                                    
                        <label htmlFor="packageWeight" className='items-start text-xs mb-2 font-medium'>Package Weight:</label>
                        <input type="number" id="packageWeight" className='mb-2 rounded-md bg-quinary px-2 py-2 w-full text-xs border-none' value={weight} readOnly required/>

                        <label htmlFor="totalPackages" className='items-start text-xs mb-2 font-medium'>Total Packages:</label>
                        <input type="number" id="totalPackages" className='mb-2 rounded-md bg-quinary px-2 py-2 w-full text-xs border-none' value={total} readOnly required/>

                        <label htmlFor="expedition" className='items-start text-xs mb-2 font-medium'>Expedition:</label>
                        {/* <input type="text" id="expedition" className="rounded-md bg-quinary py-2 px-2 text-xs mb-3 w-full" value={expedition} onChange={handleExpeditionChange} required/> */}
                        <select id="expedition" className="rounded-md bg-quinary py-2 px-2 text-xs mb-3 w-full" onChange={handleExpeditionChange} value={expedition} required>
                            <option value="">Choose an expedtion</option>
                            <option value="JNE Express">JNE Express</option>
                            <option value="JNT Express">JNT Express</option>
                            <option value="SiCepat">SiCepat</option>
                            <option value="Sentral Cargo">Sentral Cargo</option>
                            <option value="Kitrans">Kitrans</option>
                            <option value="Persero">PT Pelni (Persero)</option>
                            <option value="POS Indonesia">POS Indonesia</option>
                            <option value="Samudera Indonesia">Samudera Indonesia</option>
                        </select>

                        <label htmlFor="shippingDate" className='items-start text-xs mb-2 font-medium'>Shipping Date:</label>
                        <input type="date" id="shippingDate" className="rounded-md bg-quinary py-2 px-2 text-xs mb-3 w-full" value={shippingDate} onChange={handleShippingDateChange} required/>

                        <label htmlFor="shippingTime" className='items-start text-xs mb-2 font-medium'>Shipping Time: </label>
                        <input type="time" id="shippingTime" className='mb-2 rounded-md bg-quinary px-2 py-2 w-full text-xs border-none' value={shippingTime} onChange={handleShippingTimeChange} required/>

                        <div className='mx-auto mt-2 flex justify-center'>
                            <button className='bg-secondary text-white rounded-3xl px-7 py-2 font-semibold hover:bg-primary flex gap-2 items-center' type="submit">SHIP</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    
    )
}

export default ShippingForm;