// src/RecentActivities.js
import React from 'react';
import PropTypes from 'prop-types';
import './RecentActivities.css'; // For styling (create this file separately)

const RecentActivities = ({ activities }) => {
  return (
    <div className="recent-activities">
      <ul>
        {activities.map((activity, index) => (
          <li key={index} className="activity-item">
            <div className="activity-content">
              <img src={activity.image} alt="Activity" className="activity-image" />
              <div className="activity-details">
                <p className="activity-description">{activity.description}</p>
                <div className='flex justify-between'>
                    <span className="activity-time">{activity.day}</span>
                    <span className="activity-time">{activity.time}</span>
                </div>
                
              </div>
            </div>
          </li>
        ))}
      </ul>
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
};

export default RecentActivities;
