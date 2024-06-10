import { useNavigate } from "react-router-dom";
import { useState } from "react";

function PackageConfirmation({searchResult, shippingData}) {
    const nav = useNavigate();

    const formatDate = (dateString) => {
        const [year, month, day] = dateString.split('-');
        const date = new Date(`${day}-${month}-${year}`);

        const options = {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        };
        
        return date.toLocaleDateString('en-US', options);
    };

    const getShippingForPackages = (shippingId) => {
        return shippingData.find(ship => ship.shippingId === shippingId);
    };

    function handleConfirm() {
        nav("/addcheckpoint");
    }

    const [statusFilter, setStatusFilter] = useState("ALL");

    const filteredPackages = statusFilter === "ALL" ? searchResult : searchResult.filter(pkg => pkg.status === statusFilter);

    return (
        <div className='w-5/6 relative mt-4 mx-auto pb-36'>
            <div className="relative mb-5"> 
                <label htmlFor="statusFilter" className="font-medium text-white text-sm">Filter by Status:</label>
                <select id="statusFilter" onChange={(e) => setStatusFilter(e.target.value)} className="ml-3 z-100 rounded-xl p-1 text-sm">
                    <option value="ALL">All</option>
                    <option value="READY TO SHIP">Ready to Ship</option>
                    <option value="SHIPPING">Shipping</option>
                    <option value="CANCELLED">Cancelled</option>
                    <option value="CONFIRMED">Confirmed</option>
                    <option value="ARRIVED">Arrived</option>
                    <option value="EXPIRED">Expired</option>
                </select>
            </div>

            {filteredPackages.map(item => {
                const shippingInfo = getShippingForPackages(item.shippingId);

                return (
                    <div key={item.id} className="bg-white mb-5 py-3 px-5 mx-auto rounded-2xl">
                        <div className="">
                            <div className="flex justify-between">
                                <p className="mb-1 font-medium text-xs text-primary text-left">Package ID #{item.id}</p>
                                <p className="mb-1 font-medium text-xs text-primary text-right">Shipping ID #{shippingInfo ? shippingInfo.shippingId : 'N/A'}</p>
                            </div>
                            
                            <div className='flex text-left gap-5'>
                                <div className='w-1/2 flex-1'>
                                    <label htmlFor="packageWeight" className='items-start text-xs mb-2 font-medium'>Package Weight:</label>
                                    <input type="number" id="packageWeight" className='w-full mb-2 rounded-lg bg-quinary px-2 py-2 text-xs border-none' value={item.weight} readOnly required/>
                                </div>
                                <div className='w-1/2 flex-1'>
                                    <label htmlFor="centraUnit" className='items-start text-xs mb-2 font-medium'>Centra:</label>
                                    <input type="text" id="centraUnit" className='w-full mb-2 rounded-lg bg-quinary px-2 py-2 text-xs border-none' value={item.centraUnit} readOnly required/>
                                </div>
                            </div>

                            <div className='flex text-left gap-5'>
                                <div className='w-1/2 flex-1'>
                                    <label htmlFor="shippingDate" className='items-start text-xs mb-2 font-medium'>Date Shipped:</label>
                                    <input type="text" id="shippingDate" className='w-full mb-2 rounded-lg bg-quinary px-2 py-2 text-xs border-none' value={shippingInfo ? formatDate(shippingInfo.shippingDate) : 'N/A'} readOnly required />
                                </div>
                                <div className='w-1/2 flex-1'>
                                    <label htmlFor="status" className='items-start text-xs mb-2 font-medium'>Status:</label>
                                    <input type="text" id="status" className='w-full mb-2 rounded-lg bg-quinary px-2 py-2 text-xs border-none' value={item.status} readOnly required/>
                                </div>
                            </div>
                            
                            <div className='mt-1'>
                                {/* <button className='bg-secondary rounded-3xl px-7 py-2 text-white font-bold text-base' onClick={() => onShippingClick(item.shippingId)}>CONFIRM</button> */}
                                {item.status == "SHIPPING" ? (
                                    <button className='bg-secondary rounded-3xl px-7 py-2 text-white font-bold text-base' onClick={handleConfirm}>CONFIRM</button>
                                ) : (item.status == "EXPIRED" ? (
                                        <></>
                                    ) : (item.status == "READY TO SHIP" ? (
                                            <button className='bg-gray-400 rounded-3xl px-7 py-2 text-white font-bold text-base disabled'>PREPARED</button>
                                        ) : (
                                            <button className='bg-transparent border border-primary rounded-3xl px-7 py-2 text-primary font-bold text-base disabled'>CONFIRMED</button>
                                        )
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default PackageConfirmation;