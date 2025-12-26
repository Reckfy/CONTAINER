import './Footer.scss';
import {MAIL} from '../App';

function Footer() {
  return (
    <div className="footer">
      <div className="contacts_footer">
        <div className="contact">
          <h2>Контакты</h2>
          <div>
            <a href="tel:+79881001888" target="_blank" rel="noopener noreferrer nofollow">+7(988)100-18-88</a>
            <a href="https://wa.me/79881001888" target="_blank" rel="noopener noreferrer nofollow">
              <img alt="" src="./images/wa.svg" />
            </a>
            <a href="https://t.me/lc_container" target="_blank" rel="noopener noreferrer nofollow">
              <img alt="" src="./images/tg.svg" />
            </a>
          </div>
        </div>
        <div className="contact">
          <h2>Email</h2>
          <div>
            <a href={`mailto:${MAIL}`} target="_blank" rel="noopener noreferrer nofollow">{MAIL}</a>
          </div>
        </div>
      </div>
      <div className="under_footer">
        <p>© 2022 - 2025 CONTAINER. Все права защищены</p>
        <p>
          Разработано <a href="https://t.me/xrororo" target="_blank" rel="noopener noreferrer nofollow">Reckfy</a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
