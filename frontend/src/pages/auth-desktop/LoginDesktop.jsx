import { useState, useEffect, useContext } from "react";
import { Modal, button } from "@nextui-org/react";
import "../../style/AdminDesktop.css"
import { login } from "../../../api/authAPI";
import { useNavigate } from "react-router-dom";
import { Input } from "@nextui-org/react";
import eye from "../../assets/auth-desktop/eye.svg"
import eyeClosed from "../../assets/auth-desktop/eyeclosed.svg"
import MoferaLogo from "../../assets/auth-desktop/mofera-login.svg"
import TopCorner from "../../assets/auth-desktop/login-tc.svg"
import BottomCorner from "../../assets/auth-desktop/bc-login.svg"
import Mascot from "../../assets/auth-desktop/login-mascot.svg"
import component from "../../../src/assets/common/component.svg"
import { UserContext } from "../../App";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/react";
import ProgressBar from "@ramonak/react-progress-bar";

function LoginDesktop() {
    const { setUserRefresh } = useContext(UserContext)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);
    const Navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        const formData = new FormData();
        formData.append('username', email);
        formData.append('password', password);

        try {
            const response = await login(formData);
            if (response) {
                const role = response.data.role;
                setUserRefresh(true);
                if (role === "xyz") Navigate('/dashboard-wet');
                if (role === "admin") Navigate('/adminpage');
            }
        } catch (error) {
            console.error("Error: ", error);
        } finally {
            setIsLoading(false);
        }
    };

    const NavigateRegister = () => {
        Navigate('/registerdesktop');
    };

    const NavigateResetPage = () => {
        Navigate('/verificationdesktop');
    };

    return (
        <div className="bg-white h-screen">
            {isLoading && (
                <motion.div
                    className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }} // Slower transition
                >
                    <motion.img
                        src={Mascot}
                        alt="loading mascot"
                        className="w-24 h-24"
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1 }} // Adjusted spin duration
                    />
                    <div className="w-1/2 mt-4">
                        <ProgressBar completed={100} />
                    </div>
                </motion.div>
            )}

            <div className={`flex ${isLoading ? 'opacity-50' : 'opacity-100'}`}>
                <div className="relative w-full">
                    <img src={MoferaLogo} alt="logo" className="absolute top-0 pt-5 pl-5 z-50 w-40" />
                    <img src={TopCorner} alt="" className="fixed z-10" />
                    <img src={BottomCorner} alt="" className="fixed bottom-0 right-0 h-99.999vh" />
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
                            <form onSubmit={handleLogin} className="relative z-20 flex flex-col justify-start pt-44 pl-20">
                                <p className='text-secondary font-bold text-4xl text-left'> Login </p>

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
                                    endContent={
                                        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                                            {isVisible ? (
                                                <img src={eye} alt="eyeClosed" className="w-5" />
                                            ) : (
                                                <img src={eyeClosed} alt="eyeClosed" className="w-5" />
                                            )}
                                        </button>
                                    }
                                />

                                <div className='pt-2 flex gap-1'>
                                    <input type="checkbox" className=''></input>
                                    <div className="flex gap-28">
                                        <label className='text-sm text-primary font-medium'>Remember me?</label>
                                        <p className='text-sm text-senary font-medium cursor-pointer hover:underline' onClick={NavigateResetPage}>Forgot Password?</p>
                                    </div>
                                </div>

                                <div className=''>
                                    <Button
                                        className="rounded-full mt-8 w-36 font-bold text-base"
                                        color="primary"
                                        type="submit"
                                    >
                                        Login
                                    </Button>
                                </div>

                                <div className='flex justify-center items-center mt-7 z-20'>
                                    <img src={component} className='w-3/4'></img>
                                </div>

                                <div className='text-primary flex items-center justify-center gap-1 mt-6 z-20 relative'>
                                    <p className="font-medium"> Don't have an account? </p>
                                    <p className='text-primary font-bold underline hover:text-secondary duration-350 transition-all cursor-pointer '
                                        onClick={NavigateRegister}
                                    >
                                        Sign Up
                                    </p>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginDesktop;
