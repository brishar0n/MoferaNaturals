import React from "react";
import "../../style/App.css"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../../components/centra/CentraNavbar";
import {Select, SelectSection, SelectItem} from "@nextui-org/select";

function FlourDryLeaves(){
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

    const handleAdd = () => navigate("/adddryleaves");
    
    return (
      <div>
        {isMobile && (
          <>
            <div className="overflow-auto h-[calc(100vh-6rem)] md:h-auto bg-quaternary min-h-screen flex flex-col items-center overflow-auto resize-none pb-24">
                <img src="src/assets/AddPage/frameAdd.svg" className="absolute top-100vh w-screen z-0"></img>
                

                <div className="flex pt-16 gap-11 pr-20 z-10">
                    <img src="src/assets/common/backarrow.svg" onClick={handleBack}></img>
                    <p className="font-bold text-primary text-3xl"> Dry Leaves </p>
                </div>

                <br></br>

                <div className="bg-white w-2/3 rounded-full z-20">
                    <div className="flex text-s gap-1 font-medium p-1">
                        <p className="w-48 rounded-full p-1" onClick={handleAdd}> Add </p>
                        <p className="w-48 bg-tertiary text-white rounded-full p-1"> Flour </p>
                    </div>
                </div>

                <br></br>

                <div className="w-30 bg-white rounded-lg flex gap-1">
                    <img src="src/assets/centra/calendar.svg" className="pl-2"></img>
                    <p className="font-semibold text-xs text-primary pt-1 pb-1 pr-5">Date: 07/03/2024</p>
                </div>

                <div className="w-30 pl-3 pr-3 bg-white rounded-lg flex gap-1 mt-4">
                    <img src="src/assets/centra/weight.svg" className=" "></img>
                    <p className="font-semibold text-xs text-primary pt-1 pb-1 pr-5 pl-2">Weight: 30Kg</p>
                </div>

                <div className="mt-4 text-primary font-medium flex gap-2 justify-center items-center">
                    <p>Select Interval: </p>
                    <Select className="w-32 text-primary">
                        <SelectItem key={"daily"} value={"daily"}> Daily (1d)</SelectItem>
                        <SelectItem key={"threedays"} value={"threedays"}> Three days </SelectItem>
                        <SelectItem key={"weekly"} value={"weekly"}> Weekly (7d) </SelectItem>
                    </Select>
                </div>

                <br></br>

                <div className="bg-white w-2/3 rounded-2xl z-30">
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
                </div>

                <button className="bg-secondary pl-8 pr-8 pt-2 pb-2 rounded-full text-white font-semibold mt-4 z-40"> FLOUR </button>
            </div>
            
            <NavigationBar></NavigationBar>
          </>
        )}
  
      </div>
    );
}

export default FlourDryLeaves;
