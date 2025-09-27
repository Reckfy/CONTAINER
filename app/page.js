import '../styles/style.scss'
import '../styles/main.scss'
import Header from './components/Header';

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <h1>КОМПАНИЯ</h1>
        <div className='greyField'>
        <div className='textBlock'>
          <p>
          Логистика для нас — это гораздо больше, чем доставка груза
          в сохранности из точки А в точку Б.
          </p>
          <p>
          Мы доставляем грузы из Китая, Европы и Турции, гарантируя нашим клиентам лучшие условия. 
          Для нас важно не только обеспечить сохранность груза и быструю доставку, но и быть на связи с клиентом на каждом этапе,
          поддерживать прозрачность сделки. 
          </p>
        </div>
        <div className='directorInfo'>
          <img className='avatar' src='./images/avatar.png' />
          <b>Понассийская Ирина</b>
          <p>Генеральный директор компании
            CONTAINER
          </p>
          <b>Контакты</b>
          <div>
            <a href="https://wa.me/79887648351"><img src='./images/wa.svg' /></a>
            <a href="https://t.me/Irina_workwithChina"><img src='./images/tg.svg' /></a>
          </div>
        </div>
        </div>
        <div className='principes'>
          <h2>РАБОТАЯ С НАМИ ВЫ ПОЛУЧАЕТЕ</h2>
          <div className='panels'>
            <div className='panel'>
              <img src='./images/procent.png'/>
              <p>Минимальную комиссию за доставку грузов</p>
            </div>
            <div className='panel'>
              <img src='./images/phone.png'/>
              <p>Постоянную связь с нашим менеджером</p>
            </div>
            <div className='panel'>
              <img src='./images/valute.png'/>
              <p>Лучшие условия по курсу валют</p>
            </div>
            <div className='panel'>
              <img src='./images/speed.png'/>
              <p>Короткие сроки доставки от 1 дня</p>
            </div>
            <div className='panel'>
              <img src='./images/contract.png'/>
              <p>Работаем только официально по договору</p>
            </div>
            <div className='panel'>
              <img src='./images/poizon.png'/>
              <p>Возможность выкупа и работы с Poizon</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
