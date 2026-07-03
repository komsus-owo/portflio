import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

import Home from './pages/Home.jsx';
import ActiveDirectoryProject from './pages/ActiveDirectoryProject.jsx';
import SocProject from './pages/SocProject.jsx';
import EbiosProject from './pages/EbiosProject.jsx';
import AzureAuditProject from './pages/AzureAuditProject.jsx';
import LinuxSocProject from './pages/LinuxSocProject.jsx';

function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/projets/active-directory"
          element={<ActiveDirectoryProject />}
        />

        <Route
          path="/projets/homelab-soc"
          element={<SocProject />}
        />

        <Route
          path="/projets/ebios-risk-manager"
          element={<EbiosProject />}
        />

        <Route
          path="/projets/audit-azure"
          element={<AzureAuditProject />}
        />

        <Route
          path="/projets/analyse-soc-linux"
          element={<LinuxSocProject />}
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;