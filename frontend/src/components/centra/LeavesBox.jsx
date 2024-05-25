import React, { useEffect, useState } from "react";

function LeavesBox({ weight, date, id, status, finishedTime, handleWash }) {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds

  useEffect(() => {
    if (status === "washing" && finishedTime) {
      setTimeLeft(Math.max(0, Math.floor((finishedTime - new Date()) / 1000))); // Time difference in seconds
    }
  }, [status, finishedTime]);

  useEffect(() => {
    let intervalId;
    if (status === "washing" && finishedTime) {
      intervalId = setInterval(() => {
        const currentTime = new Date();
        const timeDiff = Math.max(0, Math.floor((finishedTime - currentTime) / 1000)); // Time difference in seconds
        setTimeLeft(timeDiff);

        if (currentTime >= finishedTime) {
          clearInterval(intervalId);
          handleWash(id, "washed");
        }
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [status, finishedTime, handleWash, id]);

  const handleWashClick = () => {
    handleWash(id, "washing");
  };

  const formatTime = (time) => {
    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  const formatTimeLeft = (seconds) => {
    const min = Math.floor(seconds / 60).toString().padStart(2, '0');
    const sec = (seconds % 60).toString().padStart(2, '0');
    return `${min}m${sec}s`;
  };

  return (
    <>
      <div className="relative">
        <p className="text-lg text-primary font-medium z-100 mb-6">Wet Leaves - WET#{id}</p>
      </div>
      
      <div className='bg-white mb-5 w-3/4 mx-auto py-5 px-7 rounded-2xl text-left relative flex flex-col'>
        {status === "washing" && finishedTime && (
          <>
            <p className="text-xs pl-20 text-red-600 font-semibold text-right">Finished Time: {formatTime(finishedTime)}</p>
          </>
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
            className={`rounded-3xl px-7 py-2 font-semibold flex gap-2 items-center ${status === "washed" ? "bg-gray-400 text-white" : "bg-secondary text-white"}`} 
            onClick={handleWashClick}
            disabled={status === "washed" || status === "washing"}
          >
            {status === "washed" ? "DONE" : (status === "washing" ? formatTimeLeft(timeLeft) : "WASH")}
          </button>
        </div>
      </div>
    </>
  );
}

export default LeavesBox;
