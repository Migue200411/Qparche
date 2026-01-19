import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsapp from './components/FloatingWhatsapp';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import CustomDesign from './pages/CustomDesign';
import Info from './pages/Info';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 flex flex-col font-body">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carnaval" element={<Catalog category="carnaval" />} />
            <Route path="/deportiva" element={<Catalog category="deportiva" />} />
            <Route path="/crear" element={<CustomDesign />} />
            <Route path="/info" element={<Info />} />
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsapp />
      </div>
    </Router>
  );
};

export default App;