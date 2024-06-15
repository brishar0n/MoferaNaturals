import React, { useEffect, useState } from "react";
import "../../../style/App.css";
import PowderBox from "../../../components/centra/PowderBox";
import { getFlour } from "../../../../api/centraAPI";

function PowderHistory() {
    // const powderData = [
    //     { id: 200420, weight: 10, driedDate: "2024-05-01", flouredDate: "2024-05-03" },
    //     { id: 200421, weight: 20, driedDate: "2024-05-04", flouredDate: "2024-05-05" },
    //     { id: 200422, weight: 30, driedDate: "2024-05-06", flouredDate: "2024-05-07" },
    //     { id: 200423, weight: 35, driedDate: "2024-05-08", flouredDate: "2024-05-10" }
    //   ];
    
    const [powderData, setPowderData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await getFlour();
              const powderData = response.data;
              
              setPowderData(powderData);
          } catch (err) {
              console.error("Error: ", err);
          }
      };

      fetchData();
  }, []);
    

    return (
      <div className="w-72">
          <br></br>

          {powderData.map((pwd) => (
              <PowderBox 
                  key={pwd.id} 
                  weight={pwd.weight} 
                  driedDate={pwd.dried_date}
                  flouredDate={pwd.floured_date}
                  id={pwd.id}
              />
          ))}
      </div>
    );
}

export default PowderHistory;