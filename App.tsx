import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsapp from './components/FloatingWhatsapp';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import CustomDesign from './pages/CustomDesign';
import Info from './pages/Info';
import AmorAmistad from './pages/AmorAmistad';

// Simple Error Boundary
interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: { hasError: boolean; };
  props: any;
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50">
          <div className="text-center p-8">
            <h1 className="text-3xl font-black text-slate-900 mb-4">Ups, algo salió mal.</h1>
            <p className="text-slate-600 mb-6">Hubo un error cargando esta sección.</p>
            <a href="/" className="px-6 py-3 bg-q-sport text-white rounded-xl font-bold">Volver al Inicio</a>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 flex flex-col font-body">
        <Navbar />
        <main className="flex-grow">
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/deportiva" element={<Catalog category="deportiva" />} />
              <Route path="/f1" element={<Catalog category="deportiva" subset="f1" />} />
              <Route path="/amor-amistad" element={<AmorAmistad />} />
              <Route path="/crear" element={<CustomDesign />} />
              <Route path="/info" element={<Info />} />
            </Routes>
          </ErrorBoundary>
        </main>
        <Footer />
        <FloatingWhatsapp />
      </div>
    </Router>
  );
};

export default App;