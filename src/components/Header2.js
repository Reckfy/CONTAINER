import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import './Header2.scss'

function Header2() {

    return (
        <header>
            <div className='logo'>
                <img alt='logo' src='./images/logo.png'/>
                <h1>CONTAINER</h1>
            </div>
            <div>
            <Link to="/">Компания</Link>
            <HashLink to='/#connect'>Услуги</HashLink>
            <Link to="/contacts">Контакты</Link>
            </div>
            
        </header>
      );
}
export default Header2;