import { useState, useEffect } from "react";
import { Modal } from "@nextui-org/react";
import "../../style/AdminDesktop.css"



function LoginDesktop() {
    return (
        <div className="bg-white h-screen">
            <div className="flex">
                <div className="relative w-full">
                    <img src="src/assets/auth-desktop/mofera-login.svg" alt="logo" className="absolute top-0 pt-5 pl-6 z-50"/>
                    <img src="src/assets/auth-desktop/login-tc.svg" alt="" className="fixed z-10"/>
                    <img src="src/assets/auth-desktop/bc-login.svg" alt="" className="fixed bottom-0 right-0 h-99.999vh"/>
                    <img src="src/assets/auth-desktop/login-mascot.svg" alt="" className="fixed right-28 top-44 w-97vh"/>


                    <div className="absolute bg-white">
                    <form className="relative z-20 flex flex-col justify-start pt-64 pl-32">
                        <p className='text-secondary font-bold text-5xl text-left'> Login </p>
                        <label htmlFor='email' className='text-left text-secondary font-medium pt-5 text-xl'> Email </label>
                            <input
                            type="email"
                            name="email"
                            id="email"
                            className="border border-gray-300 rounded-md w-96 p-1.5 bg-quinary border-none mt-1"
                            />

                        <label htmlFor='email' className='text-left text-secondary font-medium pt-5 text-xl'> Password </label>
                            <input
                            type="password"
                            name="password"
                            id="password"
                            className="border border-gray-300 rounded-md w-96 p-1.5 bg-quinary border-none mt-1"
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

                        <div className='flex items-center mt-7 justify-center gap-6 z-20 relative'>
                            <img src="src/assets/common/fb.svg" className=''/>
                            <img src="src/assets/common/apple.svg" className=''/>
                            <img src="src/assets/common/google.svg" className=''/>
                        </div>

                        <div className='text- flex items-center justify-center gap-1 mt-6 z-20 relative'>
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