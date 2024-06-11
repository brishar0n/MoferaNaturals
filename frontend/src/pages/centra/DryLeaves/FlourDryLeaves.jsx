import React, { useEffect, useState, useContext } from "react";
import "../../../style/App.css";
import { Select, SelectItem } from "@nextui-org/select";
import DryLeavesBox from "../../../components/centra/DryLeavesBox";
import ConfirmationModal from "../../../components/centra/ConfirmationModal";
import { DryLeavesContext } from "./DryLeavesManager"
import { getDryLeaves } from "../../../../api/centraAPI";
import { getFlour } from "../../../../api/centraAPI";

function FlourDryLeaves() {
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);
    const [weight, setWeight] = useState(0);
    const [interval, setInterval] = useState("daily");
    const [dateRanges, setDateRanges] = useState([]);
    const [dryLeaves, setDryLeaves] = useState([
        { id: 200420, weight: 10, driedDate: "2024-05-01", status: "dried", finishedTime: null },
        { id: 200421, weight: 5, driedDate: "2024-05-02", status: "dried", finishedTime: null },
        { id: 200422, weight: 0, driedDate: "2024-05-03", status: "floured", finishedTime: null },
        { id: 200423, weight: 8, driedDate: "2024-05-04", status: "dried", finishedTime: null },
        { id: 200424, weight: 10, driedDate: "2024-05-05", status: "floured", finishedTime: null },
        { id: 200425, weight: 5, driedDate: "2024-05-06", status: "dried", finishedTime: null },
    ]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    useEffect(() => {
        const fetchDryLeaves = async () => {
            const response = await getDryLeaves();
            console.log(response);
            if (response && response.data) {
                console.log(response.data);
                setDryLeaves(response.data);
            }
        };

        fetchDryLeaves();
    }, []);
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
        console.log(dateRanges);
        console.log(interval);
    }, [selectedDate, interval]);

    useEffect(() => {
        const totalWeight = dateRanges.reduce((sum, date) => {
            const leaf = dryLeaves.find((leaf) => leaf.dried_date === date && leaf.floured_datetime === null);
            return sum + (leaf ? leaf.weight : 0);
        }, 0);

        setWeight(totalWeight);
    }, [dryLeaves, dateRanges]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const updatedLeaves = dryLeaves.map((leaf) => {
                if (leaf.status === "flouring" && leaf.finishedTime && new Date() >= leaf.finishedTime) {
                    return { ...leaf, status: "floured", finishedTime: null };
                }
                return leaf;
            });
            setDryLeaves(updatedLeaves);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const handleBack = () => navigate("/dashboard");

    const handleAdd = () => navigate("/adddryleaves");

    const handleFlour = () => {
        const updatedLeaves = dryLeaves.map((leaf) => {
            if (dateRanges.includes(leaf.dried_date) && leaf.floured_datetime === null) {
                const finishedTime = new Date(Date.now() + 4 * 60 * 60 * 1000); // 4 hours from now
                return { ...leaf, status: "flouring", finishedTime };
            }
            return leaf;
        });

        setDryLeaves(updatedLeaves);
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
                <img src="src/assets/centra/calendar.svg" className="pl-2" alt="calendar" />
                <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="font-semibold text-xs text-primary pt-1 pb-1 pr-5 bg-white border-none outline-none cursor-pointer"
                    
                />
            </div>

            <div className="w-30 pl-3 pr-3 bg-white rounded-lg flex items-center gap-1 mt-4">
                <img src="src/assets/centra/weight.svg" alt="weight" />
                <p className="font-semibold text-xs text-primary pt-1 pb-1 pr-5 pl-2">Weight: {weight}Kg</p>
            </div>

            <div className="mt-4 text-primary font-medium flex gap-2 justify-center items-center z-100 relative">
                <p>Select Interval: </p>
                
                    <Select
                        className="w-40 text-primary"
                        value={interval}
                        onChange={(e) => setInterval(e.target.value)}
                    >
                        <SelectItem key="daily" value="daily"> Daily (1d) </SelectItem>
                        <SelectItem key="threedays" value="threedays"> Three days (3d) </SelectItem>
                        <SelectItem key="weekly" value="weekly"> Weekly (7d) </SelectItem>
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
