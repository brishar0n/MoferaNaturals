import React from "react";
import "../../style/App.css"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../../components/centra/CentraNavbar";
import PackageBox from "../../components/centra/PackageBox";

function PackageHistory(){
    const [isMobile, setIsMobile] = React.useState(false);
    const [statusFilter, setStatusFilter] = useState("ALL");
    const navigate = useNavigate();

    const packages = [
        { id: 200420, weight: 10, expDate: "2024-05-01", status: "READY TO SHIP", shippingDate: "" },
        { id: 200421, weight: 5, expDate: "2024-06-15", status: "SHIPPING", shippingDate: "2024-04-15" },   // 
        { id: 200422, weight: 0, expDate: "2024-06-19", status: "CANCELLED", shippingDate: "2024-04-19"  },  // not arrived in gh
        { id: 200423, weight: 8, expDate: "2024-07-10", status: "CONFIRMED", shippingDate: "2024-04-21"  },  // confirmed by gh
        { id: 200424, weight: 10, expDate: "2024-04-01", status: "ARRIVED", shippingDate: "2024-04-23"  },  // received by xyz
        { id: 200425, weight: 5, expDate: "2024-06-15", status: "EXPIRED", shippingDate: "" }, // package not sent and expired
      ];

    useEffect(() => {
        function handleResize() {
        setIsMobile(window.innerWidth < 600);
        }

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleBack = () => navigate("/dashboard");

    const handleAdd = () => navigate("/addpackage");

    const filteredPackages = statusFilter === "ALL" ? packages : packages.filter(pkg => pkg.status === statusFilter);
    
    return (
      <div>
        {isMobile && (
          <>
            <div className="overflow-auto h-[calc(100vh-6rem)] md:h-auto bg-quaternary min-h-screen flex flex-col items-center overflow-auto resize-none pb-32">
                <img src="src/assets/AddPage/frameAdd.svg" className="fixed w-screen z-0"></img>

                <div className="flex pt-16 gap-11 pr-20 z-10">
                    <img src="src/assets/common/backarrow.svg" onClick={handleBack}></img>
                    <p className="font-bold text-primary text-3xl"> Package </p>
                </div>

                <br></br>

                <div className="bg-white w-2/3 rounded-full z-20">
                    <div className="flex text-s gap-1 font-medium p-1">
                        <p className="w-48 rounded-full p-1" onClick={handleAdd}> Add </p>
                        <p className="w-48 bg-tertiary rounded-full text-white p-1"> History </p>
                    </div>
                </div>
            
                <br></br>

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
            <NavigationBar></NavigationBar>
          </>
        )}
  
      </div>
    );
}
  
export default PackageHistory;
