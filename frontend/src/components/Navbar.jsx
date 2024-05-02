import React from "react"


function NavigationBar(props) {
    return (
        <>
             <div className='bg-secondary w-screen h-24 bottom-0 rounded-t-3xl fixed bottom-0 flex justify-evenly'>
              <div className='flex gap-11'>
                <img src="src/assets/notifications/home.svg" className='w-7'></img>
                <img src="src/assets/notifications/expedition.svg" className='w-7'></img>
              </div>

              <div className='flex justify-center'>
                <img src="src/assets/notifications/plus.svg" className='w-20'></img>
              </div>

            
              <div className='flex gap-11'>
                <img src="src/assets/notifications/bell.svg" className='w-7'></img>
                <img src="src/assets/notifications/profile.svg" className='w-6'></img>
              </div>
            </div>

            {props.children}
        </>
    )
}

export default NavigationBar;