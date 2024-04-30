import React from 'react';
import vectorpackage from '../../../assets/xyz/vectorpackage.svg';
import '../../../style/xyz/xyz_mobile/RescalePackage.css';

function PackageDetails({ packageData }) {
    return (
        <div className='bg-white mb-5 w-3/4 mx-auto p-4 rounded-2xl text-left relative mt-5'>
            <img src={vectorpackage} alt="package" className='absolute ml-5 vector'/>
            <p className='primary font-bold text-center mb-2 title'>Package ID #{packageData.packageID}</p>
            <p className='items-start primary text-xs mb-1 font-medium'>Package Information</p>
            <p className='items-start text-xs mb-2'>Weight:</p>
            <p className='mb-2 rounded-md bg-quinary px-2 py-1 w-full text-xs'>{packageData.weight} kg</p>
            <p className='items-start primary text-xs mb-1 font-medium'>Factor</p>
            <p className='items-start text-xs mb-2'>Constant:</p>
            <input type="number" className='mb-2 rounded-md bg-quinary px-2 py-1 w-full text-xs'/>
        </div>
    );
}

export default PackageDetails;
