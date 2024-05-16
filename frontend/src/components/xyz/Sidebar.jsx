import { useState, useEffect } from 'react'
import desktoplogo from '../../assets/desktop/desktoplogo.svg'
import hamburger from '../../assets/desktop/hamburger.svg'
import desktoplogout from '../../assets/desktop/desktoplogout.svg'

function Sidebar() {

    const [isActive, setIsActive] = useState(false);
    const [dashboardOpen, setDashboardOpen] = useState(false);
  
    const toggleDropdown = () => {
      setDashboardOpen(!dashboardOpen);
    };

    return (
        <div className="bg-primary hidden lg:block h-screen w-1/5 flex flex-col justify-between items-center">
            <div className='bg-primary flex flex-col justify-center items-center gap-8'>
                <div className="bg-primary flex items-center w-full p-5">
                    <button>
                        <img className='bg-primary h-6 w-6 ml-3' src={hamburger}></img>
                    </button>
                    <span className="bg-primary ml-4">
                        <img className='bg-primary h-auto w-auto ml-3' src={desktoplogo}></img>
                    </span>
                </div>

                <div className='bg-primary flex flex-col justify-center items-center gap-5 w-full mt-5'>
                    <nav>
                        <ul>
                            <li 
                                onClick={toggleDropdown}
                                className="bg-primary py-4 px-8 flex justify-start items-center w-full hover:bg-white hover:text-green-800 font-medium cursor-pointer text-white">Dashboard</li>

                            {dashboardOpen && (
                                <>
                                    <li className="bg-primary py-2 px-4 text-white hover:bg-white hover:text-green-800 cursor-pointer">
                                        Wet Leaves
                                    </li>
                                    <li className="bg-primary py-2 px-4 text-white hover:bg-white hover:text-green-800 cursor-pointer">
                                        Dry Leaves
                                    </li>
                                    <li className="bg-primary py-2 px-4 text-white hover:bg-white hover:text-green-800 cursor-pointer">
                                        Flour
                                    </li>
                                </>
                            )}

                            <li className="bg-primary py-4 px-8 flex justify-start items-center w-full hover:bg-white hover:text-green-800 font-medium cursor-pointer text-white">Shipment Tracker</li>
                            <li className="bg-primary py-4 px-8 flex justify-start items-center w-full hover:bg-white hover:text-green-800 font-medium cursor-pointer text-white">Checkpoint</li>
                            <li className="bg-primary py-4 px-8 flex justify-start items-center w-full hover:bg-white hover:text-green-800 font-medium cursor-pointer text-white">Arrived Package</li>
                            <li className="bg-primary py-4 px-8 flex justify-start items-center w-full hover:bg-white hover:text-green-800 font-medium cursor-pointer text-white">Notifications</li>
                            <li className="bg-primary py-4 px-8 flex justify-start items-center w-full hover:bg-white hover:text-green-800 font-medium cursor-pointer text-white">Centra Activity Monitor</li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div className='flex-grow'></div>

            <button>
                <img src={desktoplogout} className='bg-primary mt-36 mr-44'></img>
            </button>
        </div>
    )
}

export default Sidebar;
