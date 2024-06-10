import React from "react";
import "../../../style/App.css"
import { useState } from "react";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'
import axios from "axios"
import { postWetLeaves } from "../../../../api/centraAPI"
import LeavesForm from "../../../components/centra/LeavesForm";

function AddWetLeaves(){
    const [weight, setWeight] = useState(0);
    const [dateCollected, setDateCollected] = useState(new Date());
    const [formSubmitted, setFormSubmitted] = useState(false);
   
    const checkWeight= () =>{
        let valid = weight > 0;
        if (valid){
            showSuccess()
        }
        else{
            showError()
        }

        return valid
    }

    const showError = () => {
        withReactContent(Swal).fire({
            icon: "error",
            title: "<p style='color:#016B4d'>Failed!</p>",
            html: "<p style='color:#016B4d'>You have failed to wash the wet leaves. Complete and fill in the right amount of wet leaves!</p>",
            confirmButtonText: 'Done',
            confirmButtonColor: '#016B45',
            customClass: {
                confirmButton: 'sweet_confirmbuttonImportant',
            }
        })
    }
    const showSuccess = () => {
        withReactContent(Swal).fire({
            icon: "success",
            title: "<p style='color:#016B4d'>Success!</p>",
            html: "<p style='color:#016B4d'>You have successfully wash the wet leaves. Complete more wet leaves to get rewards!!</p>",
            confirmButtonColor: '#016B45',
            confirmButtonText: 'Done',
            customClass: {
                confirmButton: 'sweet_confirmbuttonImportant',
            }
        })
    }

    const handleWeightChange = (event) => {
        setWeight(event.target.value);
    };

    const handleDateChange = (event) => {
        setDateCollected(event.target.value);
    };

    function handleSubmit(event) {
        event.preventDefault();
        if (checkWeight()) postWetLeaves({
            weight,
            retrieval_date: dateCollected
        })
        setFormSubmitted(true);
    }
    
    return (
        <div className="w-full">
            <img src="src/assets/AddPage/mascotAdd.svg" className="absolute left-6 top-96 pt-10 z-40"></img>

            <p className="italic text-base text-primary font-semibold"> Daily Received Wet Leaves </p>

            <br></br>

            <LeavesForm 
                weight={weight}
                handleWeightChange={handleWeightChange}
                dateTitle="Date Collected"
                date={dateCollected}
                handleDateChange={handleDateChange}
                handleSubmit={handleSubmit}
                formSubmitted={formSubmitted}
                leavesType="wet"
            />
        </div>
    );
}
  
export default AddWetLeaves;