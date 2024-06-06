import { useState } from 'react';
import { Link } from 'react-router-dom';
import desktoplogo from '../../assets/desktop/mofera-logo.svg';
import hamburger from '../../assets/desktop/menu-bar.svg';
import exit from '../../assets/desktop/exit.svg';
import dashboardlogo from '../../assets/desktop/dashboard-logo.svg';
import shipmentlogo from '../../assets/desktop/shipmentlogo.svg'
import checkpointlogo from '../../assets/desktop/checkpointlogo.svg'
import packagelogo from '../../assets/desktop/packagelogo.svg'
import notiflogo from '../../assets/desktop/notiflogo.svg'
import monitorlogo from '../../assets/desktop/monitorlogo.svg'

function Sidebar() {
  const [dashboardOpen, setDashboardOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const toggleMenu = () => {
    setIsMinimized(!isMinimized);
  };

  const toggleDropdown = () => {
    setDashboardOpen(!dashboardOpen);
  };

  return (
    <div
      className={`bg-primary h-screen flex flex-col justify-between items-center transition-all duration-300 ${
        isMinimized ? 'w-16' : 'w-1/5'
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
                className="bg-primary py-4 px-8 flex justify-start items-center w-full hover:bg-white hover:text-green-800 rounded hover:rounded-full hover:rounded-r-none font-medium cursor-pointer text-white"
              > 
                <img src={dashboardlogo} className='mr-3 w-6 h-6'></img>
                  &nbsp;&nbsp;Dashboard
              </li>
              {dashboardOpen && (
                <>
                  <li className="bg-primary py-2 px-8 text-white hover:bg-white hover:text-green-800 cursor-pointer w-full">
                    <Link to="/wetleavesdashboard">Wet Leaves</Link>
                  </li>
                  <li className="bg-primary py-2 px-8 text-white hover:bg-white hover:text-green-800 cursor-pointer w-full">
                    <Link to="/dryleavesdashboard">Dry Leaves</Link>
                  </li>
                  <li className="bg-primary py-2 px-8 text-white hover:bg-white hover:text-green-800 cursor-pointer w-full">
                    <Link to="/powderdashboard">Powder</Link>
                  </li>
                </>
              )}
              <li className="bg-primary py-4 px-8 flex justify-start items-center w-full hover:bg-white hover:text-green-800 rounded hover:rounded-full hover:rounded-r-none font-medium cursor-pointer text-white">
                <img src={shipmentlogo} className='mr-3 hover:fill-green-800'></img>
                <Link to="/shipementtracker" className='ml-1'>Shipment Tracker</Link>
              </li>
              <li className="bg-primary py-4 px-8 flex justify-start items-center w-full hover:bg-white hover:text-green-800 rounded hover:rounded-full hover:rounded-r-none font-medium cursor-pointer text-white">
                <img src={checkpointlogo} className='mr-3 hover:fill-green-800'></img>
                <Link to="/checkpoint" className='ml-3'>Checkpoint</Link>
              </li>
              <li className="bg-primary py-4 px-8 flex justify-start items-center w-full hover:bg-white hover:text-green-800 rounded hover:rounded-full hover:rounded-r-none font-medium cursor-pointer text-white">
                <img src={packagelogo} className='mr-3 hover:fill-green-800'></img>
                <Link to="/arrivedpackages" className='ml-2'>Arrived Packages</Link>
              </li>
              <li className="bg-primary py-4 px-8 flex justify-start items-center w-full hover:bg-white hover:text-green-800 rounded hover:rounded-full hover:rounded-r-none font-medium cursor-pointer text-white">
                <img src={notiflogo} className='mr-3 hover:fill-green-800'></img>
                <Link to="/notifications" className='ml-2'>Notifications</Link>
              </li>
              <li className="bg-primary py-4 px-8 flex justify-start items-center w-full hover:bg-white hover:text-green-800 rounded hover:rounded-full hover:rounded-r-none font-medium cursor-pointer text-white">
                <img src={monitorlogo} className='mr-3 '></img>
                <Link to="/centraactivitymonitor" className='text-left ml-1'>Centra Activity Monitor</Link>
              </li>
            </ul>
          </nav>
        )}
      </div>

      <div className="flex-grow"></div>

      <div className="bg-primary w-full col-span-10 flex flex-col justify-between">
        <button className="bg-primary mb-5">
          {!isMinimized && (
            <img src={exit} className="bg-primary ml-6 mt-20" />
          )}
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
