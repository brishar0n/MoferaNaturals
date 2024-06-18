import { useNavigate } from "react-router-dom";
import { useState } from "react";

function PackagePickUp({searchResult, shippingData}) {
    const nav = useNavigate();

    const convertStatus = (filter) => {
        switch (filter) {
            case "READY TO SHIP":
                return 0;
            case "SHIPPING":
                return 1;
            case "CONFIRMED":
                return 2;
            case "ARRIVED":
                return 3;
            case "EXPIRED":
                return 4;
            default:
                return filter;
        }
    };

    const convertStatusToString = (status) => {
        switch (status) {
            case 0:
                return "READY TO SHIP";
            case 1:
                return "SHIPPING";
            case 2:
                return "CONFIRMED";
            case 3:
                return "ARRIVED";
            case 4:
                return "EXPIRED";
            default:
                return status;
        }
    };

    const formatDate = (dateString) => {
        const [year, month, day] = dateString.split('-');
        const date = new Date(`${year}-${month}-${day}`);
        
        const options = {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        };
        
        return date.toLocaleDateString('en-US', options);
    };

    const formatTime = (timeString) => {
        const [hour, minute, second] = timeString.split(':');
        let period = 'AM';
        let hourInt = parseInt(hour, 10);
        
        if (hourInt >= 12) {
            period = 'PM';
            if (hourInt > 12) hourInt -= 12;
        } else if (hourInt === 0) {
            hourInt = 12;
        }
        
        return `${hourInt}:${minute} ${period}`;
    };

    const getShippingForPackages = (shippingId) => {
        return shippingData.find(ship => ship.id === shippingId);
    };

    function handleConfirm() {
        nav("/receptionpackage");
    }

    const [statusFilter, setStatusFilter] = useState("ALL");

    const filteredPackages = statusFilter === "ALL" ? searchResult : searchResult.filter(pkg => pkg.status === convertStatus(statusFilter));

    return (
        <div className='w-5/6 relative mt-4 mx-auto'>
            <div className="relative mb-5"> 
                <label htmlFor="statusFilter" className="font-medium text-white text-sm">Filter by Status:</label>
                <select id="statusFilter" onChange={(e) => setStatusFilter(e.target.value)} className="ml-3 z-100 rounded-xl p-1 text-sm shadow-sm">
                    <option value="ALL">All</option>
                    <option value="READY TO SHIP">Ready to Ship</option>
                    <option value="SHIPPING">Shipping</option>
                    <option value="CONFIRMED">Confirmed</option>
                    <option value="ARRIVED">Arrived</option>
                    <option value="EXPIRED">Expired</option>
                </select>
            </div>

            {filteredPackages.map(item => {
                const shippingInfo = getShippingForPackages(item.shipping_id);

                return (
                    <div key={item.id} className="bg-white mb-5 py-3 px-5 mx-auto rounded-2xl shadow-lg">
                        <div className="">
                            <div className="flex justify-between">
                                <p className="mb-1 font-medium text-xs text-primary text-left">Package ID #{item.id}</p>
                                <p className="mb-1 font-medium text-xs text-primary text-right">Shipping ID #{shippingInfo ? shippingInfo.id : 'N/A'}</p>
                            </div>
                            
                            <div className='flex text-left gap-5'>
                                <div className='w-1/2 flex-1'>
                                    <label htmlFor="packageWeight" className='items-start text-xs mb-2 font-medium'>Package Weight:</label>
                                    <input type="number" id="packageWeight" className='w-full mb-2 rounded-lg bg-quinary px-2 py-2 text-xs border-none' value={item.weight} readOnly required/>
                                </div>
                                <div className='w-1/2 flex-1'>
                                    <label htmlFor="centraUnit" className='items-start text-xs mb-2 font-medium'>Centra Unit:</label>
                                    <input type="text" id="centraUnit" className='w-full mb-2 rounded-lg bg-quinary px-2 py-2 text-xs border-none' value={item.centra_id} readOnly required/>
                                </div>
                            </div>

                            <div className='flex text-left gap-5'>
                                <div className='w-1/2 flex-1'>
                                    <label htmlFor="shippingDate" className='items-start text-xs mb-2 font-medium'>Date Shipped:</label>
                                    <input type="text" id="shippingDate" className='w-full mb-2 rounded-lg bg-quinary px-2 py-2 text-xs border-none' value={shippingInfo ? formatDate(shippingInfo.departure_datetime.split("T")[0]) : 'N/A'} readOnly required />
                                </div>
                                <div className='w-1/2 flex-1'>
                                    <label htmlFor="status" className='items-start text-xs mb-2 font-medium'>Status:</label>
                                    <input type="text" id="status" className='w-full mb-2 rounded-lg bg-quinary px-2 py-2 text-xs border-none' value={convertStatusToString(item.status)} readOnly required/>
                                </div>
                            </div>
                            
                            <div className='mt-1'>
                                {/* <button className='bg-secondary rounded-3xl px-7 py-2 text-white font-bold text-base' onClick={() => onShippingClick(item.shippingId)}>CONFIRM</button> */}
                                {item.status === 0 ? (
                                    <button className='bg-gray-400 rounded-3xl px-7 py-2 text-white font-bold text-base disabled'>PREPARED</button>
                                ) : item.status === 1 ? (
                                    <button className='bg-gray-400 rounded-3xl px-7 py-2 text-white font-bold text-base disabled'>SHIPPING</button>
                                ) : item.status === 2 ? (
                                    <button className='bg-secondary rounded-3xl px-7 py-2 text-white font-bold text-base' onClick={handleConfirm}>PICK UP</button>
                                ) : item.status === 4 ? (
                                    null // or any other component you want to render for status 4
                                ) : (
                                    <button className='bg-transparent border border-primary rounded-3xl px-7 py-2 text-primary font-bold text-base disabled'>RECEIVED</button>
                                )}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default PackagePickUp;