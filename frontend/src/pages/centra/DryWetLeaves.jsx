import React from "react";
import "../../style/App.css"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../../components/centra/CentraNavbar";
import WashButton from "../../components/centra/WashButton";
import {Slider} from "@nextui-org/react";

function DryWetLeaves(){
    const [weight, setWeight] = useState(0);
    const [date, setDate] = useState(new Date());
    const [isMobile, setIsMobile] = React.useState(false);
    const [showMachineSettings, setMachineSettings] = useState(false);
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

    const handleAdd= () => navigate("/addwetleaves");

    const handleWash = () => navigate("/washwetleaves");

    const ToggleMachineSettings = () => {
        setMachineSettings(!showMachineSettings);
    }
    
    return (
      <div>
        {isMobile && (
          <>
            <div className="overflow-auto h-[calc(100vh-6rem)] md:h-auto bg-quaternary min-h-screen flex flex-col items-center overflow-auto resize-none pb-24">
                <img src="src/assets/AddPage/frameAdd.svg" className="absolute top-100vh w-screen z-0"></img>

                <div className="flex pt-16 gap-11 pr-20 z-10">
                    <img src="src/assets/common/backarrow.svg" onClick={handleBack}></img>
                    <p className="font-bold text-primary text-3xl">Wet Leaves </p>
                </div>

                <br></br>

                <div className="bg-white w-2/3 rounded-full z-20">
                    <div className="flex text-s gap-1 font-medium p-1">
                        <p className="w-24 rounded-full p-1" onClick={handleAdd}> Add </p>
                        <p className="w-24 rounded-full p-1" onClick={handleWash}> Wash </p>
                        <p className="w-24 bg-octonary text-white rounded-full p-1"> Dry </p>
                    </div>
                </div>

                <br></br>
                
                <p className="text-lg text-primary font-semibold z-30"> Wet Leaves - WET#123 </p>

                <br></br>

                <div className="bg-white w-2/3 h-1/4 rounded-2xl z-30">
                    <div className="flex flex-col justify-center items-center pt-5 -mt-2">
                        <div className="flex items-end justify-end pr-7 w-full">
                            <div className="flex gap-1 pt-0.5 pb-0.5 pr-0.5 pl-0.5 bg-quaternary w-24 rounded-md">
                                    <img src="src/assets/centra/machine.svg"></img>
                                    <p className="font-semibold text-primary text-xxs underline" onClick={ToggleMachineSettings}>See Machine</p>
                            </div>
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
                    <WashButton/>

                    
                </div>

                {showMachineSettings && (
                        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-white bg-opacity-50 z-50">
                            <div className="bg-white w-4/5 rounded-2xl z-50">
                            <div className="flex justify-around gap-28 pt-4">
                                <img src="src/assets/common/backarrow.svg" className="w-5" alt="" />
                                <div className="bg-quaternary w-24 p-1 gap-0.5 rounded-full flex justify-center items-center">
                                    <img src="src/assets/centra/machineBig.svg" className="w-3"></img>
                                    <p className="text-xxs text-primary font-semibold underline"> Add Machine </p>
                                </div>
                            </div>

                            <div className="flex flex-col justify-start">
                                <div className="flex justify-center gap-6 pt-4">
                                    <div>
                                        <p className="font-medium"> Machine 1</p>
                                        <div className="w-20 bg-quaternary rounded-2xl p-1">
                                            <img src="src/assets/centra/machineBig.svg" className="w-20" alt="" />
                                        </div>
                                    </div>

                                    <div>
                                        <p className="font-medium"> Machine 2</p>
                                        <div className="w-20 bg-quaternary rounded-2xl p-1">
                                            <img src="src/assets/centra/machineBig.svg" className="w-20" alt="" />
                                        </div>
                                    </div>

                                    <div>
                                        <p className="font-medium"> Machine 3</p>
                                        <div className="w-20 bg-quaternary rounded-2xl p-1">
                                            <img src="src/assets/centra/machineBig.svg" className="w-20" alt="" />
                                        </div>
                                    </div>                              
                                </div>
                                
                                <div className="flex justify-center">
                                    <div className="bg-quaternary w-24 p-1 rounded-full flex items-center justify-start mt-4">
                                        <img src="src/assets/AddPage/plus-green.svg" className=""></img>
                                        <p className="text-xxs text-primary font-semibold underline"> Set Machine </p>
                                    </div>
                                </div>
                               
                                <div className="flex flex-col justify-start pl-6">
                                    <div className="flex flex-col">
                                        <p className="flex justify-start font-medium"> Weight: </p>
                                        <Slider  
                                        step={1} 
                                        maxValue={10} 
                                        minValue={0} 
                                        defaultValue={0}
                                        className="w-72 pt-4 pb-4"
                                        />
                                    </div>

                                    <div className="flex flex-col pb-4">
                                        <p className="flex justify-start font-medium pb-4"> Expected Weight: </p>
                                        <input type="text" className="w-72 bg-quinary rounded-md border-none p-1"/>
                                    </div>

                                    <div className="flex justify-center gap-6 pb-6 pr-6 items-center">
                                        <div className="bg-secondary pt-1.5 pb-1.5 pl-5 pr-5 rounded-full">
                                            <p className="text-white font-semibold"> INSERT </p>
                                        </div>

                                        <div className="bg-white pt-1.5 pb-1.5 pl-4 pr-4 rounded-full border border-secondary">
                                            <p className="text-secondary font-semibold" onClick={ToggleMachineSettings}> CANCEL </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        
                    )}

                <br></br>
                
                <p className="text-lg text-primary font-semibold z-30"> Wet Leaves - WET#124 </p>

                <br></br>

                <div className="bg-white w-2/3 h-1/4 rounded-2xl z-30">
                    <div className="flex flex-col justify-center items-center pt-5 -mt-2">
                        <div className="flex items-end justify-end pr-7 w-full">
                            <div className="flex gap-1 pt-0.5 pb-0.5 pr-0.5 pl-0.5 bg-quaternary w-24 rounded-md">
                                    <img src="src/assets/centra/machine.svg"></img>
                                    <p className="font-semibold text-primary text-xxs underline">See Machine</p>
                            </div>
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
                    <WashButton/>
                </div>

                <br></br>
                
                <p className="text-lg text-primary font-semibold z-30"> Wet Leaves - WET#125 </p>

                <br></br>

                <div className="bg-white w-2/3 h-1/4 rounded-2xl z-30">
                    <div className="flex flex-col justify-center items-center pt-5 -mt-2">
                        <div className="flex items-end justify-end pr-7 w-full">
                            <div className="flex gap-1 pt-0.5 pb-0.5 pr-0.5 pl-0.5 bg-quaternary w-24 rounded-md">
                                    <img src="src/assets/centra/machine.svg"></img>
                                    <p className="font-semibold text-primary text-xxs underline">See Machine</p>
                            </div>
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
                    <WashButton/>
                </div>

                
            </div>

            <NavigationBar></NavigationBar>
          </>
        )}
  
      </div>
    );
}
  
export default DryWetLeaves;
