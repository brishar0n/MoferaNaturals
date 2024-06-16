import React, { useEffect, useState } from "react";

function BatchBox({weight, timeCollected, batch}) {
    const [countdown, setCountdown] = useState("");

    useEffect(() => {
        // Calculate the end time (4 hours after timeCollected)
        const endTime = new Date(new Date().toDateString() + ' ' + timeCollected);
        endTime.setHours(endTime.getHours() + 4);

        const updateCountdown = () => {
            const now = new Date();
            const timeDifference = endTime - now;

            if (timeDifference <= 0) {
                setCountdown("00:00:00");
                return;
            }

            const hours = Math.floor(timeDifference / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            setCountdown(
                `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
            );
        };

        const intervalId = setInterval(updateCountdown, 1000);

        // Initial call to set the countdown immediately
        updateCountdown();

        return () => clearInterval(intervalId);
    }, [timeCollected]);
    
    return (
        <div className="relative z-10">
            <div className="bg-primary p-4 rounded-3xl shadow-lg flex flex-col text-left">
                <div className="flex ml-3 mt-1">
                    <p className="text-white">Weight: </p>
                    {/* <input type="text" className="bg-transparent text-white border-b ml-3"/> */}
                    <p className="border-b text-white ml-3 w-1/2">{weight} kg</p>   
                </div>
                
                <div className="flex ml-3 mt-1">
                    <p className="text-white ">Time collected: </p>
                    <p className="border-b text-white ml-3 w-1/2">{timeCollected}</p>  
                </div>
                
                <div className="mt-4 py-2 px-4 bg-white rounded-full text-center w-1/2 mx-auto">
                    <p className="text-red-700 font-semibold">{countdown}</p>
                </div>
            </div>
            <div className="w-6 h-6 bg-primary rounded-full absolute -top-8 -left-6"></div>
            <p className="absolute text-xl -top-8 left-4 font-bold text-primary">Batch #{batch}</p>
        </div>
    )
}

export default BatchBox;