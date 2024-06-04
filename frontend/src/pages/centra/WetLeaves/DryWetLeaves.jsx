import React, { useState } from "react";
import "../../../style/App.css";
import WetLeavesBox from "../../../components/centra/WetLeavesBox";

function DryWetLeaves() {
  const [statusFilter, setStatusFilter] = useState("drying");
  const [wetLeavesData, setWetLeavesData] = useState([
    { id: 200420, weight: 10, collectedDate: "2024-05-01", status: "washed", finishedTime: null },
    { id: 200421, weight: 5, collectedDate: "2024-06-10", status: "washed", finishedTime: null },
    { id: 200422, weight: 5, collectedDate: "2024-06-15", status: "dried", finishedTime: null },
  ]);

  const handleWashOrDry = (id, newStatus, newFinishedTime) => {
    setWetLeavesData(prevData =>
      prevData.map(leaf => 
        leaf.id === id ? { ...leaf, status: newStatus, finishedTime: newFinishedTime } : leaf
      )
    );
  };

  const filteredWetLeaves = wetLeavesData.filter(leaf => {
    if (statusFilter === "ALL") return true;
    return leaf.status === statusFilter;
  });

  return (
    <div className="w-full">
      <div className="relative"> 
          <label htmlFor="statusFilter" className="font-medium">Filter by Status:</label>
          <select id="statusFilter" onChange={(e) => setStatusFilter(e.target.value)} className="ml-3 z-100 rounded-3xl p-1">
              <option value="drying">Drying</option>
              <option value="ALL">All</option>
              <option value="washed">Ready to dry</option>
              <option value="dried">Dried</option>
          </select>
      </div>

      <br />

      {filteredWetLeaves.map((wetLeaves) => (
        <WetLeavesBox 
          key={wetLeaves.id} 
          weight={wetLeaves.weight} 
          date={wetLeaves.collectedDate} 
          status={wetLeaves.status} 
          id={wetLeaves.id}
          finishedTime={wetLeaves.finishedTime}
          handleWashOrDry={handleWashOrDry}
          isWashingPage={false} // This indicates the drying page
        />
      ))}
    </div>
  );
}

export default DryWetLeaves;
