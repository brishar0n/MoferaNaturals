import { useState, useEffect } from 'react';
import '../style/App.css';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg';
import homeBg from '../assets/home/homebg.svg';

function Homepage() {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

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

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isMobile) {
        navigate('/welcomeback');
      } else {
        navigate('/getstarteddesktop');
      }
    }, 2000);

    return () => clearTimeout(timeout);
  }, [isMobile, navigate]);

  return (
    <div className="bg-white h-screen flex justify-center items-center">
      {isMobile ? (
        <>
          <div className='object-cover w-full h-screen absolute inset-0 flex'>
            <img src={homeBg} alt="homeBg"/>
          </div>
          <div className="relative">
            <img src={logo} alt="logo"/>
          </div>
        </>
      ) : (
        <div className="flex justify-center bg-primary w-full h-full items-center">
          <img src={logo} alt="logo" className="w-64 h-64 justify-center item-center"/>
        </div>
      )}
    </div>
  );
}

export default Homepage;
