import "../../style/AdminDesktop.css"
import bg from "../../../src/assets/auth-desktop/gs-bg.svg"
import mofera from "../../../src/assets/desktop/mofera.svg"
import Mascot from "../../assets/auth-desktop/login-mascot.svg"
import { motion } from "framer-motion"

function WarningPage() {
    
    return (
        <div className="bg-primary h-screen relative">
            <div>
                <img src={bg} alt="" className="h-screen w-screen absolute z-0"/>
                <img src={mofera} alt="" className="pt-5 pl-5 w-40"/>
                <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7 }}
                >
                    <div className="flex flex-col justify-start items-center relative pt-28 pr-24 pl-24 gap-3">
                        <div className="w-full flex justify-center">
                            <img src={Mascot} alt="Mascot" className="w-72" />
                        </div>


                        <div className="flex items-center justify-center gap-2">
                            <p className="italic font-semibold text-5xl text-primary">Access </p>
                            <p className="italic text-5xl">this page </p>
                        </div>

                        <div className="flex gap-2">
                            <p className="italic font-semibold text-5xl text-primary"> On </p>
                            <p className="italic text-5xl">  mobile! </p>
                            
                        </div>

                </div>
                </motion.div>
               
            </div>
        </div>
    )
}

export default WarningPage;