import React from "react";
import '../../../src/style/Shipping.css'
function ShippingCard(props) {
    return (
        <div className='box'>
            <div className='content'>
                {props.children}
            </div>
        </div>
    );
}

export default ShippingCard