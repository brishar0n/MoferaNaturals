// import CheckpointStats from "./CheckpointStats";
import { AiOutlineSearch } from 'react-icons/ai';
import { useState, useEffect } from "react";
// // import PackageConfirmation from "./PackageConfirmation";
import { getCheckpoints, getShippingInfo, getPackages, getPackagesWithStatus } from '../../../../api/xyzAPI';
import ReceivalStats from './ReceivalStats';
import PackagePickUp from './PackagePickUp';

function XYZDashboardContent() {
    const [input, setInput] = useState("");
    const [searchResult, setSearchResult] = useState([]);

    const [checkpoints, setCheckpoints] = useState([]);
    const [shippingData, setShippingData] = useState([]);
    const [packageData, setPackageData] = useState([]);
    const [packageShippingData, setPackageShippingData] = useState([]);
    const [packageConfirmedData, setPackageConfirmedData] = useState([]);
    const [packageReceivedData, setPackageReceivedData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const checkpointsResponse = await getCheckpoints();
                setCheckpoints(checkpointsResponse.data);
                // setSearchResult(checkpointsResponse.data);

                const shippingResponse = await getShippingInfo();
                setShippingData(shippingResponse.data);

                const packagesResponse = await getPackages();
                setPackageData(packagesResponse.data);

                const packageShippingResponse = await getPackagesWithStatus(1);
                setPackageShippingData(packageShippingResponse.data);

                const packageConfirmedResponse = await getPackagesWithStatus(2);
                setPackageConfirmedData(packageConfirmedResponse.data);

                const packageReceivedResponse = await getPackagesWithStatus(3);
                setPackageReceivedData(packageReceivedResponse.data);

                // setSearchResult(packageData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        // Set initial search result to full jsonData when component mounts
        setSearchResult(packageData);
    }, [packageData]);

    function handleSearch(e) {
        setInput(e);
        if (e) {
            const filteredPackageData = packageData.filter(item => item.id && item.id.toString().includes(e));
            setSearchResult(filteredPackageData);
        } else {
            setSearchResult(packageData);
        }
    }

    return (
        <>
            <div className='searchPackageGH mt-28 relative py-4 w-full'>
                <input type="search" placeholder='Search Package ID' value={input} onChange={(e) => handleSearch(e.target.value)}/>
                <button className='absolute right-8 top-1/2 p-3 rounded-full -translate-y-1/2 text-white'>
                    <AiOutlineSearch/>
                </button>
            </div>

            <ReceivalStats packageShippedData={packageShippingData} packageConfirmedData={packageConfirmedData} packageReceivedData={packageReceivedData}/>

            <div className="p-4 relative mt-1 -mb-24">
                <p className="text-white font-bold text-lg">Packages</p>
                <PackagePickUp searchResult={searchResult} shippingData={shippingData}/>
            </div>
        </>
    )

}

export default XYZDashboardContent;