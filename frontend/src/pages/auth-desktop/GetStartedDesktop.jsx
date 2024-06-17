import { useState, useEffect } from "react";
import "../../style/AdminDesktop.css"
import bg from "../../../src/assets/auth-desktop/gs-bg.svg"
import mofera from "../../../src/assets/desktop/mofera.svg"
import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

function GetStartedDesktop() {
    const navigate = useNavigate();

    const NavigateWelcome = () => {
        navigate('/welcomedesktop')
    }

    return (
        <div className="bg-primary h-screen relative">
            <div>
                <img src={bg} alt="" className="h-screen w-screen absolute z-0"/>
                <img src={mofera} alt="" className="pt-5 pl-5"/>
                <div className="flex flex-col justify-center items-center relative pt-44 gap-3 pr-2">
                    <div className="flex items-center justify-center gap-2">
                        <p className="italic font-semibold text-5xl">“ </p>
                        <p className="italic font-semibold text-5xl text-primary">Transforming</p>
                        <p className="italic text-5xl">and</p>
                    </div>

                    <div className="flex gap-2">
                        <p className="italic font-semibold text-5xl text-primary"> revolutionizing </p>
                        <p className="italic text-5xl "> your journey</p>
                    </div>

                    <div className="flex gap-1 pl-12">
                        <p className="text-5xl"> from leaf to product </p>
                        <p className="font-semibold italic text-5xl">“</p>
                    </div>

                    <div className="pt-10">
                        <p className="font-medium text-sm">Mofera is digitalizing the Moringa supply chain by streamlining processes, </p>
                        <p className="font-medium text-sm">connecting communities, and ensuring a steady flow of high-quality raw materials.</p>
                    </div>

                    <div className="pt-5">
                        {/* <button className="bg-secondary w-36 h-8 rounded-lg text-white text-sm font-semibold hover:bg-primary" > Get Started </button> */}
                        <Button
                        className="w-36 h-9 rounded-lg text-sm font-semibold"
                        color="primary"
                        onClick={NavigateWelcome}>
                            Get Started
                        </Button>
                    </div>
                </div>
            </div>

            
            
        </div>
    )
}

export default GetStartedDesktop