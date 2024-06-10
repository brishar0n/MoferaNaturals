import React from "react";
import "../../../style/App.css"
import { useState } from "react";
import PackageBox from "../../../components/centra/PackageBox";

function PackageHistory(){
    const [statusFilter, setStatusFilter] = useState("ALL");

    const packages = [
        { id: 200420, weight: 10, expDate: "2024-05-01", status: "READY TO SHIP", shippingDate: "" },
        { id: 200421, weight: 5, expDate: "2024-06-15", status: "SHIPPING", shippingDate: "2024-04-15" },   // 
        { id: 200422, weight: 0, expDate: "2024-06-19", status: "CANCELLED", shippingDate: "2024-04-19"  },  // not arrived in gh
        { id: 200423, weight: 8, expDate: "2024-07-10", status: "CONFIRMED", shippingDate: "2024-04-21"  },  // confirmed by gh
        { id: 200424, weight: 10, expDate: "2024-04-01", status: "ARRIVED", shippingDate: "2024-04-23"  },  // received by xyz
        { id: 200425, weight: 5, expDate: "2024-06-15", status: "EXPIRED", shippingDate: "" }, // package not sent and expired
      ];

    const filteredPackages = statusFilter === "ALL" ? packages : packages.filter(pkg => pkg.status === statusFilter);
    
    return (
        <div className="w-72">
            <div className="relative"> 
                <label htmlFor="statusFilter" className="font-medium">Filter by Status:</label>
                <select id="statusFilter" onChange={(e) => setStatusFilter(e.target.value)} className="ml-3 z-100 rounded-3xl p-1">
                    <option value="ALL">All</option>
                    <option value="READY TO SHIP">Ready to Ship</option>
                    <option value="SHIPPING">Shipping</option>
                    <option value="CANCELLED">Cancelled</option>
                    <option value="CONFIRMED">Confirmed</option>
                    <option value="ARRIVED">Arrived</option>
                    <option value="EXPIRED">Expired</option>
                </select>
            </div>

            <br></br>

            {filteredPackages.map((pkg) => (
                <PackageBox 
                    key={pkg.id} 
                    weight={pkg.weight} 
                    expDate={pkg.expDate} 
                    status={pkg.status} 
                    id={pkg.id}
                    shippingDate={pkg.shippingDate}
                />
            ))}
        </div>
    );
}
  
export default PackageHistory;
