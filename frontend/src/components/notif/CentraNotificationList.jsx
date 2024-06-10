import CentraNotification from "./CentraNotification"
import React, { useState } from "react";

function CentraNotificationList() {
    const notifications = [
        {
            text: "Shipment Notification 1",
            date: "10 March 2024",
            time: "2:05 PM"
        },
        {
            text: "Added new package - PKG #123",
            date: "12 March 2024",
            time: "10:15 PM"
        },
        {
            text: "Added new powder - PWD #123",
            date: "11 March 2024",
            time: "13:15 PM"
        },
        {
            text: "Done Flouring - DRY #123",
            date: "11 March 2024",
            time: "13:05 PM"
        },
        {
            text: "Added new DL - DRY #123",
            date: "10 March 2024",
            time: "10:55 PM"
        },
        {
            text: "Done drying - WET #123",
            date: "10 March 2024",
            time: "8:55 PM"
        },
        {
            text: "Done washing - WET #123",
            date: "9 March 2024",
            time: "8:55 PM"
        },
        {
            text: "Added new WL - WET #123",
            date: "9 May 2024",
            time: "7:20 PM"
        },
        {
            text: "Collected new WL - Batch #2",
            date: "9 May 2024",
            time: "5:15 PM"
        },
        {
            text: "Collected new WL - Batch #1",
            date: "9 May 2024",
            time: "3:55 PM"
        }
    ];


    return (
        <div className="h-3/4">
                <div className="w-80 bg-white rounded-3xl z-10 relative py-6 h-full">
                    <div className="flex justify-center gap-12 w-full mb-3">
                        <p className="text-septenary font-semibold underline underline-offset-4"> All </p>
                        <p className="text-septenary font-semibold"> Recent </p>
                    </div>
                    
                    <div className="h-full pt-2 pb-10">
                        <div className="overflow-auto max-h-full">
                            {notifications.map((notification, index) => (
                                <CentraNotification
                                    key={index}
                                    text={notification.text}
                                    date={notification.date}
                                    time={notification.time}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
    )

}

export default CentraNotificationList;