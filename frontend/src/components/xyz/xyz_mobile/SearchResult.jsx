import React from 'react';
import box from '../../../assets/xyz/package.svg';
import '../../../style/xyz/xyz_mobile/FindRescalePackage.css';

function SearchResult({ searchResult, onPackageClick }) {
    const formatDateTime = (dateTimeString) => {
        const options = {
            weekday: 'long',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        };
        const dateTime = new Date(dateTimeString);
        return dateTime.toLocaleDateString('en-US', options);
    };

    return (
        <div className='items-center justify-center relative'>
            {searchResult.map(item => (
                <div key={item.id} className="bg-secondary mb-3 w-3/4 py-4 px-5 mx-auto rounded-2xl hover:bg-white hover:text-primary text-white box ">
                    <a href="#"  className="block hover:bg-white hover:primary" onClick={() => onPackageClick(item.packageID)}>
                        <img src={box} alt="box" className="absolute"/>
                        <div className="mleft-10">
                            <p className="mb-1 font-bold text-sm">Package ID #{item.packageID}</p>
                            <p className="text-sm">{formatDateTime(item.dateTime)}</p>
                        </div>
                    </a>
                </div>
            ))}
        </div>
    );
}

export default SearchResult;
