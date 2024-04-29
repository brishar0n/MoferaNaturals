import NavbarXYZ from '../../../components/xyz/xyz_mobile/NavbarXYZ.jsx'
import SearchRescale from '../../../components/xyz/xyz_mobile/SearchRescale.jsx'

function Rescale() {
    return (
        <div className='bg-quaternary w-screen h-screen overflow-y-scroll'>
            <SearchRescale />
            <NavbarXYZ />
        </div>
    )
}

export default Rescale;