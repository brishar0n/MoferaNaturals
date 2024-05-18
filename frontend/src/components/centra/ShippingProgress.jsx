import React from 'react';

const ShippingProgress = ({ shippingId, progressStages }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg">
      <div className="flex justify-between items-center mb-4">
        <div className="text-lg font-semibold">Shipping ID</div>
        <div className="text-lg font-semibold">{shippingId}</div>
      </div>
      <div className="relative">
        {progressStages.map((stage, index) => (
          <div key={index} className="flex items-center mb-4">
            <div className="flex flex-grow justify-between items-center">
              <div className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center 
                  ${stage.completed ? 'bg-green-500' : 'bg-gray-300'}`}>
                  {stage.completed && <span className="text-white">✓</span>}
                </div>
                {index < progressStages.length - 1 && (
                  <div className="w-px h-8 border-l border-gray-300"></div>
                )}
              </div>
              <div className="flex flex-grow items-center ml-4">
                <div className="text-sm text-gray-500 mr-4">{stage.timestamp}</div>
                <div className="text-sm">{stage.detail}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShippingProgress;
