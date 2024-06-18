import React, { useEffect, useState } from 'react';

function CheckpointStats({checkpointData, packageShippedData, packageConfirmedData}) {
    const calculateAverage = (data, dateField) => {
        if (!data.length) return 0;
    
        const dateCounts = data.reduce((acc, item) => {
            const date = new Date(item[dateField]).toDateString();
            acc[date] = (acc[date] || 0) + 1;
            return acc;
        }, {});
    
        const totalDays = Object.keys(dateCounts).length;
        const totalCounts = Object.values(dateCounts).reduce((sum, count) => sum + count, 0);
    
        return (totalCounts / totalDays);
    };

    const [avgCheckpointsPerDay, setAvgCheckpointsPerDay] = useState(0);

    useEffect(() => {
        setAvgCheckpointsPerDay(calculateAverage(checkpointData, 'arrival_datetime'));
    }, [checkpointData]);

    return ( 
        <div className="flex justify-center items-center relative mt-3 z-50 w-full">
            <div className="w-5/6 bg-white rounded-lg px-5 py-2 shadow-lg">
                <div className="flex justify-between mb-2 items-center gap-x-5">
                    <p className="text-left text-sm">Total Checkpoints Accumulated:</p>
                    <p className="text-base font-bold">{checkpointData.length}</p>
                </div>
                <div className="flex justify-between mb-2 items-center gap-x-5">
                    <p className="text-left text-sm">Average Checkpoints Accumulated Each Day:</p>
                    <p className="text-base font-bold">{avgCheckpointsPerDay.toFixed(2)}</p>
                </div>
                <div className="flex justify-between mb-2 items-center gap-x-5">
                    <p className="text-left text-sm">Total Packages in Shipping:</p>
                    <p className="text-base font-bold">{packageShippedData.length}</p>
                </div>
                <div className="flex justify-between mb-2 items-center gap-x-5">
                    <p className="text-left text-sm">Total Packages Arrived:</p>
                    <p className="text-base font-bold">{packageConfirmedData.length}</p>
                </div>
            </div>
        </div>
    )
}

export default CheckpointStats;