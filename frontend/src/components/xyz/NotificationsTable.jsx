import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FaShippingFast } from "react-icons/fa";
import { LuPackageOpen } from "react-icons/lu";

import { getArrivalNotification, getShipmentNotification } from '../../../api/xyzAPI';

// static data arrays for testing:
// const shipmentNotifications = new Array(10).fill({
//   id: '212123',
//   shipper: 'Centra 1',
//   estimatedArrival: '20 March 2024',
//   timestamp: 'Sunday 6:24pm',
// });

// const arrivalNotifications = new Array(10).fill({
//   id: '312321',
//   sender: 'Centra 2',
//   arrivalDate: '22 March 2024',
//   timestamp: 'Monday 5:30pm',
// });

function NotificationsTable() {
  const [shipmentNotifications, setShipmentNotifications] = useState([]);
  const [arrivalNotifications, setArrivalNotifications] = useState([]);
  const [showShipment, setShowShipment] = useState(true);
  const navigate = useNavigate();

  const navigateToMap = () => {
    navigate('/shipmenttrackermap', {state: e.currentTarget.getAttribute('trackingNumber')});
  };

  useEffect(() => {
      async function fetchShipmentNotification() {
          const response = await getShipmentNotification();
          if(response && response.data) {
              setShipmentNotifications(response.data)
          }
      }

      async function fetchArrivalNotification() {
        const response = await getArrivalNotification();
        if(response && response.data) {
            setArrivalNotifications(response.data)
        }
    }

      fetchShipmentNotification()
      fetchArrivalNotification()
  }, [showShipment])

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center mb-4 space-x-4">
        <button
          onClick={() => setShowShipment(true)}
          className={`flex items-center justify-center font-bold px-4 py-2 rounded-lg w-1/2 focus:outline-none ${
            showShipment ? 'bg-primary text-white' : 'bg-gray-300 text-gray-700'
          }`}
        >
          <FaShippingFast className="w-6 h-6 mr-4"/>
          Shipment Notifications
        </button>
        <button
          onClick={() => setShowShipment(false)}
          className={`flex items-center justify-center font-bold px-4 py-2 rounded-lg w-1/2 focus:outline-none ${
            showShipment ? 'bg-gray-300 text-gray-700' : 'bg-primary text-white'
          }`}
        >
          <LuPackageOpen className="w-6 h-6 mr-4"/>
          Arrival Notifications
        </button>
      </div>

      <div className="bg-white shadow rounded-lg p-4 space-y-2">
        {(showShipment ? shipmentNotifications : arrivalNotifications).map(
          (notification, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b py-2 space-x-4"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={`https://via.placeholder.com/50?text=Img+${index + 1}`}
                  alt="avatar"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-medium">
                    <span className="font-bold">
                      {showShipment
                        ? `Shipping ID #${notification.id}`
                        : `Arrival ID #${notification.id}`}
                    </span>{' '}
                    {showShipment
                      ? `has been shipped by ${notification.shipper} (Estimated Date Arrival: ${new Date(notification.estimatedArrival).toDateString()})`
                      : `arrived from ${notification.shipper} (Arrival Date: ${new Date(notification.timestamp).toDateString()})`}
                  </p>
                  <p className="text-gray-500 text-left">{new Date(notification.timestamp).toDateString()}</p>
                </div>
              </div>
              <button trackingNumber={notification.id} onClick={navigateToMap} className="bg-primary text-white font-bold px-4 py-2 rounded-lg focus:outline-none">
                TRACK
              </button>
            </div>
          )
        )}
        <div className="flex justify-center mt-4 space-x-2">
          <button className="px-3 py-1 border border-gray-300 text-gray-500 rounded-lg focus:outline-none">
            &lt;
          </button>
          <button className="px-3 py-1 border border-gray-300 text-gray-500 rounded-lg focus:outline-none">
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotificationsTable;
