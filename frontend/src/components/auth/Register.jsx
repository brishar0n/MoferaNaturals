import React, { useEffect } from "react";
import "../../style/App.css";
import { useNavigate } from "react-router-dom";
import Card from "./Card";

function Register() {
  const [isMobile, setIsMobile] = React.useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

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
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate("/welcomeback");
  };

  return (
    <div className="bg-quaternary h-screen">
      {isMobile && (
        <div className="h-screen">
          <img src="src/assets/common/topframe.svg" className='w-screen absolute'/>

          <img src="src/assets/common/mascot.svg" className='absolute top-11 right-7 '/>

          <img src="src/assets/verification/backbutton.svg" className="absolute mt-14 ml-8" onClick={() => {navigate("/login");}}/>

          <p className='text-white text-4xl font-bold absolute text-left top-32 left-14 '> Create <br></br> Account</p>

          <Card>

            <div className='text-left ml-16 mt-11'>
              <label htmlFor='fullname' className='text-primary font-medium'> Full Name <br></br></label>
              <input 
                className='border border-gray-300 rounded-md w-5/6 px-3 py-1.5 bg-quinary' 
                name='fullname' 
                id='fullname' 
                value={formData.fullName} 
                onChange={handleChange} 
                required
              ></input>
            </div>

            <div className='text-left ml-16 mt-5'>
              <label htmlFor='email' className='text-primary font-medium'> Email <br></br></label>
              <input 
                className='border border-gray-300 rounded-md w-5/6 px-3 py-1.5 bg-quinary' 
                name='fullname' 
                id='fullname' 
                value={formData.email} 
                onChange={handleChange} 
                required
              ></input>
            </div>

            <div className='text-left ml-16 mt-5'>
              <label htmlFor='password' className='text-primary font-medium'> Password <br></br></label>
              <input 
                className='border border-gray-300 rounded-md w-5/6 px-3 py-1.5 bg-quinary' 
                name='fullname' 
                id='fullname' 
                value={formData.password} 
                onChange={handleChange} 
                required
              ></input>
            </div>

            <div className='text-left ml-16 mt-5'>
              <label htmlFor='confirmpass' className='text-primary font-medium'> Confirm Password <br></br></label>
              <input 
                className='border border-gray-300 rounded-md w-5/6 px-3 py-1.5 bg-quinary' 
                name='fullname' 
                id='fullname' 
                value={formData.confirmPassword} 
                onChange={handleChange} 
                required
              ></input>
            </div>

            <div className='mt-8'>
                <button className='rounded-full bg-secondary text-white font-bold px-4 py-2 w-36 btn-login' onClick={handleSubmit}>
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

            <div className='absolute bottom-0'>
              <img src='src/assets/register/bottomframe.svg' className='w-screen'/>
            </div>
          </Card>
        </div>
      )}
    </div>
    
  );
}

export default Register;
