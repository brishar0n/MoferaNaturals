import Notification from "./Notification"
import React, { useState } from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

function NotificationList() {
    const shipmentInfo = [
        { id: 112121, centra: 1, date: "10 March 2024", time: "6:24 PM" },
        { id: 112122, centra: 2, date: "11 March 2024 ", time: "7:30 AM" },
        { id: 112123, centra: 3, date: "12 March 2024", time: "8:15 PM" },
        { id: 112124, centra: 4, date: "13 March 2024", time: "9:45 PM" },
        { id: 112125, centra: 5, date: "15 March 2024", time: "10:04 PM" },
        { id: 112126, centra: 6, date: "16 March 2024", time: "11:53 PM" },
        { id: 112127, centra: 7, date: "17 March 2024", time: "12:10 PM" },
        { id: 112128, centra: 8, date: "18 March 2024", time: "1:20 AM" },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    // Calculate the current items to display
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = shipmentInfo.slice(indexOfFirstItem, indexOfLastItem);

    // Calculate total pages
    const totalPages = Math.ceil(shipmentInfo.length / itemsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };


    return (
        <div className="pb-20">
            <div className="w-5/6 bg-white rounded-2xl mx-auto gap-10 relative py-6">
                <div className="flex justify-center gap-12 w-full mb-3">
                    <p className="text-septenary underline underline-offset-4 font-semibold"> All </p>
                    <p className="text-septenary font-semibold"> Recent </p>
                </div>
                
                <div className="h-full pt-2 pb-3">
                    <div className="overflow-auto max-h-full pt">
                        <div>
                            {currentItems.map(shipment => (
                                <Notification
                                    key={shipment.id}
                                    shipmentId={shipment.id}
                                    centra={shipment.centra}
                                    date={shipment.date}
                                    time={shipment.time}
                                />
                            ))}
                        </div>
                        
                    </div>
                </div>

                <div className="flex justify-around mt-5 px-4 items-center">
                    <button
                        onClick={handlePreviousPage}
                        disabled={currentPage === 1}
                        className="bg-primary text-white px-4 py-2 rounded-full disabled:opacity-50"
                    >
                        <GoChevronLeft />
                    </button>
                    <span className="text-lg font-semibold primary text-lg">{`${currentPage} / ${totalPages}`}</span>
                    <button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        className="bg-primary text-white px-4 py-2 rounded-full disabled:opacity-50"
                    >
                        <GoChevronRight />
                    </button>
                </div>
            </div>
        </div>
    )

}

export default NotificationList;