import { getFlour, getDryLeaves, getPackages, getPackagesWithStatus, getWetLeaves } from "../../../api/centraAPI";
import { useState, useEffect } from "react";

function DashboardStats({section}) {
    const [wetData, setWetData] = useState([]);
    const [dryData, setDryData] = useState([]);
    const [powderData, setPowderData] = useState([]);
    const [packageData, setPackageData] = useState([]);
    const [packageDataReady, setPackageDataReady] = useState([]);
    const [packageDataShipped, setPackageDataShipped] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
          try {
                const [wetResponse, dryResponse, powderResponse, packageResponse, packageReadyResponse, packageShippedResponse] = await Promise.all([
                    getWetLeaves(),
                    getDryLeaves(),
                    getFlour(),
                    getPackages(),
                    getPackagesWithStatus(0),
                    getPackagesWithStatus(1)
                ]);

                setWetData(wetResponse.data);
                setDryData(dryResponse.data);
                setPowderData(powderResponse.data);
                setPackageData(packageResponse.data);
                setPackageDataReady(packageReadyResponse.data);
                setPackageDataShipped(packageShippedResponse.data);
          } catch (err) {
                console.error("Error: ", err);
          }
      };

      fetchData();
    }, []);

    const extractWeights = (data) => {
        return data.map(item => item.weight);
    };

    const calculateTotal = (weights) => {
        return weights.reduce((total, weight) => total + weight, 0);
    };

    const calculateAverage = (weights) => {
        if (weights.length === 0) return 0;
        const total = calculateTotal(weights);
        return total / weights.length;
    };

    const wetWeights = extractWeights(wetData);
    const dryWeights = extractWeights(dryData);
    const flourWeights = extractWeights(powderData);
    const packageWeights = extractWeights(packageData);

    const totalWetLeaves = calculateTotal(wetWeights);
    const averageWetLeaves = calculateAverage(wetWeights);

    const totalDryLeaves = calculateTotal(dryWeights);
    const averageDryLeaves = calculateAverage(dryWeights);

    const totalFlour = calculateTotal(flourWeights);
    const averageFlour = calculateAverage(flourWeights);

    return (
        <div className="w-[90%] rounded-2xl p-5 text-sm text-black bg-white shadow-lg"> 
            {section === "wet leaves" && (
                <>
                    <div className="flex justify-between">
                        <span>Total Wet Leaves Collected:</span>
                        <span className="font-bold">{totalWetLeaves} Kg</span>
                    </div>
                    <div className="flex justify-between mt-2">
                        <span>Average Wet Leaves Collected Each Day:</span>
                        <span className="font-bold">{averageWetLeaves} Kg</span>
                    </div>    
                </>
            )}

            {section === "dry leaves" && (
                <>
                    <div className="flex justify-between">
                        <span>Total Dry Leaves Collected:</span>
                        <span className="font-bold">{totalDryLeaves} Kg</span>
                    </div>
                    <div className="flex justify-between mt-2">
                        <span>Average Dry Leaves Collected Each Day:</span>
                        <span className="font-bold">{averageDryLeaves}  Kg</span>
                    </div>    
                </>
            )}

            {section === "flour" && (
                <>
                    <div className="flex justify-between">
                        <span>Total Flour Collected:</span>
                        <span className="font-bold">{totalFlour} Kg</span>
                    </div>
                    <div className="flex justify-between mt-2">
                        <span>Average Flour Collected Each Day:</span>
                        <span className="font-bold">{averageFlour} Kg</span>
                    </div>    
                </>
            )}

            {section === "package" && (
                <>
                    <div className="flex justify-between">
                        <span>Total Package Sent:</span>
                        <span className="font-bold">{packageData.length}</span>
                    </div>
                    <div className="flex justify-between mt-2">
                        <span>Ready to Ship Package:</span>
                        <span className="font-bold">{packageDataReady.length}</span>
                    </div>      
                    <div className="flex justify-between mt-2">
                        <span>Package in Shipping:</span>
                        <span className="font-bold">{packageDataShipped.length}</span>
                    </div>      
                </>
            )}
            
        </div>
    )
}

export default DashboardStats;