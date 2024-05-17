import { useState } from 'react';
import desktoplogo from '../../assets/desktop/mofera-logo.svg';
import hamburger from '../../assets/desktop/menu-bar.svg';
import exit from '../../assets/desktop/exit.svg';

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
                className="bg-primary py-4 px-8 flex justify-start items-center w-full hover:bg-white hover:text-green-800 font-medium cursor-pointer text-white"
              >
                Dashboard
              </li>
              {dashboardOpen && (
                <>
                  <li className="bg-primary py-2 px-8 text-white hover:bg-white hover:text-green-800 cursor-pointer w-full">
                    Wet Leaves
                  </li>
                  <li className="bg-primary py-2 px-8 text-white hover:bg-white hover:text-green-800 cursor-pointer w-full">
                    Dry Leaves
                  </li>
                  <li className="bg-primary py-2 px-8 text-white hover:bg-white hover:text-green-800 cursor-pointer w-full">
                    Flour
                  </li>
                </>
              )}
              <li className="bg-primary py-4 px-8 flex justify-start items-center w-full hover:bg-white hover:text-green-800 font-medium cursor-pointer text-white">
                Shipment Tracker
              </li>
              <li className="bg-primary py-4 px-8 flex justify-start items-center w-full hover:bg-white hover:text-green-800 font-medium cursor-pointer text-white">
                Checkpoint
              </li>
              <li className="bg-primary py-4 px-8 flex justify-start items-center w-full hover:bg-white hover:text-green-800 font-medium cursor-pointer text-white">
                Arrived Packages
              </li>
              <li className="bg-primary py-4 px-8 flex justify-start items-center w-full hover:bg-white hover:text-green-800 font-medium cursor-pointer text-white">
                Notifications
              </li>
              <li className="bg-primary py-4 px-8 flex justify-start items-center w-full hover:bg-white hover:text-green-800 font-medium cursor-pointer text-white">
                Centra Activity Monitor
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
