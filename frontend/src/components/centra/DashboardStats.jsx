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

    const groupByDate = (data, dateKey) => {
        return data.reduce((acc, item) => {
          const date = item[dateKey];
          if (!acc[date]) acc[date] = [];
          acc[date].push(item);
          return acc;
        }, {});
      };
    
    const calculateAveragePerDay = (data, section) => {
        const dateKey = section === "wet" 
            ? 'retrieval_date' 
            : section === "dry" 
            ? 'dried_date' 
            : section === "flour"
            ? 'floured_date'
            : null;

        if (!dateKey) {
            return 0; // Or handle error case
        }

        const groupedData = groupByDate(data, dateKey);
        
        const totalWeight = calculateTotal(
            Object.values(groupedData).map((group) =>
                calculateTotal(group.map((item) => item.weight))
            )
        );
        const numberOfDays = Object.keys(groupedData).length;
        return numberOfDays ? totalWeight / numberOfDays : 0;
    };
    
    const calculateTotalForToday = (data, section) => {
        const dateKey = section === "wet" 
            ? 'retrieval_date' 
            : section === "dry" 
            ? 'dried_date' 
            : section === "flour"
            ? 'floured_date'
            : null;

        if (!dateKey) {
            return 0; // Or handle error case
        }

        const today = new Date().toISOString().split("T")[0];
        const todayData = data.filter(
            (item) => item[dateKey] === today
        );
        return calculateTotal(todayData.map((item) => item.weight));
    };

    const wetWeights = extractWeights(wetData);
    const dryWeights = extractWeights(dryData);
    const flourWeights = extractWeights(powderData);
    const packageWeights = extractWeights(packageData);

    const totalWetLeaves = calculateTotal(wetWeights);
    const averageWetLeaves = calculateAveragePerDay(wetData, "wet");
    const wetLeavesCollectedToday = calculateTotalForToday(wetData, "wet");

    const totalDryLeaves = calculateTotal(dryWeights);
    const averageDryLeaves = calculateAveragePerDay(dryData, "dry");
    const dryLeavesCollectedToday = calculateTotalForToday(dryData, "dry");

    const totalFlour = calculateTotal(flourWeights);
    const averageFlour = calculateAveragePerDay(powderData, "flour");
    const flourCollectedToday = calculateTotalForToday(powderData, "flour");

    return (
        <div className="w-[90%] rounded-2xl p-5 text-sm text-black bg-white shadow-lg"> 
            {section === "wet" && (
                <>
                    <div className="flex justify-between">
                        <span className="text-left flex-1">Total Wet Leaves Collected:</span>
                        <span className="font-bold">{totalWetLeaves} Kg</span>
                    </div>
                    <div className="flex justify-between mt-2">
                        <span className="text-left flex-1">Average Wet Leaves Collected:</span>
                        <span className="font-bold">{averageWetLeaves.toFixed(2)} Kg</span>
                    </div>
                    <div className="flex justify-between mt-2">
                        <span className="text-left flex-1">Wet Leaves Collected Today:</span>
                        <span className="font-bold">{wetLeavesCollectedToday} Kg</span>
                    </div>    
                </>
            )}

            {section === "dry" && (
                <>
                    <div className="flex justify-between">
                        <span className="text-left flex-1">Total Dried Leaves:</span>
                        <span className="font-bold">{totalDryLeaves} Kg</span>
                    </div>
                    <div className="flex justify-between mt-2">
                        <span className="text-left flex-1">Average Dried Leaves:</span>
                        <span className="font-bold">{averageDryLeaves.toFixed(2)}  Kg</span>
                    </div>  
                    <div className="flex justify-between mt-2">
                        <span className="text-left flex-1">Dry Leaves Collected Today:</span>
                        <span className="font-bold">{dryLeavesCollectedToday} Kg</span>
                    </div>      
                </>
            )}

            {section === "flour" && (
                <>
                    <div className="flex justify-between">
                        <span className="text-left flex-1">Total Flour Collected:</span>
                        <span className="font-bold">{totalFlour} Kg</span>
                    </div>
                    <div className="flex justify-between mt-2">
                        <span className="text-left flex-1">Average Flour Collected:</span>
                        <span className="font-bold">{averageFlour.toFixed(2)} Kg</span>
                    </div> 
                    <div className="flex justify-between mt-2">
                        <span className="text-left flex-1">Flour Collected Today:</span>
                        <span className="font-bold">{flourCollectedToday} Kg</span>
                    </div>      
                </>
            )}

            {section === "package" && (
                <>
                    <div className="flex justify-between">
                        <span className="text-left flex-1">Total Package Sent:</span>
                        <span className="font-bold">{packageData.length}</span>
                    </div>
                    <div className="flex justify-between mt-2">
                        <span className="text-left flex-1">Ready to Ship Package:</span>
                        <span className="font-bold">{packageDataReady.length}</span>
                    </div>      
                    <div className="flex justify-between mt-2">
                        <span className="text-left flex-1">Package in Shipping:</span>
                        <span className="font-bold">{packageDataShipped.length}</span>
                    </div>      
                </>
            )}
            
        </div>
    )
}

export default DashboardStats;