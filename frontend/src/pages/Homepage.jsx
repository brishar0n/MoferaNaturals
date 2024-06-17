import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../style/App.css';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg';
import homeBg from '../assets/home/homebg.svg';

function Homepage() {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);

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
      setIsAnimating(true);
      setTimeout(() => {
        if (isMobile) {
          navigate('/welcomeback');
        } else {
          navigate('/getstarteddesktop');
        }
      }, 1000); // Delay to allow the animation to play
    }, 3000);

    return () => clearTimeout(timeout);
  }, [isMobile, navigate]);

  const logoVariants = {
    initial: { scale: 1, rotate: 0 },
    animate: { 
      scale: 5, 
      rotate: 360, 
      transition: { duration: 1 } 
    }
  };

  return (
    <div className="bg-white h-screen flex justify-center items-center">
      {isMobile ? (
        <>
          <div className='object-cover w-full h-screen absolute inset-0 flex'>
            <img src={homeBg} alt="homeBg"/>
          </div>
          <div className="relative">
            <motion.img
              src={logo}
              alt="logo"
              initial="initial"
              animate={isAnimating ? 'animate' : 'initial'}
              variants={logoVariants}
              className="relative"
            />
          </div>
        </>
      ) : (
        <div className="flex justify-center bg-primary w-full h-full items-center">
          <motion.img
            src={logo}
            alt="logo"
            initial="initial"
            animate={isAnimating ? 'animate' : 'initial'}
            variants={logoVariants}
            className="w-64 h-64"
          />
        </div>
      )}
    </div>
  );
}

export default Homepage;
