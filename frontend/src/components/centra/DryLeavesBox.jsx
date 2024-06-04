import React, { useEffect, useState } from "react";

function DryLeavesBox({ weight, driedDate, id, status, finishedTime }) {
    const [timeLeft, setTimeLeft] = useState(null);

    useEffect(() => {
        if (status === "flouring" && finishedTime) {
            const intervalId = setInterval(() => {
                const currentTime = new Date();
                const timeDiff = Math.max(0, Math.floor((new Date(finishedTime) - currentTime) / 1000)); // Time difference in seconds
                setTimeLeft(timeDiff);

                if (currentTime >= new Date(finishedTime)) {
                    clearInterval(intervalId);
                    setTimeLeft(0);
                }
            }, 1000);

            return () => clearInterval(intervalId);
        }
    }, [status, finishedTime]);

    const formatTimeLeft = (seconds) => {
        const hours = Math.floor(seconds / 3600).toString().padStart(2, '0');
        const minutes = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
        const sec = (seconds % 60).toString().padStart(2, '0');
        return `${hours}h${minutes}m${sec}s`;
    };

    return (
        <div className="bg-white mb-5 w-2/3 mx-auto py-5 px-7 rounded-2xl text-left relative flex flex-col">
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
                value={status} 
                readOnly
                className="mb-2 rounded-md bg-quinary px-2 py-1 w-full text-xs border-none"
                required 
                aria-label="Status"
            />
            <div className='mx-auto mt-2 flex justify-center'>
                {status === "flouring" && (
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
