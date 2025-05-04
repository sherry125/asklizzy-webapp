import './index.css';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';          // ← Import Header
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import FAQ from './pages/FAQ';
import Troubleshooting from './pages/Troubleshooting';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        {/* Render the logo header */}
        <Header />

        {/* Main navigation */}
        <Navbar />

        {/* Route definitions */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/troubleshooting" element={<Troubleshooting />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* Site footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;