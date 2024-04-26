import { useState, useEffect } from 'react'
import '../style/WelcomeBack.css'
import logo from '../assets/logo.svg'
import welcomeBg1 from '../assets/welcomeback/welcomebg1.svg'
import welcomeBg2 from '../assets/welcomeback/welcomebg2.svg'
import welcomeBg3 from '../assets/welcomeback/welcomebg3.svg'

function WelcomeBack() {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    // Initial check on component mount
    handleResize();

    // Simulating loading delay with setTimeout
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    // Cleanup timeout
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="bg-white h-screen flex items-center flex-col">
      {isMobile && !isLoading && (
        <>
            <div className='absolute flex top-0 right-10 left-0'>
                <img src={welcomeBg1} alt="welcomeBg1"/>
            </div>
            <div className='absolute right-0 flex element-bg2'>
                <img src={welcomeBg2} alt="welcomeBg2"/>
            </div>
            <div className='absolute flex bottom-0 left-0 right-10'>
                <img src={welcomeBg3} alt="welcomeBg3"/>
            </div>
            <div className='absolute flex justify-center flex-col items-center welcome fade-in'>
                <img src={logo} alt="logo" className='w-32 flex mb-5'/>
                <p className='text-5xl primary font-bold mb-1'>Welcome!</p>
                <p className='primary font-medium'>We're happy to see you here</p>
            </div>
            <div className='relative mt-5 top-3/4 flex flex-col justify-center fade-in'>
                <button className='secondary w-64 font-bold bg-white p-3 rounded-3xl border border-secondary btn-welcome mb-2'>Create Account</button>
                <button className='secondary w-64 font-bold bg-white p-3 rounded-3xl border border-secondary btn-welcome'>Log in</button>
            </div>
        </>
      )}
    </div>
  )
}

export default WelcomeBack
  