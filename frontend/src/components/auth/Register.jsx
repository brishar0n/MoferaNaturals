import React, { useState, useEffect } from "react";
import axios from 'axios';
import "../../style/App.css";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import '../../style/auth/Register.css';
import { register } from "../../../api/authAPI"

function Register() {
  const [isMobile, setIsMobile] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registrationError, setRegistrationError] = useState('');
  const [role, setRole] = useState(''); // State for role selection
  const navigate = useNavigate();
  // const [formData, setFormData] = useState({
  //   fullName: "",
  //   email: "",
  //   password: "",
  //   confirmPassword: "",
  // });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    }; 

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formData);
  //   navigate("/welcomeback");
  // };

  const handleSignup = async (event) => {
    event.preventDefault();
    console.log("button clicked")
    if(password !== confirmPassword){
      setRegistrationError("Please match the confirmation password");
    }
    register({username, email, password, role})
  };


  const navigatetoLogin = () => {
    console.log('Navigating to login page...');
    navigate('/login');
  };
  
  return (
    <div className="bg-quaternary h-screen">
      {isMobile && (
        <div className="h-screen">
          <img src="src/assets/common/topframe.svg" className='w-screen absolute'/>

          <img src="src/assets/common/mascot.svg" className='absolute top-11 right-7 mascot'/>

          <img src="src/assets/verification/backbutton.svg" className="absolute mt-14 ml-8 btn" onClick={() => {navigate("/login");}}/>

          <p className='text-white text-4xl font-bold absolute text-left top-32 left-14 text'> Create <br></br> Account</p>

          <Card>

            <div className='text-left ml-16 mt-11 name'>
              <label htmlFor='fullname' className='text-primary'> Full Name <br></br></label>
              <input 
                className='border border-gray-300 rounded-md w-5/6 px-3 py-1.5 bg-quinary border-none mt-1' 
                name='fullname' 
                id='fullname' 
                value={username} 
                onChange={(e) => setUsername(e.target.value)}
                required
              ></input>
            </div>

            <div className='text-left ml-16 mt-2'>
              <label htmlFor='email' className='text-primary'> Email <br></br></label>
              <input 
                className='border border-gray-300 rounded-md w-5/6 px-3 py-1.5 bg-quinary border-none mt-1' 
                name='fullname' 
                id='fullname' 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required
              ></input>
            </div>

            <div className='text-left ml-16 mt-2'>
              <label htmlFor='password' className='text-primary'> Password <br></br></label>
              <input 
                className='border border-gray-300 rounded-md w-5/6 px-3 py-1.5 bg-quinary border-none mt-1' 
                name='fullname' 
                id='fullname' 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required
              ></input>
            </div>

            <div className='text-left ml-16 mt-2 relative z-20'>
              <label htmlFor='confirmpass' className='text-primary'> Confirm Password <br></br></label>
              <input 
                className='border border-gray-300 rounded-md w-5/6 px-3 py-1.5 bg-quinary border-none mt-1' 
                name='fullname' 
                id='fullname' 
                value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)} 
                required
              ></input>
            </div>
            <div className="text-left ml-16 mt-2 relative z-20">
              <label htmlFor="role" className="text-primary"> Role <br /></label>
              <select
                className="border border-gray-300 rounded-md w-5/6 px-3 py-1.5 bg-quinary border-none mt-1"
                name="role"
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              >
                <option value="" disabled>Select a role</option>
                <option value="centra">Centra</option>
                <option value="guard_harbor">Guard Harbor</option>
                <option value="xyz">XYZ</option>
              </select>
            </div>

            <div className="relative z-20">
              <div className='mt-8'>
                  <button className='rounded-full bg-secondary text-white font-bold px-4 py-2 w-36 btn-login' onClick={handleSignup}>
                    Sign Up
                  </button>
              </div>
              <div className='flex justify-center items-center mt-7'>
                <img src="src/assets/common/component.svg" className='w-3/4'></img>
              </div>
              <div className='flex items-center mt-5 justify-center gap-6'>
                <img src="src/assets/common/fb.svg" className=''/>
                <img src="src/assets/common/apple.svg" className=''/>
                <img src="src/assets/common/google.svg" className=''/>
              </div>
              {/* Navigate to login section */}
              <div className="text-xs flex items-center justify-center gap-1 mt-5">
                <p> Already have an account? </p>
                <p className="text-primary font-bold underline" onClick={navigatetoLogin}>
                  Login here
                </p>
              </div>
            </div>

            
            <img src='src/assets/register/bottomframe.svg' className='w-screen absolute bottom-0'/>
            
          </Card>
        </div>
      )}
    </div>
    
  );
}

export default Register;
