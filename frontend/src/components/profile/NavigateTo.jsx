import { IoLeafOutline } from "react-icons/io5";
import { RiShipLine } from "react-icons/ri";
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiPackage } from "react-icons/pi";
import { LuLeaf } from "react-icons/lu";
import { PiTeaBagBold } from "react-icons/pi";
import { Link } from "react-router-dom";

function NavigateTo({role}) {
    return (
        (role === "centra" && (
            <div className="w-full bg-denary mt-2 rounded-2xl px-5 py-5 flex flex-col">
                <div className="flex mb-4 items-center justify-start gap-x-8">
                    <IoLeafOutline className="text-primary w-6 h-6" />
                    <Link to="/wetleaves">
                        <button className="font-medium text-primary">Wet Leaves</button>
                    </Link>
                </div>
                <div className="flex mb-4 items-center justify-start gap-x-8">
                    <LuLeaf className="text-primary w-6 h-6" />
                    <Link to="/dryleaves">
                        <button className="font-medium text-primary">Dry Leaves</button>
                    </Link>
                </div>
                <div className="flex mb-4 items-center justify-start gap-x-8">
                    <PiTeaBagBold className="text-primary w-6 h-6" />
                    <Link to="/powder">
                        <button className="font-medium text-primary">Powder</button>
                    </Link>
                </div>
                <div className="flex items-center mb-4 justify-start gap-x-8">
                    <RiShipLine className="text-primary w-6 h-6" />
                    <Link to="/shippinginfo">
                        <button className="font-medium text-primary">Shipping Info</button>
                    </Link>
                </div>
                <div className="flex items-center mb-4 justify-start gap-x-8">
                    <LiaShippingFastSolid className="text-primary w-6 h-6" />
                    <Link to="/trackshipping">
                        <button className="font-medium text-primary">Track Shipping</button>
                    </Link>
                </div>
                <div className="flex items-center justify-start gap-x-8">
                    <PiPackage className="text-primary w-6 h-6" />
                    <Link to="/package">
                        <button className="font-medium text-primary">Package</button>
                    </Link>
                </div>
            </div>
        ))
    )

}

export default NavigateTo;