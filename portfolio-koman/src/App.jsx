import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import SocProject from './pages/SocProject.jsx';

function App() {
  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projets/homelab-soc" element={<SocProject />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;