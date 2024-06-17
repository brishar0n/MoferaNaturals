import { useState } from "react";
import "../../style/AdminDesktop.css";
import { login, register } from "../../../api/authAPI";
import { useNavigate } from "react-router-dom";
import { Input, Button } from "@nextui-org/react";
import eye from "../../assets/auth-desktop/eye.svg";
import eyeClosed from "../../assets/auth-desktop/eyeclosed.svg";
import MoferaLogo from "../../assets/auth-desktop/mofera-login.svg"
import TopCorner from "../../assets/auth-desktop/login-tc.svg"
import BottomCorner from "../../assets/auth-desktop/bc-login.svg"
import Mascot from "../../assets/auth-desktop/login-mascot.svg"
import component from "../../../src/assets/common/component.svg"
import { motion } from "framer-motion";

function RegisterDesktop() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isVisible, setIsVisible] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);
    const toggleVisibility2 = () => setIsVisible2(!isVisible2);

    const handleRegister = async (event) => {
        event.preventDefault();
    
        const formData = {
            username: username,
            email: email,
            password: password,
            role: 'xyz',
            centra_unit: null
          }
          
        try {
          const response = await register(formData);
          navigate('/logindesktop');
        } catch (error) {
          console.error("Error: ", error);
        }
    };

    const NavigateLogin = () => {
        navigate('/logindesktop');
    };

    const NavigateResetPage = () => {
        navigate('/verificationdesktop');
    };

    return (
        <div className="bg-white h-screen">
            <div className="flex">
                <div className="relative w-full">
                    <img src={MoferaLogo} alt="logo" className="absolute top-0 pt-5 pl-5 z-50 w-40"/>
                    <img src={TopCorner} alt="" className="fixed z-10"/>
                    <img src={BottomCorner} alt="" className="fixed bottom-0 right-0 h-99.999vh"/>
                    <img 
                        src={Mascot}
                        alt="mascot" 
                        className="fixed right-24 top-32 h-md:top-32 h-lg:top-24 w-1/3"
                    />

                    <div className="absolute bg-white">
                    <motion.div
                    initial={{ opacity: 0, x: -200 }} // Start off-screen to the left
                    animate={{ opacity: 1, x: 0 }} // Slide to the right into view
                    exit={{ opacity: 0, x: 200 }} // Slide out to the right when exiting
                    transition={{ duration: 0.5 }}
                    className="absolute z-20 p-10"
                    >
                         <form onSubmit={handleRegister} className="relative z-20 flex flex-col justify-start pt-16 pl-20 text-primary">
                            <p className='text-secondary font-bold text-4xl text-left'> Register </p>

                            <label htmlFor="name" className="text-left secondary font-medium pt-5 text-base">Username</label>
                            <Input
                                type="name"
                                name="name"
                                radius="sm"
                                className="pt-1 w-96"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            
                            <label htmlFor="email" className="text-left secondary font-medium pt-5 text-base">Email</label>
                            <Input
                                type="email"
                                name="email"
                                radius="sm"
                                className="pt-1 w-96" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <label htmlFor="password" className="text-left secondary font-medium pt-5 text-base">Password</label>
                            <Input
                                type={isVisible ? "text" : "password"}
                                radius="sm"
                                className="pt-1 w-96" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
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

                            <label htmlFor="confirmpassword" className="text-left secondary font-medium pt-5 text-base">Confirm Password</label>
                            <Input
                                type={isVisible2 ? "text" : "password"}
                                radius="sm"
                                className="pt-1 w-96" 
                                endContent= {
                                    <button className="focus:outline-none" type="button" onClick={toggleVisibility2}>
                                        {isVisible2 ? (
                                            <img src={eye} alt="eyeClosed" className="w-5"/>
                                        ) : (
                                            <img src={eyeClosed} alt="eyeClosed" className="w-5"/>
                                        )}
                                    </button>
                                }
                            />

                            <div className='pt-2 flex gap-1'>
                                <input type="checkbox" className=''></input>
                                <div className="flex gap-28">
                                    <label className='text-sm text-primary font-medium'>Remember me?</label> 
                                    <p className='text-sm text-senary font-medium hover:underline cursor-pointer ' onClick={NavigateResetPage}>Forgot Password?</p>
                                </div>
                            </div>

                            <div className=''>
                                <Button
                                    className="w-36 mt-8 bg-secondary text-white font-bold text-base"
                                    radius="full"
                                    type="submit"
                                >
                                    Register
                                </Button>
                            </div>

                            <div className='flex justify-center items-center mt-7 z-20'>
                                <img src={component} className='w-3/4'></img>
                            </div>

                            <div className='text-primary flex items-center justify-center gap-1 mt-6 z-20 relative'>
                                <p className="font-medium"> Already have an account? </p>
                                <p className='text-primary font-bold underline cursor-pointer transition-all hover:text-secondary hover:underline duration-350'
                                    onClick={NavigateLogin} 
                                > 
                                    Login 
                                </p>
                            </div>
                        </form>

                    </motion.div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterDesktop;

