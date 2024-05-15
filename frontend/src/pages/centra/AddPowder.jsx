import React from "react";
import "../../style/App.css"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../../components/Navbar";

function AddPowder(){
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

    const handleBack = () => navigate("/homepage");
    
    return (
      <div>
        {isMobile && (
          <>
            <div className="overflow-auto h-[calc(100vh-6rem)] md:h-auto bg-quaternary min-h-screen flex flex-col items-center overflow-auto resize-none pb-24">
                <img src="src/assets/AddPage/frameAdd.svg" className="absolute top-100vh w-screen z-0"></img>

                <div className="flex pt-16 gap-11 pr-20 z-10">
                    <img src="src/assets/common/backarrow.svg" onClick={handleBack}></img>
                    <p className="font-bold text-primary text-3xl"> Powder </p>
                </div>

                <br></br>

                <div className="bg-white w-2/3 h-1/4 rounded-2xl z-30">
                    <div className="flex flex-col justify-center items-center pt-5">
                        <label htmlFor="weight" className="font-medium text-sm pr-44 mb-1">Weight:</label>
                        <input 
                        type="number" 
                        value={weight} 
                        onChange={handleWeightChange}
                        className="w-4/5 bg-quinary rounded-md pl-2"></input>
                    </div>

                    <div className="flex flex-col justify-center items-center pt-4">
                        <label htmlFor="date" className="font-medium text-sm pr-48 mb-1">Date:</label>
                        <input 
                        type="date" 
                        value={date.toISOString().substring(0, 10)} 
                        onChange={handleDateChange}
                        className="w-4/5 bg-quinary rounded-md pl-2"></input>
                    </div>

                    <br></br>

                    <button className="bg-secondary pl-8 pr-8 pt-2 pb-2 rounded-full text-white font-semibold -mt-2"> ADD </button>

                </div>

                <div className="bg-white w-2/3 h-1/4 mt-7 rounded-2xl z-30">
                    <div className="flex flex-col justify-center items-center pt-5">
                        <label htmlFor="weight" className="font-medium text-sm pr-44 mb-1">Weight:</label>
                        <p 
                        type="number" 
                        value={weight} 
                        className="w-4/5 bg-quinary rounded-md pl-2"> - </p>
                    </div>

                    <div className="flex flex-col justify-center items-center pt-4">
                        <label htmlFor="date" className="font-medium text-sm pr-48 mb-1">Date:</label>
                        <p 
                        type="date" 
                        value={date.toISOString().substring(0, 10)} 
                        className="w-4/5 bg-quinary rounded-md pl-2"> - </p>
                    </div>
                </div>

                <div className="bg-white w-2/3 h-1/4 mt-7 rounded-2xl z-30">
                    <div className="flex flex-col justify-center items-center pt-5">
                        <label htmlFor="weight" className="font-medium text-sm pr-44 mb-1">Weight:</label>
                        <p 
                        type="number" 
                        value={weight} 
                        className="w-4/5 bg-quinary rounded-md pl-2"> - </p>
                    </div>

                    <div className="flex flex-col justify-center items-center pt-4">
                        <label htmlFor="date" className="font-medium text-sm pr-48 mb-1">Date:</label>
                        <p 
                        type="date" 
                        value={date.toISOString().substring(0, 10)} 
                        className="w-4/5 bg-quinary rounded-md pl-2"> - </p>
                    </div>
                </div>

            </div>
            
            <NavigationBar></NavigationBar>
          </>
        )}
  
      </div>
    );
}

export default AddPowder;