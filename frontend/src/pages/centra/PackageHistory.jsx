import React from "react";
import "../../style/App.css"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../../components/centra/CentraNavbar";

function PackageHistory(){
    const [weight, setWeight] = useState(0);
    const [date, setDate] = useState(new Date());
    const [isMobile, setIsMobile] = React.useState(false);
    const navigate = useNavigate();

    const handleWeightChange = (event) => {
        setWeight(event.target.value);
    };

    const handleDateChange = (event) => {
        setDate(event.target.value);
    };

    useEffect(() => {
        function handleResize() {
        setIsMobile(window.innerWidth < 600);
        }

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleBack = () => navigate("/dashboard");

    const handleAdd= () => navigate("/addpackage");
    
    return (
      <div>
        {isMobile && (
          <>
            <div className="overflow-auto h-[calc(100vh-6rem)] md:h-auto bg-quaternary min-h-screen flex flex-col items-center overflow-auto resize-none pb-24">
                <img src="src/assets/AddPage/frameAdd.svg" className="absolute top-100vh w-screen z-0"></img>

                <div className="flex pt-16 gap-11 pr-20 z-10">
                    <img src="src/assets/common/backarrow.svg" onClick={handleBack}></img>
                    <p className="font-bold text-primary text-3xl"> Package </p>
                </div>

                <br></br>

                <div className="bg-white w-2/3 rounded-full z-20">
                    <div className="flex text-s gap-1 font-medium p-1">
                        <p className="w-48 rounded-full p-1" onClick={handleAdd}> Add </p>
                        <p className="w-48 bg-tertiary rounded-full text-white p-1"> History </p>
                    </div>
                </div>
            
                <br></br>

                <div className="bg-white w-2/3 h-1/4 rounded-2xl z-30">
                    <div className="flex flex-col justify-center items-center pt-5 -mt-2">
                        <div className="flex items-end justify-end pr-7 w-full">
                            <p className="font-medium text-slate-500 text-xxs">PKG#200420</p>
                        </div>
                        <label htmlFor="weight" className="font-medium text-sm pr-44 mb-0.5">Weight:</label>
                        <input 
                        type="number" 
                        value={weight} 
                        onChange={handleWeightChange}
                        className="w-4/5 bg-quinary rounded-md pl-2"></input>
                    </div>

                    <div className="flex flex-col justify-center items-center pt-1">
                        <label htmlFor="date" className="font-medium text-sm pr-48 mb-1">Date:</label>
                        <input 
                        type="date" 
                        value={date.toISOString().substring(0, 10)} 
                        onChange={handleDateChange}
                        className="w-4/5 bg-quinary rounded-md pl-2"></input>
                    </div>

                    <br></br>
                    
                    <button className="bg-secondary pl-8 pr-8 pt-2 pb-2 rounded-full text-white font-semibold -mt-2"> READY TO SHIP </button>

                    
                </div>
        
                <br></br>

                <div className="bg-white w-2/3 h-1/4 rounded-2xl z-30">
                    <div className="flex flex-col justify-center items-center pt-5 -mt-2">
                        <div className="flex items-end justify-end pr-7 w-full">
                            <p className="font-medium text-slate-500 text-xxs">PKG#200420</p>
                        </div>
                        <label htmlFor="weight" className="font-medium text-sm pr-44 mb-0.5">Weight:</label>
                        <input 
                        type="number" 
                        value={weight} 
                        onChange={handleWeightChange}
                        className="w-4/5 bg-quinary rounded-md pl-2"></input>
                    </div>

                    <div className="flex flex-col justify-center items-center pt-1">
                        <label htmlFor="date" className="font-medium text-sm pr-48 mb-1">Date:</label>
                        <input 
                        type="date" 
                        value={date.toISOString().substring(0, 10)} 
                        onChange={handleDateChange}
                        className="w-4/5 bg-quinary rounded-md pl-2"></input>
                    </div>

                    <br></br>
                    
                    <button className="bg-secondary pl-8 pr-8 pt-2 pb-2 rounded-full text-white font-semibold -mt-2"> SHIPPED </button>

                </div>

                <br></br>

                <div className="bg-white w-2/3 h-1/4 rounded-2xl z-30">
                    <div className="flex flex-col justify-center items-center pt-5 -mt-2">
                        <div className="flex items-end justify-end pr-7 w-full">
                            <p className="font-medium text-slate-500 text-xxs">PKG#200420</p>
                        </div>
                        <label htmlFor="weight1" className="font-medium text-sm pr-44 mb-0.5">Weight:</label>
                        <input 
                        type="number" 
                        value={weight} 
                        onChange={handleWeightChange}
                        className="w-4/5 bg-quinary rounded-md pl-2"></input>
                    </div>

                    <div className="flex flex-col justify-center items-center pt-1">
                        <label htmlFor="date" className="font-medium text-sm pr-48 mb-1">Date:</label>
                        <input 
                        type="date" 
                        value={date.toISOString().substring(0, 10)} 
                        onChange={handleDateChange}
                        className="w-4/5 bg-quinary rounded-md pl-2"></input>
                    </div>

                    <br></br>
                    
                    <button className="bg-secondary pl-8 pr-8 pt-2 pb-2 rounded-full text-white font-semibold -mt-2"> CONFIRMED </button>

                </div>

                <br></br>

                <div className="bg-white w-2/3 h-1/4 rounded-2xl z-30">
                    <div className="flex flex-col justify-center items-center pt-5 -mt-2">
                        <div className="flex items-end justify-end pr-7 w-full">
                            <p className="font-medium text-slate-500 text-xxs">PKG#200420</p>
                        </div>
                        <label htmlFor="weight1" className="font-medium text-sm pr-44 mb-0.5">Weight:</label>
                        <input 
                        type="number" 
                        value={weight} 
                        onChange={handleWeightChange}
                        className="w-4/5 bg-quinary rounded-md pl-2"></input>
                    </div>

                    <div className="flex flex-col justify-center items-center pt-1">
                        <label htmlFor="date" className="font-medium text-sm pr-48 mb-1">Date:</label>
                        <input 
                        type="date" 
                        value={date.toISOString().substring(0, 10)} 
                        onChange={handleDateChange}
                        className="w-4/5 bg-quinary rounded-md pl-2"></input>
                    </div>

                    <br></br>
                    
                    <button className="bg-secondary pl-8 pr-8 pt-2 pb-2 rounded-full text-white font-semibold -mt-2"> ARRIVED </button>
                
                </div>

                <br></br>

                <div className="bg-white w-2/3 h-1/4 rounded-2xl z-30">
                    <div className="flex flex-col justify-center items-center pt-5 -mt-2">
                        <div className="flex items-end justify-end pr-7 w-full">
                            <p className="font-medium text-slate-500 text-xxs">PKG#200420</p>
                        </div>
                        <label htmlFor="weight1" className="font-medium text-sm pr-44 mb-0.5">Weight:</label>
                        <input 
                        type="number" 
                        value={weight} 
                        onChange={handleWeightChange}
                        className="w-4/5 bg-quinary rounded-md pl-2"></input>
                    </div>

                    <div className="flex flex-col justify-center items-center pt-1">
                        <label htmlFor="date" className="font-medium text-sm pr-48 mb-1">Date:</label>
                        <input 
                        type="date" 
                        value={date.toISOString().substring(0, 10)} 
                        onChange={handleDateChange}
                        className="w-4/5 bg-quinary rounded-md pl-2"></input>
                    </div>

                    <br></br>
                    
                    <button className="bg-secondary pl-8 pr-8 pt-2 pb-2 rounded-full text-white font-semibold -mt-2"> EXPIRED </button>
                
                </div>
                
            </div>

            <NavigationBar></NavigationBar>
          </>
        )}
  
      </div>
    );
}
  
export default PackageHistory;
