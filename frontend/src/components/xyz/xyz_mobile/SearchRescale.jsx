import { useState, useEffect } from 'react'  
import '../../../style/xyz/xyz_mobile/FindRescalePackage.css';
import { AiOutlineSearch } from 'react-icons/ai';
import SearchResult from './SearchResult';
import jsonData from '../../../../data.json';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import { getArrivedPackage, getPackageByID } from '../../../../api/xyzAPI';

function SearchRescale() {
    const [input, setInput] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const navigate = useNavigate();

    const [packages, setPackages] = useState([])

    useEffect(() => {
        // Set initial search result to full jsonData when component mounts
        setSearchResult(packages);
    }, [packages]);

    useEffect(() => {
        async function fetchArrivedPackage() {
            const response = await getArrivedPackage()
            if(response && response.data) {
                setPackages(response.data)
            }
        }

        fetchArrivedPackage()
    }, [])

    function handleChange(e) {
        setInput(e);
    }

    function handleSearch() {
        if (input) getPackageByID(input)
            .then(response => {
                if (!response) return

                setPackages([response.data])
                
            }).catch(err => console.err(err))
        
        else getArrivedPackage()
            .then(response => {
                if (!response) return

                setPackages([response.data])
                
            }).catch(err => console.err(err))
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
                <input type="search" placeholder='Search Package ID...' value={input} onChange={(e) => handleChange(e.target.value)}/>
                <button className='absolute right-8 top-1/2 p-3 rounded-full -translate-y-1/2 text-white' onClick={handleSearch}>
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
                <SearchResult searchResult={searchResult} onPackageClick={handlePackageClick}/>
            </motion.div>
        </div>  
        
    )
}

export default SearchRescale;
