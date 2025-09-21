"use client";
import '../../styles/header.scss'

export default function Header() {

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
        <div className='container'><img src='./images/logo.png' /></div>
        <div className='wheels'>
          <div></div>
          <div></div>  
        </div>
      </div>  

      <div className='wagon'>
        <div className='container'><h1>УСЛУГИ</h1></div>
        <div className='wheels'>
          <div></div>
          <div></div>  
        </div>
      </div>  

      <div className='wagon'>
        <div className='container'><h1>КОМПАНИЯ</h1></div>
        <div className='wheels'>
          <div></div>
          <div></div>  
        </div>
      </div>  

      <div className='wagon'>
        <div className='container'><h1>КОНТАКТЫ</h1></div>
        <div className='wheels'>
          <div></div>
          <div></div>  
        </div>
      </div>  
    </header>
  );
}
