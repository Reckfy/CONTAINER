import './Footer.scss'

function Botter() {
    return (
        <div className='footer'>
            <div className='contacts_footer'>
            <div className='contact'>
                <h2>Контакты</h2>
                <div>
                    <a href="tel:+79246708370">+7-924-670-83-70</a>
                    <a href="https://wa.me/79246708370"><img alt='' src='./images/wa.svg' /></a>
                    <a href="https://t.me/lc_container"><img alt='' src='./images/tg.svg' /></a>
                </div>
            </div>
            <div className='contact'>
                <h2>Email</h2>
                <div>
                    <a href="mailto:container.ilc@gmail.com">container.ilc@gmail.com</a>
                </div>
            </div>
            </div>
            <div className='under_footer'>
                <p>© 2022 - 2025 CONTAINER. Все права защищены</p>
                <p>Разработано <a href='https://t.me/xrororo'>Reckfy</a></p>
            </div>
        </div>
      );
}

export default Botter;