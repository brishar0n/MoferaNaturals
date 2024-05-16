// Tyrone
import React, { useState, useEffect } from 'react' 
import { useNavigate } from "react-router-dom";
import bgleft from '../../assets/trackshipping/bgleft.svg'
import moped from '../../assets/trackshipping/moped.svg'
import menu from '../../assets/trackshipping/menu.svg'
import magnifyingglass from '../../assets/trackshipping/magnifying-glass.svg'
import NavigationBar from "../../components/centra/CentraNavbar.jsx";
import '../../style/Shipping.css'

function TrackShipping() {
    const [weight, setWeight] = useState(0);
    const [date, setDate] = useState(new Date());
    const [expedition, setExpedition] = useState("");
    const [total, setTotal] = useState(0);
    const [search, setSearch] = useState("Search Shipping ID");

    const [isMobile, setIsMobile] = React.useState(false);
    const navigate = useNavigate();

    const handleSearch = (event) => {
      setSearch(event.target.value)
    }
  
    const handleWeightChange = (event) => {
      setWeight(event.target.value);
    };
  
    const handleDateChange = (event) => {
      setDate(event.target.value);
    };
  
    const handleExpeditionChange = (event) => {
        setExpedition(event.target.value);
    }

    const handleTotalChange = (event) => {
        setTotal(event.target.value)
    }

    useEffect(() => {
      function handleResize() {
        setIsMobile(window.innerWidth < 600);
      }
  
      handleResize();
      window.addEventListener("resize", handleResize);
  
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    return (
      <div>
        {isMobile && (
          <>
            <div className="overflow-auto h-[calc(100vh-6rem)] md:h-auto bg-quaternary min-h-screen flex flex-col items-center overflow-auto resize-none pb-24">

            <img src={bgleft} className='w-screen absolute mr-72 h-full max-w-full'/>

            <img src={moped} className='absolute top-10 right-7 z-51'/>
          
            <p className='text-5xl font-bold text-green-800 absolute text-left top-24 left-14 '> Track <br></br> Shipping </p>

                  <div className="flex item absolute top-56 left-16 z-50">
                    <input
                      type="text"
                      value={search }
                      onChange={handleWeightChange}
                      placeholder="Search Package ID"
                      className="bg-green-700 bg-white rounded-lg px-2 py-1 mr-2"
                    />
                    <img src={magnifyingglass} alt="Search" className="absolute -top-1 bottom-1 right-0 ml-4 h-11 w-11 z-10" />
                  </div>

              <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
              <div className="content flex flex-wrap w-2/3">
                <div className="bg-white p-4 rounded-xl shadow-md z-50">
                  <p className="absolute top-left">Shipping ID #123123123</p>

                    <br></br>
                    <div className="flex flex-wrap">
                      <div className="w-1/2 md:w-1/2 px-2">
                      <span className="text-gray-500 font-bold p-2">Weight:</span>
                        <input
                          type="number"
                          value={weight}
                          onChange={handleWeightChange}
                          className="bg-green-700 bg-opacity-20 rounded-lg px-2 py-1 mr-2 p-1 w-24 w-full"
                        />
                      </div>

                    <div className="w-1/2 md:w-1/2 px-2">
                    <span className="text-gray-500 font-bold p-2">Expedition:</span>
                      <input
                        type="text"
                        value={expedition}
                        onChange={handleExpeditionChange}
                        className="bg-green-700 bg-opacity-20 rounded-lg px-2 py-1 mr-2 p-2 w-full"
                      />
                    </div>

                    <div className='flex flex-wrap'>
                      <div className="w-1/2 md:w-1/2 px-2">
                      <span className="text-gray-500 font-bold p-2">Date Shipped:</span>
                        <input
                          type="date"
                          value={date.toISOString().substring(0, 10)}
                          onChange={handleDateChange}
                          className="bg-green-700 bg-opacity-20 rounded-lg px-2 py-1 mr-2 p-2 w-full"
                        />
                      </div>

                      <div className="w-1/2 md:w-1/2 px-2">
                      <span className="text-gray-500 font-bold p-2">Total Packages:</span>
                        <input
                          type="number"
                          value={total}
                          onChange={handleTotalChange}
                          className="bg-green-700 bg-opacity-20 rounded-lg px-2 py-1 mr-2 p-2 w-full"
                        />
                    </div>
                  </div>
                   </div>
                  <button className="bg-green-700 hover:bg-green-700 text-white font-bold py-2 px-12 rounded-2xl mt-3">
                        TRACK
                  </button>
                </div>
            </div>
            </div>
            <NavigationBar/>
          </>
            )}
        </div>
    )
}

export default TrackShipping;
