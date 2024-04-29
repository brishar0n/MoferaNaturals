import {useState, useEffect} from 'react'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../../style/App.css'
import Card from './Card';


function Verification() {
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
    <div className='bg-quaternary h-screen'>
      {isMobile && (
        <>
          <div className='h-screen'>
            <img src="src/assets/common/topframe.svg" className='w-screen absolute '/>

            <img src="src/assets/common/mascot.svg" className='absolute top-11 right-7 '/>

            <img src="src/assets/verification/backbutton.svg" className="absolute mt-14 ml-8"/>

            <p className='text-white text-4xl font-bold absolute text-left top-32 right-48'> Forgot <br></br> Password?</p>

            <Card>
                <p className='text-primary font-bold text-4xl text-left mt-16 ml-16'> Verify Your <br></br>Email Below:</p>
                
                <div className='text-left ml-16 mt-16'>
                    <label htmlFor='email' className='text-primary font-medium'> Email <br></br></label>
                    <input 
                        name='email' 
                        id='email' 
                        className='border border-gray-300 rounded-md w-5/6 px-3 py-1.5 bg-quinary'
                    />
                </div>

                <div className='mt-16'>
                    <button className='rounded-full bg-secondary text-white font-bold px-4 py-2 w-36 btn-login'> Continue </button>
                </div>

                <div className='absolute bottom-0'>
                    <img src='src/assets/verification/bottomframe.svg' className='w-screen'/>
                </div>
            </Card>
          </div>
        </>
      )}
    </div>
  )
}

export default Verification;
