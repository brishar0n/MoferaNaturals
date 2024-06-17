import { useState, useEffect } from "react";
import "../../style/AdminDesktop.css"
import bg from "../../../src/assets/auth-desktop/bg-welcome.svg"
import mofera from "../../../src/assets/auth-desktop/mofera-login.svg"
import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

function WelcomeDesktop() {
    const navigate = useNavigate()
    
    const NavigateLogin = () => {
        navigate('/logindesktop')
    }

    const NavigateSignup = () => {
        navigate('/registerdesktop')
    }
    

    return (
        <div className="">
            <img src={bg} alt="" className="bottom-0 fixed right-0 h-99.999vh" />
            <img src={mofera} alt="" className="pt-5 pl-5 w-40"/>

            <div className="w-1/2 ml-20 mt-28 z-20">
                <div className="flex flex-col text-start gap-4 ">
                    <p className="text-secondary text-5xl font-semibold ">Welcome To Mofera</p>
                    <p className="text-base font-medium text-justify"> "Welcome to Mofera, your premier source for premium moringa leaves. We are dedicated to providing high-quality, organically grown moringa leaves sourced directly from the finest farms. Our commitment to sustainable farming practices ensures that our products are free from pesticides and harmful chemicals, benefiting both the environment and our communities. With our robust supply chain management, you can trace the journey of our leaves from farm to table. Choose from our range of fresh, dried, or powdered moringa leaves, perfect for enhancing your health and meals. By choosing Mofera, you support a healthier lifestyle and sustainable agriculture. Thank you for visiting Mofera. We look forward to serving you with the best moringa leaves and exceptional service."</p>
                </div>

                <div className="flex flex-col mt-6 gap-3 drop-shadow-lg">
                    {/* <div className="bg-secondary w-44 h-10 flex justify-center items-center rounded-xl hover:bg-primary cursor-pointer" onClick={NavigateLogin}>
                        <button className="text-white font-medium drop-shadow" >Login</button>
                    </div> */}
                    <Button
                        className="w-44 font-bold drop-shadow-lg"
                        color="primary"
                        onClick={NavigateLogin}
                    >
                        Login
                    </Button>

                    <div className="flex gap-1">
                        <p className="font-medium">New account?</p>
                        <p className="text-primary underline font-medium hover:text-secondary cursor-pointer" onClick={NavigateSignup}>Sign In</p>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default WelcomeDesktop;