import sampleProfile from  "../../../src/assets/notifications/sample_profile.svg"

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

function Notification({text, datetime, handleTrack, shipmentId}) {
    return (
        <div className="flex justify-start gap-3 px-5 py-3">
            <img src={sampleProfile} className="w-8 h-8"></img>
            <div className="flex flex-col gap-1 text-start">
                <p className="text-sm leading-5" dangerouslySetInnerHTML={{ __html: text }}></p>
                <div className="flex flex-row items-center">
                    <p className="text-septenary text-xs font-medium flex-1">{monthNames[datetime.getMonth()]} {datetime.getDate()}, {datetime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                    <button className="bg-secondary text-white px-5 py-[6px] text-xs rounded-3xl ml-2 font-medium" onClick={() => handleTrack(shipmentId)}>TRACK</button>
                </div>
            </div>
        </div>
    )

}

export default Notification;