import React, { useContext, useEffect, useState } from "react";
import "../../../style/App.css";
import WetLeavesBox from "../../../components/centra/WetLeavesBox";
import { getWetLeaves, washWetLeaves } from "../../../../api/centraAPI";

function WashWetLeaves() {
  const [statusFilter, setStatusFilter] = useState("washing");
  const [wetLeaves,setWetLeaves] = useState([])
  // const [wetLeaves, setWetLeaves] = useState([
  //   {
  //       id: 1,
  //       retrieval_date: "2024-06-11",
  //       washed_datetime: null,
  //       dried_datetime: null,
  //       weight: 100.5,
  //       centra_id: 1
  //   },
  //   {
  //       id: 2,
  //       retrieval_date: "2024-06-10",
  //       washed_datetime: "2024-06-10T13:15:00",
  //       dried_datetime: null,
  //       weight: 120.3,
  //       centra_id: 2
  //   },
  // ]);

  useEffect(() => {
    const fetchWetLeaves = async () => {
        const response = await getWetLeaves();
        console.log(response);
        if(response.data) setWetLeaves(response.data);
    }
    
    fetchWetLeaves();
  }, [])

  const handleWashOrDry = (id, newStatus, newDatetime) => {
    console.log(id, newStatus, newDatetime)
    if (newStatus === "washing") washWetLeaves({id, "date":newDatetime})
    // if (newStatus === "washing") dryWetLeaves({id, "date":newDatetime})
    // setWetLeaves(prevData =>
    //   prevData.map(leaf => 
    //     leaf.id === id ? { 
    //       ...leaf, 
    //       washed_datetime: newStatus === "washing" ? newDatetime : leaf.washed_datetime, 
    //       dried_datetime: newStatus === "drying" ? newDatetime : leaf.dried_datetime 
    //     } : leaf
    //   )
    // );
  };

  const filteredWetLeaves = wetLeaves.filter(leaf => {
    const now = new Date();
    if (statusFilter === "ALL") return true;
    if (statusFilter === "washing" && leaf.washed_datetime && new Date(leaf.washed_datetime) > now) return true;
    if (statusFilter === "washed" && leaf.washed_datetime && new Date(leaf.washed_datetime) <= now) return true;
    if (statusFilter === "drying" && leaf.dried_datetime && new Date(leaf.dried_datetime) > now) return true;
    if (statusFilter === "dried" && leaf.dried_datetime && new Date(leaf.dried_datetime) <= now) return true;
    if (statusFilter === "" && !leaf.washed_datetime && !leaf.dried_datetime) return true;
    return false;
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
          date={wetLeaves.retrieval_date} 
          id={wetLeaves.id}
          washedDatetime={wetLeaves.washed_datetime}
          driedDatetime={wetLeaves.dried_datetime}
          handleWashOrDry={handleWashOrDry}
          isWashingPage={true} // This indicates the washing page
        />
      ))}
      
    </div>
  );
}

export default WashWetLeaves;
