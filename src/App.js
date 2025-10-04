import Header from './components/Header'
import Botter from './components/Botter'
import { Routes, Route } from 'react-router-dom'
import Main from './pages/MainW'
import Services from './pages/Services'
import Contacts from './pages/Contacts'

function App() {
    return (
        <div>
          <Header />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contacts" element={<Contacts />} />
            </Routes>
          <Botter />
        </div>
      );
}

export default App;