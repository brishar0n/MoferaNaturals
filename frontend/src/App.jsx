import './style/App.css'
import Homepage from './pages/Homepage';
import Login from './components/auth/Login';
import WelcomeBack from './pages/WelcomeBack';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} exact />
        <Route path="/login" element={<Login />} exact />
        <Route path="/welcomeback" element={<WelcomeBack />} exact />
      </Routes>
    </Router>
  );
}

export default App