import account from '../../assets/profile/account.svg'
import { MdLogout } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";

function Account({handleLogOut, handleDelete}) {
    return (
        <div className="w-full bg-denary mt-2 rounded-2xl px-5 py-5 flex flex-col">
            <div className="flex mb-4 items-center justify-start gap-x-8">
                <img src={account} className="text-primary w-6 h-6"/>
                <Link to="/editprofile">
                    <button className="font-medium text-primary">Edit profile</button>
                </Link>
            </div>
            <div className="flex mb-4 items-center justify-start gap-x-8">
                <MdLogout className="text-primary w-6 h-6" />
                <button className="font-medium text-primary" onClick={handleLogOut}>Log Out</button>
            </div>
            <div className="flex items-center justify-start gap-x-8">
                <RiDeleteBin6Line className="text-primary w-6 h-6" />
                <button className="font-medium text-primary" onClick={handleDelete}>Delete Account</button>
            </div>
        </div>
    )

}

export default Account;