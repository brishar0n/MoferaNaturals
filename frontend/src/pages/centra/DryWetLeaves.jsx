import React, { useEffect, useState } from "react";
import "../../style/App.css";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../../components/centra/CentraNavbar";
import WetLeavesBox from "../../components/centra/WetLeavesBox";

function DryWetLeaves() {
  const [isMobile, setIsMobile] = useState(false);
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [wetLeavesData, setWetLeavesData] = useState([
    { id: 200420, weight: 10, collectedDate: "2024-05-01", status: "washed", finishedTime: null },
    { id: 200421, weight: 5, collectedDate: "2024-06-10", status: "washed", finishedTime: null },
    { id: 200422, weight: 5, collectedDate: "2024-06-15", status: "dried", finishedTime: null },
  ]);

  const navigate = useNavigate();

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 600);
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleBack = () => navigate("/dashboard");
  const handleAdd = () => navigate("/addwetleaves");
  const handleWash = () => navigate("/washwetleaves");

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
    <div>
      {isMobile && (
        <>
          <div className="overflow-auto h-[calc(100vh-6rem)] md:h-auto bg-quaternary min-h-screen flex flex-col items-center overflow-auto resize-none pb-36">
            <img src="src/assets/AddPage/frameAdd.svg" className="fixed w-screen z-0"></img>

            <div className="flex pt-16 gap-11 pr-20 z-10">
              <img src="src/assets/common/backarrow.svg" onClick={handleBack}></img>
              <p className="font-bold text-primary text-3xl">Wet Leaves</p>
            </div>

            <br></br>

            <div className="bg-white w-2/3 rounded-full z-20">
              <div className="flex text-s gap-1 font-medium p-1">
                <p className="w-24 rounded-full p-1" onClick={handleAdd}> Add </p>
                <p className="w-24 rounded-full p-1" onClick={handleWash}> Wash </p>
                <p className="w-24 bg-tertiary text-white rounded-full p-1"> Dry </p>
              </div>
            </div>

            <br></br>
            
            <div className="relative"> 
                <label htmlFor="statusFilter" className="font-medium">Filter by Status:</label>
                <select id="statusFilter" onChange={(e) => setStatusFilter(e.target.value)} className="ml-3 z-100 rounded-3xl p-1">
                    <option value="ALL">All</option>
                    <option value="washed">Ready to dry</option>
                    <option value="drying">Drying</option>
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
          
          <NavigationBar></NavigationBar>
        </>
      )}
    </div>
  );
}

export default DryWetLeaves;
