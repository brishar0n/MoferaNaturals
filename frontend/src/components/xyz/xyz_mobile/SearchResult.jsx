import React from 'react';
import box from '../../../assets/xyz/package.svg';

function SearchResult({ searchResult }) {
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
                <div key={item.id} className="bg-white mb-3 w-3/4 py-4 px-5 mx-auto rounded-lg">
                    {/* Render each item of the search result */}
                    <img src={box} alt="box" className="absolute"/>
                    <p className="mb-1 ml-5 primary font-bold text-sm ml-10">Package ID #{item.packageID}</p>
                    <p className="primary ml-5 text-sm ml-10">{formatDateTime(item.dateTime)}</p>
                </div>
            ))}
        </div>
    );
}

export default SearchResult;