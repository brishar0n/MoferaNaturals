import { useState } from "react";
import { Button } from "@nextui-org/react";

function MasterDataFolder(){
    return (
        <>
        <div className="w-screen flex flex-wrap gap-12 p-1"> 
            {["Centra", "Wet Leaves", "Dry Leaves", "Flour", "Shipping Info", "Checkpoint Data", "Package"].map((label, index) => (
                <div key={index} className="w-1/6 bg-primary h-48 rounded-xl flex items-center justify-center drop-shadow-lg">
                    <Button
                    className="mt-44 w-3/4 font-semibold bg-quinary hover:bg-quinary active:bg-quinary-darker"
                    >
                        {label}
                    </Button>
                </div>
            ))}
        </div>
        </>
    )
}

export default MasterDataFolder