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
        getFlour()
        .then(response => setPowderData(response.data))
        .catch(err => console.err("Error: ", err))
    }, [])

    return (
      <div className="w-72">
          <br></br>

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
    );
}

export default PowderHistory;