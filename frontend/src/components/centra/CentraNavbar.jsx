import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Tooltip from "./Tooltip";

function NavigationBar(props) {
  const [overlay, setOverlay] = useState(false);

  const handleOverlay = (status) => {
    setOverlay(status);
  };

  return (
    <>
      <div className={`bg-secondary w-screen h-24 bottom-0 rounded-t-3xl fixed flex justify-evenly z-50`}>
        <div className='flex gap-11 items-center'>
          <Link to="/centradashboard">
            <button>
              <img src="src/assets/notifications/home.svg" className='w-7' alt='Home'></img>
            </button>
          </Link>

          <Link to="/trackshipping">
            <button>
              <img src="src/assets/notifications/expedition.svg" className='w-7' alt='Shipping Info'></img>
            </button>
          </Link>
        </div>

        <div className='flex justify-center items-center'>
          <Tooltip
            content="Add Wet Leaves &#010; Add Dry Leaves  &#010; Add Powder  &#010; Add Shipping Info  &#010;Add Package"
            direction="top"
            onToggle={handleOverlay}
          >
            <img src="src/assets/notifications/plus.svg" className='w-20 cursor-pointer' alt='Plus'></img>
          </Tooltip>
        </div>

        <div className='flex gap-11 items-center'>
          <Link to="/notify">
            <button>
              <img src="src/assets/notifications/bell.svg" className='w-7' alt='Notifications'></img>
            </button>
          </Link>

          <Link to="/centradashboard">
            <button>
              <img src="src/assets/notifications/profile.svg" className='w-6' alt='Profile'></img>
            </button>
          </Link>
        </div>
      </div>

      {overlay && (
        <div className="fixed top-0 left-0 w-full h-full bg-white opacity-50 z-40 pointer-events-none"/>
      )}

      {props.children}
    </>
  );
}

export default NavigationBar;
