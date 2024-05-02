import rescale from '../../../assets/xyz/rescale.svg';
import reception from '../../../assets/xyz/reception.svg';
import { Link } from "react-router-dom";

function NavbarXYZ() {
    return (
        <div className="bg-secondary flex flex-row justify-evenly py-6 absolute w-full bottom-0 rounded-t-3xl fixed">
            <Link to="/findrescale">
                <button><img src={rescale} alt="rescale" className='w-12'/></button>
            </Link>
        
            <button><img src={reception} alt="reception" className='w-12'/></button>
        </div>
    )
}

export default NavbarXYZ;
