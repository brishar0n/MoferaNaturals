import {useState, useEffect} from 'react'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../../style/App.css'
import Card from './Card';
import '../../style/auth/Register.css';

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

            <img src="src/assets/common/mascot.svg" className='absolute top-11 right-7 mascot'/>

            <img src="src/assets/verification/backbutton.svg" className="absolute mt-14 ml-8 btn"/>

            <p className='text-white text-4xl font-bold absolute text-left top-32 left-14 text'> Forgot <br></br> Password</p>

            <Card>
              <div className='py-3 flex flex-col w-3/4 mx-auto mt-16 relative z-20'>
                <p className='text-primary font-bold text-4xl text-left mb-2 -mt-10'> Verify Your <br></br>Email Below:</p>

                <label htmlFor='email' className='text-primary text-left mt-8'> Email <br></br></label>
                <input 
                    name='email' 
                    id='email' 
                    className='border border-gray-300 rounded-md px-3 py-1.5 bg-quinary border-none mt-1'
                />
              </div>
              

                <div className='mt-16  relative z-20'>
                    <button className='rounded-full bg-secondary text-white font-bold px-4 py-2 w-36 btn-login'> Continue </button>
                </div>

                <img src='src/assets/verification/bottomframe.svg' className='w-screen fixed bottom-0'/>
            </Card>
          </div>
        </>
      )}
    </div>
  )
}

export default Verification;
