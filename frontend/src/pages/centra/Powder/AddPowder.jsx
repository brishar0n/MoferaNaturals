import React from "react";
import "../../../style/App.css"
import { useState } from "react";
import PowderForm from "../../../components/centra/PowderForm";
import { postFlour } from "../../../../api/centraAPI";

import mascotAddSide from "../../../../src/assets/AddPage/mascotAddSide.svg"

function AddPowder(){
    const [weight, setWeight] = useState(0);
    const [driedDate, setDriedDate] = useState(new Date());
    const [flouredDate, setFlouredDate] = useState(new Date());
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleWeightChange = (event) => {
        setWeight(event.target.value);
    };

    const handleDriedDateChange = (event) => {
        setDriedDate(event.target.value);
    };

    const handleFlouredDateChange = (event) => {
        setFlouredDate(event.target.value);
    };

    function handleSubmit(event) {
        event.preventDefault();
        postFlour({
            weight,
            "dried_date": driedDate,
            "floured_date": flouredDate
        })
        setFormSubmitted(true);
        setWeight(0);
        setDriedDate("");
        setFlouredDate("");
    }
    
    return (
        <div className="w-full">
            <img src={mascotAddSide} className="absolute right-0 bottom-10 z-40"></img>

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
    );
}

export default AddPowder;