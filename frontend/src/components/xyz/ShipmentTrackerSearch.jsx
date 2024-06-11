import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CiSearch } from "react-icons/ci";

import '../../style/ShipmentTrackerSearch.css';
import '../../pages/xyz/xyz_desktop/ShipmentTracker';

const ShipmentTrackerSearch = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
    alert(query)
  };

  const handleSetShipment = (event) => {
    if (tempID in shipmentData) {
        setShipmentID(tempID);
    } else {
        console.log('Not found ' + tempID);
    }
  };

  return (
    <form className="search-pill-form" onSubmit={handleSubmit}>
      <div className="search-pill-container">
        
        <input
          type="text"
          value={query}
          onChange={(e) => setTempID(e.target.value)}
          placeholder="e.g. 123123"
          className="search-pill-input"
        />
      </div>
      <button type="submit" className="search-pill-button" onClick={handleSetShipment}> <CiSearch className='text-2xl' /></button>
    </form>
  );
};

ShipmentTrackerSearch.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default ShipmentTrackerSearch;
