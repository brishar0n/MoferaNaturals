import React, { useState } from 'react';
import { RxDashboard } from "react-icons/rx";
import { FaShippingFast } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { PiPackageFill } from "react-icons/pi";
import { IoNotifications } from "react-icons/io5";
import { MdOutlineMonitor } from "react-icons/md";

const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState([]);

  const toggleMenu = (index) => {
    setOpenMenus((prevOpenMenus) =>
      prevOpenMenus.includes(index)
        ? prevOpenMenus.filter((i) => i !== index)
        : [...prevOpenMenus, index]
    );
  };

  return (
    <div className="w-64 bg-primary text-white h-screen fixed">
      <div className="p-2">
        <img className='p-8 mb-2' src={"src/assets/dashboard/logo.png"}></img>
        <ul>
          <li className="border-b border-green-700">    
            <button onClick={() => toggleMenu(0)} className="w-full text-left p-4 hover:bg-primary flex justify-between items-center hover:bg-white hover:text-primary hover:rounded-full">
            <div class="flex justify-between">
            <RxDashboard className='text-2xl'></RxDashboard>
              <span className='ml-2'>Dashboard </span>
            </div>
            <span>{openMenus.includes(0) ? '-' : '+'}</span>
            </button>
            {openMenus.includes(0) && (
              <ul className="pl-8 bg-primary">
                <li>
                  <a href="/dashboard-wet" className="block p-2 text-left hover:bg-white hover:text-green-900  hover:rounded-full">Wet Leaves</a>
                </li>
                <li>
                  <a href="/dashboard-dry" className="block p-2 text-left hover:bg-white hover:text-green-900  hover:rounded-full">Dry Leaves</a>
                </li>
                <li>
                  <a href="/dashboard-powder" className="block p-2 text-left hover:bg-white hover:text-green-900  hover:rounded-full">Powder</a>
                </li>
              </ul>
            )}
          </li>
          <li className="border-b border-green-700">
            <button onClick={() => toggleMenu(1)} className="w-full text-left p-4 hover:bg-primary flex justify-between items-center hover:bg-white hover:text-primary hover:rounded-full">
            <div class="flex justify-between">
              <FaShippingFast className='text-2xl' />
              <span className='ml-2'>Shipment Tracker </span>
            </div>
            <span>{openMenus.includes(1) ? '-' : '+'}</span>
            </button>
            {openMenus.includes(1) && (
              <ul className="pl-8 bg-primary">
                <li>
                  <a href="#" className="block p-2 text-left hover:bg-white hover:text-green-900  hover:rounded-full">Sub Menu 1</a>
                </li>
                <li>
                  <a href="#" className="block p-2 text-left hover:bg-white hover:text-green-900  hover:rounded-full">Sub Menu 2</a>
                </li>
              </ul>
            )}
          </li>
          <li className="border-b border-green-700">
          <button onClick={() => toggleMenu(2)} className="w-full text-left p-4 hover:bg-primary flex justify-between items-center hover:bg-white hover:text-primary hover:rounded-full">
            <div class="flex justify-between">
              <FaLocationDot className='text-2xl' />
              <span className='ml-2'>Checkpoint </span>
            </div>
            <span>{openMenus.includes(2) ? '-' : '+'}</span>
            </button>
            {openMenus.includes(2) && (
              <ul className="pl-8 bg-primary">
                <li>
                  <a href="#" className="block p-2 text-left hover:bg-white hover:text-green-900  hover:rounded-full">Sub Menu 1</a>
                </li>
                <li>
                  <a href="#" className="block p-2 text-left hover:bg-white hover:text-green-900  hover:rounded-full">Sub Menu 2</a>
                </li>
              </ul>
            )}
          </li>
          <li className="border-b border-green-700">
          <button onClick={() => toggleMenu(3)} className="w-full text-left p-4 hover:bg-primary flex justify-between items-center hover:bg-white hover:text-primary hover:rounded-full">
            <div class="flex justify-between">
              <PiPackageFill className='text-2xl' />
              <span className='ml-2'>Arrived Package </span>
            </div>
            <span>{openMenus.includes(3) ? '-' : '+'}</span>
            </button>
            {openMenus.includes(3) && (
              <ul className="pl-8 bg-primary">
                <li>
                  <a href="#" className="block p-2 text-left hover:bg-white hover:text-green-900  hover:rounded-full">Sub Menu 1</a>
                </li>
                <li>
                  <a href="#" className="block p-2 text-left hover:bg-white hover:text-green-900  hover:rounded-full">Sub Menu 2</a>
                </li>
              </ul>
            )}
          </li>
          <li className="border-b border-green-700">
          <button onClick={() => toggleMenu(4)} className="w-full text-left p-4 hover:bg-primary flex justify-between items-center hover:bg-white hover:text-primary hover:rounded-full">
            <div class="flex justify-between">
              <IoNotifications className='text-2xl' />
              <span className='ml-2'>Notifications </span>
            </div>
            <span>{openMenus.includes(4) ? '-' : '+'}</span>
            </button>
            {openMenus.includes(4) && (
              <ul className="pl-8 bg-primary">
                <li>
                  <a href="#" className="block p-2 text-left hover:bg-white hover:text-green-900  hover:rounded-full">Sub Menu 1</a>
                </li>
                <li>
                  <a href="#" className="block p-2 text-left hover:bg-white hover:text-green-900  hover:rounded-full">Sub Menu 2</a>
                </li>
              </ul>
            )}
          </li>
          <li className="border-b border-green-700">
          <button onClick={() => toggleMenu(5)} className="w-full text-left p-4 hover:bg-primary flex justify-between items-top hover:bg-white hover:text-primary hover:rounded-full">
            <div class="flex justify-between">
              <MdOutlineMonitor className='text-2xl' />
              <span className='ml-2'>Centra Activity Monitor </span>
            </div>
            <span>{openMenus.includes(5) ? '-' : '+'}</span>
            </button>
            {openMenus.includes(5) && (
              <ul className="pl-8 bg-primary">
                <li>
                  <a href="#" className="block p-2 text-left hover:bg-white hover:text-green-900  hover:rounded-full">Sub Menu 1</a>
                </li>
                <li>
                  <a href="#" className="block p-2 text-left hover:bg-white hover:text-green-900  hover:rounded-full">Sub Menu 2</a>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
