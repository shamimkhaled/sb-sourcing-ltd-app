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
import KnitMens from './pages/Products/Knit/KnitMens';
import KnitWomens from './pages/Products/Knit/KnitWomens';
import KnitKids from './pages/Products/Knit/KnitKids';
import WovenMens from './pages/Products/Woven/WovenMens';
import WovenWomens from './pages/Products/Woven/WovenWomens';
import WovenKids from './pages/Products/Woven/WovenKids';
import SweaterMens from './pages/Products/Sweater/SweaterMens';
import SweaterWomens from './pages/Products/Sweater/SweaterWomens';
import SweaterKids from './pages/Products/Sweater/SweaterKids';
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
            <Route path="/knit-mens" element={<KnitMens />} />
            <Route path="/knit-womens" element={<KnitWomens />} />
            <Route path="/knit-kids" element={<KnitKids />} />
            <Route path="/woven-mens" element={<WovenMens />} />
            <Route path="/woven-womens" element={<WovenWomens />} />
            <Route path="/woven-kids" element={<WovenKids />} />
            <Route path="/sweater-mens" element={<SweaterMens />} />
            <Route path="/sweater-womens" element={<SweaterWomens />} />
            <Route path="/sweater-kids" element={<SweaterKids />} />
            <Route path="/production-machineries" element={<Machineries />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

