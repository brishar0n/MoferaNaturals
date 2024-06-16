import React from "react";

function PowderBox({ weight, driedDate, flouredDate, id }) {

    return (
        <div className='bg-white mb-8 mx-auto py-5 px-7 rounded-2xl text-left relative flex flex-col shadow-lg'>
            <div className="flex items-end justify-end w-full">
                <p className="font-medium text-slate-500 text-xxs">PWD#{id}</p>
            </div>
            <label htmlFor="weight" className="items-start text-sm mb-2 font-medium">Weight:</label>
                <input 
                    type="number" 
                    value={weight} 
                    readOnly
                    className="mb-2 rounded-md bg-quinary px-2 py-2 w-full text-xs border-none"
                    required 
                />
            <label htmlFor="driedDate" className="items-start text-sm mb-2 font-medium">Dried Date:</label>
                <input 
                    type="date" 
                    value={driedDate} 
                    readOnly
                    className="mb-2 rounded-md bg-quinary px-2 py-2 w-full text-xs border-none"
                    required 
                />
            <label htmlFor="flouredDate" className="items-start text-sm mb-2 font-medium">Floured Date:</label>
                <input 
                    type="date" 
                    value={flouredDate} 
                    readOnly
                    className="mb-2 rounded-md bg-quinary px-2 py-2 w-full text-xs border-none"
                    required 
                />
            
        </div>
    );
};

export default PowderBox;