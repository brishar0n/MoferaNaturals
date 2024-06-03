import React, { useEffect, useState } from "react";
import "../../style/App.css";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../../components/centra/CentraNavbar.jsx";
import Datepicker from "react-tailwindcss-datepicker";
import BatchBox from "../../components/centra/BatchBox";

function History() {
    const [isMobile, setIsMobile] = React.useState(false);
    const navigate = useNavigate();

    const batchCollector = [
        {
            "id": 1,
            "weight": 10,
            "dateCollected": "10-05-2024",
            "timeCollected": "10:30 AM"
        },
        {
            "id": 2,
            "weight": 10,
            "dateCollected": "10-05-2024",
            "timeCollected": "11:30 AM"
        },
        {
            "id": 3,
            "weight": 10,
            "dateCollected": "10-05-2024",
            "timeCollected": "12:30 PM"
        },
        {
            "id": 4,
            "weight": 10,
            "dateCollected": "11-05-2024",
            "timeCollected": "10:30 AM"
        },
    ];

    const getTodayFormatted = () => {
        const today = new Date();
        const day = today.getDate();
        const month = today.getMonth() + 1; // Months are zero-indexed
        const year = today.getFullYear();
        return `${year}-${month < 10 ? "0" + month : month}-${day < 10 ? "0" + day : day}`;
    };

    const [value, setValue] = useState({
        startDate: getTodayFormatted(),
        endDate: getTodayFormatted()
    });

    const [filteredBatches, setFilteredBatches] = useState(batchCollector);

    const handleValueChange = (newValue) => {
        console.log("newValue:", newValue);
        setValue(newValue);

        if (newValue.startDate) {
            const selectedDate = new Date(newValue.startDate);
            const day = selectedDate.getDate();
            const month = selectedDate.getMonth() + 1; // Months are zero-indexed
            const year = selectedDate.getFullYear();

            const formattedDate = `${day < 10 ? "0" + day : day}-${month < 10 ? "0" + month : month}-${year}`;

            const filtered = batchCollector.filter(batch => batch.dateCollected === formattedDate);
            setFilteredBatches(filtered);
        } else {
            setFilteredBatches(batchCollector);
        }
    };

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth < 600);
        }

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleBack = () => navigate("/centradashboard");

    useEffect(() => {
        handleValueChange(value);
    }, []);

    const isToday = value.startDate === getTodayFormatted();

    return (
        <div className="overflow-auto h-[calc(100vh-6rem)] md:h-auto bg-quaternary min-h-screen flex flex-col items-center overflow-auto pt-4 resize-none pb-24">
            {isMobile && (
            <>
                <img src={"src/assets/history/leftFrame.svg"} alt="leftframe" className="right-0 absolute h-full top-0 " />
                <button onClick={handleBack} className="relative -top-4 -left-32 text-gray-600 text-sm font-semibold z-10 mt-8 md-flex">
                    <img src={"src/assets/history/back.svg"} alt="back" className="w-10 mt-8 " />
                </button>
                <h1 className="text-3xl font-bold text-primary z-10 relative -top-14">History</h1>
                <div className="relative mr-auto ml-3 -mt-7 flex">
                    <p className="mr-2 font-medium primary">Date:</p>
                    <Datepicker inputClassName='rounded-md bg-quinary p-1 w-full text-xs border-none' containerClassName='mb-3 relative z-20' toggleClassName='absolute h-full right-0 px-1 text-gray-500 rounded-r-md' primaryColor={"blue"} useRange={false} asSingle={true} value={value} onChange={handleValueChange} />
                </div>
                <div className="w-full px-8 mt-8">
                {filteredBatches.length > 0 ? 
                    (filteredBatches.map((batch, index) => (
                        <div key={batch.id} className="mb-10 relative">
                            {index !== 0 && (
                            <div className="w-0.5 bg-primary h-48 absolute -left-6 ml-3 -top-36 -mt-20"></div>
                            )}
                            <BatchBox 
                                key={index}
                                batch={index+1}
                                weight={batch.weight}
                                timeCollected={batch.timeCollected}
                            />
                        </div>
                    ))
                ) : (
                    <div className="bg-primary p-4 rounded-3xl shadow-lg flex flex-col text-left relative w-3/4 mx-auto">
                        <p className="text-white text-center">
                            {isToday ? "No batches collected yet for today." : "No batches found for the selected date."}
                        </p>
                    </div>
                )}
                </div>
            
                <NavigationBar/>
            </>   
            )}
        </div>
    );
}

export default History;
