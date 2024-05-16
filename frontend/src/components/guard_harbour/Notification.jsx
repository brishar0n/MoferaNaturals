function Notification({shipmentId, centra, date, time}) {
    return (
        <div className="flex justify-start gap-3 px-5 py-3">
            <img src="src/assets/notifications/sample_profile.svg" className="w-8 h-8"></img>
            <div className="flex flex-col gap-1 text-start">
                <p className="text-sm leading-5"><span className="font-semibold primary">Shipment ID #{shipmentId}</span> has been shipped by Centra {centra}</p>
                <div className="flex flex-row items-center">
                    <p className="text-septenary text-xs font-medium flex-1">{date}, {time}</p>
                    <button className="bg-primary text-white px-4 py-1 text-xs rounded-3xl ml-2">TRACK</button>
                </div>
            </div>
        </div>
    )

}

export default Notification;