import React from 'react';
import { useNavigate } from 'react-router-dom';
import transit_box from './../../assets/xyz/transit_box.svg';
import clipboard from './../../assets/desktop/clipboard.svg';
import settings from './../../assets/desktop/settings.svg';
import delivery_truck from './../../assets/desktop/delivery_truck.svg';

const dummyData = {
  trackingNumber: '3728 4892 7584',
  carrier: 'SiCepat Express',
  from: 'Bandung',
  to: 'Surabaya',
  startDate: '20 August 2023',
  endDate: '31 August 2023',
  status: 'Packaging'
}

const ShipmentLink = ({trackingNumber, carrier, status, from, to, startDate, endDate}) => {

  const nav = useNavigate();

  const statusIcons = {
    Processing: <img src={clipboard}/>,
    Packaging: <img src={settings}/>,
    Shipped: <img src={delivery_truck}/>,
    Delivered: <img src={delivery_truck}/>
  };  

  const getStatusColor = (currentStatus) => {
    const statuses = ['Processing', 'Packaging', 'Shipped', 'Delivered'];
    const currentIndex = statuses.indexOf(status);
    const statusIndex = statuses.indexOf(currentStatus);

    return currentIndex >= statusIndex ? 'bg-primary' : 'bg-gray-300';
  };

  const getStatusImage = (currentStatus) => {
    const statuses = ['Processing', 'Packaging', 'Shipped', 'Delivered'];
    const currentIndex = statuses.indexOf(status);
    const statusIndex = statuses.indexOf(currentStatus);

    return currentIndex >= statusIndex;
  };

  const handleChangeShipmentPage = () => {
    nav('/shipmenttrackermap', {state: trackingNumber});
  }

  return (
    <div className="p-4 rounded-lg shadow-lg flex flex-col items-start">
      <div className="flex justify-between w-full mb-4">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
            <img className='flex w-full h-full' src={transit_box}></img>
          </div>
          <div className="ml-2">
            <div className="text-lg text-left font-semibold">{trackingNumber}</div>
            <div className="text-sm text-left text-gray-500">{carrier}</div>
          </div>
        </div>
        <button className="text-green-600" onClick={handleChangeShipmentPage}>
          • Transit
        </button>
      </div>
      
      <div className="w-full flex items-center">
        <div className="w-1/2 flex items-center">
          <div className={"flex w-10 h-10 bg-primary rounded-full flex-shrink-0"}>
          {status == 'Processing' ? (
              <img className='mx-auto justify-center w-1/2' src={clipboard}/>
            ) : (
              name
            )}
          </div>
          <div className={`flex-1 h-1 ${getStatusColor('Packaging')} mx-2`}></div>
          <div className={`flex w-10 h-10 ${getStatusColor('Packaging')} rounded-full flex-shrink-0`}>
            {status == 'Packaging' ? (
              <img className='mx-auto justify-center w-1/2' src={settings}/>
            ) : (
              name
            )}
          </div>
        </div>
        <div className="w-1/2 flex items-center">
          <div className={`flex-1 h-1 ${getStatusColor('Shipped')} mx-2`}></div>
          <div className={`flex w-10 h-10 ${getStatusColor('Shipped')} rounded-full flex-shrink-0`}>
          {status == 'Shipped' ? (
              <img className='mx-auto justify-center w-1/2' src={delivery_truck}/>
            ) : (
              null
            )}
          </div>
        </div>
        <div className="w-1/2 flex items-center">
          <div className={`flex-1 h-1 ${getStatusColor('Delivered')} mx-2`}></div>
          <div className={`flex w-10 h-10 ${getStatusColor('Delivered')} rounded-full flex-shrink-0`}>
          {status == 'Delivered' ? (
              <img className='mx-auto justify-center w-1/2' src={delivery_truck}/>
            ) : (
              null
            )}
          </div>
        </div>
      </div>

      <div className="w-full flex justify-between mt-4 text-sm text-gray-500">
        <div className="text-left">
          <div>{startDate}</div>
          <div className="font-semibold text-black">{from}</div>
        </div>
        <div className="text-right">
          <div>{endDate}</div>
          <div className="font-semibold text-black">{to}</div>
        </div>
      </div>
    </div>
  );
};

export default ShipmentLink;
