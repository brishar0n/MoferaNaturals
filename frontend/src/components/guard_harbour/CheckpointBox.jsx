function CheckpointBox({id, fromCentra, totalPackagesSent, totalPackagesArrived, arrivedTime}) {
    function handleSubmit(event) {
        event.preventDefault();
        setNotified(true);
    }

    return (
        <>
            <div className='bg-white mb-5 w-3/4 mx-auto py-5 px-7 rounded-2xl text-left relative mt-5 flex flex-col' onSubmit={handleSubmit}>
                <p className='items-end text-center text-lg mb-2 font-bold text-primary'>Checkpoint ID #{id}</p>
                {/* <p className='mb-2 rounded-md bg-quinary px-2 py-2 w-full text-xs border-none'>{id}</p> */}
                            
                <p className='items-start text-xs mb-2 font-medium'>Sent from centra:</p>
                <p className='mb-2 rounded-md bg-quinary px-2 py-2 w-full text-xs border-none'>{fromCentra}</p>

                <p className='items-start text-xs mb-2 font-medium'>Total Packages Sent: </p>
                <p className='mb-2 rounded-md bg-quinary px-2 py-2 w-full text-xs border-none'>{totalPackagesSent}</p>

                <p className='items-start text-xs mb-2 font-medium'>Total Packages Arrived: </p>
                <p className='mb-2 rounded-md bg-quinary px-2 py-2 w-full text-xs border-none'>{totalPackagesArrived}</p>

                <p className='items-start text-xs mb-2 font-medium'>Package Arrived Time: </p>
                <p className='mb-2 rounded-md bg-quinary px-2 py-2 w-full text-xs border-none'>{arrivedTime}</p>
            </div>
        </>
    )
}

export default CheckpointBox;