import { useState, useEffect } from 'react'
import moferalogowhite from '../../assets/xyz/mofera-logo-white.svg'
import menu from '../../assets/xyz/Menu.svg'

function Sidebar() {
    return (
        <div className="bg-octonary hidden lg:block h-screen w-1/5 flex flex-col justify-between items-center">
            <div className='flex flex-col justify-center items-center gap-8'>
                <button>
                    <img className='h-14 absolute top-4 left-10' src={menu}></img>
                </button>

                <br></br>
        
                <img className='h-auto w-1/2 max-w-full mt-16' src={moferalogowhite}></img>

                <div className='flex flex-col justify-center items-center gap-5 w-full mt-5'>
                    <nav>
                        <ul>
                            <li className="py-4 flex justify-start items-center w-full hover:bg-green-700 hover:text-white cursor-pointer text-black">Dashboard</li>
                            <li className="py-4 flex justify-start items-center w-full hover:bg-green-700 hover:text-white cursor-pointer text-black">Shipment Tracker</li>
                            <li className="py-4 flex justify-start items-center w-full hover:bg-green-700 hover:text-white cursor-pointer text-black">Checkpoint</li>
                            <li className="py-4 flex justify-start items-center w-full hover:bg-green-700 hover:text-white cursor-pointer text-black">Arrived Package</li>
                            <li className="py-4 flex justify-start items-center w-full hover:bg-green-700 hover:text-white cursor-pointer text-black">Notifications</li>
                            <li className="py-4 flex justify-start items-center w-full hover:bg-green-700 hover:text-white cursor-pointer text-black">Centra Activity Monitor</li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div className='flex-grow'></div>

            <button className="py-4 w-full hover:bg-red-600 hover:text-white">Sign Out</button>
        </div>
    )
}

export default Sidebar;