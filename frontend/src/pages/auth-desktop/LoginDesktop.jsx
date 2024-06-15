import { useState, useEffect } from "react";
import { Modal, button } from "@nextui-org/react";
import "../../style/AdminDesktop.css"
import { login } from "../../../api/authAPI";
import { Navigate } from "react-router-dom";
import { Input } from "@nextui-org/react";
import eye from "../../assets/auth-desktop/eye.svg"
import eyeClosed from "../../assets/auth-desktop/eyeclosed.svg"

function LoginDesktop() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);
    
    const handleLogin = async (event) => {
        event.preventDefault();
    
        const formData = new FormData();
        formData.append('username', email);
        formData.append('password', password);
    
        try {
          const response = await login(formData);
          if (response){
            const role = response.data.role
            if(role === "xyz") Navigate('/dashboard-wet');
            if(role === "admin") Navigate('/adminpage');
          }
          
        } catch (error) {
          console.error("Error: ", error)
        }
    };
    
    return (
        <div className="bg-white h-screen">
            <div className="flex">
                <div className="relative w-full">
                    <img src={"src/assets/auth-desktop/mofera-login.svg"} alt="logo" className="absolute top-0 pt-5 pl-6 z-50"/>
                    <img src="src/assets/auth-desktop/login-tc.svg" alt="" className="fixed z-10"/>
                    <img src="src/assets/auth-desktop/bc-login.svg" alt="" className="fixed bottom-0 right-0 h-99.999vh"/>
                    <img src="src/assets/auth-desktop/login-mascot.svg" alt="" className="fixed right-28 top-44 w-97vh"/>


                    <div className="absolute bg-white">
                    <form onSubmit={handleLogin} className="relative z-20 flex flex-col justify-start pt-64 pl-32">
                        <p className='text-secondary font-bold text-4xl text-left'> Login </p>
                        {/* <label htmlFor='email' className='text-left text-secondary font-medium pt-5 text-xl'> Email </label>
                            <input
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border border-gray-300 rounded-md w-96 p-1.5 bg-quinary border-none mt-1"
                            />

                        <label htmlFor='email' className='text-left text-secondary font-medium pt-5 text-xl'> Password </label>
                            <input
                            type="password"
                            name="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="border border-gray-300 rounded-md w-96 p-1.5 bg-quinary border-none mt-1"
                            /> */}

                        <label htmlFor="name" className="text-left secondary font-medium pt-5 text-base">Email</label>
                        <Input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        radius="sm"
                        className="pt-1 w-96"
                        />
                        
                        <label htmlFor="email" className="text-left secondary font-medium pt-5 text-base">Password</label>
                        <Input
                        type={isVisible ? "text" : "password"}
                        name="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        radius="sm"
                        className="pt-1 w-96" 
                        endContent= {
                            <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                                {isVisible ? (
                                    <img src={eye} alt="eyeClosed" className="w-5"/>
                                ) : (
                                    <img src={eyeClosed} alt="eyeClosed" className="w-5"/>
                                )}
                            </button>
                        }
                        />

                        <div className='pt-2 flex gap-1'>
                            <input type="checkbox" className=''></input>
                            <div className="flex gap-32">
                                <label className='text-sm text-primary font-medium'>Remember me?</label> 
                                <p className='text-sm text-senary font-medium'>Forgot Password?</p>
                            </div>
                        </div>

                        <div className=''>
                            <button className='rounded-full bg-secondary text-white font-bold px-4 py-2 w-36 btn-login mt-8'> Login </button>
                        </div>

                        <div className='flex justify-center items-center mt-7 z-20'>
                            <img src="src/assets/common/component.svg" className='w-3/4'></img>
                        </div>
{/* 
                        <div className='flex items-center mt-7 justify-center gap-6 z-20 relative'>
                            <img src="src/assets/common/fb.svg" className=''/>
                            <img src="src/assets/common/apple.svg" className=''/>
                            <img src="src/assets/common/google.svg" className=''/>
                        </div> */}

                        <div className='text-primary flex items-center justify-center gap-1 mt-6 z-20 relative'>
                            <p className="font-medium"> Don't have an account? </p>
                            <p className='text-primary font-bold underline'> Sign Up</p>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginDesktop
