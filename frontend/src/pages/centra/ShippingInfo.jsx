// Tyrone
import { useState, useEffect } from 'react' 
import box from '../../assets/shipping/box-with-tape.svg'
import backarrow from '../../assets/shipping/back_arrow.svg'
import bgupper from '../../assets/shipping/bg_upper.svg'
import bglowerleft from '../../assets/shipping/bg_lower_left.svg'
import bglowerright from '../../assets/shipping/bg_lower_right.svg'
import menubar from '../../assets/shipping/menu_bar.svg'
import mascot from '../../assets/shipping/mascot.svg'
import ShippingCard from '../../components/centra/ShippingCard'
import '../../style/Shipping.css'

export const ShippingInfo = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 600);
        };

        // Initial check on component mount
        handleResize();

        // Add event listener to update isMobile when window is resized
        window.addEventListener('resize', handleResize);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='bg-quaternary h-screen'>
            {isMobile && (
                <>
                    <div className='h-screen'>
                        <img src={ bgupper } className='w-screen absolute'/>

                        <img src={ backarrow } className='absolute top-11 left-7'/>

                        <p className='text-white text-4xl font-bold absolute text-left top-32 right-48'> Shipping <br></br> Information</p>

                        <ShippingCard>
                            <div className='text-left ml-16 mt-5'>
                                <label htmlFor='package-weight' className='text-primary font-medium'> Package Weight: <br></br></label>
                                <input
                                    name='package-weight'
                                    id='package-weight'
                                    className='border border-gray-300 rounded-md w-5/6 px-3 py-1.5 bg-quinary'
                                />
                            </div>

                            <div className='text-left ml-16 mt-5'>
                                <label htmlFor='total-packages' className='text-primary font-medium'> Total Packages: <br></br></label>
                                <input
                                    name='total-packages'
                                    id='total-packages'
                                    className='border border-gray-300 rounded-md w-5/6 px-3 py-1.5 bg-quinary'
                                />
                            </div>

                            <div className='text-left ml-16 mt-5'>
                                <label htmlFor='expedition' className='text-primary font-medium'> Expedition: <br></br></label>
                                <input
                                    name='expedition'
                                    id='expedition'
                                    className='border border-gray-300 rounded-md w-5/6 px-3 py-1.5 bg-quinary'
                                />
                            </div>

                            <div className='text-left ml-16 mt-5'>
                                <label htmlFor='date' className='text-primary font-medium'> Date: <br></br></label>
                                <input
                                    name='date'
                                    id='date'
                                    className='border border-gray-300 rounded-md w-5/6 px-3 py-1.5 bg-quinary'
                                />
                            </div>

                            <div className='mt-8'>
                                <button className='rounded-full bg-secondary text-white font-bold px-4 py-2 w-36 btn-login'> NOTIFY MOFERA </button>
                            </div>

                            <br></br><br></br>

                            <div className='mt-8'>
                                <button className='rounded-full bg-secondary text-white font-bold px-4 py-2 w-36 btn-login'> Login </button>
                            </div>

                            <img src={mascot} className='absolute bottom-12 right-10' />
                        </ShippingCard>

                        <div className="absolute bottom-0">
                            <img src={bglowerleft} className='w-screen absolute' />
                            <img src={bglowerright} className='w-screen absolute' />
                            <div className="menu_bar">
                                <img src={menubar} className='w-screen absolute' />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}
