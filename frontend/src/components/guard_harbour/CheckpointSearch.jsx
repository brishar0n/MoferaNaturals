import { useNavigate } from "react-router-dom";
import CheckpointBox from "./CheckpointBox";
import { AiOutlineSearch } from 'react-icons/ai';
import '../../style/xyz/xyz_mobile/FindRescalePackage.css';
import { useState, useEffect } from "react";

function CheckpointSearch(){
    // Sample checkpoint data
    const checkpoints = [
        {
            "id": 101,
            "sentFromCentra": 4,
            "quantityWeight": "25 kg",
            "arrivedDate": "10-05-2024",
            "arrivedTime": "10:30 AM"
        },
        {
            "id": 102,
            "sentFromCentra": 2,
            "quantityWeight": "29 kg",
            "arrivedDate": "09-05-2024",
            "arrivedTime": "10:30 AM"
        },
        {
            "id": 103,
            "sentFromCentra": 1,
            "quantityWeight": "30 kg",
            "arrivedDate": "08-05-2024",
            "arrivedTime": "10:30 AM"
        },
        {
            "id": 104,
            "sentFromCentra": 10,
            "quantityWeight": "30 kg",
            "arrivedDate": "08-05-2024",
            "arrivedTime": "10:20 AM"
        }
    ];

    const navigate = useNavigate();
    const [input, setInput] = useState("");
    const [filter, setFilter] = useState("");
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        // Set initial search result to full jsonData when component mounts
        setSearchResult(checkpoints);
    }, []);

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

                <div className='search relative py-4 w-full'>
                    <input type="search" placeholder='Search Checkpoint' value={input} onChange={(e) => handleSearch(e.target.value)}/>
                    <button className='absolute right-8 top-1/2 p-3 rounded-full -translate-y-1/2 text-white'>
                        <AiOutlineSearch/>
                    </button>
                </div>

                <div className='search relative py-4 mb-3 w-5/6'>
                    <input type="search" placeholder='Filter by Centra (1-36)' value={filter} onChange={handleFilter}/>
                </div>

                <div className="w-full">
                    {Object.entries(groupedCheckpoints).map(([date, checkpoints]) => (
                        <div key={date}>
                            <p className="font-medium text-white text-2xl font-semibold text-left relative ml-12">{date}</p>
                            {checkpoints.map(checkpoint => (
                                <CheckpointBox
                                    key={checkpoint.id}
                                    id={checkpoint.id}
                                    fromCentra={checkpoint.sentFromCentra}
                                    quantity={checkpoint.quantityWeight}
                                    arrivedTime={checkpoint.arrivedTime}
                                />
                            ))}
                        </div>
                    ))}
                </div>
                
            </div>
        </div>
    
    )
}

export default CheckpointSearch;