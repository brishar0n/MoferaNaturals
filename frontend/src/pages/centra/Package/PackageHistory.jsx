import React from "react";
import "../../../style/App.css"
import { useState, useEffect } from "react";
import PackageBox from "../../../components/centra/PackageBox";
import { getPackages, getPackagesWithStatus, getShippingInfo } from "../../../../api/centraAPI";
import { getCurrentUser } from "../../../../api/profileAPI";

function PackageHistory(){
    const [statusFilter, setStatusFilter] = useState("ALL");
    const [packages, setPackages] = useState([]);
    const [shippings, setShippings] = useState([]);

    // const packages = [
    //     { id: 200420, weight: 10, expDate: "2024-05-01", status: "READY TO SHIP", shippingDate: "" },
    //     { id: 200421, weight: 5, expDate: "2024-06-15", status: "SHIPPING", shippingDate: "2024-04-15" },   // 
    //     { id: 200422, weight: 0, expDate: "2024-06-19", status: "CANCELLED", shippingDate: "2024-04-19"  },  // not arrived in gh
    //     { id: 200423, weight: 8, expDate: "2024-07-10", status: "CONFIRMED", shippingDate: "2024-04-21"  },  // confirmed by gh
    //     { id: 200424, weight: 10, expDate: "2024-04-01", status: "ARRIVED", shippingDate: "2024-04-23"  },  // received by xyz
    //     { id: 200425, weight: 5, expDate: "2024-06-15", status: "EXPIRED", shippingDate: "" }, // package not sent and expired
    //   ];

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

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch all shippings once
                const shippingsResponse = await getShippingInfo();
                setShippings(shippingsResponse.data);

                // Fetch packages based on statusFilter
                let response;
                if (statusFilter === "ALL") {
                    response = await getPackages();
                } else {
                    response = await getPackagesWithStatus(convertStatus(statusFilter));
                }
                const packageData = response.data;

                // Fetch shipping date for each package
                const updatedPackages = await Promise.all(packageData.map(async (pkg) => {
                    if (pkg.shipping_id) {
                        const [shippingDate, shippingTime] = await fetchShippingDateTime(pkg.shipping_id, shippingsResponse.data);
                        console.log(`Package ID: ${pkg.id}, Shipping ID: ${pkg.shipping_id}, Shipping Date: ${shippingDate}, Shipping Time: ${shippingTime}`);
                        return { ...pkg, shippingDate: shippingDate, shippingTime: shippingTime };
                    } else {
                        console.log(`Package ID: ${pkg.id} has no shipping_id`);
                        return { ...pkg, shippingDate: null, shippingTime: null };
                    }
                }));
                setPackages(updatedPackages)
            } catch (err) {
                console.error("Error fetching packages: ", err);
            }
        };
        fetchData();
    }, [statusFilter]);

    const fetchShippingDateTime = (shippingId, shippings) => {
        const shipping = shippings.find(ship => ship.id === shippingId);
        const shippingDate = String(shipping.departure_datetime).split("T")[0];
        const shippingTime = String(shipping.departure_datetime).split("T")[1];
        return shipping ? [shippingDate, shippingTime] : null;
    };
    
    return (
        <div className="w-4/5 mx-auto">
            <div className="relative"> 
                <label htmlFor="statusFilter" className="font-medium">Filter by Status:</label>
                <select id="statusFilter" onChange={(e) => setStatusFilter(e.target.value)} className="ml-3 z-100 rounded-3xl p-1">
                <option value="ALL">All</option>
                    <option value="READY TO SHIP">Ready to Ship</option>
                    <option value="SHIPPING">Shipping</option>
                    <option value="CONFIRMED">Confirmed</option>
                    <option value="ARRIVED">Arrived</option>
                    <option value="EXPIRED">Expired</option>
                </select>
            </div>

            <br></br>

            {packages.map((pkg) => (
                <PackageBox 
                    key={pkg.id} 
                    weight={pkg.weight} 
                    expDate={pkg.exp_date} 
                    formatDate={formatDate}
                    formatTime={formatTime}
                    createdDate={pkg.created_datetime ? pkg.created_datetime.split("T")[0] : "N/A"}
                    createdTime={pkg.created_datetime ? pkg.created_datetime.split("T")[1] : "N/A"}
                    status={pkg.status}
                    id={pkg.id}
                    shippingDate={pkg.shippingDate}
                    shippingTime={pkg.shippingTime}
                    convertStatusToString={convertStatusToString}
                />
            ))}
        </div>
    );
}
  
export default PackageHistory;
