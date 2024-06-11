import React from "react";
import { Input } from "@nextui-org/react";
import "../../style/App.css"; // Make sure to adjust the path to your CSS file

function SearchButtonData() {
  return (
    <div className="flex justify-start pl-14 pt-5">
        <div className="flex bg-quinary h-12 w-2/5 rounded-full justify-end pr-6 drop-shadow-md">
            <input type="text" className="w-full bg-quinary rounded-full pl-4"/>
            <img src="src/assets/admin/searchbutton.svg" className="w-7" alt="Search Button" />
        </div>  
    </div>
  );
}

export default SearchButtonData;
