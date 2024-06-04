import './style/App.css'
import Homepage from './pages/Homepage';
import Login from './components/auth/Login';
import Verification from './components/auth/Verification';
import ResetPassword from './components/auth/ResetPassword';
import WelcomeBack from './pages/WelcomeBack';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from './components/auth/Register';
import Notify from './components/notif/notify';
import FindRescalePackage from './pages/xyz/xyz_mobile/FindRescalePackage';
import RescalingPackage from './pages/xyz/xyz_mobile/RescalingPackage';
import CentraDashboardHomePage from './pages/centra/CentraDashboard';
import History from './pages/centra/History';
import AddDryLeaves from './pages/centra/AddDryLeaves';
import AddMachine from './pages/centra/AddMachine';
import EditMachine from './pages/centra/EditMachine';
import TrackShipping from './pages/centra/TrackShipping';
import TrackShippingTwo from './pages/centra/TrackShippingTwo';
import { ShippingInfo } from './pages/centra/ShippingInfo';
import ReceptionPackage from './pages/xyz/xyz_mobile/ReceptionPackage';
import ReceptionDocument from './pages/xyz/xyz_mobile/ReceptionDocument';
import UserManagement from './pages/admin/UserManagement';
import AddPowder from './pages/centra/AddPowder';
import AddCheckpoint from './pages/guard_harbour/AddCheckpoint';
import ViewCheckpoint from './pages/guard_harbour/ViewCheckpoint';
import ArrivedPackages from './pages/xyz/xyz_desktop/ArrivedPackages';
import ShipmentNotification from './pages/guard_harbour/ShipmentNotification';
import FlourDryLeaves from './pages/centra/FlourDryLeaves';
import AdminPage from './pages/desktop/AdminManagement';
import CentraActivityMonitor from './pages/xyz/xyz_desktop/CentraActivityMonitor';
import GetStartedDesktop from './pages/auth-desktop/GetStartedDesktop';
import WelcomeDesktop from './pages/auth-desktop/WelcomeDesktop';
import LoginDesktop from './pages/auth-desktop/LoginDesktop';
import AdminTable from './components/admin/AdminTable';
import AddUserButton from './components/admin/AddUserButton';
import NavbarAdmin from './components/admin/NavbarAdmin';
import EditUserButton from './components/admin/EditUserButton';
import AddPackage from './pages/centra/AddPackage';
import PackageHistory from './pages/centra/PackageHistory';
import PowderHistory from './pages/centra/ViewPowder';
import ShipmentTracker from './pages/xyz/xyz_desktop/ShipmentTracker';
import WetLeavesManager from './pages/centra/WetLeaves/WetLeavesManager';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} exact />

        {/* Authentication Mobile */}
        <Route path="/welcomeback" element={<WelcomeBack />} exact />
        <Route path="/login" element={<Login />} exact />
        <Route path="/register" element={<Register />} exact />
        <Route path="/verification" element={<Verification />} exact/>
        <Route path="/resetpass" element={<ResetPassword />} exact/>

        {/* Centra */}
        <Route path="/centradashboard" element={<CentraDashboardHomePage/>} exact />
        <Route path="/history" element={<History/>} exact />
        <Route path="/adddryleaves" element={<AddDryLeaves />} exact />
        <Route path="/flourdryleaves" element={<FlourDryLeaves/>} exact />
        <Route path="/wetleaves" element={<WetLeavesManager />} exact />
        <Route path="/addmachine" element={<AddMachine />} exact />
        <Route path="/editmachine" element={<EditMachine />} exact />
        <Route path="/addpowder" element={<AddPowder />} exact />
        <Route path="/viewpowder" element={<PowderHistory />} exact />
        <Route path="/shippinginfo" element={<ShippingInfo />} exact/>
        <Route path="/trackshipping" element={<TrackShipping />} exact/>
        <Route path="/trackshippingtwo" element={<TrackShippingTwo />} exact/>
        <Route path="/notify" element={<Notify/>} exact/>
        <Route path="/addpackage" element={<AddPackage/>} exact/>
        <Route path="/packagehistory" element={<PackageHistory/>} exact/>

        {/* Guard Harbour */}
        <Route path="/addcheckpoint" element={<AddCheckpoint/>} exact />
        <Route path="/viewcheckpoint" element={<ViewCheckpoint/>} exact />
        <Route path="/shipmentnotification" element={<ShipmentNotification/>} exact />

        {/* XYZ Mobile */}
        <Route path="/findrescale" element={<FindRescalePackage />} exact />
        <Route path="/rescalepackage/:packageId" element={<RescalingPackage />} exact />
        <Route path="/receptionpackage" element={<ReceptionPackage />} exact />
        <Route path="/receptiondocument" element={<ReceptionDocument />} exact />

        {/* Authentication Desktop */}
        <Route path="/getstarteddesktop" element={<GetStartedDesktop/>} exact/>
        <Route path="/logindesktop" element={<LoginDesktop/>} exact/>
        <Route path="/welcomedesktop" element={<WelcomeDesktop/>} exact/>

        {/* XYZ Desktop */}
        <Route path="/arrivedpackages" element={<ArrivedPackages />} exact />
        <Route path="/shipmenttracker" element={<ShipmentTracker />} exact />
        <Route path="/centraactivitymonitor" element={<CentraActivityMonitor />} exact />

        {/* Admin */}
        <Route path="/usermanagement" element={<UserManagement />} exact />
        <Route path="/adminpage" element={<AdminPage />}/>
        <Route path="/admintable" element={<AdminTable />}/>
        <Route path="/adduserbutton" element={<AddUserButton/>}/>
        <Route path="/navbaradmin" element={<NavbarAdmin/>}/>
        <Route path="/edituserbutton" element={<EditUserButton/>}/>
      </Routes> 
    </Router>
  );
}

export default App
