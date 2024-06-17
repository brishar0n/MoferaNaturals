import React from 'react';
import box from '../../../assets/xyz/package.svg';
import '../../../style/xyz/xyz_mobile/FindRescalePackage.css';

function SearchResult({ searchResult, onPackageClick }) {
    const formatDate = (dateString) => {
        if (!dateString) return 'Invalid Date';
        const dateParts = dateString.split('-');
        if (dateParts.length !== 3) return 'Invalid Date';
        const [year, month, day] = dateParts;
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return `${parseInt(day, 10)} ${months[parseInt(month, 10) - 1]} ${year}`;
    };

    const formatTime = (timeString) => {
        const [hour, minute, second] = timeString.split(':');
        let period = 'AM';
        let hourInt = parseInt(hour, 10);
        
        if (hourInt >= 12) {
            period = 'PM';
            if (hourInt > 12) hourInt -= 12;
        } else if (hourInt === 0) {
            hourInt = 12;
        }
        
        return `${hourInt}:${minute} ${period}`;
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
                                <p className="text-sm">{item.received_datetime ? formatDate(item.received_datetime.split("T")[0]) : "Invalid Date"}, {item.received_datetime ? formatTime(item.received_datetime.split("T")[1]) : "Invalid Time"}</p>
                            </div>
                        </a>
                    </div>
                )
            })}
        </div>
    );
}

export default SearchResult;
