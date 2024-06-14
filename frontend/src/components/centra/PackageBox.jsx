import React from "react";
import { Link } from "react-router-dom";
import statusStyles from "../StatusStyles";

function PackageBox({ weight, expDate, status, id, shippingDate, convertStatusToString}) {
    const statusText = convertStatusToString(status);
    const currentStatusStyle = statusStyles[statusText] || {};

    return (
        <div className='bg-white mb-5 mx-auto py-5 px-7 rounded-2xl text-left relative flex flex-col'>
            <div className="flex items-end justify-end w-full">
                <p className="font-medium text-slate-500 text-xs">PKG#{id}</p>
            </div>
            <label htmlFor="weight" className="items-start text-sm mb-2 font-medium">Weight:</label>
                <input 
                    type="number" 
                    value={weight} 
                    readOnly
                    className="mb-2 rounded-md bg-quinary px-2 py-1 w-full text-xs border-none"
                    required 
                />
            <label htmlFor="expDate" className="items-start text-sm mb-2 font-medium">Expiry Date:</label>
                <input 
                    type="date" 
                    value={expDate} 
                    readOnly
                    className="mb-2 rounded-md bg-quinary px-2 py-1 w-full text-xs border-none"
                    required 
                />
            {shippingDate !== null && (
                <>
                    <label htmlFor="shippingDate" className="items-start text-sm mb-2 font-medium">Shipping Date:</label>
                    <input 
                        type="date" 
                        value={shippingDate} 
                        readOnly
                        className="mb-2 rounded-md bg-quinary px-2 py-1 w-full text-xs border-none mt-1"
                        required 
                    />
                </>
            )}
            <div className='mx-auto mt-2 flex justify-center'>
                {statusText.toUpperCase() === "READY TO SHIP" ? (
                    <Link to="/shippinginfo">
                        <p 
                            className='rounded-3xl px-7 py-2 font-semibold flex gap-2 items-center'
                            style={{
                                backgroundColor: currentStatusStyle.backgroundColor,
                                color: currentStatusStyle.color,
                                border: `1px solid ${currentStatusStyle.borderColor}`
                            }}
                        >
                            {statusText.toUpperCase()}
                        </p>
                    </Link>
                ) : (
                    <p 
                        className='rounded-3xl px-7 py-2 font-semibold flex gap-2 items-center'
                        style={{
                            backgroundColor: currentStatusStyle.backgroundColor,
                            color: currentStatusStyle.color,
                            border: `1px solid ${currentStatusStyle.borderColor}`
                        }}
                    >
                        {statusText.toUpperCase()}
                    </p>
                )}
            </div>
        </div>
    );
};

export default PackageBox;