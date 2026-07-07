import React, { lazy, Suspense, useEffect, useRef, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'; // Asegúrate de usar `useLocation`
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import { IntlProvider } from 'react-intl';
import esMessages from './locales/es.json';
import enMessages from './locales/en.json';
import Documentos from './pages/Documentos';

const messages = {
  es: esMessages,
  en: enMessages,
};
const Home = lazy(() => import('./pages/Home'));
const Descargas = lazy(() => import('./pages/Descargas'));
// Hook para manejar el scroll a la sección con hash en la URL
function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]); // Se ejecuta cada vez que cambia la ubicación (incluyendo el hash)

  return null; // Este componente solo maneja efectos secundarios
}

function App() {
  const [language, setLanguage] = useState('es');

  useEffect(() => {
    const path = window.location.pathname;
    setLanguage(path.startsWith('/en') ? 'en' : 'es');
  }, []);

  const footerRef = useRef(null);

  return (
    <IntlProvider locale={language} messages={messages[language]}>
      <Header footerRef={footerRef} />

      {/* Agrega el componente que maneja el hash */}
      <ScrollToHash />
      <Suspense fallback={<div>Loading...</div>}>

        <Routes>
          {/* Ruta para la página principal en español */}
          <Route path="/" element={<Home />} />

          {/* Ruta para la página Descargas en español */}
          <Route path="/descargas" element={<Descargas />} />
          <Route path="/documentos-importantes" element={<Documentos />} />

          {/* Ruta para la página principal en inglés */}
          <Route path="/en" element={<Home />} />

          {/* Ruta para la página Descargas en inglés */}
          <Route path="/en/descargas" element={<Descargas />} />

        </Routes>
      </Suspense>
      <Footer footerRef={footerRef} />
    </IntlProvider>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
