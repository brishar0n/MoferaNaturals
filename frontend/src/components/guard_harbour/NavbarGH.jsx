import home from '../../assets/notifications/home.svg';
import box from '../../assets/notifications/package.svg';
import notification from '../../assets/notifications/bell.svg';
import profile from '../../assets/notifications/profile.svg';
import { Link } from "react-router-dom";

function NavbarGH() {
    return (
        <div className="bg-secondary flex flex-row justify-evenly py-6 w-full h-24 bottom-0 rounded-t-3xl fixed z-50 items-center">
            <Link to="/ghdashboard">
                <button><img src={home} className='w-8' alt='Home'></img></button>
            </Link>

            <Link to="/addcheckpoint">
                <button><img src={box} alt="package" className='w-8'/></button>
            </Link>
        
            <Link to="/shipmentnotification">
                <button><img src={notification} alt="notification" className='w-8'/></button>
            </Link>

            <Link to="/profile">
                <button><img src={profile} alt="profile" className='w-7'/></button>
            </Link>
        </div>
    )
}

export default NavbarGH;
