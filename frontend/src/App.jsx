import './style/App.css'
import Homepage from './pages/Homepage';
import Login from './components/auth/Login';
import Verification from './components/auth/Verification';
import ResetPassword from './components/auth/ResetPassword';
import WelcomeBack from './pages/WelcomeBack';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from './components/auth/Register';
// import Notify from './components/notif/notify';
import FindRescalePackage from './pages/xyz/xyz_mobile/FindRescalePackage';
import RescalingPackage from './pages/xyz/xyz_mobile/RescalingPackage';
import History from './pages/centra/History';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} exact />
        <Route path="/welcomeback" element={<WelcomeBack />} exact />
        <Route path="/login" element={<Login />} exact />
        <Route path="/register" element={<Register />} exact />
        <Route path="/history" element={<History />} exact />
        <Route path="/verification" element={<Verification />} exact/>
        <Route path="/resetpass" element={<ResetPassword />} exact/>
        {/* <Route path="/notify" element={<Notify/>} exact/> */}
        <Route path="/findrescale" element={<FindRescalePackage />} exact />
        <Route path="/rescalepackage/:packageId" element={<RescalingPackage />} exact />
      </Routes>
    </Router>
  );
}

export default App
