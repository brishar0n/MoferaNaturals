import React, { useState, useContext, useEffect } from "react";
import "../../../style/App.css";
import WetLeavesBox from "../../../components/centra/WetLeavesBox";
import { dryWetLeaves, getWetLeaves } from "../../../../api/centraAPI";


function DryWetLeaves() {
  const [statusFilter, setStatusFilter] = useState("drying");
  // filter wet leaves data that the washed datetime is not null.
  // const [wetLeaves, setWetLeaves] = useState([
  //   {
  //       id: 1,
  //       retrieval_date: "2024-06-11",
  //       washed_datetime: "2024-06-10T13:15:00",
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
  //   {
  //     id: 3,
  //     retrieval_date: "2024-06-9",
  //     washed_datetime: null,
  //     dried_datetime: null,
  //     weight: 40.3,
  //     centra_id: 2
  //   },
  // ]);
  const [wetLeaves, setWetLeaves] = useState([])

  useEffect(() => {
    const fetchWetLeaves = async () => {
        const response = await getWetLeaves();
        console.log(response);
        if(response.data) setWetLeaves(response.data);
    }
    
    fetchWetLeaves();
  },[])

  const handleWashOrDry = (id, newStatus, newDatetime) => {
    console.log(id, newStatus, newDatetime)
    if (newStatus === "drying") dryWetLeaves({id, "date":newDatetime})
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

  const filteredWetLeaves = wetLeaves.filter((leaf) => {
    const now = new Date();
    if (statusFilter === "ALL") return true;

    const washedDate = leaf.washed_datetime ? new Date(leaf.washed_datetime) : null;
    const driedDate = leaf.dried_datetime ? new Date(leaf.dried_datetime) : null;
    const tenMinutesAfterWash = washedDate ? new Date(washedDate.getTime() + 10 * 60 * 1000) : null;
    const twentyFourHoursAfterDry = driedDate ? new Date(driedDate.getTime() + 24 * 60 * 60 * 1000) : null;

    if (statusFilter === "washed") return washedDate && tenMinutesAfterWash && tenMinutesAfterWash <= now && !driedDate;
    if (statusFilter === "drying") return driedDate && twentyFourHoursAfterDry && twentyFourHoursAfterDry > now;
    if (statusFilter === "dried") return driedDate && twentyFourHoursAfterDry && twentyFourHoursAfterDry <= now;

    return false;
  });

  return (
    <div className="w-full">
      <div className="relative"> 
          <label htmlFor="statusFilter" className="font-medium">Filter by Status:</label>
          <select id="statusFilter" onChange={(e) => setStatusFilter(e.target.value)} className="ml-3 z-100 rounded-3xl p-1">
            <option value="drying">Drying</option>
            <option value="ALL">All</option>
            <option value="washed">Ready to Dry</option>
            <option value="dried">Dried</option>
          </select>
      </div>

      <br />

      {filteredWetLeaves.map((wetLeaves) => (
        <WetLeavesBox 
          key={wetLeaves.id} 
          weight={wetLeaves.weight} 
          date={wetLeaves.retrieval_date} 
          id={wetLeaves.id}
          washedDatetime={wetLeaves.washed_datetime}
          driedDatetime={wetLeaves.dried_datetime}
          handleWashOrDry={handleWashOrDry}
          isWashingPage={false} // This indicates the washing page
        />
      ))}
    </div>
  );
}

export default DryWetLeaves;
