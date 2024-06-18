import React, { useState } from "react";
import SuccessNotification from "../SuccessNotification";
import FailedNotification from "../FailedNotification";

function PackageForm({ weight, handleWeightChange, expDate, handleExpDateChange, handleSubmit }) {
  const [trigger, setTrigger] = useState(0);
  const [isFormValid, setIsFormValid] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const validateForm = () => {
    return weight > 0 && expDate;
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      handleSubmit(event); // Call the original handleSubmit function
      setIsFormValid(true);
      setFormSubmitted(true);
      setTrigger(prev => prev + 1); // Increment the trigger to ensure notification shows
      console.log("Form submitted successfully");
    } else {
      setIsFormValid(false);
      setFormSubmitted(true);
      setTrigger(prev => prev + 1); // Increment the trigger to ensure notification shows
      console.log("Form submission failed");
    }
  };

  return (
    <div className='bg-white mb-5 w-2/3 mx-auto py-5 px-7 rounded-2xl text-left relative flex flex-col shadow-lg'>
      {formSubmitted && isFormValid && <SuccessNotification htmlContent="You have successfully added package data." trigger={trigger} />}
      {formSubmitted && !isFormValid && <FailedNotification htmlContent="Failed to add package data. Weight must be greater than zero." trigger={trigger} />}
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="weight" className="items-start text-sm mb-2 font-medium">Weight:</label>
        <input 
          type="number" 
          value={weight} 
          onChange={handleWeightChange}
          className="mb-2 rounded-md bg-quinary px-2 py-1 w-full text-xs border-none mt-1"
          required 
        />
        
        <label htmlFor="expDate" className="items-start text-sm mb-3 font-medium">Expiry Date:</label>
        <input 
          type="date" 
          value={expDate} 
          onChange={(e) => handleExpDateChange(e)}
          className="mb-2 rounded-md bg-quinary px-2 py-1 w-full text-xs border-none mt-1"
          required 
        />
        <br />

        <div className='mx-auto mt-2 flex justify-center'>
          <button className='bg-secondary text-white rounded-3xl px-7 py-2 font-semibold hover:bg-primary flex gap-2 items-center' type="submit">ADD</button>
        </div>
      </form>
    </div>
  );
};

export default PackageForm;
