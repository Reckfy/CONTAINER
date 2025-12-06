import './Contacts.scss';

export default function Contacts() {
  return (
    <div className="contacts">
      <h1 className="contacts__title">КОНТАКТЫ</h1>

      <div className="contacts__section">
        <h3>Телефон</h3>
        <a href="tel:+79246708370" className="contacts__main">
          +7-924-670-83-70
        </a>
        <a href="tel:+79145560854" className="contacts__main">
          +7-914-556-08-54
        </a>
        <p className="contacts__sub">Пн-Вс 24 часа</p>
      </div>

      <hr />

      <div className="contacts__section">
        <h3>Telegram</h3>
        <a href="https://t.me/lc_container" className="contacts__main tg">
          @lc_container
        </a>
      </div>

      <hr />

      <div className="contacts__section">
        <h3>WhatsApp</h3>
        <a href="https://wa.me/79246708370" className="contacts__main wa">
          8-924-670-83-70
        </a>
        <a href="https://wa.me/79145560854" className="contacts__main wa">
          8-914-556-08-54
        </a>
      </div>

      <hr />

      <div className="contacts__section">
        <h3>Email</h3>
        <a
          href="mailto:container.ilc@gmail.com"
          className="contacts__main link"
        >
          container.ilc@gmail.com{' '}
        </a>
      </div>

      <hr />
    </div>
  );
}
