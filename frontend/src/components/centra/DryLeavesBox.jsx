import React, { useEffect, useState } from "react";

function DryLeavesBox({ weight, driedDate, id, flouredDatetime}) {
    const [timeLeft, setTimeLeft] = useState(null);

    useEffect(() => {
        if (flouredDatetime) {
            const intervalId = setInterval(() => {
                const currentTime = new Date();
                const flouredTime = new Date(flouredDatetime);
                const timeDiff = Math.max(0, Math.floor((flouredTime.getTime() + 4 * 60 * 60 * 1000 - currentTime.getTime()) / 1000)); // Time difference in seconds
                setTimeLeft(timeDiff);

                if (currentTime >= new Date(flouredTime.getTime() + 4 * 60 * 60 * 1000)) {
                    clearInterval(intervalId);
                    setTimeLeft(0);
                }
            }, 1000);

            return () => clearInterval(intervalId);
        }
    }, [flouredDatetime]);

    const formatTimeLeft = (seconds) => {
        const hours = Math.floor(seconds / 3600).toString().padStart(2, '0');
        const minutes = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
        const sec = (seconds % 60).toString().padStart(2, '0');
        return `${hours}h${minutes}m${sec}s`;
    };

    const getStatus = (flouredDatetime) => {
        if (!flouredDatetime) {
            return "washed";
        }
        const currentTime = new Date();
        const flouredTime = new Date(flouredDatetime);
        if (currentTime < new Date(flouredTime.getTime() + 4 * 60 * 60 * 1000)) {
            return "flouring";
        }
        return "floured";
    };

    return (
        <div className="bg-white w-full mb-5 mx-auto py-5 px-7 rounded-2xl text-left relative flex flex-col shadow-lg">
            <div className="flex items-end justify-end w-full">
                <p className="font-medium text-slate-500 text-xs">DRY#{id}</p>
            </div>
            <label htmlFor="weight" className="items-start text-sm mb-2 font-medium">Weight:</label>
            <input 
                type="number" 
                value={weight} 
                readOnly
                className="mb-2 rounded-md bg-quinary px-2 py-1 w-full text-xs border-none"
                required 
                aria-label="Weight"
            />
            <label htmlFor="date" className="items-start text-sm mb-2 font-medium">Dried Date:</label>
            <input 
                type="date" 
                value={driedDate} 
                readOnly
                className="mb-2 rounded-md bg-quinary px-2 py-1 w-full text-xs border-none"
                required 
                aria-label="Dried Date"
            />
            <label htmlFor="status" className="items-start text-sm mb-2 font-medium">Status:</label>
            <input 
                type="text" 
                value={getStatus(flouredDatetime)} 
                readOnly
                className="mb-2 rounded-md bg-quinary px-2 py-1 w-full text-xs border-none"
                required 
                aria-label="Status"
            />
            <div className='mx-auto mt-2 flex justify-center'>
                {getStatus(flouredDatetime) === "flouring" && (
                    <button 
                        className="rounded-full px-7 flex gap-2 items-center py-2 font-semibold bg-gray-400 text-white mt-2" 
                        disabled
                    >
                        {formatTimeLeft(timeLeft)}
                    </button>
                )}
            </div>
                
        </div>
    );
}

export default DryLeavesBox;
