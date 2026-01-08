import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/MainW';
import Services from './pages/Services';
import Contacts from './pages/Contacts';
import QRModal from './components/QRModal';
import { useState } from 'react';


export const MAIL = 'ilc.container888@gmail.com';

function App() {

  const [showQR, setShowQR] = useState(false);

  const openQR = () => {
    setShowQR(true);
  };

  const closeQR = () => {
    setShowQR(false);
  };

  return (
    <>
      <QRModal isOpen={showQR} onClose={closeQR} />
      <Header />
      <Routes>
        <Route path="/" element={<Main openQR={openQR} />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer openQR={openQR} />
    </>
  );
}

export default App;
