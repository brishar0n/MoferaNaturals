import React from 'react';
import { GoChevronLeft } from "react-icons/go";
import rescaleElement from '../../../assets/xyz/elementrescale.svg';
import '../../../style/xyz/xyz_mobile/RescalePackage.css';

function RescaleHeader({ handleBack }) {
    return (
        <div>
            <div className="flex place-items-end flex-col pt-3 px-3 text-right relative h-60 h-96">
                <button className='absolute bg-tertiary p-2 rounded-full left-5 text-white top-5' onClick={handleBack}>
                    <GoChevronLeft className='w-6 h-6'/>
                </button>
                <div className="absolute left-0 mt-5">
                    <img src={rescaleElement} alt="rescaleElement"/>
                </div>
                <div className="w-1/2 mr-3 text-position">
                    <p className='text-3xl primary font-bold mb-1 mt-5'>Rescaling</p>
                    <p className='primary leading-norm leading-none'>Scale the package information for safety precautions </p>
                </div>
            </div>
        </div>
        
    );
}

export default RescaleHeader;
