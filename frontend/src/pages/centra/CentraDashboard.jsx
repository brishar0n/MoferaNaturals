import { useState, useEffect } from "react";
import BarChart from "./BarChart.jsx";
import NavigationBar from "../../components/centra/CentraNavbar.jsx";
import { postCollection } from "../../../api/centraAPI.js";

function CentraDashboardHomePage() {
  const [isMobile, setIsMobile] = useState(false);
  const [date, setDate] = useState(new Date());
  const[weight, setWeight] = useState(0);
  const handleClick = () => {
    alert('Button Search clicked!');
  };
  const handleDateChange = (event) => {
    setDate(new Date(event.target.value));
  };  
  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    alert('Button Submit clicked!');

    const collectionData = {
      weight,
      retrieval_date: date.toISOString().substring(0, 10),
    };
    postCollection(collectionData);
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
  return (
    <div className="bg-quaternary w-screen h-screen overflow-y-scroll flex-1">
      {isMobile && (
        <>     
          <div className="transparent bg-quaternary text-base text-white font-montserrat">
            <div className="absolute bg-beige w-screen h-screen overflow-y-scroll">
              <img className="absolute" alt="" src={"src/assets/dashboard/vector-414.svg"}/>
              <img className="absolute"src={"src/assets/dashboard/vector-412.svg"}/>
              <div className="absolute top-[20px] right-[37.3px] w-[371.7px] h-[19.1px] text-center text-lg">
                <div className="absolute top-[3px] right-[0px] w-[25.8px] h-3">
                  <div className="absolute top-[0px] right-[2.4px] rounded-[2.67px] box-border w-[23.4px] h-3 opacity-[0.35] mix-blend-normal border-[1px] border-solid border-gainsboro" />
                  <img className="absolute top-[3.9px] right-[0px] w-[1.4px] h-[4.2px] opacity-[0.4] mix-blend-normal"
                    alt="" src={"src/assets/dashboard/cap.svg"} />
                  <div className="absolute top-[2.1px] right-[4.6px] rounded-[1.33px] bg-white w-[19.1px] h-[7.8px]" />
                </div>
                <img className="absolute top-[2.1px] right-[27.6px] rounded-[1.33px] w-[20px] h-[11.6px]"
                  alt="" src={"src/assets/dashboard/wifi.svg"} />
                <img className="absolute top-[2.1px] right-[27.6px] rounded-[1.33px] w-[70px] h-[11.6px]"
                  alt="" src={"src/assets/dashboard/cellular-connection.svg"} />
                <div className="absolute w-[calc(100%_-_308px)] top-[calc(50%_-_9.55px)] left-[0px] tracking-[-0.28px] leading-[18px] font-medium inline-block h-[19.1px]">
                  9:41
                </div>
              </div>
              <div className="absolute mt-12 ml-5 font-medium text-left">
                <p className="m-0">Hello,</p>
                <p className="m-0">Si Gembrot<br></br></p>
                <p className="text-xs"><br></br></p>
                <p className="m-0 text-[27px]"><b>Centra Unit 1</b></p>
              </div>
              
              <img className="absolute top-[46px] left-[365px] rounded-[50%] w-11 h-11 object-cover" alt="" src={"src/assets/dashboard/ellipse-8@2x.png"}/>
              <img className="absolute top-[210px] left-[0px] w-full h-[703px]" alt="" src={"src/assets/dashboard/rectangle-3.svg"}/>
              <img className="absolute top-[53px] left-[250px] w-[91px] h-[179px] object-cover hidden" alt="" src={"src/assets/dashboard/gembrot-4@2x.png"}/>
              <img className="absolute top-[53px] left-[250px] w-[91px] h-[179px] object-cover" alt="" src={"src/assets/dashboard/gembrot-4@2x.png"} />
              <div className="relative mt-[255px] w-full">
                <div className="flex justify-center items-center">
                  <div className="w-[90%] absolute mt-[30px] rounded-2xl text-primary">
                    <div className="flex justify-between">
                      <div className="flex w-full">
                          <input type="text" className="w-full mr-1 rounded-full py-3 pl-5 pr-4 focus:outline-none focus:ring focus:border-primary" placeholder="Search..."/>
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                            <button onClick={handleClick} type="submit">
                              <img className="mr-10" alt="" src={"src/assets/dashboard/group-52.svg"} />
                            </button>
                        </div>
                          
                      </div>
                      <img alt="" src={"src/assets/dashboard/frame.svg"}/>
                      
                    </div>
                  
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="w-[90%] absolute mt-[160px] rounded-full text-xs text-black bg-white h-[47px]">
                    <ul className="flex items-center">
                        <li className="flex-1 mt-2">
                          <a className="text-center block border-tertiary rounded-full py-2 px-2 hover:bg-tertiary hover:text-white hover:font-bold" href="#">Wet Leaves</a>
                        </li>
                        <li className="flex-1 mt-2">
                          <a className="text-center block border-tertiary rounded-full py-2 px-2 hover:bg-tertiary hover:text-white hover:font-bold" href="#">Dry Leaves</a>
                        </li>
                        <li className="flex-1 mt-2">
                          <a className="text-center block border-tertiary rounded-full py-2 px-2 hover:bg-tertiary hover:text-white hover:font-bold" href="#">Flour</a>
                        </li>
                        <li className="flex-1 mr-1 mt-2">
                          <a className="text-center block border-tertiary rounded-full py-2 px-2 hover:bg-tertiary hover:text-white hover:font-bold" href="#">Shipping</a>
                        </li>
                      </ul>
                  </div>
                </div>
                <div className="w-full absolute mt-[120px]">
                  <div className="flex justify-center items-center">
                    <div className="w-[90%] rounded-2xl bg-white h-[270px] ">
                      <form className="absolute top-2 right-5 h-10 w-20">
                        <select id="times" className="bg-quaternary border border-primary text-primary text-sm 
                        focus:ring-primary focus:border-primary block w-full p-1 dark:bg-primary dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:primary dark:focus:border-primary rounded-full py-1 px-1">
                          <option>Daily</option>
                          <option>Weekly</option>
                          <option>Monthly</option>
                          <option>Annually</option>
                        </select>
                      </form>
                      <div className="mt-10">
                        <BarChart></BarChart>
                      </div>
                    </div>
                  </div>
                
                </div>
                <div className="w-full absolute mt-[470px]">
                  <div className="flex justify-center items-center">
                    <div className="w-[90%] absolute rounded-2xl p-5 text-sm text-black bg-white"> 
                      <div className="flex justify-between mt-2">
                          <span>Total Wet Leaves Collected:</span>
                          <span className="font-bold">371 Kg</span>
                      </div>
                      <div className="flex justify-between mt-2">
                        <span>Average Wet Leaves Collected Each Day:</span>
                        <span className="font-bold">32 Kg</span>
                      </div>
                      <div className="flex justify-between mt-2">
                          <span>Total Wet Leaves Disposed:</span>
                          <span className="font-bold">102 Kg</span>
                      </div>           
                    </div>
                  </div>
                </div>             
                <div className="w-full absolute mt-[550px] text-3xl">
                  <b>Collector</b>
                </div>
                <div className="w-full absolute mt-[600px]">
                  <div className="flex justify-center items-center">
                    <div className="w-[80%] rounded-2xl bg-white  ">
                      <b className=" text-lg text-black mt-2 inline-block">
                        Wet Leaves from Plasma
                      </b>
                      <div className="w-full">
                        <form className="bg-white rounded px-8 pt-2 pb-1 mb-4">
                          <div className="mb-4">
                            <label className="block text-gray-700 text-sm text-left mb-2">
                              Weight:
                            </label>
                            <input 
                            className="shadow appearance-none border bg-quaternary rounded w-full py-1 px-3 text-primary leading-tight focus:outline-none focus:shadow-outline" 
                            type="number"
                            step="any"
                            value={weight} 
                            onChange={handleWeightChange} 
                            required />                          </div>
                          <div className="mb-6">
                            <label className="block text-gray-700 text-sm text-left mb-2" >
                              Date:
                            </label>
                            <input 
                            type="date" 
                            value={date.toISOString().substring(0, 10)} 
                            onChange={handleDateChange}
                            className="w-4/5 bg-quinary rounded-md pl-2 text-black">
                            </input>                            
                          </div>
                          <div className="flex items-center justify-center">
                          <button 
                          className="bg-primary hover:bg-primary text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline" 
                          type="button" 
                          onClick={handleSubmit}
                          >                             
                           COLLECT
                            </button>
                            
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                
                </div>
                <div className="w-full absolute mt-[880px] h-[200px]">
                  <div className="flex justify-center items-center">
                    <div className="w-[80%] rounded-2xl bg-white inline-flex justify-center p-20">
                      <img className="w-[25px] h-[25px]" alt="" src={"src/assets/dashboard/frame1.svg"}/>
                      <div className="font-semibold text-primary">Add on</div>
                    </div>
                  </div>
                
                </div>
                
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