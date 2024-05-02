import React from "react";
import {useState, useEffect} from 'react'
import '../../style/App.css';
import NavigationBar from "../Navbar";


function Notify() {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 600);
      };
  
      // Initial check on component mount
      handleResize();
  
      // Add event listener to update isMobile when window is resized
      window.addEventListener('resize', handleResize);
  
      // Clean up event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
  
    return (
      <div className='bg-primary h-screen'>
        {isMobile && (
          <>
            <img src="src/assets/notifications/green-shape.svg" className="absolute bottom-0 z-0 w-screen"></img>
            
            <img src="src/assets/notifications/warning-sprite.svg" className='w-45 z-20 absolute bottom-20 right-1'/>
                    
            <div>
                <br></br>
                <br></br>
                <div className="flex justify-start items-center gap-10 z-30">
                    <img src="src/assets/notifications/bb-notif.svg" className="justify-end ml-10 "></img>
                    <p className="text-3xl font-semibold text-white">Notifications</p>
                </div>
                
                <div className="flex justify-center ml-4 z-30">
                    <p className="text-xs font-medium text-white">Notified updates and expected timing</p>
                </div>
            </div>

            <br></br>

            <div className="h-4/6">
                <div className="w-4/5 bg-white rounded-2xl mx-auto gap-10 z-10 relative p-6 h-full">
                    <div className="flex justify-evenly w-full">
                        <p className="text-septenary font-semibold underline2"> All </p>
                        <p className="text-septenary font-semibold"> Recent </p>
                    </div>
                    
                    <div className="h-full pt-2 pb-6">
                        <div className="overflow-auto max-h-full pt">
                            <div className="flex justify-start gap-3 pl-5 pt-3">
                                <img src="src/assets/notifications/sample_profile.svg"></img>
                                <div className="flex flex-col gap-1 text-start">
                                    <p className="text-sm font-medium"> Shipment Notification 1</p>
                                    <p className="text-septenary text-xs font-semibold "> 10 mins ago</p>
                                </div>
                            </div>

                            <div className="flex justify-start gap-3 pl-5 pt-4">
                                <img src="src/assets/notifications/sample_profile.svg"></img>
                                <div className="flex flex-col gap-1 text-start">
                                    <p className="text-sm font-medium"> Flouring - WET #123</p>
                                    <p className="text-septenary text-xs font-semibold "> 1 day ago</p>
                                </div>
                            </div>

                            <div className="flex justify-start gap-3 pl-5 pt-4">
                                <img src="src/assets/notifications/sample_profile.svg"></img>
                                <div className="flex flex-col gap-1 text-start">
                                    <p className="text-sm font-medium"> Done drying - WET #123</p>
                                    <p className="text-septenary text-xs font-semibold "> 1 day ago</p>
                                </div>
                            </div>

                            <div className="flex justify-start gap-3 pl-5 pt-4">
                                <img src="src/assets/notifications/sample_profile.svg"></img>
                                <div className="flex flex-col gap-1 text-start">
                                    <p className="text-sm font-medium"> Done washing - WET #123</p>
                                    <p className="text-septenary text-xs font-semibold "> 30/01/2023</p>
                                </div>
                            </div>

                            <div className="flex justify-start gap-3 pl-5 pt-4">
                                <img src="src/assets/notifications/sample_profile.svg"></img>
                                <div className="flex flex-col gap-1 text-start">
                                    <p className="text-sm font-medium"> Done washing - WET #123 </p>
                                    <p className="text-septenary text-xs font-semibold "> 30/01/2023</p>
                                </div>
                            </div>

                            <div className="flex justify-start gap-3 pl-5 pt-4">
                                <img src="src/assets/notifications/sample_profile.svg"></img>
                                <div className="flex flex-col gap-1 text-start">
                                    <p className="text-sm font-medium"> Washing - WET #123 </p>
                                    <p className="text-septenary text-xs font-semibold "> 30/01/2023</p>
                                </div>
                            </div>

                            <div className="flex justify-start gap-3 pl-5 pt-4">
                                <img src="src/assets/notifications/sample_profile.svg"></img>
                                <div className="flex flex-col gap-1 text-start">
                                    <p className="text-sm font-medium"> Added new WL - WET #123</p>
                                    <p className="text-septenary text-xs font-semibold "> 30/01/2023</p>
                                </div>
                            </div>

                            <div className="flex justify-start gap-3 pl-5 pt-4">
                                <img src="src/assets/notifications/sample_profile.svg"></img>
                                <div className="flex flex-col gap-1 text-start">
                                    <p className="text-sm font-medium"> Collected new WL - Batch #2 </p>
                                    <p className="text-septenary text-xs font-semibold "> 30/01/2023</p>
                                </div>
                            </div>

                            <div className="flex justify-start gap-3 pl-5 pt-4">
                                <img src="src/assets/notifications/sample_profile.svg"></img>
                                <div className="flex flex-col gap-1 text-start">
                                    <p className="text-sm font-medium"> Collected new WL - Batch #1</p>
                                    <p className="text-septenary text-xs font-semibold "> 30/01/2023</p>
                                </div>
                            </div>

                            <div className="flex justify-start gap-3 pl-5 pt-4">
                                <img src="src/assets/notifications/sample_profile.svg"></img>
                                <div className="flex flex-col gap-1 text-start">
                                    <p className="text-sm font-medium"> Collected new WL - Batch #1</p>
                                    <p className="text-septenary text-xs font-semibold "> 30/01/2023</p>
                                </div>
                            </div>

                            <div className="flex justify-start gap-3 pl-5 pt-4">
                                <img src="src/assets/notifications/sample_profile.svg"></img>
                                <div className="flex flex-col gap-1 text-start">
                                    <p className="text-sm font-medium"> Collected new WL - Batch #1</p>
                                    <p className="text-septenary text-xs font-semibold "> 30/01/2023</p>
                                </div>
                            </div>

                            <div className="flex justify-start gap-3 pl-5 pt-4">
                                <img src="src/assets/notifications/sample_profile.svg"></img>
                                <div className="flex flex-col gap-1 text-start">
                                    <p className="text-sm font-medium"> Collected new WL - Batch #1</p>
                                    <p className="text-septenary text-xs font-semibold "> 30/01/2023</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <NavigationBar></NavigationBar>
            
          </>
        )}
      </div>
    )
  }
  
  export default Notify;