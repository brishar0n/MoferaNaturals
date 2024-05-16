import notifElement from '../../assets/guardharbour/notifElement.svg'

function ShipmentNotifHeader() {
    return (
        <div className='mb-5'>
            <div className="flex mx-auto flex-col pt-3 ml-6 text-left relative">
                <div className="w-1/2">
                    <p className='text-3xl primary font-bold mb-1 mt-5 leading-snug'>Shipment Notification</p>
                </div>
                <div className="absolute right-4">
                    <img src={notifElement} alt="notifElement"/>
                </div>
            </div>
        </div>
    )
}

export default ShipmentNotifHeader;