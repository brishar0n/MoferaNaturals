import React, { useState } from 'react';
import SuccessNotification from "../SuccessNotification";
import FailedNotification from "../FailedNotification";

function CollectorForm({ weight, handleWeightChange, date, handleDateChange, time, handleTimeChange, handleSubmit }) {
    const successMessage = `You have successfully collected ${weight} wet leaves data.`;
    const failedMessage = `Failed to collect wet leaves data. Weight must be greater than zero.`;

    const [trigger, setTrigger] = useState(0);
    const [isFormValid, setIsFormValid] = useState(true);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const validateForm = () => {
        return weight > 0 && date && time;
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (validateForm()) {
            handleSubmit(event); 
            setIsFormValid(true);
            setFormSubmitted(true);
            setTrigger(prev => prev + 1);
            console.log("Form submitted successfully");
        } else {
            setIsFormValid(false);
            setFormSubmitted(true);
            setTrigger(prev => prev + 1); 
            console.log("Form submission failed");
        }
    };

    return (
        <div className="w-[80%] rounded-2xl shadow-lg bg-white rounded px-8 py-5 flex flex-col ">
            {formSubmitted && isFormValid && <SuccessNotification htmlContent={successMessage} trigger={trigger} />}
            {formSubmitted && !isFormValid && <FailedNotification htmlContent={failedMessage} trigger={trigger} />}

            <b className="text-lg text-black inline-block mb-2">
                Wet Leaves from Plasma
            </b>

            <div className="w-full flex flex-col text-left text-black">
                <form className="" onSubmit={handleFormSubmit}>
                    <label htmlFor="weight" className="text-sm text-black mb-2 font-medium">Weight:</label>
                    <input 
                        type="number" 
                        value={weight} 
                        onChange={handleWeightChange}
                        className="mb-2 rounded-md bg-quinary px-2 py-1 w-full text-xs border-none mt-1"
                        required 
                    />                     
                    
                    <label htmlFor="date" className="items-start text-sm mb-3 font-medium">Date: </label>
                    <input 
                        type="date" 
                        value={date} 
                        onChange={handleDateChange}
                        className="mb-2 rounded-md bg-quinary px-2 py-1 w-full text-xs border-none mt-1"
                        required 
                    />

                    <label htmlFor="time" className="items-start text-sm mb-3 font-medium">Time: </label>
                    <input 
                        type="time" 
                        value={time} 
                        onChange={handleTimeChange}
                        className="mb-2 rounded-md bg-quinary px-2 py-1 w-full text-xs border-none mt-1"
                        required 
                    />

                    <div className='mx-auto mt-2 flex justify-center'>
                        <button className='bg-secondary text-white rounded-3xl px-7 py-2 font-semibold hover:bg-primary flex gap-2 items-center' type="submit">COLLECT</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CollectorForm;
