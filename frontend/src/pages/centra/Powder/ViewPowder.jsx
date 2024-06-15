import React, { useEffect, useState } from "react";
import "../../../style/App.css";
import PowderBox from "../../../components/centra/PowderBox";
import { getFlour } from "../../../../api/centraAPI";
import { getCurrentUser } from "../../../../api/profileAPI";

function PowderHistory() {
    // const powderData = [
    //     { id: 200420, weight: 10, driedDate: "2024-05-01", flouredDate: "2024-05-03" },
    //     { id: 200421, weight: 20, driedDate: "2024-05-04", flouredDate: "2024-05-05" },
    //     { id: 200422, weight: 30, driedDate: "2024-05-06", flouredDate: "2024-05-07" },
    //     { id: 200423, weight: 35, driedDate: "2024-05-08", flouredDate: "2024-05-10" }
    //   ];
    
    const [powderData, setPowderData] = useState([]);
    const [filteredPowderData, setFilteredPowderData] = useState([]);
    // const [centraUnit, setCentraUnit] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
          try {
              // Fetch the current user
              const currentUser = await getCurrentUser();
              const centraId = currentUser.centra_unit;

              // Fetch the powder data
              const response = await getFlour();
              const powderData = response.data;

              // Filter the powder data based on the centra_id
              const filteredData = centraId !== undefined 
                    ? powderData.filter(item => item.centra_unit === centraId)
                    : [];

              // Update state
              setPowderData(powderData);
              setFilteredPowderData(filteredData);
          } catch (err) {
              console.error("Error: ", err);
          }
      };

      fetchData();
  }, []);
    

    return (
      <div className="w-72">
          <br></br>

          {filteredPowderData.map((pwd) => (
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