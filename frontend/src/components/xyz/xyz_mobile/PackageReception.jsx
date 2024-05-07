import React from 'react';
import { useState } from 'react';
import '../../../style/xyz/xyz_mobile/ReceptionPackage.css';
import Datepicker from "react-tailwindcss-datepicker"; 
import ReceptionHeader from './ReceptionHeader';
import { useNavigate } from 'react-router-dom';

function PackageReception() {
    const [value, setValue] = useState({ 
        startDate: null,
        endDate: null 
    }); 

    const navigate = useNavigate();
        
    const handleValueChange = (newValue) => {
        console.log("newValue:", newValue); 
        setValue(newValue); 
    }

    function handleReception(){
        navigate(`/receptiondocument`);
    }
        
    return (
        <div className='pb-36'>
            <ReceptionHeader />

            <form className='bg-white mb-5 w-3/4 mx-auto py-5 px-9 rounded-2xl text-left relative mt-5 flex flex-col'>
                <label htmlFor="packageId" className='items-start text-xs mb-2 font-medium'>Package ID:</label>
                <input type="text" id="packageId" className='mb-2 rounded-md bg-quinary px-2 py-1 w-full text-xs border-none'/>
                            
                <label htmlFor="totalPackagesReceived" className='items-start text-xs mb-2 font-medium'>Total Packages Received:</label>
                <input type="number" id="totalPackagesReceived" className='mb-2 rounded-md bg-quinary px-2 py-1 w-full text-xs border-none'/>

                <label htmlFor="weight" className='items-start text-xs mb-2 font-medium'>Weight:</label>
                <input type="number" id="weight" className='mb-2 rounded-md bg-quinary px-2 py-1 w-full text-xs border-none'/>

                <label htmlFor="receivalDate" className='items-start text-xs mb-2 font-medium'>Receival Date:</label>
                <Datepicker inputClassName='rounded-md bg-quinary px-2 py-2 w-full text-xs border-none' containerClassName='mb-3 relative' toggleClassName='bg-quinary absolute h-full right-0 px-1 text-gray-500 rounded-r-md' primaryColor={"blue"} useRange={false} asSingle={true} value={value} onChange={handleValueChange} />

                <label htmlFor="fromCentra" className='items-start text-xs mb-2 font-medium'>From Centra:</label>
                <input type="number" id="fromCentra" className='mb-2 rounded-md bg-quinary px-2 py-1 w-full text-xs border-none'/>

                <div className='mx-auto mt-3'>
                    <button className='bg-secondary text-white rounded-3xl px-7 py-2 font-medium hover:bg-primary' onClick={handleReception}>Reception Doc</button>
                </div>
            </form>

            <div className='flex mx-auto relative w-full justify-center gap-10 down'>
                <div className=''>
                    <button type="submit" className='bg-secondary text-white rounded-3xl px-10 py-2 font-semibold hover:bg-primary'>Notify</button>
                </div>
                <div className=''>
                    <button type="submit" className='bg-secondary text-white rounded-3xl px-10 py-2 font-semibold hover:bg-primary'>Submit</button>
                </div>
            </div>
            
        </div>
        
    );
}

export default PackageReception;