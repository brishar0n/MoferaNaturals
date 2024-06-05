import { AiOutlineSearch } from 'react-icons/ai';
import { useState, useEffect } from 'react'  
import "../../style/centra/ShipmentHeader.css"
import moped from '../../assets/trackshipping/moped.svg'
import { useNavigate } from 'react-router-dom';
import ShippingSearchResult from './ShippingSearchResult';
import { motion } from "framer-motion";

function TrackShippingSearch() {
    const [input, setInput] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const navigate = useNavigate();

    const shippingData = [
        {"shippingId": 1, "expedition": "JNE", "shippingDate": "26-05-2024", "shippingTime": "9:45 PM"},
        {"shippingId": 2, "expedition": "JNT", "shippingDate": "27-05-2024", "shippingTime": "10:45 PM"},
        {"shippingId": 3, "expedition": "SiCepat", "shippingDate": "28-05-2024", "shippingTime": "11:45 PM"},
        {"shippingId": 4, "expedition": "JNE", "shippingDate": "29-05-2024", "shippingTime": "12:45 AM"}
    ]

    const packageData = [
        {"packageId": 101, "shippingId": 1, "weight": 30},
        {"packageId": 102, "shippingId": 1, "weight": 20},
        {"packageId": 103, "shippingId": 2, "weight": 10},
        {"packageId": 104, "shippingId": 2, "weight": 15},
        {"packageId": 105, "shippingId": 3, "weight": 21},
        {"packageId": 106, "shippingId": 3, "weight": 16},
        {"packageId": 107, "shippingId": 4, "weight": 19},
        {"packageId": 108, "shippingId": 4, "weight": 15},
        {"packageId": 109, "shippingId": 1, "weight": 50},
        {"packageId": 110, "shippingId": 1, "weight": 45}
    ]

    useEffect(() => {
        // Set initial search result to full jsonData when component mounts
        setSearchResult(shippingData);
    }, []);

    function handleSearch(e) {
        setInput(e);
        if (e) {
            const filteredData = shippingData.filter(shipping => shipping.shippingId && shipping.shippingId.toString().includes(e));
            setSearchResult(filteredData);
        } else {
            setSearchResult(shippingData);
        }
    }

    function handleShippingClick(shippingId) {
        navigate(`/trackshipping/${shippingId}`);
    }

    return (
        <div className='mb-5 z-20 relative w-full'>
            <div className="flex mx-auto pt-3 ml-10 h-56 text-left flex-col">
                <div className="w-1/2 mt-10">
                    <p className='text-primary font-bold mb-1 leading-sm texts'>Track Shipping</p>
                </div>
                <div className="absolute right-0 box -top-0">
                    <img src={moped} alt="mopedd"/>
                </div>

                <div className='search absolute mb-3 top-36'>
                    <input type="search" placeholder='Search Shipping ID' value={input} onChange={(e) => handleSearch(e.target.value)}/>
                    <button className='absolute -right-7 top-1/2 p-3 rounded-full -translate-y-1/2 text-white'>
                        <AiOutlineSearch/>
                    </button>
                </div>
            </div>
            
            <motion.div
                  key="add"
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -300, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                <div className='flex justify-center'>
                    <ShippingSearchResult searchResult={searchResult} onShippingClick={handleShippingClick} packageData={packageData}/>
                </div>
            </motion.div>
        </div>
    )
}

export default TrackShippingSearch;