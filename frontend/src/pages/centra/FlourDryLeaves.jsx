import React, { useEffect, useState } from "react";
import "../../style/App.css";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../../components/centra/CentraNavbar";
import { Select, SelectItem } from "@nextui-org/select";
import DryLeavesBox from "../../components/centra/DryLeavesBox";
import ConfirmationModal from "../../components/centra/ConfirmationModal";

function FlourDryLeaves() {
    const [isMobile, setIsMobile] = useState(false);
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
    const [timeLeft, setTimeLeft] = useState(60); // 4 hours in seconds
    const [isFlouring, setIsFlouring] = useState(false);
    const [finishedTime, setFinishedTime] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        function handleResize() {
        setIsMobile(window.innerWidth < 600);
        }

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        // Calculate date ranges based on selected date and interval
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
    }, [interval, selectedDate]);

    useEffect(() => {
        // Aggregate the weight based on the date ranges
        const totalWeight = dateRanges.reduce((sum, date) => {
        const leaf = dryLeaves.find((leaf) => leaf.driedDate === date && leaf.status === "dried" || leaf.status == "flouring");
        return sum + (leaf ? leaf.weight : 0);
        }, 0);

        setWeight(totalWeight);
    }, [dateRanges, dryLeaves]);

    useEffect(() => {
        if (isFlouring && finishedTime) {
            setTimeLeft(Math.max(0, Math.floor((finishedTime - new Date()) / 1000))); // Time difference in seconds
        }
    }, [finishedTime, isFlouring]);

    useEffect(() => {
        let intervalId;
        if (isFlouring && finishedTime) {
            intervalId = setInterval(() => {
                const currentTime = new Date();
                const timeDiff = Math.max(0, Math.floor((finishedTime - currentTime) / 1000)); // Time difference in seconds
                setTimeLeft(timeDiff);
    
                if (currentTime >= finishedTime) {
                    clearInterval(intervalId);
                    setIsFlouring(false);
                    setFinishedTime(null);
                    setDryLeaves(prevLeaves => prevLeaves.map(leaf => {
                        if (leaf.status === "flouring") {
                            return { ...leaf, status: "floured" };
                        }
                        return leaf;
                    }));
                }
            }, 1000);
        }
    
        return () => clearInterval(intervalId);
    }, [finishedTime, isFlouring]);

    const handleBack = () => navigate("/dashboard");

    const handleAdd = () => navigate("/adddryleaves");

    const handleFlour = () => {
        const updatedLeaves = dryLeaves.map((leaf) => {
            if (dateRanges.includes(leaf.driedDate) && leaf.status === "dried") {
                // Set status to "flouring" and calculate finished time
                const finishedTime = new Date(Date.now() + 60 * 1000); // 60 seconds from now
                return { ...leaf, status: "flouring", finishedTime };
            }
            return leaf;
        });
        
        const minFinishedTime = Math.min(
            ...updatedLeaves
                .filter(leaf => leaf.status === "flouring")
                .map(leaf => leaf.finishedTime.getTime())
        );
        setFinishedTime(new Date(minFinishedTime));
        
        setDryLeaves(updatedLeaves);
        setIsModalOpen(false);
        setIsFlouring(true);

        console.log(updatedLeaves);
    };

    const handleButtonClick = () => {
        if (weight == 0) {
            setIsModalOpen(false);
        } else {
            setIsModalOpen(true);
        }
    };

    const isButtonDisabled = () => {
        return isFlouring;
    };

    const buttonLabel = () => {
        return isFlouring ? formatTimeLeft(timeLeft) : "FLOUR";
    };


    const formatTimeLeft = (seconds) => {
        const hours = Math.floor(seconds / 3600).toString().padStart(2, '0');
        const minutes = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
        const sec = (seconds % 60).toString().padStart(2, '0');
        return `${hours}h${minutes}m${sec}s`;
    };

    return (
        <div>
        {isMobile && (
            <>
            <div className="overflow-auto h-[calc(100vh-6rem)] md:h-auto bg-quaternary min-h-screen flex flex-col items-center resize-none pb-36">
                <img src="src/assets/AddPage/frameAdd.svg" className="fixed w-screen z-0" alt="background" />

                <div className="flex pt-16 gap-11 pr-20 z-10">
                    <img src="src/assets/common/backarrow.svg" onClick={handleBack} alt="back arrow" />
                    <p className="font-bold text-primary text-3xl"> Dry Leaves </p>
                </div>

                <br />

                <div className="bg-white w-2/3 rounded-full z-20">
                    <div className="flex text-s gap-1 font-medium p-1">
                        <p className="w-48 rounded-full p-1" onClick={handleAdd}> Add </p>
                        <p className="w-48 bg-tertiary text-white rounded-full p-1"> Flour </p>
                    </div>
                </div>

                <br />

                <div className="w-30 bg-white rounded-lg flex items-center gap-1 z-40 relative">
                    <img src="src/assets/centra/calendar.svg" className="pl-2" alt="calendar" />
                    <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="font-semibold text-xs text-primary pt-1 pb-1 pr-5 bg-white border-none outline-none cursor-pointer"
                        disabled={isFlouring}
                    />
                </div>

                <div className="w-30 pl-3 pr-3 bg-white rounded-lg flex items-center gap-1 mt-4">
                    <img src="src/assets/centra/weight.svg" alt="weight" />
                    <p className="font-semibold text-xs text-primary pt-1 pb-1 pr-5 pl-2">Weight: {weight}Kg</p>
                </div>

                <div className="mt-4 text-primary font-medium flex gap-2 justify-center items-center z-100 relative">
                    <p>Select Interval: </p>
                    {!isFlouring && (
                        <Select
                            className="w-40 text-primary"
                            value={interval}
                            onChange={(e) => {
                                const value = e.target.value;
                                setInterval(value);
                            }}
                        >
                            <SelectItem key="daily" value="daily"> Daily (1d) </SelectItem>
                            <SelectItem key="threedays" value="threedays"> Three days (3d) </SelectItem>
                            <SelectItem key="weekly" value="weekly"> Weekly (7d) </SelectItem>
                        </Select>
                    )}
                </div>

                <br />

                {dateRanges.map((date) => {
                    const flouringLeaf = dryLeaves.find((leaf) => leaf.driedDate === date && leaf.status === "flouring");
                    if (flouringLeaf) {
                        return (
                            <DryLeavesBox
                                key={date}
                                weight={flouringLeaf.weight}
                                id={flouringLeaf.id}
                                driedDate={date}
                            />
                        );
                    } else {
                        const leaf = dryLeaves.find((leaf) => leaf.driedDate === date);
                        if (leaf) {
                            return (
                                <DryLeavesBox
                                    key={date}
                                    weight={leaf.weight}
                                    id={leaf.id}
                                    driedDate={date}
                                />
                            );
                        }
                    }
                    return null;
                })}

                {/* {isFlouring ? (
                    <p className="w-48 bg-tertiary text-white rounded-full p-1">{Math.floor(flourCountdown / 3600)}h {(flourCountdown % 3600 / 60).toFixed(0)}m</p>
                ) : (
                    <button
                        onClick={() => handleModalOpen()}
                        className="bg-secondary pl-8 pr-8 pt-2 pb-2 rounded-full text-white font-semibold mt-4 z-40 border border-white"
                    >
                        FLOUR
                    </button>
                )} */}

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

            
                

            <NavigationBar />

            
            </>
        )}
        </div>
    );
}

export default FlourDryLeaves;
