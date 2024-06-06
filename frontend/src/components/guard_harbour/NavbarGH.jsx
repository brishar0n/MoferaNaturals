import home from '../../assets/notifications/home.svg';
import box from '../../assets/notifications/package.svg';
import notification from '../../assets/notifications/bell.svg';
import profile from '../../assets/notifications/profile.svg';
import { Link } from "react-router-dom";

function NavbarGH() {
    return (
        <div className="bg-secondary flex flex-row justify-evenly py-6 w-full h-24 bottom-0 rounded-t-3xl fixed z-50">
            <Link to="/addcheckpoint">
                <button><img src={box} alt="package" className='w-10'/></button>
            </Link>
        
            <Link to="/shipmentnotification">
                <button><img src={notification} alt="notification" className='w-10'/></button>
            </Link>

            <Link to="/profile">
                <button><img src={profile} alt="profile" className='w-9'/></button>
            </Link>
        </div>
    )
}

export default NavbarGH;
