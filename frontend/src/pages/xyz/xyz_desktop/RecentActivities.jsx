// src/RecentActivities.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './RecentActivities.css'; // For styling (create this file separately)

const RecentActivities = ({ activities, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(activities.length / itemsPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((nextPage) => Math.min(nextPage + 1, totalPages));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentActivities = activities.slice(startIndex, endIndex);

  return (
    <div className="recent-activities">
      <ul>
        {currentActivities.map((activity, index) => (
          <li key={index} className="activity-item">
            <div className="activity-content">
              <img src={activity.image} alt="Activity" className="activity-image" />
              <div className="activity-details">
                <p className="activity-description text-left">{activity.description}</p>
                <div className='flex justify-between'>
                    <span className="activity-time">{activity.day}</span>
                    <span className="activity-time">{activity.time}</span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="pagination-controls">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

RecentActivities.propTypes = {
  activities: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  itemsPerPage: PropTypes.number,
};

RecentActivities.defaultProps = {
  itemsPerPage: 5,
};

export default RecentActivities;
