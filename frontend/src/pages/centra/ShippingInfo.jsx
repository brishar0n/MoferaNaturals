// Tyrone
import React, { useState, useEffect } from 'react' 
import { useNavigate } from "react-router-dom";
import box from '../../assets/shipping/box-with-tape.svg'
import backarrow from '../../assets/shipping/back_arrow.svg'
import bgupper from '../../assets/shipping/bg_upper.svg'
import bglowerleft from '../../assets/shipping/bg_lower_left.svg'
import bglowerright from '../../assets/shipping/bg_lower_right.svg'
import menubar from '../../assets/shipping/menu_bar.svg'
import mascot from '../../assets/shipping/mascot.svg'
import ShippingCard from '../../components/centra/ShippingCard'
import NavigationBar from "../../components/Navbar.jsx";
import '../../style/Shipping.css'

export const ShippingInfo = () => {
    const [weight, setWeight] = useState(0);
    const [date, setDate] = useState(new Date());
    const [isMobile, setIsMobile] = React.useState(false);
    const navigate = useNavigate();
  
    const handleWeightChange = (event) => {
      setWeight(event.target.value);
    };
  
    const handleDateChange = (event) => {
      setDate(event.target.value);
    };
  
    useEffect(() => {
      function handleResize() {
        setIsMobile(window.innerWidth < 600);
      }
  
      handleResize();
      window.addEventListener("resize", handleResize);
  
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    const handleBack = () => navigate("/dashboard");
  
    const handleWash = () => navigate("/washwetleaves");
  
    const handleDry = () => navigate("/drywetleaves");
  
    return (
      <div>
        {isMobile && (
          <>
            <div className="overflow-auto h-[calc(100vh-6rem)] md:h-auto bg-primary min-h-screen flex flex-col items-center overflow-auto resize-none pb-24">

            <img src={bgupper} className='w-screen absolute '/>

            <img src={box} className='absolute top-12 right-7 z-51'/>

            <img src={backarrow} className="absolute top-11 left-10" onClick={() => {navigate("/login");}}/>
              
            <p className='text-white text-4xl font-bold absolute text-left top-32 left-14 '> Shipping <br></br> Information </p>

                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
              <div className="content flex flex-col items-center">
                <div className="bg-white p-4 rounded-xl shadow-md z-50">
                  <div className="flex item s-center mb-4">
                  <span className="text-gray-500 p-2">Package Weight:</span>
                    <input
                      type="number"
                      value={weight}
                      onChange={handleWeightChange}
                      className="bg-green-700 bg-opacity-20 rounded-lg px-2 py-1 mr-2"
                    />
                  </div>

                  <div className="flex items-center mb-4">
                  <span className="text-gray-500 p-2">Total Packages:</span>
                    <input
                      type="number"
                      value={weight}
                      onChange={handleWeightChange}
                      className="bg-green-700 bg-opacity-20 rounded-lg px-2 py-1 mr-2"
                    />
                  </div>

                  <div className="flex items-center mb-4">
                  <span className="text-gray-500 p-2">Expedition:</span>
                    <input
                      type="text"
                      value={weight}
                      onChange={handleWeightChange}
                      className="bg-green-700 bg-opacity-20 rounded-lg px-2 py-1 mr-2"
                    />
                  </div>

                  <div className="flex items-center">
                  <span className="text-gray-500 p-2">Date:</span>
                    <input
                      type="date"
                      value={date.toISOString().substring(0, 10)}
                      onChange={handleDateChange}
                      className="bg-green-700 bg-opacity-20 rounded-lg px-2 py-1 mr-2"
                    />
                  </div>
                  <button className="bg-green-700 hover:bg-green-700 text-white font-bold py-2 px-12 rounded-2xl mt-3">
                    SHIP
                  </button>
                  <br></br>
                  <button className="bg-green-700 hover:bg-green-700 text-white font-bold py-2 px-12 rounded-2xl mt-3">
                    NOTIFY MOFERA
                  </button>

                </div>
                  <img src={mascot} className="absolute ml-80 mt-52 z-50"/>
                
              </div>
                <img src={bglowerleft} className="w-screen absolute bottom-0"/>
                <img src={bglowerright} className="w-screen absolute bottom-0"/>
            </div>
            
            <NavigationBar/>
          </>
            )}
        </div>
    )
}
