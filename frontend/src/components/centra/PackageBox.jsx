import React from "react";
import { Link } from "react-router-dom";
import statusStyles from "../StatusStyles";

function PackageBox({ weight, expDate, formatDate, formatTime, createdDate, createdTime, status, id, shippingDate, shippingTime, convertStatusToString}) {
    const statusText = convertStatusToString(status);
    const currentStatusStyle = statusStyles[statusText] || {};

    return (
        <div className='bg-white mb-5 mx-auto py-5 px-7 rounded-2xl text-left relative flex flex-col shadow-lg'>
            <div className="flex items-end justify-end w-full">
                <p className="font-medium text-slate-500 text-xs">PKG#{id}</p>
            </div>

            <div className='flex text-left gap-5'>
                <div className='w-1/2 flex-1'>
                    <label htmlFor="weight" className="items-start text-sm mb-2 font-medium">Weight:</label>
                    <input 
                        type="number" 
                        value={weight} 
                        readOnly
                        className="mb-2 mt-1 rounded-md bg-quinary px-2 py-1 w-full text-xs border-none"
                        required 
                    />
                </div>
                <div className='w-1/2 flex-1'>
                    <label htmlFor="expDate" className="items-start text-sm mb-2 font-medium">Expiry Date:</label>
                    <input 
                        type="date" 
                        value={expDate} 
                        readOnly
                        className="mb-2 mt-1 rounded-md bg-quinary px-2 py-1 w-full text-xs border-none"
                        required 
                    />
                </div>
            </div>

            <div className='flex text-left gap-5'>
                <div className='w-1/2 flex-1'>
                    <label htmlFor="createdDate" className="items-start text-sm mb-2 font-medium">Created Date:</label>
                    <input 
                        type="text" 
                        value={formatDate(createdDate)} 
                        readOnly
                        className="mb-2 mt-1 rounded-md bg-quinary px-2 py-1 w-full text-xs border-none"
                        required 
                    />
                </div>
                <div className='w-1/2 flex-1'>
                    <label htmlFor="createdTime" className="items-start text-sm mb-2 font-medium">Created Time:</label>
                    <input 
                        type="text" 
                        value={formatTime(createdTime)} 
                        readOnly
                        className="mb-2 mt-1 rounded-md bg-quinary px-2 py-1 w-full text-xs border-none"
                        required 
                    />
                </div>
            </div>

            {(shippingDate !== null) && (shippingTime !== null) && (
                <div className='flex text-left gap-5'>
                    <div className='w-1/2 flex-1'>
                        <label htmlFor="shippingDate" className="items-start text-sm mb-1 font-medium">Shipping Date:</label>
                        <input 
                            type="text" 
                            value={formatDate(shippingDate)} 
                            readOnly
                            className="mb-2 rounded-md bg-quinary px-2 py-1 w-full text-xs border-none mt-1"
                            required 
                        />
                    </div>
                    <div className='w-1/2 flex-1'>
                        <label htmlFor="shippingTime" className="items-start text-sm mb-2 font-medium">Shipping Time:</label>
                        <input 
                            type="text" 
                            value={formatTime(shippingTime)} 
                            readOnly
                            className="mb-2 mt-1 rounded-md bg-quinary px-2 py-1 w-full text-xs border-none"
                            required 
                        />
                    </div>
                </div>
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