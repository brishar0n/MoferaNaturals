import { useNavigate } from "react-router-dom";
import CheckpointBox from "./CheckpointBox";
import { AiOutlineSearch } from 'react-icons/ai';
import '../../style/xyz/xyz_mobile/FindRescalePackage.css';
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function CheckpointSearch(){
    // Sample checkpoint data
    const checkpoints = [
        {
            "id": 101,
            "shippingId": 4,
            "totalPackagesArrived": 3,
            "arrivedDate": "10-05-2024",
            "arrivedTime": "10:30 AM"
        },
        {
            "id": 102,
            "shippingId": 3,
            "totalPackagesArrived": 5,
            "arrivedDate": "09-05-2024",
            "arrivedTime": "10:30 AM"
        },
        {
            "id": 103,
            "shippingId": 2,
            "totalPackagesArrived": 6,
            "arrivedDate": "08-05-2024",
            "arrivedTime": "10:30 AM"
        },
        {
            "id": 104,
            "shippingId": 1,
            "totalPackagesArrived": 2,
            "arrivedDate": "08-05-2024",
            "arrivedTime": "10:20 AM"
        }
    ];

    const shippingData = [
        { "id": 1 },
        { "id": 2 },
        { "id": 3 },
        { "id": 4 },
    ]

    const packageData = [
        {
            "id": 129,
            "centraId": 4,
            "shippingId": 1,
        },
        {
            "id": 101,
            "centraId": 4,
            "shippingId": 1,
        },
        {
            "id": 90,
            "centraId": 20,
            "shippingId": 2,
        },
        {
            "id": 87,
            "centraId": 20,
            "shippingId": 2,
        },
        {
            "id": 10,
            "centraId": 14,
            "shippingId": 3,
        },
        {
            "id": 26,
            "centraId": 14,
            "shippingId": 3,
        },
        {
            "id": 100,
            "centraId": 32,
            "shippingId": 4,
        },
        {
            "id": 109,
            "centraId": 32,
            "shippingId": 4,
        },
    ]

    const navigate = useNavigate();
    const [input, setInput] = useState("");
    const [filter, setFilter] = useState("");
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        // Set initial search result to full jsonData when component mounts
        setSearchResult(checkpoints);
    }, []);

    // Function to get total packages sent based on shippingID
    function getTotalPackagesSent(shippingID) {
        return packageData.filter(pkg => pkg.shippingId === shippingID).length;
    };

    // Function to get unitCentra based on shippingID
    function getUnitCentra(shippingID) {
        const packageWithShippingID = packageData.find(pkg => pkg.shippingId === shippingID);
        return packageWithShippingID ? packageWithShippingID.centraId : ''; // Check if packageWithShippingID is not undefined before accessing its properties
    };

    function handleSearch(e) {
        setInput(e);
        if (e) {
            const filteredData = checkpoints.filter(checkpoint => checkpoint.id && checkpoint.id.toString().includes(e));
            setSearchResult(filteredData);
        } else {
            setSearchResult(checkpoints);
        }
    }

    function handleFilter(e) {
        setFilter(e.target.value);
        const filteredData = checkpoints.filter(checkpoint => {
            const includeId = checkpoint.id.toString().includes(input);
            const includeCentra = checkpoint.sentFromCentra.toString().includes(e.target.value);
            return includeId && includeCentra;
        });
        setSearchResult(filteredData);
    }

    function handleAdd() {
        navigate("/addcheckpoint");
    }

    // Function to convert date format
    const formatDate = (dateString) => {
        const [day, month, year] = dateString.split('-');
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return `${parseInt(day, 10)} ${months[parseInt(month, 10) - 1]} ${year}`;
    };

    // Group checkpoints by arrival date
    const groupedCheckpoints = {};
    searchResult.forEach(checkpoint => {
        const formattedDate = formatDate(checkpoint.arrivedDate);
        if (!groupedCheckpoints[formattedDate]) {
            groupedCheckpoints[formattedDate] = [];
        }
        groupedCheckpoints[formattedDate].push(checkpoint);
    });

    return (
        <div className="pb-36">
            <div className="flex flex-col items-center">
                <div className="flex pt-16 z-10 items-center justify-center mb-5">
                    <p className="font-bold text-primary text-3xl"> Checkpoints </p>
                </div>

                <div className="bg-white w-2/3 rounded-full z-20 mb-6">
                    <div className="flex text-s gap-1 font-medium p-1">
                        <p className="w-48 rounded-full  p-1"  onClick={handleAdd}> Add </p>
                        <p className="w-48 rounded-full p-1 bg-tertiary text-white"> View </p>
                    </div>
                </div>

                <div className='searchPackage relative py-4 w-full'>
                    <input type="search" placeholder='Search Checkpoint' value={input} onChange={(e) => handleSearch(e.target.value)}/>
                    <button className='absolute right-8 top-1/2 p-3 rounded-full -translate-y-1/2 text-white'>
                        <AiOutlineSearch/>
                    </button>
                </div>

                <div className='searchPackage relative py-4 mb-3 w-5/6'>
                    <input type="search" placeholder='Filter by Centra (1-36)' value={filter} onChange={handleFilter}/>
                </div>

                <div className="w-full">
                    <motion.div
                    key="add"
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -300, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    >
                    {Object.entries(groupedCheckpoints).map(([date, checkpoints]) => (
                        <div key={date}>
                            <p className="font-medium text-white text-2xl font-semibold text-left relative ml-12">{date}</p>
                            {checkpoints.map(checkpoint => (
                                <CheckpointBox
                                    key={checkpoint.id}
                                    id={checkpoint.id}
                                    fromCentra={getUnitCentra(checkpoint.shippingId)}
                                    totalPackagesSent={getTotalPackagesSent(checkpoint.shippingId)}
                                    totalPackagesArrived={checkpoint.totalPackagesArrived}
                                    arrivedTime={checkpoint.arrivedTime}
                                />
                            ))}
                        </div>
                    ))}
                    </motion.div>
                </div>
                
            </div>
        </div>
    
    )
}

export default CheckpointSearch;