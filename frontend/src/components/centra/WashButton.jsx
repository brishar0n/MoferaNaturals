import React, { useState } from "react";

function WashButton() {
    const [washingText, setWashingText] = useState("WASH");
    const [buttonStyle, setButtonStyle] = useState("bg-secondary");

    const handleWashing = () => {
        setWashingText("WASHING...");
        setButtonStyle("bg-secondary opacity-70");
    };

    const handleMouseLeave = () => {
        setWashingText("WASH");
        setButtonStyle("bg-secondary"); // Reset button style
    };

    return (
        <button
            className={`${buttonStyle} pl-5 pr-5 pt-2 pb-2 rounded-full text-white font-semibold -mt-2 mb-4`}
            onClick={handleWashing}
            onMouseLeave={handleMouseLeave}
        >
            {washingText}
        </button>
    );
}

export default WashButton;