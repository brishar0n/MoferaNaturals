import receptionElement from '../../../assets/xyz/elementreception.svg';
import '../../../style/xyz/xyz_mobile/ReceptionPackage.css';

function ReceptionHeader() {
    return (
        <div className="flex place-items-end flex-col pt-3 px-3 text-right relative mb-7 space">
            <div className="absolute left-0 -mt-10 center">
                <img src={receptionElement} alt="receptionElement"/>
            </div>
            <div className="w-1/2 mr-3 mt-5 text-position relative">
                <p className='text-3xl primary font-bold mb-1 mt-5'>Reception Package</p>
                <p className='primary leading-norm leading-none font-thin'>Recipient and Sender package to notify </p>
            </div>
        </div>
    )
}

export default ReceptionHeader;