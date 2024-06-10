import { useState } from 'react';
import desktoplogo from '../../assets/desktop/mofera-logo.svg';
import hamburger from '../../assets/desktop/menu-bar.svg';
import exit from '../../assets/desktop/exit.svg';
import dashboardlogo from '../../assets/desktop/dashboard-logo.svg';
import usericon from "../../assets/desktop/user-icon.svg";
import database from "../../assets/desktop/database.svg";
import dashboardGreen from '../../assets/desktop/dashboard-green2.svg';
import userGreen from '../../assets/desktop/user-green.svg'
import dbGreen from '../../assets/desktop/db-green.svg';
import "../../style/AdminDesktop.css";

function AdminSidebar({ isMinimized, toggleMenu, onPageDataChange }) {
  const [dataManagementOpen, setDataManagementOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null); 

  const toggleDropdown = () => {
    setDataManagementOpen(!dataManagementOpen);
  };

  return (
    <div
      className={`bg-primary h-screen flex flex-col justify-between items-center transition-all duration-550 ${
        isMinimized ? 'w-20 pl-2 pt-5' : 'w-3/20'
      }`}
    >
      <div className="bg-primary flex flex-col justify-start gap-6">
        <div className="bg-primary flex items-center w-full p-5 pl-2">
          <button onClick={toggleMenu}>
            <img height="31" width="31" src={hamburger} />
          </button>
          {!isMinimized && (
            <span className="bg-primary ml-4">
              <img className="bg-primary w-36 mt-3" src={desktoplogo} />
            </span>
          )}
        </div>

        {!isMinimized && (
          <nav className="w-full">
            <ul>
              <li
                className="bg-primary py-5 px-2.5 flex justify-start items-center w-full hover:bg-white hover:rounded-xl hover:text-primary font-medium cursor-pointer text-white"
                onMouseEnter={() => setHoveredItem('dashboard')}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => onPageDataChange('Dashboard', 'Indicate Centra and Guard Harbour through data', 'Dashboard')}
              >
                <img
                  src={hoveredItem === 'dashboard' ? dashboardGreen : dashboardlogo}
                  className='mr-3 w-6 h-6'
                />
                &nbsp;&nbsp;Dashboard
              </li>

              <li
                className="bg-primary py-5 px-0.5 flex justify-start gap-2 items-center w-full hover:bg-white hover:rounded-xl hover:text-primary font-medium cursor-pointer text-white"
                onMouseEnter={() => setHoveredItem('user')}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => onPageDataChange('Manage Users', 'Arrange Username and Data Collections of ID', 'AdminTable')}
              >
                <img
                  src={hoveredItem === 'user' ? userGreen : usericon}
                  height="30"
                  width="30"
                  className='mr-2.5 w-9 h-9'
                />
                <div className='flex flex-col text-start'>
                  <p>User</p>
                  <p onClick={() => onPageDataChange('Manage Users', 'Arrange Username and Data Collections of ID')}>Management</p>
                </div>
              </li>

              <li
                className="bg-primary py-5 px-1 flex justify-start gap-2 items-center w-full hover:bg-white hover:rounded-xl hover:text-primary font-medium cursor-pointer text-white"
                onClick={toggleDropdown}
                onMouseEnter={() => setHoveredItem('database')}
                onMouseLeave={() => setHoveredItem(null)}

                
              >
                <img
                  src={hoveredItem === 'database' ? dbGreen : database}
                  height="30"
                  width="30"
                  className='mr-2.5 w-8 h-8'
                />
                <div className='flex flex-col text-start'>
                  <p onClick={() => onPageDataChange('Data Master', 'Observe data through their categories', 'MasterDataFolder')}>Data</p>
                  <p>Management</p>
                </div>
              </li>

              {dataManagementOpen && (
                <>
                  <li className="bg-primary py-4 px-5 text-left indent-6 text-white hover:bg-white rounded-xl hover:text-primary font-medium cursor-pointer w-full">
                    <p onClick={() => onPageDataChange('Centra Data', 'Search and added data for Centra')}>Centra Data</p>
                  </li>
                  <li className="bg-primary py-4 px-5 text-left indent-6 text-white hover:bg-white rounded-xl hover:text-primary font-medium cursor-pointer w-full">
                    <p onClick={() => onPageDataChange('Wet Leaves Data', 'Search and added data for Wet Leaves')}>Wet Leaves Data</p>
                  </li>
                  <li className="bg-primary py-4 px-5 text-left indent-6 text-white hover:bg-white rounded-xl hover:text-primary font-medium cursor-pointer w-full">
                    <p onClick={() => onPageDataChange('Dry Leaves Data', 'Search and added data for Dry Leaves')}>Dry Leaves Data</p>
                  </li>
                  <li className="bg-primary py-4 px-5 text-left indent-6 text-white hover:bg-white rounded-xl hover:text-primary font-medium cursor-pointer w-full">
                    <p onClick={() => onPageDataChange('Flour Data', 'Search and added data for Flour')}>Flour Data</p>
                  </li>
                  <li className="bg-primary py-4 px-5 text-left indent-6 text-white hover:bg-white rounded-xl hover:text-primary font-medium cursor-pointer w-full">
                    <p onClick={() => onPageDataChange('Shipping Info Data', 'List of Shipping Arrival and Departure Data')}>Shipping Info Data</p>
                  </li>
                  <li className="bg-primary py-4 px-5 text-left indent-6 text-white hover:bg-white rounded-xl hover:text-primary font-medium cursor-pointer w-full">
                    <p onClick={() => onPageDataChange('Checkpoint Data', 'List of Checkpoint Data and Total Package Arrival notice')}>Checkpoint Data</p>
                  </li>
                  <li className="bg-primary py-4 px-5 text-left indent-6 text-white hover:bg-white rounded-xl hover:text-primary font-medium cursor-pointer w-full">
                    <p onClick={() => onPageDataChange('Package Data', 'Package details including tracking and delivery statuses')}>Package Data</p>
                  </li>
                </>
              )}
            </ul>
          </nav>
        )}
      </div>

      <div className="bg-primary w-full col-span-10 flex flex-col justify-between">
        <button
          className="bg-primary mb-5"
          onMouseEnter={() => setHoveredItem('exit')}
          onMouseLeave={() => setHoveredItem(null)}
        >
          {!isMinimized && (
            <img
              src={exit}
              className="w-10 bg-primary ml-8 mt-20"
            />
          )}
        </button>
      </div>
    </div>
  );
}

export default AdminSidebar;
