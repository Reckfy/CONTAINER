import './Contacts.scss';

export default function Contacts() {
  return (
    <div className="contacts">
      <h1 className="contacts__title">КОНТАКТЫ</h1>

      <div className="contacts__section">
        <h3>Телефон</h3>
        <a href="tel:+7-988-764-83-51" className="contacts__main">+7-988-764-83-51</a>
        <p className="contacts__sub">Пн-Вс 24 часа</p>
      </div>

      <hr />

      <div className="contacts__section">
        <h3>Telegram</h3>
        <a href="https://t.me/Irina_workwithChina" className="contacts__main tg">8-988-764-83-51</a>
      </div>

      <hr />

      <div className="contacts__section">
        <h3>WhatsApp</h3>
        <a href='https://wa.me/79887648351' className="contacts__main wa">8-988-764-83-51</a>
      </div>

      <hr />

      <div className="contacts__section">
        <h3>Email</h3>
        <a
          href="mailto:ilc-container@gmail.com"
          className="contacts__main link"
        >
            ilc-container@gmail.com        </a>
      </div>

      <hr />

      
    </div>
  );
}
