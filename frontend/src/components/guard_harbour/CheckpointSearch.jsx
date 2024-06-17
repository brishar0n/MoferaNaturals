import { useNavigate } from 'react-router-dom';
import CheckpointBox from './CheckpointBox';
import { AiOutlineSearch } from 'react-icons/ai';
import '../../style/xyz/xyz_mobile/FindRescalePackage.css';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getCheckpoints, getShippingInfo, getPackages } from '../../../api/guardHarborAPI';

function CheckpointSearch() {
    const navigate = useNavigate();
    const [input, setInput] = useState('');
    const [filter, setFilter] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [checkpoints, setCheckpoints] = useState([]);
    const [shippingData, setShippingData] = useState([]);
    const [packageData, setPackageData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const checkpointsResponse = await getCheckpoints();
                setCheckpoints(checkpointsResponse.data);
                setSearchResult(checkpointsResponse.data);

                const shippingResponse = await getShippingInfo();
                setShippingData(shippingResponse.data);

                const packagesResponse = await getPackages();
                setPackageData(packagesResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);

    function getTotalPackagesSent(shippingID) {
        return packageData.filter(pkg => pkg.shipping_id === shippingID).length;
    };

    function getUnitCentra(shippingID) {
        const packageWithShippingID = packageData.find(pkg => pkg.shipping_id === shippingID);
        return packageWithShippingID ? packageWithShippingID.centra_id : ''; // Check if packageWithShippingID is not undefined before accessing its properties
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
            const unitCentra = getUnitCentra(checkpoint.shipping_id);
            const includeCentra = unitCentra && unitCentra.toString().startsWith(e.target.value);
            return includeId && includeCentra;
        });
        setSearchResult(filteredData);
    }

    function handleAdd() {
        navigate('/addcheckpoint');
    }

    const formatDate = (dateString) => {
        if (!dateString) return 'Invalid Date';
        const dateParts = dateString.split('-');
        if (dateParts.length !== 3) return 'Invalid Date';
        const [year, month, day] = dateParts;
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return `${parseInt(day, 10)} ${months[parseInt(month, 10) - 1]} ${year}`;
    };

    const groupedCheckpoints = {};
    searchResult.forEach(checkpoint => {
        const formattedDate = formatDate(checkpoint.arrival_datetime.split("T")[0]);
        if (!groupedCheckpoints[formattedDate]) {
            groupedCheckpoints[formattedDate] = [];
        }
        groupedCheckpoints[formattedDate].push(checkpoint);
    });

    const formatTime = (timeString) => {
        const [hour, minute, second] = timeString.split(':');
        let period = 'AM';
        let hourInt = parseInt(hour, 10);
        
        if (hourInt >= 12) {
            period = 'PM';
            if (hourInt > 12) hourInt -= 12;
        } else if (hourInt === 0) {
            hourInt = 12;
        }
        
        return `${hourInt}:${minute} ${period}`;
    };

    useEffect(() => {
        console.log(checkpoints);
    })

    return (
        <div className="pb-36">
            <div className="flex flex-col items-center">
                <div className="flex pt-16 z-10 items-center justify-center mb-5">
                    <p className="font-bold text-primary text-3xl"> Checkpoints </p>
                </div>

                <div className="bg-white w-2/3 rounded-full z-20 mb-6">
                    <div className="flex text-s gap-1 font-medium p-1">
                        <p className="w-48 rounded-full p-1" onClick={handleAdd}> Add </p>
                        <p className="w-48 rounded-full p-1 bg-tertiary text-white"> View </p>
                    </div>
                </div>

                <div className='searchPackage relative py-4 w-full'>
                    <input type="search" placeholder='Search Checkpoint' value={input} onChange={(e) => handleSearch(e.target.value)} />
                    <button className='absolute right-8 top-1/2 p-3 rounded-full -translate-y-1/2 text-white'>
                        <AiOutlineSearch />
                    </button>
                </div>

                <div className='searchPackage relative py-4 mb-3 w-5/6'>
                    <input type="search" placeholder='Filter by Centra (1-36)' value={filter} onChange={handleFilter} />
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
                                        fromCentra={getUnitCentra(checkpoint.shipping_id)}
                                        totalPackagesSent={getTotalPackagesSent(checkpoint.shipping_id)}
                                        totalPackagesArrived={checkpoint.total_packages}
                                        arrivedTime={formatTime(checkpoint.arrival_datetime.split("T")[1])}
                                    />
                                ))}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default CheckpointSearch;
