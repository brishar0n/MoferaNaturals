import React from "react";
import "../../../style/App.css"
import { useState } from "react";
import LeavesForm from "../../../components/centra/LeavesForm";

function AddDryLeaves(){
    const [weight, setWeight] = useState(0);
    const [driedDate, setDriedDate] = useState(new Date());
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleWeightChange = (event) => {
        setWeight(event.target.value);
    };

    const handleDateChange = (event) => {
        setDriedDate(event.target.value);
    };

    function handleSubmit(event) {
        event.preventDefault();
        setFormSubmitted(true);
    }
    
    return (
      <div className="w-full">
            <img src="src/assets/AddPage/mascotAdd.svg" className="absolute left-6 top-96 pt-10 z-40"></img>

            <p className="text-lg text-septenary font-semibold"> Total Dried Leaves Daily </p>

            <br></br>

            <LeavesForm 
                weight={weight}
                handleWeightChange={handleWeightChange}
                dateTitle="Dried Date"
                date={driedDate}
                handleDateChange={handleDateChange}
                handleSubmit={handleSubmit}
                formSubmitted={formSubmitted}
                leavesType="dry"
            />
        </div>
    );
}

export default AddDryLeaves;