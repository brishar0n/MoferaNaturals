import { useState } from "react";
import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

function DashboardDataFolder(){
    const navigate = useNavigate()

    const routes = [
        '/dashboard-wet',
        '/shipmenttracker',
        '/checkpoint',
        '/arrivedpackages',
        '/notifications',
        '/centraactivitymonitor'
    ];

    const handleClick = (index) => {
        if (index >= 0 && index < routes.length) {
            navigate(routes[index]);
        }
    };

    return (
        <>
        <div className="w-screen flex flex-wrap gap-12 p-1"> 
            {["XYZ Dashboard", "Shipment Tracker", "Checkpoint", "Arrived Packages", "Notifications", "Activity Monitor"].map((label, index) => (
                <div key={index} className="w-1/6 bg-primary h-48 rounded-xl flex items-center justify-center drop-shadow-lg">
                    <Button
                    className="mb-48 w-3/4 font-semibold bg-quinary hover:bg-quinary active:bg-quinary-darker"
                    onClick={() => handleClick(index)}
                    >
                        {label}
                    </Button>
                </div>
            ))}
        </div>
        </>
    )
}

export default DashboardDataFolder;