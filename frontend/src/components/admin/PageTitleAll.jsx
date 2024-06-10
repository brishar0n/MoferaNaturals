import React from "react";

function PageTitleAll({title = "Dashboard", description = "Indicate Centra and Guard Harbour through data"}){
    return (
        <>
        <div className="flex justify-start pl-14 pt-11">
            <p className="text-3xl font-semibold">{title}</p>
        </div>
        <div className="flex justify-start pl-14 pt-1">
            <p className="text-lg font-medium">
            {description}
            </p>
        </div>
        </>
    )
}

export default PageTitleAll;