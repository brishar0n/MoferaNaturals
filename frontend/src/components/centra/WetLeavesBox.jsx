import React, { useEffect, useState } from "react";
import ConfirmationModal from "./ConfirmationModal";

function WetLeavesBox({ weight, date, id, washedDatetime, driedDatetime, handleWashOrDry, isWashingPage }) {
    const [timeLeft, setTimeLeft] = useState(0); 
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalAction, setModalAction] = useState("");
    const [status, setStatus] = useState("");

    useEffect(() => {
        const now = new Date();
        if (washedDatetime && new Date(washedDatetime) > now) {
            setStatus("washing");
            setTimeLeft(Math.floor((new Date(washedDatetime).getTime() + 10 * 60 * 1000 - now.getTime()) / 1000));
        } else if (washedDatetime) {
            setStatus("washed");
        } else if (driedDatetime && new Date(driedDatetime) > now) {
            setStatus("drying");
            setTimeLeft(Math.floor((new Date(driedDatetime).getTime() + 24 * 60 * 60 * 1000 - now.getTime()) / 1000));
        } else if (driedDatetime) {
            setStatus("dried");
        } else {
            setStatus("");
        }
    }, [washedDatetime, driedDatetime]);

    useEffect(() => {
        let intervalId;
        if ((status === "washing" || status === "drying") && timeLeft > 0) {
            intervalId = setInterval(() => {
                setTimeLeft(prevTime => {
                    if (prevTime <= 1) {
                        clearInterval(intervalId);
                        handleWashOrDry(id, status === "washing" ? "washed" : "dried", null);
                        return 0;
                    }
                    return prevTime - 1;
                });
            }, 1000);
        }
        return () => clearInterval(intervalId);
    }, [status, timeLeft, handleWashOrDry, id]);

    const handleButtonClick = (action) => {
        setIsModalOpen(true);
        setModalAction(action);
    };

    const handleConfirmAction = () => {
        setIsModalOpen(false);
        const newFinishedTime = new Date(Date.now() + (modalAction === "wash" ? 10 * 60 * 1000 : 24 * 60 * 60 * 1000));
        handleWashOrDry(id, modalAction === "wash" ? "washing" : "drying", newFinishedTime.toISOString());
    };

    const formatTimeLeft = (seconds) => {
        if (isWashingPage) {
            const min = Math.floor(seconds / 60).toString().padStart(2, '0');
            const sec = (seconds % 60).toString().padStart(2, '0');
            return `${min}m${sec}s`;
        } else {
            const hours = Math.floor(seconds / 3600).toString().padStart(2, '0');
            const minutes = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
            const sec = (seconds % 60).toString().padStart(2, '0');
            return `${hours}h${minutes}m${sec}s`;
        }
    };

    const isButtonDisabled = () => {
        if (isWashingPage) {
            return status === "washing" || status === "washed";
        }
        return status === "drying" || status === "dried";
    };

    const buttonLabel = () => {
        if (status === "washing" || status === "drying") {
            return formatTimeLeft(timeLeft);
        }
        if (isWashingPage) {
            return status === "washed" ? "DONE" : "WASH";
        }
        return status === "dried" ? "DONE" : "DRY";
    };
    

    return (
        <div className="">
            <div className="relative">
                <p className="text-lg text-primary font-medium z-100 mb-6">Wet Leaves - WET#{id}</p>
            </div>
            
            <div className='bg-white mb-5 mx-auto py-5 px-7 rounded-2xl text-left relative flex flex-col'>
                {((status === "washing" && washedDatetime) || (status === "drying" && driedDatetime)) && (
                    <p className="text-xxs mb-1 text-red-600 font-semibold text-right">Finished Time: {new Date((status === "washing" ? new Date(washedDatetime).getTime() + 10 * 60 * 1000 : new Date(driedDatetime).getTime() + 24 * 60 * 60 * 1000)).toLocaleTimeString()}</p>
                )}
                <label htmlFor="weight" className="items-start text-sm mb-2 font-medium">Weight:</label>
                <input 
                    type="number" 
                    value={weight} 
                    readOnly
                    className="mb-2 rounded-md bg-quinary px-2 py-1 w-full text-xs border-none"
                    required 
                />
                <label htmlFor="date" className="items-start text-sm mb-2 font-medium">Collected Date:</label>
                <input 
                    type="date" 
                    value={date} 
                    readOnly
                    className="mb-2 rounded-md bg-quinary px-2 py-1 w-full text-xs border-none"
                    required 
                />
                
                <div className='mx-auto mt-2 flex justify-center'>
                    <button 
                        className={`rounded-3xl px-7 py-2 font-semibold flex gap-2 items-center ${isButtonDisabled() ? "bg-gray-400 text-white" : "bg-secondary text-white"}`} 
                        onClick={() => handleButtonClick(isWashingPage ? "wash" : "dry")}
                        disabled={isButtonDisabled()}
                    >
                        {buttonLabel()}
                    </button>
                </div>
            </div>

            <ConfirmationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={handleConfirmAction}
                isDryPage={!isWashingPage && modalAction === "dry"}
            />
        </div>
    );
}

export default WetLeavesBox;
