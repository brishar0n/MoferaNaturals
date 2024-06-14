import React from 'react';
import vectorpackage from '../../../assets/xyz/vectorpackage.svg';
import '../../../style/xyz/xyz_mobile/RescalePackage.css';

function PackageDetails({ packageData, packageNewWeight, setPackageNewWeight }) {

    const handleOnWeightChange = (event) => {
        setPackageNewWeight(event.target.value)
    }

    return (
        <div className='bg-white mb-5 w-3/4 mx-auto p-4 rounded-2xl text-left relative mt-5'>
            <img src={vectorpackage} alt="package" className='absolute ml-5 vector'/>
            <p className='primary font-bold text-center mb-2 title'>Package ID #{packageData.id}</p>
            <p className='items-start primary text-xs mb-1 font-medium'>Package Information</p>
            <p className='items-start text-xs mb-2'>Weight:</p>
            <p className='mb-2 rounded-md bg-quinary px-2 py-1 w-full text-xs'>{packageData.weight} kg</p>
            <p className='items-start primary text-xs mb-1 font-medium'>New weight</p>
            <p className='items-start text-xs mb-2'>Rescaled weight:</p>
            <input type="number" value={packageNewWeight} onChange={handleOnWeightChange} className='mb-2 rounded-md bg-quinary px-2 py-1 w-full text-xs'/>
        </div>
    );
}

export default PackageDetails;
