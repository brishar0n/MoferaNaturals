import React from 'react';
const receivedPackages = [
    {
        id: 'PKG#3439320',
        from: 'Centra Unit 1',
        weight: 30,
        receival_date: '31/08/2023',
        total_packages: 5,
    },
    {
        id: 'PKG#3493050',
        from: 'Centra Unit 2',
        weight: 20,
        receival_date: '31/08/2023',
        total_packages: 3,
    },
    {
        id: 'PKG#05939539',
        from: 'Centra Unit 2',
        weight: 20,
        receival_date: '31/08/2023',
        total_packages: 3,
    },
    {
        id: 'PKG#29393293',
        from: 'Centra Unit 2',
        weight: 20,
        receival_date: '31/08/2023',
        total_packages: 3,
    },
    {
        id: 'PKG#5588538',
        from: 'Centra Unit 2',
        weight: 20,
        receival_date: '31/08/2023',
        total_packages: 3,
    },
    {
        id: 'PKG#70203929',
        from: 'Centra Unit 2',
        weight: 20,
        receival_date: '31/08/2023',
        total_packages: 3,
    },
    {
        id: 'PKG#93828423',
        from: 'Centra Unit 2',
        weight: 20,
        receival_date: '31/08/2023',
        total_packages: 3,
    },
    {
        id: 'PKG#79992392',
        from: 'Centra Unit 2',
        weight: 20,
        receival_date: '31/08/2023',
        total_packages: 3,
    }
]

function ReceivedPackagesTable() {
    return (
        <div className='bg-nonary px-4 pt-3 pb-4 rounded-lg shadow-xl flex-1 overflow'>
            <div className='relative'>
                <p className='text-left ml-4 lg:ml-20 text-2xl lg:w-1/2 font-bold p-4'>Packages Received</p>
                <div>
                    <button className='absolute top-0 right-24 px-4 py-2 font-bold rounded-lg border border-black'>
                        Select Centra
                    </button>

                    <button className='absolute top-0 right-0 px-4 py-2 font-bold rounded-lg border border-black'>
                        Filters
                    </button>
                </div>
            </div>

            <div className='nt-3 p-6'>
                <table className='text-center w-full'>
                    <thead className='shadow-xl rounded-lg'>
                        <tr>
                            <td className='font-medium'>Package ID</td>
                            <td className='font-medium'>From Centra</td>
                            <td className='font-medium'>Weight</td>
                            <td className='font-medium'>Receival Date</td>
                            <td className='font-medium'>Total Packages Received</td>
                        </tr>
                    </thead>
                    <br></br>
                    <tbody>
                        {receivedPackages.map((item) => (
                            <tr key={item.id}>
                                <td className='py-4 font-medium'>{item.id}</td>
                                <td className='font-medium'>{item.from}</td>
                                <td className='font-medium'>{item.weight} kg</td>
                                <td className='font-medium'>{item.receival_date}</td>
                                <td className='font-medium'>{item.total_packages} packages</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ReceivedPackagesTable