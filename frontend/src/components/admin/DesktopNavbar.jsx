import React, { useState } from 'react';
import "../../style/AdminDesktop.css";

import hamburgerBar from "s../../../src/assets/admin/hamburgerbar.svg"
import mofera from "../../../src/assets/admin/mofera.svg"
const DesktopNavbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`h-screen bg-primary transition-all duration-400 ${isOpen ? 'w-1/6' : 'w-20'}`}>
      <div className="flex items-center justify-between py-6 px-4">
        <div onClick={toggleSidebar} className="flex items-center cursor-pointer">
          <img
            src=""
            alt="menu"
            className="w-12 mb-3 cursor-pointer"
          />
        </div>
        {isOpen && (
          <img
            src={mofera}
            alt="mofera"
            className="mr-16 w-40"
          />
        )}
      </div>

      <div className="flex flex-col items-start justify-center space-y-6 px-4">
        <div className={`flex items-center space-x-3.5 space-y--0.5${isOpen ? "" : "ml-1"}`}>
          <img src="src/assets/admin/dashboardicon.svg" alt="dashboard" className="w-11"/>
          {isOpen && <p className="font-bold text-white text-2xl cursor-pointer">Dashboard</p>}
        </div>

        <div className={`flex items-center space-x-3 ${isOpen ? "ml-1" : "mr-2"}`}>
          <img src="src/assets/admin/userprofile.svg" alt="user" className={`w-10 ${isOpen ? "w-11" : ""}`} />
          {isOpen && (
            <div className="flex flex-col items-start">
              <p className="font-bold text-white text-2xl cursor-pointer">User</p>
              <p className="font-bold text-white text-2xl cursor-pointer">Management</p>
            </div>
          )}
        </div>

        <div className={`flex items-center space-x-3  ${isOpen ? "" : "mr-3 ml-1"}`}>
          <img src="src/assets/admin/dbase.svg" alt="database" className="w-12" />
          {isOpen && (
            <div className="flex flex-col items-start">
              <p className="font-bold text-white text-2xl cursor-pointer">Data</p>
              <p className="font-bold text-white text-2xl cursor-pointer">Management</p>
            </div>
          )}
        </div>
      </div>

      {isOpen ? (
        <div className="flex flex-col text-lg font-medium text-white text-start pl-7 space-y-5 mt-10">
          <p>Centra Data</p>
          <p>Wet Leaves Data</p>
          <p>Flour Data</p>
          <div className="flex flex-col">
            <p>Shipping Information</p>
            <p>Data</p>
          </div>
          <p>Checkpoint Data</p>
        </div>
      ) : (
        <div className="flex flex-col text-sm font-medium text-white text-center space-y-5 mt-10">
          <p>CD</p>
          <p>WLD</p>
          <p>FD</p>
          <p>SID</p>
          <p>CPD</p>
        </div>  
      )}

      <div className={`flex justify-center ${isOpen ? 'mt-72' : 'mt-96 pt-8'}`}>
        <img
          src="src/assets/desktop/underline.svg"
          alt="underline"
          className={`transition-all duration-300 ${isOpen ? 'w-5/6' : 'w-4/5'}`}
        />
      </div>

      <div className={`flex items-center ${isOpen ? 'pt-3' : 'pt-2'} pl-6`}>
        <img
          src="src/assets/desktop/exit.svg"
          alt="exit"
          className="w-10"
        />
      </div>
    </div>
  );
};

export default DesktopNavbar;
