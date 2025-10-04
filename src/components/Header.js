import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

function Header() {

    return (
        <header>
          <div className='background'>
            <div className="mountains">
              <div className="mountain mountain5"></div>
              <div className="mountain mountain4"></div>
              <div className="mountain mountain3"></div>
              <div className="mountain mountain2"></div>
              <div className="mountain mountain1"></div>
            </div>
            </div> 
          <div className='wagon'>
            <div className='container logo'><img alt='logo' src='./images/logo.jpg'/><h1>CONTAINER</h1></div>
            <div className='wheels'>
              <div></div>
              <div></div>  
            </div>
          </div>  
    
          <div className='wagon'>
            <div className='container'><Link to="/services">Услуги</Link></div>
            <div className='wheels'>
              <div></div>
              <div></div>  
            </div>
          </div>  
    
          <div className='wagon'>
            <div className='container'><Link to="/">Компания</Link></div>
            <div className='wheels'>
              <div></div>
              <div></div>  
            </div>
          </div>  
    
          <div className='wagon'>
            <div className='container'><Link to="/contacts">Контакты</Link></div>
            <div className='wheels'>
              <div></div>
              <div></div>  
            </div>
          </div>  
        </header>
      );
}
export default Header;