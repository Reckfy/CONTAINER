//import Header from './components/Header'
import Header2 from './components/Header2';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/MainW';
import Services from './pages/Services';
import Contacts from './pages/Contacts';

export const MAIL = 'ilc.container888@gmail.com';

function App() {
  return (
    <div>
      <Header2 />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
