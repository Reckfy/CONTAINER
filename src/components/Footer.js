import './Footer.scss'

function Botter() {
    return (
        <div className='footer'>
            <div className='contacts_footer'>
            <div className='contact'>
                <h2>Контакты</h2>
                <div>
                    <a href="tel:+7-988-764-83-51">+7-988-764-83-51</a>
                    <a href="https://wa.me/79887648351"><img alt='' src='./images/wa.svg' /></a>
                    <a href="https://t.me/Irina_workwithChina"><img alt='' src='./images/tg.svg' /></a>
                </div>
            </div>
            <div className='contact'>
                <h2>Email</h2>
                <div>
                    <a href="mailto:ilc-container@gmail.com">ilc-container@gmail.com</a>
                </div>
            </div>
            </div>
            <p>© 2022 - 2025 CONTAINER. Все права защищены</p>
        </div>
      );
}

export default Botter;