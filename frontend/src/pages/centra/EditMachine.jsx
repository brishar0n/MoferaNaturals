import React, { useEffect, useState } from "react";
import "../../style/App.css";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../../components/Navbar.jsx";

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
      const response = await fetch(`/api/machines/${machineId}`); // Replace with your API endpoint
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

  const handleEdit = async () => {
    try {
      const response = await fetch(`/api/machines/${selectedMachineId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          weightCapacity: weightCapacity,
        }),
      });
      if (!response.ok) {
        throw new Error('Failed to update machine details');
      }
      console.log('Machine details updated successfully');
    } catch (error) {
      console.error('Error updating machine details:', error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/machines/${selectedMachineId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete machine');
      }
      console.log('Machine deleted successfully');
    } catch (error) {
      console.error('Error deleting machine:', error);
    }
  };

  const handleSelectMachine = (machineId) => {
    setSelectedMachineId(machineId);
    fetchMachineDetails(machineId);
  };

  const handleBack = () => navigate("/dashboard");

  const handleAdd = () => navigate("/addmachine");

  const incrementMachineCount = () => {
    setMachineCount(prevCount => prevCount + 1);
  };

  return (
    <div className="bg-quaternary h-screen">
      {isMobile && (
        <>
          <div className="overflow-auto h-[calc(100vh-6rem)] md:h-auto bg-quaternary min-h-screen flex flex-col items-center overflow-auto resize-none pb-24">
            <img src={"src/assets/centra/addbackground.svg"} className="w-screen absolute" alt="background" />
  
            <button onClick={handleBack} className="relative -top-5 -left-40 text-gray-600 text-sm font-semibold z-10 mt-8 md-flex">
              <img src={"src/assets/history/back.svg"} alt="back" className="w-8 mt-8 " />
            </button>
            <h1 className="text-3xl font-bold text-green-900 z-10 relative -top-14 -bottom-20">Machine</h1>
  
            <div className="content flex flex-col items-center z-10">
              <div className="inline-flex">
                <button onClick={handleAdd} className="bg-white text-gray-800 font-medium py-2 px-16 rounded-l-2xl">
                  Add
                </button>
                <button className="bg-green-600 text-white font-medium py-2 px-16 rounded-r-2xl">
                  Edit
                </button>
              </div>
            
              <div className="mt-4 flex mb-4">
                <label className="text-green-700 text-lg font-medium mt-1 mb-2 mr-3" htmlFor="machineTypeFilter">
                  Machine Type:
                </label>
                <select
                  id="machineTypeFilter"
                  value={machineTypeFilter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="bg-white text-green-800 rounded-lg px-5 mr-2">
                  {machineTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              <form className="bg-white p-4 rounded-lg shadow-md px-10 z-10" onSubmit={handleSubmit}>

              <div className="mb-4">
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
              </div>

              <div className="flex justify-center">
                <button onClick={handleEdit} type="submit" className="bg-green-700 text-white mr-1 py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Edit
                </button>
                <button onClick={handleDelete} type="submit" className="bg-green-700 text-white ml-2 py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Delete
                </button>
              </div>

              </form>
            </div>
  
            <NavigationBar/>
          </div>
        </>
      )}
    </div>
  );
}  

export default EditMachine;