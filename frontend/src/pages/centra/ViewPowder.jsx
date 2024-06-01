import React from "react";
import "../../style/App.css"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../../components/centra/CentraNavbar";
import PowderBox from "../../components/centra/PowderBox";

function PowderHistory() {
    const [isMobile, setIsMobile] = React.useState(false);
    const navigate = useNavigate();

    const powderData = [
        { id: 200420, weight: 10, driedDate: "2024-05-01", flouredDate: "2024-05-03" },
        { id: 200421, weight: 20, driedDate: "2024-05-04", flouredDate: "2024-05-05" },
        { id: 200422, weight: 30, driedDate: "2024-05-06", flouredDate: "2024-05-07" },
        { id: 200423, weight: 35, driedDate: "2024-05-08", flouredDate: "2024-05-10" }
      ];

    useEffect(() => {
        function handleResize() {
        setIsMobile(window.innerWidth < 600);
        }

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleBack = () => navigate("/dashboard");

    const handleAdd = () => navigate("/addpowder");
    
    return (
      <div>
        {isMobile && (
          <>
            <div className="overflow-auto h-[calc(100vh-6rem)] md:h-auto bg-quaternary min-h-screen flex flex-col items-center overflow-auto resize-none pb-32">
                <img src="src/assets/AddPage/frameAdd.svg" className="fixed w-screen z-0"></img>

                <div className="flex pt-16 gap-11 pr-20 z-10">
                    <img src="src/assets/common/backarrow.svg" onClick={handleBack}></img>
                    <p className="font-bold text-primary text-3xl"> Powder </p>
                </div>

                <br></br>

                <div className="bg-white w-2/3 rounded-full z-20">
                    <div className="flex text-s gap-1 font-medium p-1">
                        <p className="w-48 rounded-full p-1" onClick={handleAdd}> Add </p>
                        <p className="w-48 bg-tertiary rounded-full text-white p-1"> History </p>
                    </div>
                </div>
            
                <br></br><br></br>

                {powderData.map((pwd) => (
                    <PowderBox 
                        key={pwd.id} 
                        weight={pwd.weight} 
                        driedDate={pwd.driedDate}
                        flouredDate={pwd.flouredDate}
                        id={pwd.id}
                    />
                ))}
            </div>
            <NavigationBar></NavigationBar>
          </>
        )}
  
      </div>
    );
}

export default PowderHistory;