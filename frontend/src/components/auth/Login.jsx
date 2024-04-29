import {useState, useEffect} from 'react'
import React from 'react'
import '../../style/App.css'
import { useNavigate } from 'react-router-dom';
import Card from './Card';


function Login() {
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

            <p className='text-white text-4xl font-bold absolute text-left top-32 right-48'> Welcome <br></br> Back!</p>

            <Card>
              <p className='text-primary font-bold text-4xl text-left mt-16 ml-16'> Login </p>

              <div className='text-left ml-16 mt-5'>
                <label htmlFor='email' className='text-primary font-medium'> Email <br></br></label>
                <input 
                  name='email' 
                  id='email' 
                  className='border border-gray-300 rounded-md w-5/6 px-3 py-1.5 bg-quinary'
                />
              </div>

              <div className='text-left ml-16 mt-5'>
                <label htmlFor='password' className='text-primary font-medium'> Password <br></br></label>
                <input 
                  name='password' 
                  id='password' 
                  className='border border-gray-300 rounded-md w-5/6 px-3 py-1.5 bg-quinary'
                />
              </div>

              <div className='flex items-center ml-16 mt-1.5'>
                <input type="checkbox" className=''></input>
                <label className='text-xs text-primary font-medium ml-1 mr-20'>Remember me?</label> 
                <p className='text-xs text-senary font-medium'>Forgot Password?</p>
              </div>

              <div className='mt-8'>
                <button className='rounded-full bg-secondary text-white font-bold px-4 py-2 w-36 btn-login'> Login </button>
              </div>

              <div className='flex justify-center items-center mt-7'>
                <img src="src/assets/common/component.svg" className='w-3/4'></img>
              </div>

              <div className='flex items-center mt-5 justify-center gap-6'>
                <img src="src/assets/common/fb.svg" className=''/>
                <img src="src/assets/common/apple.svg" className=''/>
                <img src="src/assets/common/google.svg" className=''/>
              </div>

              <div className='text-xs flex items-center justify-center gap-1 mt-5'>
                <p> Don't have an account? </p>
                <p className='text-primary font-bold underline'> Sign Up</p>
              </div>

              <div className='absolute bottom-0'>
                <img src='src/assets/login/bottomframe.svg' className='w-screen'/>
              </div>
            </Card>
          </div>
        </>
      )}
    </div>
  )
}

export default Login