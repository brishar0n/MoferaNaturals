import React from "react";
import { useState } from "react";
import { Input } from "@nextui-org/react";
import "../../style/App.css"; // Make sure to adjust the path to your CSS file
import searchButton from "../../../src/assets/admin/searchbutton.svg"

function SearchButtonData({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };
  return (
    <div className="flex justify-start pl-14 pt-5">
        <form onSubmit={handleSubmit} className="flex bg-quinary h-12 w-2/5 rounded-full justify-end pr-6 drop-shadow-md">
        <input
          type="text"
          className="w-full bg-quinary rounded-full pl-4"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit">
          <img src="src/assets/admin/searchbutton.svg" className="w-7" alt="Search Button" />
        </button>
      </form>
    </div>
  );
}

export default SearchButtonData;
