import { useState, useEffect } from 'react'
import './App.css'

function App() {
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
    <div className="bg-gray-100">
      <p className='text-3xl bold'>Hello</p>
      {isMobile && (
        <div>
          <p>This is a mobile view</p>
        </div>
      )}
    </div>
  )
}

export default App
