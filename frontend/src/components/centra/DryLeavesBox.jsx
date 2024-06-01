function DryLeavesBox({ weight, driedDate, id }) {
    return (
        <>
            <div className='bg-white mb-5 w-2/3 mx-auto py-5 px-7 rounded-2xl text-left relative flex flex-col'>
            <div className="flex items-end justify-end w-full">
                <p className="font-medium text-slate-500 text-xs">DRY#{id}</p>
            </div>
                <label htmlFor="weight" className="items-start text-sm mb-2 font-medium">Weight:</label>
                <input 
                    type="number" 
                    value={weight} 
                    readOnly
                    className="mb-2 rounded-md bg-quinary px-2 py-1 w-full text-xs border-none"
                    required 
                />
                <label htmlFor="date" className="items-start text-sm mb-2 font-medium">Dried Date:</label>
                <input 
                    type="date" 
                    value={driedDate} 
                    readOnly
                    className="mb-2 rounded-md bg-quinary px-2 py-1 w-full text-xs border-none"
                    required 
                />
            </div>

        </>
    )
}

export default DryLeavesBox;