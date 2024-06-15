import { useState, useEffect } from 'react';
import React from 'react';
import Card from './Card';
import '../../style/auth/ResetPass.css';
import axios from 'axios';
import { useLocation, useHistory } from 'react-router-dom';

function ResetPassword() {
  const [isMobile, setIsMobile] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const location = useLocation();
  const history = useHistory();

  const handleResize = () => {
    setIsMobile(window.innerWidth < 600);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = new URLSearchParams(location.search).get('token');

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('https://mofera-backend-fork-o1xucajgl-mofera-2.vercel.app/auth/reset-password', {
        token,
        new_password: password
      });
      alert('Password reset successful');
      history.push('/login'); // Redirect to login page after successful reset
    } catch (error) {
      alert('Error resetting password');
    }
  };

  return (
    <div className='bg-quaternary h-screen'>
      {isMobile && (
        <>
          <div className='h-screen'>
            <img src="src/assets/common/topframe.svg" className='w-screen absolute '/>
            <img src="src/assets/common/mascot.svg" className='absolute top-11 right-7 mascot'/>
            <img src="src/assets/verification/backbutton.svg" className="absolute mt-14 ml-8 btn"/>
            <p className='text-white text-4xl font-bold absolute text-left top-32 left-14 text'> Reset <br/> Password</p>
            <Card>
              <form onSubmit={handleSubmit} className='py-3 flex flex-col w-3/4 mx-auto mt-16 relative z-20'>
                <p className='text-primary font-bold text-4xl text-left mb-2 -mt-10'> Password <br/>Reset</p>
                <label htmlFor='password' className='text-primary text-left mt-2'> New Password <br/></label>
                <input 
                  type='password'
                  name='password' 
                  id='password' 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='border border-gray-300 rounded-md px-3 py-1.5 bg-quinary border-none mt-1'
                />
                <label htmlFor='confirmpassword' className='text-primary text-left mt-2'> Confirm New Password <br/></label>
                <input 
                  type='password'
                  name='confirmpassword' 
                  id='confirmpassword' 
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className='border border-gray-300 rounded-md px-3 py-1.5 bg-quinary border-none mt-1'
                />
                <div className='mt-8 relative z-20'>
                  <button type='submit' className='rounded-full bg-secondary text-white font-bold px-4 py-2 w-36 btn-login'> Reset </button>
                </div>
              </form>
              <img src='src/assets/verification/bottomframe.svg' className='w-screen fixed bottom-0'/>
            </Card>
          </div>
        </>
      )}
    </div>
  );
}

export default ResetPassword;
