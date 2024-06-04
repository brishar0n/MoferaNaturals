import {useState, useEffect} from 'react'
import React from 'react'
import axios from 'axios'
import '../../style/App.css'
import { Form, useNavigate } from 'react-router-dom';
import Card from './Card';
import '../../style/auth/Login.css';
import {login} from "../../../api/authAPI"

function Login() {
  const [isMobile, setIsMobile] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
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

  const handleLogin = async (event) => {
    event.preventDefault();

    

    const formData = new FormData();
    formData.append('username', email);
    formData.append('password', password);

    login(formData)
  };

  const navigatetoSignup = () => {
    navigate('/register');
  };

  return (
    <div className='bg-quaternary h-screen'>
      {isMobile && (
        <>
          <div className='h-screen'>
            <img src="src/assets/common/topframe.svg" className='w-screen absolute '/>

            <img src="src/assets/common/mascot.svg" className='absolute top-11 right-7 mascot'/>

            <p className='text-white text-4xl font-bold absolute text-left top-32 left-12 text'> Welcome <br></br> Back!</p>

            <Card>
              
              <form onSubmit={handleLogin} className="relative z-20">
                <div className='py-3 flex flex-col w-3/4 mx-auto mt-16'>
                <p className='text-primary font-bold text-4xl text-left mb-2 -mt-10'> Login </p>
                  <label htmlFor='email' className='text-left text-primary mt-2'> Email <br></br></label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="border border-gray-300 rounded-md px-3 py-1.5 bg-quinary border-none mt-1"
                    />

                  <label htmlFor='password' className='text-left text-primary mt-2'> Password <br></br></label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className={`border border-gray-300 rounded-md px-3 py-1.5 bg-quinary border-none ${loginError && 'border-red-500'} mt-1`}
                    />
                    {loginError && <p className="text-red-500 mt-1">{loginError}</p>}
    
                  <div className='mt-2 flex'>
                    <input type="checkbox" className='grow-0'></input>
                    <label className='text-xs text-primary ml-2 font-medium grow text-left'>Remember me?</label> 
                    <p className='text-xs text-senary font-medium grow-0'>Forgot Password?</p>
                  </div>

                  <div className='mt-8 relative z-20'>
                    <button className='rounded-full bg-secondary text-white font-bold px-4 py-2 w-36 btn-login'> Login </button>
                  </div>
                </div>
              </form>

              <div className='flex justify-center items-center mt-7 relative z-20'>
                <img src="src/assets/common/component.svg" className='w-3/4'></img>
              </div>

              <div className='flex items-center mt-5 justify-center gap-6 z-20 relative'>
                <img src="src/assets/common/fb.svg" className=''/>
                <img src="src/assets/common/apple.svg" className=''/>
                <img src="src/assets/common/google.svg" className=''/>
              </div>

              <div className='text-xs flex items-center justify-center gap-1 mt-5 z-20 relative mb-5'>
                <p> Don't have an account? </p>
                <p className='text-primary font-bold underline' onClick={navigatetoSignup}> Sign Up</p>
              </div>

              {/* <div className='absolute bottom-0'> */}
                <img src='src/assets/login/bottomframe.svg' className='w-screen absolute bottom-0'/>
              {/* </div> */}
            </Card>
          </div>
        </>
      )}
    </div>
  )
}

export default Login