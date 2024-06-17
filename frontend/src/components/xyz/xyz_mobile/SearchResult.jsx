import React from 'react';
import box from '../../../assets/xyz/package.svg';
import '../../../style/xyz/xyz_mobile/FindRescalePackage.css';

function SearchResult({ searchResult, onPackageClick, shippingData }) {
    const formatDate = (dateString) => {
        const [year, month, day] = dateString.split('-');
        const date = new Date(`${day}-${month}-${year}`);

        const options = {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        };
        
        return date.toLocaleDateString('en-US', options);
    };

    const getShippingForPackages = (shipping_id) => {
        return shippingData.find(ship => ship.shipping_id === shipping_id);
    };

    return (
        <div className='items-center justify-center relative'>
            {searchResult.map(item => { 

                return (
                    <div key={item.id} className="bg-secondary mb-3 w-3/4 py-4 px-5 mx-auto rounded-2xl hover:bg-white hover:text-primary text-white box ">
                        <a href="#"  className="block hover:bg-white hover:primary" onClick={() => onPackageClick(item.id)}>
                            <img src={box} alt="box" className="absolute"/>
                            <div className="mleft-10">
                                <p className="mb-1 font-bold text-sm">Package ID #{item.id}</p>
                                <p className="text-sm">{new Date(item.received_datetime).toLocaleString()}</p>
                            </div>
                        </a>
                    </div>
                )
            })}
        </div>
    );
}

export default SearchResult;
