import rescale from '../../../assets/xyz/rescale.svg';
import reception from '../../../assets/xyz/reception.svg';
import profile from '../../../assets/notifications/profile.svg';
import home from '../../../assets/notifications/home.svg';
import { Link } from "react-router-dom";

function NavbarXYZ() {
    return (
        <div className="bg-secondary flex flex-row justify-evenly py-6 w-full bottom-0 rounded-t-3xl fixed z-50 h-24 items-center">
            <Link to="/xyzdashboard">
                <button><img src={home} alt="rescale" className='w-9'/></button>
            </Link>

            <Link to="/findrescale">
                <button><img src={rescale} alt="rescale" className='w-9'/></button>
            </Link>
        
            <Link to="/receptionpackage">
                <button><img src={reception} alt="reception" className='w-9'/></button>
            </Link>

            <Link to="/profile">
                <button><img src={profile} alt="profile" className='w-7'/></button>
            </Link>
        </div>
    )
}

export default NavbarXYZ;
