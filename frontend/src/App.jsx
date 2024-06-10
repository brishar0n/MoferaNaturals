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
import TrackShipping from './pages/centra/TrackShipping';
import TrackShippingID from './pages/centra/TrackShippingID';
import { ShippingInfo } from './pages/centra/ShippingInfo';
import ReceptionPackage from './pages/xyz/xyz_mobile/ReceptionPackage';
import ReceptionDocument from './pages/xyz/xyz_mobile/ReceptionDocument';
import UserManagement from './pages/admin/UserManagement';
import AddCheckpoint from './pages/guard_harbour/AddCheckpoint';
import ViewCheckpoint from './pages/guard_harbour/ViewCheckpoint';
import ArrivedPackages from './pages/xyz/xyz_desktop/ArrivedPackages';
import ShipmentNotification from './pages/guard_harbour/ShipmentNotification';
import AdminPage from './pages/desktop/AdminManagement';
import CentraActivityMonitor from './pages/xyz/xyz_desktop/CentraActivityMonitor';
import GetStartedDesktop from './pages/auth-desktop/GetStartedDesktop';
import WelcomeDesktop from './pages/auth-desktop/WelcomeDesktop';
import LoginDesktop from './pages/auth-desktop/LoginDesktop';
import AdminTable from './components/admin/AdminTable';
import AddUserButton from './components/admin/AddUserButton';
import NavbarAdmin from './components/admin/NavbarAdmin';
import EditUserButton from './components/admin/EditUserButton';
import ShipmentTracker from './pages/xyz/xyz_desktop/ShipmentTracker';
import WetLeavesManager from './pages/centra/WetLeaves/WetLeavesManager';
import DryLeavesManager from './pages/centra/DryLeaves/DryLeavesManager';
import PowderManager from './pages/centra/Powder/PowderManager';
import PackageManager from './pages/centra/Package/PackageManager';
import DryDashboard from './pages/xyz/xyz_desktop/DryDashboard';
import WetDashboard from './pages/xyz/xyz_desktop/WetDashboard';
import PowderDashboard from './pages/xyz/xyz_desktop/PowderDashboard';
import Profile from './pages/profile/Profile';
import EditProfile from './pages/profile/EditProfile';
import GHDashboard from './pages/guard_harbour/GHDashboard';

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
        <Route path="/wetleaves" element={<WetLeavesManager />} exact />
        <Route path="/dryleaves" element={<DryLeavesManager />} exact />
        <Route path="/powder" element={<PowderManager />} exact />
        <Route path="/package" element={<PackageManager/>} exact/>
        <Route path="/shippinginfo" element={<ShippingInfo />} exact/>
        <Route path="/trackshipping" element={<TrackShipping />} exact/>
        <Route path="/trackshipping/:shippingId" element={<TrackShippingID />} exact/>
        <Route path="/notify" element={<Notify/>} exact/>

        {/* Guard Harbour */}
        <Route path="/ghdashboard" element={<GHDashboard/>} exact />
        <Route path="/addcheckpoint" element={<AddCheckpoint/>} exact />
        <Route path="/viewcheckpoint" element={<ViewCheckpoint/>} exact />
        <Route path="/shipmentnotification" element={<ShipmentNotification/>} exact />

        {/* XYZ Mobile */}
        <Route path="/findrescale" element={<FindRescalePackage />} exact />
        <Route path="/rescalepackage/:packageId" element={<RescalingPackage />} exact />
        <Route path="/receptionpackage" element={<ReceptionPackage />} exact />
        <Route path="/receptiondocument" element={<ReceptionDocument />} exact />

        {/* Profile Page */}
        <Route path="/profile" element={<Profile/>} exact/>
        <Route path="/editprofile" element={<EditProfile/>} exact/>

        {/* Authentication Desktop */}
        <Route path="/getstarteddesktop" element={<GetStartedDesktop/>} exact/>
        <Route path="/logindesktop" element={<LoginDesktop/>} exact/>
        <Route path="/welcomedesktop" element={<WelcomeDesktop/>} exact/>

        {/* XYZ Desktop */}
        <Route path="/arrivedpackages" element={<ArrivedPackages />} exact />
        <Route path="/shipmenttracker" element={<ShipmentTracker />} exact />
        <Route path="/centraactivitymonitor" element={<CentraActivityMonitor />} exact />
        <Route path="/dashboard" element={<WetDashboard />} exact />
        <Route path="/dashboard-wet" element={<WetDashboard />} exact />
        <Route path="/dashboard-dry" element={<DryDashboard />} exact />
        <Route path="/dashboard-powder" element={<PowderDashboard />} exact />

        {/* Admin */}
        <Route path="/usermanagement" element={<UserManagement />} exact />
        <Route path="/adminpage" element={<AdminPage />}/>
        <Route path="/navbaradmin" element={<NavbarAdmin/>}/>
        {/* <Route path="/usertable" element={<UserTable/>}/> */}
        <Route path="/adminsidebar" element={<AdminSidebar/>}/>
      </Routes> 
    </Router>
  );
}

export default App;
