function HandoverDetails({
    packageID,
    totalPackage,
    weight,
    centra,
    description,
    setPackageID,
    setTotalPackage,
    setWeight,
    setCentra,
    setDescription
}) {
    return (
        <ul className='list-disc space-y-1 list-inside ml-2 flex flex-col items-start w-11/12 text-left'>
            <li>
                Package ID: 
                <input 
                    type='text' 
                    name='package_id' 
                    value={packageID} 
                    onChange={e => setPackageID(e.target.value)} 
                    placeholder="[ID of the package]" 
                    className='ml-2 bg-transparent'/>
            </li>
            <li>
                Quantity:
                <input 
                    type='number' 
                    name='total_package' 
                    value={totalPackage} 
                    onChange={e => setTotalPackage(e.target.value)} 
                    placeholder="[Total packages]" 
                    className='ml-2 w-1/2 bg-transparent'/>
            </li>
            <li className='w-full'>
                Weight:
                <input 
                    type='number' 
                    name='weight' 
                    value={weight} 
                    onChange={e => setWeight(e.target.value)} 
                    placeholder="[Weight of the packages]" 
                    className='ml-2 w-3/4 bg-transparent'/>
            </li>
            <li>
                Centra:
                <input 
                    type='number' 
                    name='centra' 
                    value={centra} 
                    onChange={e => setCentra(e.target.value)} 
                    placeholder="[Centra Unit Sender]" 
                    className='ml-2 bg-transparent'/>
            </li>
            <li className='w-full text-left'>
                Description:
                <input 
                    type='text' 
                    name='description'
                    value={description} 
                    onChange={e => setDescription(e.target.value)} 
                    placeholder="[Goods brief description]" 
                    className='ml-2 bg-black w-full bg-transparent'/>
            </li>
        </ul>
    )
}

export default HandoverDetails;