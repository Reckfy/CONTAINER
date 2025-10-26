import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Header2.scss';

function Header2() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`${menuOpen ? 'open' : ''} ${visible ? 'show' : 'hide'}`}>
      <div className="logo">
        <img alt="logo" src="./images/logo.png" />
        <div className="textBlock">
          <h1>CONTAINER</h1>
          <span>International Logistics Company</span>
        </div>
      </div>

      <nav className="navDesktop">
        <Link to="/">Компания</Link>
        <HashLink smooth to="/#connect">Услуги</HashLink>
        <Link to="/contacts">Контакты</Link>
      </nav>

      <button
        className={`menu-btn ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Открыть меню"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`mobile-nav ${menuOpen ? 'show' : ''}`}>
        <HashLink smooth to="/" onClick={() => setMenuOpen(false)}>Компания</HashLink>
        <HashLink smooth to="/#connect" onClick={() => setMenuOpen(false)}>Услуги</HashLink>
        <Link to="/contacts" onClick={() => setMenuOpen(false)}>Контакты</Link>
      </nav>
    </header>
  );
}

export default Header2;
