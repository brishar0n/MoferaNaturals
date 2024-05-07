import React, { useEffect, useState } from "react";
import "../../style/App.css";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../../components/Navbar.jsx";
import Datepicker from "react-tailwindcss-datepicker";

function History() {
    const [isMobile, setIsMobile] = React.useState(false);
    const navigate = useNavigate();

    const [value, setValue] = useState({ 
        startDate: null,
        endDate: null 
    }); 

    const handleValueChange = (newValue) => {
        console.log("newValue:", newValue); 
        setValue(newValue); 
    }

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth < 600);
        }

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleBack = () => navigate("/dashboard");

    const batches = [1, 2, 3, 4,5,6,7,8,9]; 

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
                    <Datepicker inputClassName='rounded-md bg-quinary p-1 w-full text-xs border-none' containerClassName='mb-3 relative z-20' toggleClassName='bg-quinary absolute h-full right-0 px-1 text-gray-500 rounded-r-md' primaryColor={"blue"} useRange={false} asSingle={true} value={value} onChange={handleValueChange} />
                </div>
                <div className="w-full px-8 mt-8">
                    {batches.map((batch, index) => (
                    <div key={batch} className="mb-10 relative">
                        {index !== 0 && (
                        <div className="w-0.5 bg-primary h-48 absolute -left-6 ml-3 -top-32 -mt-20"></div>
                        )}
                        <div className="relative z-10">
                        <div className="bg-primary p-4 rounded-3xl shadow-lg flex flex-col text-left">
                            <div className="flex justify-evenly">
                                <p className="text-white">Weight: </p>
                                <input type="text" className="bg-transparent text-white"/>   
                            </div>
                            
                            <div className="flex justify-evenly mt-1">

                                <p className="text-white ">Time Collected: </p>
                                <input type="text" className="bg-transparent text-white" />

                            </div>
                            
                            <div className="mt-8 py-2 px-4 bg-white rounded-full text-center">
                                <p className="text-red-700 font-semibold">04:00:00</p>
                            </div>
                        </div>
                        <div className="w-6 h-6 bg-primary rounded-full absolute -top-8 -left-6"></div>
                        <p className="absolute text-xl -top-8 left-4 font-bold text-primary">Batch #{batch}</p>
                        </div>
                    </div>
                    ))}
                </div>
            
                <NavigationBar/>
            </>   
            )}
        </div>
    );
}

export default History;
