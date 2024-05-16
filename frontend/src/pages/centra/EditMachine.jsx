import React, { useEffect, useState } from "react";
import "../../style/App.css";
import { useNavigate } from "react-router-dom";
import Select from "@mui/material/Select"
import NavigationBar from "../../components/centra/CentraNavbar.jsx";

const machineTypes = [
  { value: '', label: 'All' },
  { value: 'drying', label: 'Drying' },
  { value: 'flouring', label: 'Flouring' },
]

function EditMachine() {
  const [machineTypeFilter, setMachineTypeFilter] = useState('');
  const [filteredMachineTypes, setFilteredMachineTypes] = useState(machineTypes);
  const [machineType, setMachineType] = useState('');
  const [weightCapacity, setWeightCapacity] = useState('');
  const [machineCount, setMachineCount] = useState(1);
  const [selectedMachineId, setSelectedMachineId] = useState(null);
  const [isMobile, setIsMobile] = React.useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const filtered = machineTypes.filter((type) => type.value === '' || type.value === machineTypeFilter)
    setFilteredMachineTypes(filtered)
  }, [machineTypeFilter])

  const handleWeightCapacityChange = (event) => {
    setWeightCapacity(event.target.value)
  }

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 600);
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Machine type:', machineType)
    console.log('Weight capacity:', weightCapacity)
    setMachineType('')
    setWeightCapacity('')
  }

  const fetchMachineDetails = async (machineId) => {
    try {
      const response = await fetch(`/api/machines/${machineId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch machine details');
      }
      const data = await response.json();
      setMachineType(data.machineType);
      setWeightCapacity(data.weightCapacity);
    } catch (error) {
      console.error('Error fetching machine details:', error);
    }
  };

  const handleSelectMachine = (machineId) => {
    setSelectedMachineId(machineId);
    fetchMachineDetails(machineId);
  };

  const handleBack = () => navigate("/centradashboard");

  const handleAdd = () => navigate("/addmachine");

  const incrementMachineCount = () => {
    setMachineCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      {isMobile && (
        <>
          <div className="overflow-auto h-[calc(100vh-6rem)] md:h-auto bg-quaternary min-h-screen flex flex-col items-center overflow-auto resize-none pb-24">
            <img src="src/assets/AddPage/frameAdd.svg" className="absolute top-100vh w-screen z-0"></img>
  
            <div className="flex pt-16 gap-11 pr-20 z-10">
                    <img src="src/assets/common/backarrow.svg" onClick={handleBack}></img>
                    <p className="font-bold text-primary text-3xl"> Machine </p>
            </div>
  
            <br></br>

            <div className="bg-white w-2/3 rounded-full z-20">
                <div className="flex text-s gap-1 font-medium p-1">
                    <p className="w-48 rounded-full p-1" onClick={handleAdd}> Add </p>
                    <p className="w-48 bg-tertiary rounded-full text-white p-1"> Edit </p>
                </div>
            </div>

            <p className="text-base text-primary font-semibold mt-4"> Machine Type: </p>
            <Select
                  id="machineTypeFilter"
                  value={machineTypeFilter}
                  onChange={(e) => setFilter(e.target.value)}
                  size="small"
                  className="bg-white text-green-800 rounded-lg px-5 mt-1">
                  {machineTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
            </Select>

            <div className="bg-white w-2/3 h-1/4 rounded-2xl mt-5 z-30">
                <label className="header bg-green-600 rounded-xl text-white p-2 px-20">
                  Machine {machineCount}
                </label>
                <label className="block text-sm font-medium mt-5 mb-2" htmlFor="weightCapacity">
                  Weight Capacity (kg)
                </label>
                <input
                  id="weightCapacity"
                  type="number"
                  value={weightCapacity}
                  onChange={handleWeightCapacityChange}
                  className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              
              <div className="flex justify-center">
                <button type="submit" className="bg-green-700 text-white mr-1 mt-3 mb-3 py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Edit
                </button>
                <button type="submit" className="bg-green-700 text-white ml-2 mt-3 mb-3 py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Delete
                </button>
              </div>

            </div>

            <div className="bg-white w-2/3 h-1/4 rounded-2xl mt-5 z-30">
                <label className="header bg-green-600 rounded-xl text-white p-2 px-20">
                  Machine 2
                </label>
                <label className="block text-sm font-medium mt-5 mb-2" htmlFor="weightCapacity">
                  Weight Capacity (kg)
                </label>
                <input
                  id="weightCapacity"
                  type="number"
                  value={weightCapacity}
                  onChange={handleWeightCapacityChange}
                  className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              
              <div className="flex justify-center">
                <button type="submit" className="bg-green-700 text-white mr-1 mt-3 mb-3 py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Edit
                </button>
                <button type="submit" className="bg-green-700 text-white ml-2 mt-3 mb-3 py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Delete
                </button>
              </div>

            </div>

            <div className="bg-white w-2/3 h-1/4 rounded-2xl mt-5 z-30">
                <label className="header bg-green-600 rounded-xl text-white p-2 px-20">
                  Machine 3
                </label>
                <label className="block text-sm font-medium mt-5 mb-2" htmlFor="weightCapacity">
                  Weight Capacity (kg)
                </label>
                <input
                  id="weightCapacity"
                  type="number"
                  value={weightCapacity}
                  onChange={handleWeightCapacityChange}
                  className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              
              <div className="flex justify-center">
                <button type="submit" className="bg-green-700 text-white mr-1 mt-3 mb-3 py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Edit
                </button>
                <button type="submit" className="bg-green-700 text-white ml-2 mt-3 mb-3 py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Delete
                </button>
              </div>

            </div>
  
            <NavigationBar/>
          </div>
        </>
      )}
    </div>
  );
}  

export default EditMachine;
