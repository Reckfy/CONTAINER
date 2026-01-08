import './Contacts.scss';
import { MAIL } from '../App';

export default function Contacts() {
  return (
    <div className="contacts">
      <h1 className="contacts__title">КОНТАКТЫ</h1>

      <div className="contacts__section">
        <h3>Телефон</h3>
        <a
          href="tel:+79881001888"
          className="contacts__main"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          +7(988)100-18-88
        </a>
        <a
          href="tel:+79145560854"
          className="contacts__main"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          +7(914)556-08-54
        </a>
        <p className="contacts__sub">Пн-Вс 24 часа</p>
      </div>

      <hr />

      <div className="contacts__section">
        <h3>WeChat</h3>
        <img className="qr" alt="qr)" src="/images/qr-wechat.jpg"></img>
      </div>

      <hr />

      <div className="contacts__section">
        <h3>Telegram</h3>
        <a
          href="https://t.me/lc_container"
          className="contacts__main tg"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          @lc_container
        </a>
      </div>

      <hr />

      <div className="contacts__section">
        <h3>Telegram-канал</h3>
        <a
          href="https://t.me/logistic_container"
          className="contacts__main tg"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          @logistic_container
        </a>
      </div>

      <hr />

      <div className="contacts__section">
        <h3>WhatsApp</h3>
        <a
          href="https://wa.me/79881001888"
          className="contacts__main wa"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          8(988)100-18-88
        </a>
        <a
          href="https://wa.me/79145560854"
          className="contacts__main wa"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          8(914)556-08-54
        </a>
      </div>

      <hr />

      <div className="contacts__section">
        <h3>Email</h3>
        <a
          href={`mailto:${MAIL}`}
          className="contacts__main link"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          {MAIL}{' '}
        </a>
      </div>

      <hr />
    </div>
  );
}
