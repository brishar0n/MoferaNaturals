import CentraNotification from "./CentraNotification";
import React, { useEffect, useState } from "react";
import { getCentraNotification, getRecentCentraNotification } from "../../../api/centraAPI";
import { formatISOToUTC } from "../../../utils/utils";
import { motion } from "framer-motion";

function CentraNotificationList() {
    const [notifications, setNotifications] = useState([]);
    const [recentNotifications, setRecentNotifications] = useState([]);
    const [selectedTab, setSelectedTab] = useState("all");

    useEffect(() => {
        const fetchNotification = async () => {
            const notification = await getCentraNotification();
            if(notification.data) setNotifications(notification.data);

            const recentNotification = await getRecentCentraNotification();
            if(recentNotification.data) setRecentNotifications(recentNotification.data);
        }
        
        fetchNotification();
    }, []);

    const handleTabChange = (tab) => {
        setSelectedTab(tab);
    };

    return (
        <div className="h-3/4">
            <div className="w-80 bg-white rounded-3xl z-10 relative py-6 h-full">
                <div className="flex justify-center gap-12 w-full mb-3">
                    <motion.p 
                        className={`text-septenary font-semibold ${selectedTab === "all" ? "underline underline-offset-4" : ""}`}
                        onClick={() => handleTabChange("all")}
                        whileTap={{ scale: 0.9 }}
                    >
                        All
                    </motion.p>
                    <motion.p 
                        className={`text-septenary font-semibold ${selectedTab === "recent" ? "underline underline-offset-4" : ""}`}
                        onClick={() => handleTabChange("recent")}
                        whileTap={{ scale: 0.9 }}
                    >
                        Recent
                    </motion.p>
                </div>
                
                <div className="h-full pt-2 pb-10">
                    <div className="overflow-auto max-h-full">
                        {selectedTab === "all" && (
                            notifications.map((notification, index) => (
                                <CentraNotification
                                    key={index}
                                    text={notification.message}
                                    datetime={new Date(notification.date)}
                                />
                            ))
                        )}
                        {selectedTab === "recent" && (
                            recentNotifications.map((notification, index) => (
                                <CentraNotification
                                    key={index}
                                    text={notification.message}
                                    datetime={new Date(notification.date)}
                                />
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    )

}

export default CentraNotificationList;
