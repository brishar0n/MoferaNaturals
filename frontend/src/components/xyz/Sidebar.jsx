import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import desktoplogo from '../../assets/desktop/mofera-logo.svg';
import hamburger from '../../assets/desktop/menu-bar.svg';
import exit from '../../assets/desktop/exit.svg';

import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { PiPackageFill } from "react-icons/pi";
import { IoNotifications } from "react-icons/io5";
import { MdOutlineMonitor } from "react-icons/md";

function Sidebar({ onPageChange } ) {
  const [dashboardOpen, setDashboardOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const toggleMenu = () => {
    setIsMinimized(!isMinimized);
  };

  const toggleDropdown = () => {
    setDashboardOpen(!dashboardOpen);
  };

  const handleResize = () => {
    if (window.innerWidth <= 1274) {
      setIsMinimized(true);
    } else {
      setIsMinimized(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className={`bg-primary h-screen flex flex-col justify-between items-center transition-all duration-300 ${
        isMinimized ? 'w-20 pl-2 pt-5' : 'w-3/20'
      }`}
    >
      <div className="bg-primary flex flex-col justify-center items-center gap-8">
        <div className="bg-primary flex items-center w-full p-5">
          <button onClick={toggleMenu}>
            <img height="24" width="24" className="bg-primary mr-4" src={hamburger} />
          </button>
          {!isMinimized && (
            <span className="bg-primary ml-4">
              <img className="bg-primary h-auto w-auto" src={desktoplogo} />
            </span>
          )}
        </div>

        {!isMinimized && (
          <nav className="w-full">
            <ul>
              <li
                onClick={toggleDropdown}
                onMouseEnter={() => setHoveredItem({toggleDropdown})}
                onMouseLeave={() => setHoveredItem(null)}
                className="bg-primary py-4 px-8 flex justify-start items-center w-full hover:bg-white hover:text-green-800 rounded hover:rounded-full hover:rounded-r-none font-medium cursor-pointer text-white"
              > 
                <MdOutlineDashboardCustomize className='text-3xl mr-4'></MdOutlineDashboardCustomize>
                  Dashboard
              </li>
              {dashboardOpen && (
                <>
                  <li 
                    className="bg-primary py-2 px-8 text-white hover:bg-white hover:text-green-800 rounded hover:rounded-full hover:rounded-r-none cursor-pointer w-full"
                    onMouseEnter={() => setHoveredItem('dashboard-wet')}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <Link to="/dashboard-wet">Wet Leaves</Link>
                  </li>
                  <li 
                    className="bg-primary py-2 px-8 text-white hover:bg-white hover:text-green-800 rounded hover:rounded-full hover:rounded-r-none cursor-pointer w-full"
                    onMouseEnter={() => setHoveredItem('dashboard-dry')}
                    onMouseLeave={() => setHoveredItem(null)}
                    >
                    <Link to="/dashboard-dry">Dry Leaves</Link>
                  </li>
                  <li 
                    className="bg-primary py-2 px-8 text-white hover:bg-white hover:text-green-800 rounded hover:rounded-full hover:rounded-r-none cursor-pointer w-full"
                    onMouseEnter={() => setHoveredItem('dashboard-powder')}
                    onMouseLeave={() => setHoveredItem(null)}
                    >
                    <Link to="/dashboard-powder">Powder</Link>
                  </li>
                </>
              )}
              <li 
                className="bg-primary py-4 px-8 flex justify-start items-center w-full hover:bg-white hover:text-green-800 rounded hover:rounded-full hover:rounded-r-none font-medium cursor-pointer text-white"
                onMouseEnter={() => setHoveredItem('shipmenttracker')}
                onMouseLeave={() => setHoveredItem(null)}
                >
                <FaShippingFast className='text-4xl' />
                <Link to="/shipmenttracker" className='ml-5 text-left'>Shipment Tracker</Link>
              </li>
              <li 
                className="bg-primary py-4 px-8 flex justify-start items-center w-full hover:bg-white hover:text-green-800 rounded hover:rounded-full hover:rounded-r-none font-medium cursor-pointer text-white"
                onMouseEnter={() => setHoveredItem('checkpoint')}
                onMouseLeave={() => setHoveredItem(null)}
                >
                <FaLocationDot className='text-3xl' />
                <Link to="/checkpoint" className='ml-4'>Checkpoint</Link>
              </li>
              <li 
                className="bg-primary py-4 px-8 flex justify-start items-center w-full hover:bg-white hover:text-green-800 rounded hover:rounded-full hover:rounded-r-none font-medium cursor-pointer text-white"
                onMouseEnter={() => setHoveredItem('arrivedpackages')}
                onMouseLeave={() => setHoveredItem(null)}
                >
                <PiPackageFill className='text-4xl' />
                <Link to="/arrivedpackages" className='ml-5 text-left'>Arrived Packages</Link>
              </li>
              <li 
                className="bg-primary py-4 px-8 flex justify-start items-center w-full hover:bg-white hover:text-green-800 rounded hover:rounded-full hover:rounded-r-none font-medium cursor-pointer text-white"
                onMouseEnter={() => setHoveredItem('notifications')}
                onMouseLeave={() => setHoveredItem(null)}
                >
              <IoNotifications className='text-3xl' />
                <Link to="/notifications" className='ml-4'>Notifications</Link>
              </li>
              <li 
                className="bg-primary py-4 px-8 flex justify-start items-center w-full hover:bg-white hover:text-green-800 rounded hover:rounded-full hover:rounded-r-none font-medium cursor-pointer text-white"
                onMouseEnter={() => setHoveredItem('centraactivitymonitor')}
                onMouseLeave={() => setHoveredItem(null)}
                >
                <MdOutlineMonitor className='text-5xl' />
                <Link to="/centraactivitymonitor" className='text-left ml-5'>Centra Activity Monitor</Link>
              </li>
            </ul>
          </nav>
        )}
      </div>

      <div className="flex-grow"></div>

      <div className="bg-primary w-full col-span-10 flex flex-col justify-between">
        <button className="bg-primary mb-4 bottom-1">
          {!isMinimized && (
            <img src={exit} className="bg-primary w-10 ml-6 mt-20" />
          )}
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
