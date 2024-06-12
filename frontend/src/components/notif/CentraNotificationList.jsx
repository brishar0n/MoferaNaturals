import CentraNotification from "./CentraNotification"
import React, { useEffect, useState } from "react";
import { getCentraNotification } from "../../../api/centraAPI";
import { formatISOToUTC } from "../../../utils/utils";

function CentraNotificationList() {
    const [notifications, setNotifications] = useState([])
    useEffect(() => {
        const fetchNotification = async () => {
            const response = await getCentraNotification();
            console.log(response);
            if(response.data) setNotifications(response.data);
        }
        
        fetchNotification();
    }, [])


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
                                    text={notification.message}
                                    datetime={new Date(formatISOToUTC(notification.date))}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
    )

}

export default CentraNotificationList;