import React from "react";
import "../../../style/App.css"
import { useState } from "react";
import PackageForm from "../../../components/centra/PackageForm";
import { postPackage } from "../../../../api/centraAPI";

function AddPackage(){
    const [weight, setWeight] = useState(0);
    const [expDate, setExpDate] = useState(new Date());
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleWeightChange = (event) => {
        setWeight(event.target.value);
    };

    const handleExpDateChange = (event) => {
        setExpDate(new Date(event.target.value));
    };

    function handleSubmit(event) {
        event.preventDefault();
        const formattedDate = expDate.toISOString().substring(0,10);
        const packageData = {
            weight,
            exp_date: formattedDate,
        };
        postPackage(packageData);
        setFormSubmitted(true);
    }
    
    return (
      
        <div className="">
            <img src="src/assets/AddPage/mascotAdd.svg" className="absolute left-6 top-96 pt-20 z-40"></img>

            <p className="text-lg text-septenary font-semibold"> Add New Package </p>

            <br></br>

            <PackageForm 
                weight={weight}
                handleWeightChange={handleWeightChange}
                expDate={expDate}
                handleExpDateChange={handleExpDateChange}
                handleSubmit={handleSubmit}
                formSubmitted={formSubmitted}
            />
        </div>
        
    );
}

export default AddPackage;