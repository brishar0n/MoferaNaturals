import { useState, useEffect } from "react";
import BarChart from "./BarChart.jsx";
import NavigationBar from "../../components/centra/CentraNavbar.jsx";
import { postCollection } from "../../../api/centraAPI.js";
import CollectorForm from "../../components/centra/CollectorForm.jsx";
import { motion } from "framer-motion";
import DashboardStats from "../../components/centra/DashboardStats.jsx";
import { getCurrentUser } from '../../../api/profileAPI';
import { Link } from 'react-router-dom';

function CentraDashboardHomePage() {
  const [isMobile, setIsMobile] = useState(false);
  const [currentSection, setCurrentSection] = useState("wet leaves");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [weight, setWeight] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const sections = ["wet leaves", "dry leaves", "flour", "package"];
  const [centraUnit, setCentraUnit] = useState(0);
  const [username, setUsername]= useState("");

  const handleClick = () => {
    alert('Button Search clicked!');
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };  

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };  

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handleSectionChange = (section) => {
    setCurrentSection(section);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    postCollection({
      weight,
      "retrieval_datetime": date+"T"+time,
    })
    setFormSubmitted(true);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    // Initial check on component mount
    handleResize();

    // Add event listener to update isMobile when window is resized
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const user = await getCurrentUser();
            console.log(user);
            
            setCentraUnit(user.centra_unit);
            setUsername(user.username);
        } catch (err) {
            console.error("Error: ", err);
        }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-quaternary w-screen h-screen overflow-y-scroll flex-1">
      {isMobile && (
        <>     
          <div className="transparent bg-quaternary text-base text-white font-montserrat">
            <div className="absolute bg-beige w-screen h-screen overflow-y-scroll">
              <img className="absolute" alt="" src={"src/assets/dashboard/vector-414.svg"}/>
              <img className="absolute"src={"src/assets/dashboard/vector-412.svg"}/>

              <div className="absolute mt-12 ml-5 font-medium text-left">
                <p className="m-0 text-lg">Hello,</p>
                <p className="m-0 text-lg">{username.charAt(0).toUpperCase() + username.slice(1)}<br></br></p>
                <p className="text-xs"><br></br></p>
                <p className="m-0 text-[27px]"><b>Centra Unit {centraUnit}</b></p>
              </div>
              
              <img className="absolute top-[46px] left-[365px] rounded-[50%] w-11 h-11 object-cover" alt="" src={"src/assets/dashboard/ellipse-8@2x.png"}/>
              <img className="absolute top-1/4 -mt-5 left-[0px] w-full h-[703px]" alt="" src={"src/assets/dashboard/rectangle-3.svg"}/>
              <img className="absolute top-[53px] left-[250px] w-[91px] h-[179px] object-cover hidden" alt="" src={"src/assets/dashboard/gembrot-4@2x.png"}/>
              <img className="absolute top-[53px] left-2/3 -ml-7 w-[91px] h-[179px] object-cover" alt="" src={"src/assets/dashboard/gembrot-4@2x.png"} />

              <div className="relative top-64 w-full">
                
                  <div className="flex justify-center items-center">
                    <div className="w-[90%] relative rounded-2xl text-primary">
                      <div className="flex justify-between items-center">
                        <div className="flex w-full relative">
                          <input
                            type="text"
                            className="w-full mr-1 rounded-full py-3 pl-5 pr-12 focus:outline-none focus:ring focus:border-primary"
                            placeholder="Search..."
                          />
                          <div className="absolute inset-y-0 right-0 flex items-center">
                            <img className="mr-1" alt="" src={"src/assets/dashboard/group-52.svg"} />
                          </div>
                        </div>
                        <Link to="/history">
                          <img alt="" src={"src/assets/dashboard/frame.svg"} />
                        </Link>
                      </div>
                    </div>
                  </div>

                
               
                <div className="flex justify-center items-center mb-6">
                  <div className="bg-white w-[90%] mt-5 relative rounded-full z-20">
                    <div className="flex text-s m font-medium p-1 relative">
                      <motion.div
                        layout
                        className={`absolute h-5/6 w-1/4 bg-tertiary rounded-full ${
                          currentSection === "wet leaves" ? "mx-auto" : currentSection === "dry leaves" ? "left-[115px]" : currentSection === "flour" ? "left-[195px]" : "right-1"
                        }`}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                      {sections.map((section) => (
                        <div
                          key={section}
                          className={`flex-grow ml-1 py-2 cursor-pointer text-center z-40 ${
                            currentSection === section ? "text-white" : "text-black"
                          }`}
                          onClick={() => handleSectionChange(section)}
                        >
                          {section.charAt(0).toUpperCase() + section.slice(1)}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="w-full relative mb-6">
                  <motion.div
                      key="add"
                      initial={{ x: 300, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -300, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex justify-center items-center">
                        <div className="w-[90%] rounded-2xl bg-white">
                          <form className="absolute top-2 right-7 h-10 w-20">
                            <select id="times" className="bg-quaternary border border-primary text-primary text-sm 
                            focus:ring-primary focus:border-primary block w-full p-1 dark:bg-primary dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:primary dark:focus:border-primary rounded-full py-1 px-1">
                              <option>Daily</option>
                              <option>Weekly</option>
                              <option>Monthly</option>
                              <option>Annually</option>
                            </select>
                          </form>
                          <div className="">
                            <BarChart></BarChart>
                          </div>
                        </div>
                      </div>    
                  </motion.div>

                </div>

                <motion.div
                    key="add"
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -300, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-full mb-6">
                      <div className="flex justify-center items-center">
                        <DashboardStats section={currentSection}/>
                      </div>
                    </div>      
                </motion.div>
                       
                <div className="w-full relative text-3xl mb-6">
                  <b>Collector</b>
                </div>

                <div className="w-full mb-6">
                  <motion.div
                      key="add"
                      initial={{ x: 300, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -300, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex justify-center items-center">
                        <CollectorForm 
                          weight={weight}
                          handleWeightChange={handleWeightChange}  
                          date={date}
                          handleDateChange={handleDateChange}
                          time={time}
                          handleTimeChange={handleTimeChange}
                          formSubmitted={formSubmitted}
                          handleSubmit={handleSubmit}
                        />
                      </div>  
                  </motion.div>
                </div>

                <div className="w-full -mb-10">
                  <motion.div
                    key="add"
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -300, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex justify-center items-center">
                      <div className="w-[80%] rounded-2xl bg-white inline-flex justify-center p-10 shadow-lg">
                        {/* <img className="w-[25px] h-[25px]" alt="" src={"src/assets/dashboard/frame1.svg"}/> */}
                        <a href='/history'>
                          <div className="font-semibold text-primary text-xl underline">VIEW COLLECTOR HISTORY</div>
                        </a>
                      </div>
                    </div> 
                  </motion.div>
                </div>
                <img className="relative bottom-5" alt="" src={"src/assets/dashboard/vector-382.svg"}/>
              </div>
            </div>
          </div>
          
          <NavigationBar />
        </>
      )}
    </div>
  );
}

export default CentraDashboardHomePage;