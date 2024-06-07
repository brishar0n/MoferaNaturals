function CheckpointStats() {
    return ( 
        <div className="flex justify-center items-center relative mt-3 z-50 w-full">
            <div className="w-5/6 bg-white rounded-lg px-5 py-2">
                <div className="flex justify-between mb-2 items-center gap-x-5">
                    <p className="text-left text-sm">Total Checkpoints Accumulated:</p>
                    <p className="text-base font-bold">117</p>
                </div>
                <div className="flex justify-between mb-2 items-center gap-x-5">
                    <p className="text-left text-sm">Average Checkpoints Accumulated Each Day:</p>
                    <p className="text-base font-bold">12</p>
                </div>
                <div className="flex justify-between mb-2 items-center gap-x-5">
                    <p className="text-left text-sm">Total Packages Arrived:</p>
                    <p className="text-base font-bold">260</p>
                </div>
                <div className="flex justify-between mb-2 items-center gap-x-5">
                    <p className="text-left text-sm">Average Packages Collected Each Day:</p>
                    <p className="text-base font-bold">30</p>
                </div>
            </div>
        </div>
    )
}

export default CheckpointStats;