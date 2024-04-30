import React from 'react';
import '../../../style/xyz/xyz_mobile/RescalePackage.css';

function MaterialsToCover() {
    return (
        <div className='bg-white mb-5 w-3/4 mx-auto py-4 px-5 rounded-2xl text-left relative'>
            <p className='primary font-bold text-center mb-2'>Materials to Cover</p>
            <p className='items-start primary text-xs mb-1 font-medium'>Materials:</p>
            <div className='flex flex-col text-xs primary'>
                <div className="flex items-center mb-3 mt-2">
                    <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4"/>
                    <label htmlFor="default-radio-1" className="ms-2 text-xs">Plastic Wrap</label>
                </div>
                <div className="flex items-center mb-3">
                    <input id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4"/>
                    <label htmlFor="default-radio-2" className="ms-2 text-xs">Bubble Wrap</label>
                </div>
                <div className="flex items-center mb-3">
                    <input id="default-radio-3" type="radio" value="" name="default-radio" className="w-4 h-4"/>
                    <label htmlFor="default-radio-3" className="ms-2 text-xs">Styrofoam</label>
                </div>
                <div className="flex items-center mb-3">
                    <input aria-checked id="default-radio-4" type="radio" value="" name="default-radio" className="w-4 h-4"/>
                    <label htmlFor="default-radio-4" className="ms-2 text-xs">Kraft Paper</label>
                </div>
                <div className="flex items-center mb-3">
                    <input id="default-radio-5" type="radio" value="" name="default-radio" className="w-4 h-4"/>
                    <label htmlFor="default-radio-5" className="ms-2 text-xs">Packing Tape</label>
                </div>
                <div className="flex items-center mb-3">
                    <input id="default-radio-6" type="radio" value="" name="default-radio" className="w-4 h-4"/>
                    <label htmlFor="default-radio-6" className="ms-2 text-xs">Buriap</label>
                </div>
            </div>
        </div>
    );
}

export default MaterialsToCover;
