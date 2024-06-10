import { useState } from "react";
import { Button } from "@nextui-org/react";

function DashboardContent(){
    return (
        <>
        <div className="w-screen flex flex-wrap gap-12 p-1"> 
            {["Centra", "Guard Harbour"].map((label, index) => (
                <div key={index} className="w-1/4 bg-primary h-96 rounded-xl flex items-center justify-center drop-shadow-lg">
                    <Button
                    className="mb-96 w-3/4 font-semibold bg-quinary hover:bg-quinary active:bg-quinary-darker"
                    >
                        {label}
                    </Button>
                </div>
            ))}
        </div>
        </>
    )
}

export default DashboardContent;