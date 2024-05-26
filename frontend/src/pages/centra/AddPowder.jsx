import React from "react";
import "../../style/App.css"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../../components/centra/CentraNavbar";
import PowderForm from "../../components/centra/PowderForm";

function AddPowder(){
    const [weight, setWeight] = useState(0);
    const [driedDate, setDriedDate] = useState(new Date());
    const [flouredDate, setFlouredDate] = useState(new Date());
    const [isMobile, setIsMobile] = React.useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const navigate = useNavigate();

    const handleWeightChange = (event) => {
        setWeight(event.target.value);
    };

    const handleDriedDateChange = (event) => {
        setDriedDate(event.target.value);
    };

    const handleFlouredDateChange = (event) => {
        setFlouredDate(event.target.value);
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

    const handleHistory = () => navigate("/viewpowder");

    function handleSubmit(event) {
        event.preventDefault();
        setFormSubmitted(true);
    }
    
    return (
      <div>
        {isMobile && (
          <>
            <div className="overflow-auto h-[calc(100vh-6rem)] md:h-auto bg-quaternary min-h-screen flex flex-col items-center overflow-auto resize-none pb-36">
                <img src="src/assets/AddPage/frameAdd.svg" className="absolute top-100vh w-screen z-0"></img>
                <img src="src/assets/AddPage/mascotAdd.svg" className="absolute left-6 top-96 pt-28 z-40"></img>

                <div className="flex pt-16 gap-11 pr-20 z-10">
                    <img src="src/assets/common/backarrow.svg" onClick={handleBack}></img>
                    <p className="font-bold text-primary text-3xl"> Powder </p>
                </div>

                <br></br>

                <div className="bg-white w-2/3 rounded-full z-20">
                    <div className="flex text-s gap-1 font-medium p-1">
                        <p className="w-48 bg-tertiary rounded-full text-white p-1"> Add </p>
                        <p className="w-48 rounded-full p-1" onClick={handleHistory}> History </p>
                    </div>
                </div>

                <br></br>

                <p className="text-base text-septenary font-semibold italic"> Add a new powder collection </p>

                <br></br>

                <PowderForm 
                    weight={weight}
                    handleWeightChange={handleWeightChange}
                    driedDate={driedDate}
                    handleDriedDateChange={handleDriedDateChange}
                    flouredDate={flouredDate}
                    handleFlouredDateChange={handleFlouredDateChange}
                    handleSubmit={handleSubmit}
                    formSubmitted={formSubmitted}
                />

            </div>
            
            <NavigationBar></NavigationBar>
          </>
        )}
  
      </div>
    );
}

export default AddPowder;