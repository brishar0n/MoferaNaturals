import React from 'react';

const ShippingProgress = ({ formatDate, formatTime, shippingId, shipmentData, packageData, checkpointData, receptionData }) => {
  return (
    <div className="mt-5 bg-white shadow-lg rounded-2xl p-6 w-full">
      <div className="flex justify-between items-center mb-5">
        <div className="text-sm font-semibold">Shipping ID</div>
        <div className="text-sm font-semibold">SHPID{shippingId}</div>
      </div>

      <div className="flex flex-col items-center py-5">
          <div className="relative flex items-end">
            <div className="w-32 text-right pr-4 text-xs text-primary font-medium">{shipmentData.departure_datetime ? formatDate(shipmentData.departure_datetime.split("T")[0]) : "N/A"} <br></br>{shipmentData.departure_datetime ? formatTime(shipmentData.departure_datetime.split("T")[1]) : "N/A"}</div>
            <div className="flex flex-col items-center">
                <div className="w-5 h-5 bg-primary rounded-full z-10"></div>
            </div>
            <div className="w-32 text-left pl-4 text-xs text-primary font-medium">Package shipped from Centra {shipmentData.centra_id}</div>
          </div>

          {(packageData.status === 2 || packageData.shipping_id !== null || (checkpointData && checkpointData.length !== 0)) && checkpointData && (
            <div className="relative flex items-end">
              <div className="w-32 text-right pr-4 text-xs text-primary font-medium">{checkpointData.arrival_datetime ? formatDate(checkpointData.arrival_datetime.split("T")[0]) : "N/A"} <br></br>{checkpointData.arrival_datetime ? formatTime(checkpointData.arrival_datetime.split("T")[1]) : "N/A"}</div>
              <div className="flex flex-col items-center">
                  <div className="w-px h-20 border-dashed border border-primary"></div>
                  <div className="w-5 h-5 bg-primary rounded-full z-10"></div>
              </div>
              <div className="w-32 text-left pl-4 text-xs text-primary font-medium">Package confirmed in the Harbour</div> 
            </div>
          )}

          {(packageData.status === 3 || packageData.shipping_id !== null || packageData.reception_id !== null || (checkpointData && checkpointData.length !== 0) || (receptionData && receptionData.length !== 0)) && checkpointData && receptionData && (
            <div className="relative flex items-end">
              <div className="w-32 text-right pr-4 text-xs text-primary font-medium">{receptionData.receival_datetime ? formatDate(receptionData.receival_datetime.split("T")[0]) : "N/A"} <br></br>{receptionData.receival_datetime ? formatTime(receptionData.receival_datetime.split("T")[1]) : "N/A"}</div>
              <div className="flex flex-col items-center">
                  <div className="w-px h-20 border-dashed border border-primary"></div>
                  <div className="w-5 h-5 bg-primary rounded-full z-10"></div>
              </div>
              <div className="w-32 text-left pl-4 text-xs text-primary font-medium">Package arrived at XYZ</div> 
            </div>
          )}
      </div>
    </div>
  );
};

export default ShippingProgress;
