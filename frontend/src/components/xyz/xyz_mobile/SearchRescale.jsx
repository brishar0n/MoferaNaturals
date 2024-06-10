import { useState, useEffect } from 'react'  
import '../../../style/xyz/xyz_mobile/FindRescalePackage.css';
import { AiOutlineSearch } from 'react-icons/ai';
import SearchResult from './SearchResult';
import jsonData from '../../../../data.json';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";

function SearchRescale() {
    const [input, setInput] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const navigate = useNavigate();

    const shippings = [
        {shippingId: 1, expedition: "JNE", shippingDate: "26-05-2024", shippingTime: "9:45 PM", estimatedDate: "01-06-2024", estimatedTime: "9:45 PM"},
        {shippingId: 2, expedition: "JNT", shippingDate: "27-05-2024", shippingTime: "10:45 PM", estimatedDate: "02-06-2024", estimatedTime: "9:45 PM"},
        {shippingId: 3, expedition: "SiCepat", shippingDate: "28-05-2024", shippingTime: "11:45 PM", estimatedDate: "03-06-2024", estimatedTime: "9:45 PM"},
        {shippingId: 4, expedition: "JNE", shippingDate: "29-05-2024", shippingTime: "12:45 AM", estimatedDate: "04-06-2024", estimatedTime: "9:45 PM"},
        {shippingId: 5, expedition: "JNT", shippingDate: "01-06-2024", shippingTime: "01:45 PM", estimatedDate: "05-06-2024", estimatedTime: "9:45 PM"},
        {shippingId: 6, expedition: "JNE", shippingDate: "02-06-2024", shippingTime: "02:45 PM", estimatedDate: "06-06-2024", estimatedTime: "9:45 PM"},
        {shippingId: 7, expedition: "SiCepat", shippingDate: "03-06-2024", shippingTime: "03:45 PM", estimatedDate: "07-06-2024", estimatedTime: "9:45 PM"},
        {shippingId: 8, expedition: "Express", shippingDate: "04-06-2024", shippingTime: "04:45 PM", estimatedDate: "08-06-2024", estimatedTime: "9:45 PM"}
    ]
      
    const packages = [
        { id: 200420, weight: 10, expDate: "2024-05-01", status: "READY TO SHIP", shippingId: null, xyz_id: null, centraUnit: 1 },
        { id: 200421, weight: 5, expDate: "2024-06-15", status: "SHIPPING", shippingId: 1, xyz_id: null, centraUnit: 2 },   // 
        { id: 200422, weight: 0, expDate: "2024-06-19", status: "CANCELLED", shippingId: 2, xyz_id: null, centraUnit: 3 },  // not arrived in gh
        { id: 200423, weight: 8, expDate: "2024-07-10", status: "CONFIRMED", shippingId: 2, xyz_id: null, centraUnit: 3 },  // confirmed by gh
        { id: 200424, weight: 10, expDate: "2024-04-01", status: "ARRIVED", shippingId: 3, xyz_id: 101, centraUnit: 4 },  // received by xyz
        { id: 200425, weight: 5, expDate: "2024-06-15", status: "EXPIRED", shippingId: 4, xyz_id: 102, centraUnit: 5 }, // package not sent and expired
        { id: 200426, weight: 8, expDate: "2024-06-16", status: "SHIPPING", shippingId: 5, xyz_id: null, centraUnit: 6 }, 
        { id: 200427, weight: 8, expDate: "2024-07-19", status: "CONFIRMED", shippingId: 6, xyz_id: null, centraUnit: 7 }, 
        { id: 200428, weight: 29, expDate: "2024-08-27", status: "ARRIVED", shippingId: 7, xyz_id: 103, centraUnit: 7 }, 
        { id: 200429, weight: 19, expDate: "2024-06-03", status: "EXPIRED", shippingId: 8, xyz_id: null, centraUnit: 7 }, 
    ];

    useEffect(() => {
        // Set initial search result to full jsonData when component mounts
        setSearchResult(packages);
    }, []);

    function handleSearch(e) {
        setInput(e);
        if (e) {
            const filteredData = packages.filter(item => item.id && item.id.toString().includes(e));
            setSearchResult(filteredData);
        } else {
            setSearchResult(packages);
        }
    }

    function handlePackageClick(packageId) {
        navigate(`/rescalepackage/${packageId}`);
    }

    return (
        <div className='pb-36 mt-5'>
            <div className="flex items-center justify-center flex-col relative">
                <div>
                    <p className='text-3xl primary font-bold mb-1 mt-5'>Rescaling</p>
                    <p className='primary mb-1'>Find Package ID to rescale</p>
                </div>
                <div className='w-10 h-10 rounded-full bg-gray-400 absolute right-5'>
                    <img src="" alt="" />
                </div>
            </div>
            <div className='searchPackage relative py-4 mb-3'>
                <input type="search" placeholder='Search Package ID...' value={input} onChange={(e) => handleSearch(e.target.value)}/>
                <button className='absolute right-8 top-1/2 p-3 rounded-full -translate-y-1/2 text-white'>
                    <AiOutlineSearch/>
                </button>
            </div>
            <motion.div
                key="add"
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ duration: 0.3 }}
                >
                <SearchResult searchResult={searchResult} onPackageClick={handlePackageClick} shippingData={shippings}/>
            </motion.div>
        </div>  
        
    )
}

export default SearchRescale;
