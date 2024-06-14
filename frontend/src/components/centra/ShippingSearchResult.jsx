import React from 'react';

function ShippingSearchResult({ searchResult, onShippingClick, packageData }) {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
    
        const options = {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        };
        
        return date.toLocaleDateString('en-GB', options);
    };

    const getPackagesForShipping = (shipping_id) => {
        return packageData.filter(pkg => pkg.shipping_id === shipping_id);
    };

    return (
        <div className='w-3/4 relative'>
            {searchResult.map(item => {
                const packages = getPackagesForShipping(item.id);
                
                const packageIds = packages.map(pkg => pkg.id).join(', ');
                // const totalWeight = packages.reduce((acc, pkg) => acc + pkg.weight, 0);
                const unitCentra = packages.length > 0 ? packages[0].centra_id : undefined;

                return (
                    <div key={item.id} className="bg-white mb-5 py-3 px-5 mx-auto rounded-2xl">
                        <div className="">
                            <p className="mb-1 font-medium text-sm text-primary text-left">Shipping ID #{item.id}</p>
                            
                            <div className='text-left'>
                                <label htmlFor="packageId" className='items-start text-xs mb-2 font-medium'>Package IDs:</label>
                                <input type="text" id="packageId" className='w-full mb-2 rounded-lg bg-quinary px-2 py-2 text-xs border-none' value={packageIds} readOnly required/>
                            </div>

                            <div className='flex text-left gap-5'>
                                <div className='w-1/2 flex-1'>
                                    <label htmlFor="packageWeight" className='items-start text-xs mb-2 font-medium'>Package Weight:</label>
                                    <input type="number" id="packageWeight" className='w-full mb-2 rounded-lg bg-quinary px-2 py-2 text-xs border-none' value={item.total_weight} readOnly required/>
                                </div>
                                <div className='w-1/2 flex-1'>
                                    <label htmlFor="expedition" className='items-start text-xs mb-2 font-medium'>Expedition:</label>
                                    <input type="text" id="expedition" className='w-full mb-2 rounded-lg bg-quinary px-2 py-2 text-xs border-none' value={item.expedition} readOnly required/>
                                </div>
                            </div>

                            <div className='flex text-left gap-5'>
                                <div className='w-1/2 flex-1'>
                                    <label htmlFor="unitCentra" className='items-start text-xs mb-2 font-medium'>Unit Centra:</label>
                                    <input type="number" id="unitCentra" className='w-full mb-2 rounded-lg bg-quinary px-2 py-2 text-xs border-none' value={unitCentra !== undefined ? unitCentra : ''} readOnly required/>
                                </div>
                                <div className='w-1/2 flex-1'>
                                    <label htmlFor="totalPackages" className='items-start text-xs mb-2 font-medium'>Total Packages:</label>
                                    <input type="text" id="totalPackages" className='w-full mb-2 rounded-lg bg-quinary px-2 py-2 text-xs border-none' value={packages.length} readOnly required/>
                                </div>
                            </div>

                            <div className='flex text-left gap-5'>
                                <div className='w-1/2 flex-1'>
                                    <label htmlFor="shippingDate" className='items-start text-xs mb-2 font-medium'>Shipping Date:</label>
                                    <input type="text" id="shippingDate" className='w-full mb-2 rounded-lg bg-quinary px-2 py-2 text-xs border-none' value={formatDate(item.departure_datetime.split('T')[0])} readOnly required/>
                                </div>
                                <div className='w-1/2 flex-1'>
                                <label htmlFor="shippingTime" className='items-start text-xs mb-2 font-medium'>Shipping Time:</label>
                                    <input type="time" id="shippingTime" className='w-full mb-2 rounded-lg bg-quinary px-2 py-2 text-xs border-none' value={item.departure_datetime.split('T')[1]} readOnly required/>
                                </div>
                            </div>
                            
                            <div className='mt-1'>
                                <button className='bg-secondary rounded-3xl px-7 py-2 text-white font-bold text-base' onClick={() => onShippingClick(item.id)}>TRACK</button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default ShippingSearchResult;
