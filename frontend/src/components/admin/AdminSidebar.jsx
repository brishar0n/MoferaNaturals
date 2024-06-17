import { useEffect, useState } from 'react';
import desktoplogo from '../../assets/desktop/mofera-logo.svg';
import hamburger from '../../assets/desktop/menu-bar.svg';
import exit from '../../assets/desktop/exit.svg';
import "../../style/AdminDesktop.css";

import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { BsDatabaseFillGear } from "react-icons/bs";

import { columns, columnsCentra, columnsCheckpoint, columnsDry, columnsFlour, columnsPackage, columnsShipping, columnsWet, initialCentraRows, initialCheckpointRows, initialDryRows, initialFlourRows, initialPackageRows, initialRows, initialShippingRows, initialWetRows } from './UserDataSample';
import {getUsers, getCentra, getCheckpoints, getDryLeaves, getFlour, getPackages, getShippingInfo, getWetLeaves, updateUser, deleteUser} from "../../../api/adminAPI";

function AdminSidebar({ onPageDataChange }) {
  const [dataManagementOpen, setDataManagementOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null); 
  const [isMinimized, setIsMinimized] = useState(false);
  const [centraRows, setCentraRows] = useState([]);
  const [checkpointRows, setCheckpointRows] = useState([]);
  const [dryRows, setDryRows] = useState([]);
  const [flourRows, setFlourRows] = useState([]);
  const [packageRows, setPackageRows] = useState([]);
  const [shippingRows, setShippingRows] = useState([]);
  const [wetRows, setWetRows] = useState([]);

  const toggleMenu = () => {
    setIsMinimized(!isMinimized);
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

    async function fetchCentraData() {
      try {
        const centraData = await getCentra();
        if (centraData && centraData.data) {
          setCentraRows(centraData.data);
        } else {
          console.error('Failed to fetch Centra data');
        }
      } catch (error) {
        console.error('Error fetching Centra data:', error);
      }
    }

    async function fetchCheckpointData() {
      try {
        const checkpointData = await getCheckpoints();
        if (checkpointData && checkpointData.data) {
          setCheckpointRows(checkpointData.data);
        } else {
          console.error('Failed to fetch Checkpoint data');
        }
      } catch (error) {
        console.error('Error fetching Checkpoint data:', error);
      }

    }

    async function fetchDryLeavesData() {
      try {
        const dryLeavesData = await getDryLeaves();
        if (dryLeavesData && dryLeavesData.data) {
          setDryRows(dryLeavesData.data);
        } else {
          console.error('Failed to fetch Dry Leaves data');
        }
      } catch (error) {
        console.error('Error fetching Dry Leaves data:', error);
      }
    }

    async function fetchFlourData() {
      try {
        const flourData = await getFlour();
        if (flourData && flourData.data) {
          setFlourRows(flourData.data);
        } else {
          console.error('Failed to fetch Flour data');
        }
      } catch (error) {
        console.error('Error fetching Flour data:', error);
      }
    }

    async function fetchPackageData() {
      try {
        const packageData = await getPackages();
        if (packageData && packageData.data) {
          setPackageRows(packageData.data);
        }else {
          console.error('Failed to fetch Flour data');
        }
      } catch (error) {
        console.error('Error fetching Package data:', error);
      }
    }

    async function fetchShippingData() {
      try {
        const shippingData = await getShippingInfo();
        if (shippingData && shippingData.data) {
          setShippingRows(shippingData.data);
        }else {
          console.error('Failed to fetch Shipping data');
        }
      } catch (error) {
        console.error('Error fetching Shipping data:', error);
      }
    }

    async function fetchWetData() {
      try {
        const wetData = await getWetLeaves();
        if (wetData && wetData.data) {
          setWetRows(wetData.data);
        }else {
          console.error('Failed to fetch Wet data');
        }
      } catch (error) {
        console.error('Error fetching Wet data:', error);
      }
    }

    useEffect(() => {
      fetchCentraData();
      fetchCheckpointData();
      fetchDryLeavesData();
      fetchFlourData();
      fetchWetData();
      fetchPackageData();
      fetchShippingData();
    }, []);

  const toggleDropdown = () => {
    setDataManagementOpen(!dataManagementOpen);
  };

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
                className="bg-primary py-4 px-8 flex justify-start items-center w-full hover:bg-white hover:text-green-800 rounded hover:rounded-full hover:rounded-r-none font-medium cursor-pointer text-white"
                onMouseEnter={() => setHoveredItem('dashboard')}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => onPageDataChange('Dashboard', 'Indicate Centra and Guard Harbour through data', 'Dashboard')}
              >
                <MdOutlineDashboardCustomize className='text-3xl mr-4'></MdOutlineDashboardCustomize>
                  Dashboard
              </li>

              <li
                className="bg-primary py-4 px-8 flex justify-start items-center w-full hover:bg-white hover:text-green-800 rounded hover:rounded-full hover:rounded-r-none font-medium cursor-pointer text-white"
                onMouseEnter={() => setHoveredItem('user')}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => onPageDataChange('Manage Users', 'Arrange Username and Data Collections of ID', 'AdminTable', initialRows, columns)}
              >
                <FaUser className='text-2xl mr-3 '></FaUser>
                <div className='flex flex-col text-start ml-3'>
                  <p>User</p>
                  <p onClick={() => onPageDataChange('Manage Users', 'Arrange Username and Data Collections of ID')}>Management</p>
                </div>
              </li>

              <li
                className="bg-primary py-4 px-8 flex justify-start items-center w-full hover:bg-white hover:text-green-800 rounded hover:rounded-full hover:rounded-r-none font-medium cursor-pointer text-white"
                onClick={toggleDropdown}
                onMouseEnter={() => setHoveredItem('database')}
                onMouseLeave={() => setHoveredItem(null)}                
              >
                <BsDatabaseFillGear className='text-3xl mr-4'></BsDatabaseFillGear>
                <div className='flex flex-col text-start'>
                  <p onClick={() => onPageDataChange('Data Master', 'Observe data through their categories', 'MasterDataFolder')}>Data</p>
                  <p>Management</p>
                </div>
              </li>

              {dataManagementOpen && (
                <>
                  <li className="bg-primary py-4 px-5 text-left indent-6 text-white hover:bg-white rounded-xl hover:text-primary font-medium cursor-pointer w-full">
                    <p onClick={() => onPageDataChange('Centra Data', 'Search and added data for Centra', "CentraData", initialCentraRows, columnsCentra)}>Centra Data</p>
                  </li>
                  <li className="bg-primary py-4 px-5 text-left indent-6 text-white hover:bg-white rounded-xl hover:text-primary font-medium cursor-pointer w-full">
                    <p onClick={() => onPageDataChange('Wet Leaves Data', 'Search and added data for Wet Leaves', 'WetLeavesData', initialWetRows, columnsWet)}>Wet Leaves Data</p>
                  </li>
                  <li className="bg-primary py-4 px-5 text-left indent-6 text-white hover:bg-white rounded-xl hover:text-primary font-medium cursor-pointer w-full">
                    <p onClick={() => onPageDataChange('Dry Leaves Data', 'Search and added data for Dry Leaves', 'DryLeavesData', initialDryRows, columnsDry)}>Dry Leaves Data</p>
                  </li>
                  <li className="bg-primary py-4 px-5 text-left indent-6 text-white hover:bg-white rounded-xl hover:text-primary font-medium cursor-pointer w-full">
                    <p onClick={() => onPageDataChange('Flour Data', 'Search and added data for Flour', 'FlourData', initialFlourRows, columnsFlour)}>Flour Data</p>
                  </li>
                  <li className="bg-primary py-4 px-5 text-left indent-6 text-white hover:bg-white rounded-xl hover:text-primary font-medium cursor-pointer w-full">
                    <p onClick={() => onPageDataChange('Shipping Info Data', 'List of Shipping Arrival and Departure Data', 'ShippingInfoData', initialShippingRows, columnsShipping)}>Shipping Info Data</p>
                  </li>
                  <li className="bg-primary py-4 px-5 text-left indent-6 text-white hover:bg-white rounded-xl hover:text-primary font-medium cursor-pointer w-full">
                    <p onClick={() => onPageDataChange('Checkpoint Data', 'List of Checkpoint Data and Total Package Arrival notice', 'CheckpointData', initialCheckpointRows, columnsCheckpoint )}>Checkpoint Data</p>
                  </li>
                  <li className="bg-primary py-4 px-5 text-left indent-6 text-white hover:bg-white rounded-xl hover:text-primary font-medium cursor-pointer w-full">
                    <p onClick={() => onPageDataChange('Package Data', 'Package details including tracking and delivery statuses', "PackageData", initialPackageRows, columnsPackage)}>Package Data</p>
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
