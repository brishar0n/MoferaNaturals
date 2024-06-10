import React, { useContext, useEffect, useState } from "react";
import "../../../style/App.css";
import WetLeavesBox from "../../../components/centra/WetLeavesBox";
import { WetLeavesContext } from "./WetLeavesManager"

function WashWetLeaves() {
  const [statusFilter, setStatusFilter] = useState("washing");
  const { wetLeaves, setWetLeaves } = useContext(WetLeavesContext)
  // const [wetLeavesData, setWetLeavesData] = useState([
  //   { id: 200420, weight: 10, collectedDate: "2024-05-01", status: null, finishedTime: null },
  //   { id: 200421, weight: 5, collectedDate: "2024-06-15", status: null, finishedTime: null },   
  //   { id: 200422, weight: 0, collectedDate: "2024-06-19", status: "washed", finishedTime: null },  
  //   { id: 200423, weight: 8, collectedDate: "2024-07-10", status: null, finishedTime: null }
  // ]);

  const handleWashOrDry = (id, newStatus, newFinishedTime) => {
    setWetLeaves(prevData =>
      prevData.map(leaf => 
        leaf.id === id ? { ...leaf, status: newStatus, finishedTime: newFinishedTime } : leaf
      )
    );
  };

  const filteredWetLeaves = wetLeaves.filter(leaf => {
    if (statusFilter === "ALL") return true;
    if (statusFilter === "" && leaf.status === null) return true;
    return leaf.status === statusFilter;
  });

  return (
    <div className="w-full">
      <div className="relative"> 
          <label htmlFor="statusFilter" className="font-medium">Filter by Status:</label>
          <select id="statusFilter" onChange={(e) => setStatusFilter(e.target.value)} className="ml-3 z-100 rounded-3xl p-1">
              <option value="washing">Washing</option>
              <option value="ALL">All</option>
              <option value="">Ready to wash</option>
              <option value="washed">Washed</option>
          </select>
      </div>

      <br></br>
      
      {filteredWetLeaves.map((wetLeaves) => (
        <WetLeavesBox 
          key={wetLeaves.id} 
          weight={wetLeaves.weight} 
          date={wetLeaves.collectedDate} 
          status={wetLeaves.status} 
          id={wetLeaves.id}
          finishedTime={wetLeaves.finishedTime}
          handleWashOrDry={handleWashOrDry}
          isWashingPage={true} // This indicates the washing page
        />
      ))}
      
    </div>
  );
}

export default WashWetLeaves;
