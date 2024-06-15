import React from 'react';

const ShippingProgress = ({ formatDate, shippingId, shipmentData, packageData, checkpointData, receptionData }) => {
  return (
    <div className="mt-5 bg-white shadow-lg rounded-2xl p-6 w-full">
      <div className="flex justify-between items-center mb-5">
        <div className="text-sm font-semibold">Shipping ID</div>
        <div className="text-sm font-semibold">SHPID{shippingId}</div>
      </div>

      <div className="flex flex-col items-center py-5">
          <div className="relative flex items-end">
            <div className="w-32 text-right pr-4 text-xs text-primary font-medium">{formatDate(shipmentData.shippingDate)} <br></br>{shipmentData.shippingTime}</div>
            <div className="flex flex-col items-center">
                <div className="w-5 h-5 bg-primary rounded-full z-10"></div>
            </div>
            <div className="w-32 text-left pl-4 text-xs text-primary font-medium">Package shipped from Centra {packageData.centraUnit}</div>
          </div>

          {(packageData.status === "CONFIRMED" || packageData.status === "CANCELLED" || packageData.shippingId !== null || (checkpointData && checkpointData.length !== 0)) && checkpointData && (
            <div className="relative flex items-end">
              <div className="w-32 text-right pr-4 text-xs text-primary font-medium">{formatDate(checkpointData.checkpointDate)} <br></br>{checkpointData.checkpointTime}</div>
              <div className="flex flex-col items-center">
                  <div className="w-px h-20 border-dashed border border-primary"></div>
                  <div className="w-5 h-5 bg-primary rounded-full z-10"></div>
              </div>
              <div className="w-32 text-left pl-4 text-xs text-primary font-medium">Package confirmed in the Harbour</div> 
            </div>
          )}

          {(packageData.status === "ARRIVED" || packageData.shippingId !== null || packageData.xyz_id !== null || (checkpointData && checkpointData.length !== 0) || (receptionData && receptionData.length !== 0)) && checkpointData && receptionData && (
            <div className="relative flex items-end">
              <div className="w-32 text-right pr-4 text-xs text-primary font-medium">{formatDate(receptionData.arrivedDate)} <br></br>{receptionData.arrivedTime}</div>
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
