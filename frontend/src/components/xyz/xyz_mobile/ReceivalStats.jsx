import React, { useEffect, useState } from 'react';

function ReceivalStats({packageShippedData, packageConfirmedData, packageReceivedData}) {
    return ( 
        <div className="flex justify-center items-center relative mt-3 z-50 w-full">
            <div className="w-5/6 bg-white rounded-lg px-5 py-2 shadow-lg">
                <div className="flex justify-between mb-2 items-center gap-x-5">
                    <p className="text-left text-sm">Total Packages in Shipping:</p>
                    <p className="text-base font-bold">{packageShippedData.length}</p>
                </div>
                <div className="flex justify-between mb-2 items-center gap-x-5">
                    <p className="text-left text-sm">Total Packages Ready to Pick Up:</p>
                    <p className="text-base font-bold">{packageConfirmedData.length}</p>
                </div>
                <div className="flex justify-between mb-2 items-center gap-x-5">
                    <p className="text-left text-sm">Total Packages Received:</p>
                    <p className="text-base font-bold">{packageReceivedData.length}</p>
                </div>
            </div>
        </div>
    )
}

export default ReceivalStats;