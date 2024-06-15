import React from "react";
import SuccessNotification from "../SuccessNotification";
import FailedNotification from "../FailedNotification";

function PowderForm({ weight, handleWeightChange, driedDate, handleDriedDateChange, flouredDate, handleFlouredDateChange, formSubmitted, handleSubmit }) {
  const successMessage = `You have successfully added powder data.`;
  const failedMessage = `Failed to add powder data. Weight must be greater than zero.`;

  return (
    
    <div className='bg-white mb-5 w-2/3 mx-auto py-5 px-7 rounded-2xl text-left relative flex flex-col shadow-lg' onSubmit={handleSubmit}>
      {formSubmitted && weight > 0 && <SuccessNotification htmlContent={successMessage} />}
      {formSubmitted && weight <= 0 && <FailedNotification htmlContent={failedMessage} />}
      <form>
        <label htmlFor="weight" className="items-start text-sm mb-2 font-medium">Weight:</label>
        <input 
          type="number" 
          value={weight} 
          onChange={handleWeightChange}
          className="mb-2 rounded-md bg-quinary px-2 py-2 w-full text-xs border-none mt-1"
          required 
        />
        
        <label htmlFor="date" className="items-start text-sm mb-3 font-medium">Dried Date: </label>
        <input 
          type="date" 
          value={driedDate} 
          onChange={handleDriedDateChange}
          className="mb-2 rounded-md bg-quinary px-2 py-2 w-full text-xs border-none mt-1"
          required 
        />

        <label htmlFor="date" className="items-start text-sm mb-3 font-medium">Floured Date: </label>
        <input 
          type="date" 
          value={flouredDate} 
          onChange={handleFlouredDateChange}
          className="mb-2 rounded-md bg-quinary px-2 py-2 w-full text-xs border-none mt-1"
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

export default PowderForm;