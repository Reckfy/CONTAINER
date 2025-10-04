import './Botter.scss'

function Botter() {
    return (
        <botter>
            <div className='contacts'>
                <h2>Контакты</h2>
                <div>
                    <a href="tel:8-988-764-83-51">8-988-764-83-51</a>
                    <a href="https://wa.me/79887648351"><img alt='' src='./images/wa.svg' /></a>
                    <a href="https://t.me/Irina_workwithChina"><img alt='' src='./images/tg.svg' /></a>
                </div>
            </div>
            <div className='contacts'>
                <h2>Email</h2>
                <div>
                    <a href="mailto:">ilc-container@gmail.com</a>
                </div>
            </div>
        </botter>
      );
}

export default Botter;