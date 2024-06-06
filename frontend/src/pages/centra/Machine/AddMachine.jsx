import React from "react";
import "../../style/App.css"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../../../components/centra/CentraNavbar";
import { Dropdown } from 'primereact/dropdown';

function AddMachine(){
    const [weight, setWeight] = useState(0);
    const [date, setDate] = useState(new Date());
    const [isMobile, setIsMobile] = React.useState(false);
    const [selectedMachine, setSelectedMachine] = useState(null);
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

    const handleFlour = () => navigate("/flourdryleaves");

    const handleEdit = () => navigate("/editmachine");
 
    const machines = [
      { label: 'Drying', value: 'drying' },
      { label: 'Flouring', value: 'flouring' },
    ];

    return (
      <div>
        {isMobile && (
          <>
            <div className="overflow-auto h-[calc(100vh-6rem)] md:h-auto bg-quaternary min-h-screen flex flex-col items-center overflow-auto resize-none pb-24">
                <img src="src/assets/AddPage/frameAdd.svg" className="absolute top-100vh w-screen z-0"></img>
                <img src="src/assets/AddPage/mascotAdd.svg" className="absolute right-72 pt-96 pr-4 top-16 z-40"></img>

                <div className="flex pt-16 gap-16 pr-20 z-10">
                    <img src="src/assets/common/backarrow.svg" onClick={handleBack}></img>
                    <p className="font-bold text-primary text-3xl"> Machine </p>
                </div>

                <br></br>

                <div className="bg-white w-2/3 rounded-full z-20">
                    <div className="flex text-s gap-1 font-medium p-1">
                        <p className="w-48 bg-tertiary rounded-full text-white p-1"> Add </p>
                        <p className="w-48 rounded-full p-1" onClick={handleFlour}> Edit </p>
                    </div>
                </div>

                <br></br>

                <p className="text-2xl text-primary font-semibold"> Add a new machine </p>

                <br></br>

                <div className="bg-white w-2/3 h-1/4 rounded-2xl z-30">
                    <div className="flex flex-col justify-left pl-5 pt-5">
                        <label htmlFor="weight" className="font-medium text-sm pr-40">Machine type:</label>
                        {/* <input 
                        type="number" 
                        value={weight} 
                        onChange={handleWeightChange}
                        className="w-4/5 bg-quinary rounded-md"></input> */}
                        <Dropdown
                        value={selectedMachine}
                        onChange={(e) => setSelectedMachine(e.value)}
                        optionLabel="label"
                        options={machines}
                        placeholder="Drying"
                        className="w-1/2 text-septenary text-sm font-medium bg-quinary rounded-md items-center pr-2 pt-1 pb-1"
                        />
                    </div>

                    <div className="flex flex-col justify-left pl-5 pt-3">
                        <label htmlFor="date" className="font-medium text-sm pr-36">Weight Capacity:</label>
                        <input 
                        type="date" 
                        value={date.toISOString().substring(0, 10)} 
                        onChange={handleDateChange}
                        className="w-11/12 bg-quinary rounded-md text-sm pt-1 pb-1 text-start pl-2"></input>
                    </div>

                    <br></br>

                    <button className="bg-secondary pl-8 pr-8 pt-2 pb-2 rounded-xl text-white font-semibold -mt-2"> ADD </button>

                </div>
            </div>
            
            <NavigationBar></NavigationBar>
          </>
        )}
  
      </div>
    );
}
  
export default AddMachine;