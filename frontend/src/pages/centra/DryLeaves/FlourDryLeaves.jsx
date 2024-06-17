import React, { useEffect, useState, useContext } from "react";
import "../../../style/App.css";
import { Select, SelectItem } from "@nextui-org/select";
import DryLeavesBox from "../../../components/centra/DryLeavesBox";
import ConfirmationModal from "../../../components/centra/ConfirmationModal";
import { DryLeavesContext } from "./DryLeavesManager"
import { flourDryLeaves, getDryLeaves } from "../../../../api/centraAPI";
import { getFlour } from "../../../../api/centraAPI";
import { formatISOToUTC } from "../../../../utils/utils";
import { sync } from "framer-motion";

import calendar from "../../../../src/assets/centra/calendar.svg";
import weights from "../../../../src/assets/centra/weight.svg";

function FlourDryLeaves() {
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);
    const [weight, setWeight] = useState(0);
    const [interval, setInterval] = useState("1d");
    const [dateRanges, setDateRanges] = useState([]);

    const [dryLeaves, setDryLeaves] = useState([]);
    // const [dryLeaves, setDryLeaves] = useState([
        // {
        //     id: 1,
        //     weight: 100.5,
        //     dried_date: "2024-06-11",
        //     floured_datetime: null,
        //     centra_id: 1
        // },
        // {
        //     id: 2,
        //     weight: 72,
        //     dried_date: "2024-06-10",
        //     floured_datetime: "2024-06-10T18:45:00",
        //     centra_id: 2
        // },
        // {
        //     id: 3,
        //     weight: 53,
        //     dried_date: "2024-06-09",
        //     floured_datetime: null,
        //     centra_id: 3
        // }
    // ]);

    const [isModalOpen, setIsModalOpen] = useState(false);


    useEffect(() => {
        const date = new Date(selectedDate);
        const newDateRanges = [];
        const daysToAdd = interval === "daily" ? 1 : interval === "threedays" ? 3 : 7;

        for (let i = 0; i < daysToAdd; i++) {
            const nextDate = new Date(date);
            nextDate.setDate(date.getDate() + i);
            const formattedDate = nextDate.toISOString().split("T")[0];
            newDateRanges.push(formattedDate);
        }

        setDateRanges(newDateRanges);
        // console.log(dateRanges);
        // console.log(interval);
        const fetchDryLeaves = async () => {
            const response = await getDryLeaves();
            console.log(response);
            if (response && response.data) {
                console.log(response.data);
                setDryLeaves(response.data);
            }
        };

        fetchDryLeaves();
        
        console.log(dateRanges)

    }, [selectedDate, interval]);

    useEffect(() => {
        const totalWeight = dateRanges.reduce((sum, date) => {
            const leaf = dryLeaves.find((leaf) => leaf.dried_date === date && leaf.floured_datetime === null);
            return sum + (leaf ? leaf.weight : 0);
        }, 0);

        setWeight(totalWeight);
    }, [dryLeaves, dateRanges]);

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         const updatedLeaves = dryLeaves.map((leaf) => {
    //             if (leaf.status === "flouring" && leaf.finishedTime && new Date() >= leaf.finishedTime) {
    //                 return { ...leaf, status: "floured", finishedTime: null };
    //             }
    //             return leaf;
    //         });
    //         setDryLeaves(updatedLeaves);
    //     }, 1000);

    //     return () => clearInterval(intervalId);
    // }, []);

    const handleFlour = () => {
        const currentTime = new Date(Date.now());
        const validLeaves = dryLeaves.filter((leaf) => dateRanges.includes(leaf.dried_date) && !leaf.floured_datetime)
    
        validLeaves.forEach((e) => {
            flourDryLeaves({
                "id": e.id,
                "datetime": currentTime.toISOString()
            })
        })
        setIsModalOpen(false);
    };

    const handleButtonClick = () => {
        if (weight === 0) {
            setIsModalOpen(false);
        } else {
            setIsModalOpen(true);
        }
    };

    const isButtonDisabled = () => {
        return false; 
    };

    const buttonLabel = () => {
        return "FLOUR";
    };

    return (
        <div className="flex flex-col items-center">
            <div className="w-30 bg-white rounded-lg flex items-center gap-1 z-40 relative">
                <img src={calendar} className="pl-2" alt="calendar" />
                <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="font-semibold text-xs text-primary pt-1 pb-1 pr-5 bg-white border-none outline-none cursor-pointer"
                    
                />
            </div>

            <div className="w-30 pl-3 pr-3 bg-white rounded-lg flex items-center gap-1 mt-4">
                <img src={weights} alt="weight" />
                <p className="font-semibold text-xs text-primary pt-1 pb-1 pr-5 pl-2">Weight: {weight}Kg</p>
            </div>

            <div className="mt-4 text-primary font-medium flex gap-2 justify-center items-center z-100 relative">
                <p>Select Interval: </p>
                
                    <Select
                        className="w-40 text-primary"
                        value={interval}
                        onChange={(e) => setInterval(e.target.value)}
                    >
                        <SelectItem key="daily" value="1d"> Daily (1d) </SelectItem>
                        <SelectItem key="threedays" value="3d"> Three days (3d) </SelectItem>
                        <SelectItem key="weekly" value="7d"> Weekly (7d) </SelectItem>
                    </Select>
                
            </div>

            <br />

            {dateRanges.map((date) => {
                const leaves = dryLeaves.filter((leaf) => leaf.dried_date === date);
                return leaves.map((leaf) => (
                    <DryLeavesBox
                        key={leaf.id}
                        weight={leaf.weight}
                        id={leaf.id}
                        driedDate={leaf.dried_date}
                        flouredDatetime={formatISOToUTC(leaf.floured_datetime)}
                    />
                ));
            })}

            <button 
                className={`rounded-full px-8 py-2 font-semibold z-40 border-white border gap-2 items-center ${isButtonDisabled() ? "bg-gray-400 text-white" : "bg-secondary text-white"}`} 
                onClick={() => handleButtonClick()}
                disabled={isButtonDisabled()}
                type="button"
            >
                {buttonLabel()}
            </button>
            
            <ConfirmationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={handleFlour}
                isFlourPage={true} 
            />
        </div>
    );
}

export default FlourDryLeaves;
