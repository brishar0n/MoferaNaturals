import React from "react";


function Card(props) {
    return (
    <div className='bg-white h-3/4 w-screen absolute bottom-0 rounded-tl-4xl'>
        {props.children}
    </div>
    );
}

export default Card