import Notification from "./Notification"
import React, { useState } from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function NotificationList({formatDate, notifications}) {
    const nav = useNavigate();

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    // Calculate the current items to display
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = notifications.slice(indexOfFirstItem, indexOfLastItem);

    // Calculate total pages
    const totalPages = Math.ceil(notifications.length / itemsPerPage);

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

    const handleTrack = (shippingId) => {
        nav(`/trackshipping/${shippingId}`);
    }


    return (
        <motion.div
                key="add"
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ duration: 0.5 }}
                >
        <div className="pb-20">
            
            <div className="w-5/6 bg-white rounded-2xl mx-auto gap-10 relative py-6">
                <div className="flex justify-center gap-12 w-full mb-3">
                    <p className="text-septenary underline underline-offset-4 font-semibold"> All </p>
                    <p className="text-septenary font-semibold"> Recent </p>
                </div>
                
                <div className="h-full pt-2 pb-3">
                    <div className="overflow-auto max-h-full pt">
                        <div>
                            {currentItems.map((notification, index) => {
                                return (
                                    <Notification
                                        key={index}
                                        text={notification.message}
                                        datetime={new Date(notification.date)}
                                        handleTrack={handleTrack}
                                        shipmentId={notification.shipping_id}
                                    />
                                )
                            })}
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
        </motion.div>
    )

}

export default NotificationList;