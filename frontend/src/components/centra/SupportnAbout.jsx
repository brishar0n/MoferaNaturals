import account from '../../assets/profile/account.svg'
import { IoMdHelpCircleOutline } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineFlag } from "react-icons/md";
import { MdOutlinePolicy } from "react-icons/md";

function SupportnAbout() {
    return (
        <div className="w-full bg-denary mt-2 rounded-2xl px-5 py-5 flex flex-col">
            <div className="flex mb-4 items-center justify-start gap-x-8">
                <MdOutlineFlag className="text-primary w-6 h-6" />
                <button className="font-medium text-primary">Report a problem</button>
            </div>
            <div className="flex mb-4 items-center justify-start gap-x-8">
                <IoMdHelpCircleOutline className="text-primary w-6 h-6" />
                <button className="font-medium text-primary">Help & Support</button>
            </div>
            <div className="flex items-center justify-start gap-x-8">
                <MdOutlinePolicy className="text-primary w-6 h-6" />
                <button className="font-medium text-primary">Terms and Policies</button>
            </div>
        </div>
    )

}

export default SupportnAbout;