/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CompanyProfile from './pages/About/CompanyProfile';
import MissionVision from './pages/About/MissionVision';
import ChairmanMessage from './pages/About/ChairmanMessage';
import Capabilities from './pages/About/Capabilities';
import OurService from './pages/OurService';
import Knits from './pages/Products/Knits';
import Woven from './pages/Products/Woven';
import Sweater from './pages/Products/Sweater';
import Uniforms from './pages/Products/Uniforms';
import Machineries from './pages/Machineries';
import ContactUs from './pages/ContactUs';
import { ScrollToTop } from './components/ScrollToTop';
import FloatingScrollTop from './components/FloatingScrollTop';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <FloatingScrollTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/company-profile" element={<CompanyProfile />} />
            <Route path="/mission-vision-values" element={<MissionVision />} />
            <Route path="/chairman-md-message" element={<ChairmanMessage />} />
            <Route path="/our-capabilities" element={<Capabilities />} />
            <Route path="/our-service" element={<OurService />} />
            <Route path="/knits" element={<Knits />} />
            <Route path="/woven" element={<Woven />} />
            <Route path="/sweater" element={<Sweater />} />
            <Route path="/uniforms" element={<Uniforms />} />

            {/* Legacy product URLs kept for backward compatibility */}
            <Route path="/knit-mens" element={<Knits />} />
            <Route path="/knit-womens" element={<Knits />} />
            <Route path="/knit-kids" element={<Knits />} />
            <Route path="/woven-mens" element={<Woven />} />
            <Route path="/woven-womens" element={<Woven />} />
            <Route path="/woven-kids" element={<Woven />} />
            <Route path="/sweater-mens" element={<Sweater />} />
            <Route path="/sweater-womens" element={<Sweater />} />
            <Route path="/sweater-kids" element={<Sweater />} />
            <Route path="/production-machineries" element={<Machineries />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

