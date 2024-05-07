function PartyDetailsSection({ GHname, XYZname, setGHname, setXYZname }) {
    return (
        <>
            <label>First Party:</label>
            <ul className='list-disc space-y-1 list-inside ml-2 flex flex-col items-start'>
                <li>Name: 
                    <input type='text' name='first_name' value={GHname} onChange={e => setGHname(e.target.value)} placeholder="[Name of Preparer]" className='ml-2 bg-transparent'/>
                </li>
                <li>Position: Guard Harbour</li>
            </ul>

            <label>Second Party:</label>
            <ul className='list-disc space-y-1 list-inside ml-2 flex flex-col items-start'>
                <li>Name: 
                <input type='text' name='second_name' value={XYZname} onChange={e => setXYZname(e.target.value)} placeholder="[Name of Receiver]" className='ml-2 bg-transparent'/>
                </li>
                <li>Position: XYZ Employee</li>
            </ul>
        </>
    );
}

export default PartyDetailsSection;