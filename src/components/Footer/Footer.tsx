import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer>
      <div className="container" style={{ paddingTop: '2rem' }}>
        <div className="col-3 hid-s hid-m"></div>
        <div className="col-6 col-m col-s can-animate in-view in-view-animated">
          <div className="created">
            <p className="h6 aaaa">
              Веб сайт створено в межах програми «Розвиток та підтримка молоді
              Кіровоградської області в умовах воєнного стану через молодіжні
              ініціативи та UPSHIFT”, яку реалізує ГО «СКЦ «Задзеркалля» у
              партнерстві з дитячим фондом ООН (ЮНІСЕФ).
            </p>
          </div>

          <div className="menu">
            <Link to="/news" className="btn btn4 h6">
              Новини
            </Link>
            <Link to="/about-us" className="btn btn4 h6">
              Про нас
            </Link>
            <Link
              to="/contacts"
              target="_blank"
              rel="nofollow noreferrer noopener"
              className="btn btn4 h6"
            >
              Контакти
            </Link>
          </div>
          <div className="soc">
            <a
              href="https://t.me/weworldchanel"
              target="_blank"
              rel="nofollow noreferrer noopener"
              className="btno"
            >
              <img
                src="https://weworld.org.ua/wp-content/uploads/soc-tg.svg"
                alt="Telegram"
              />
            </a>
            <a
              href="https://www.instagram.com/we.world.go/"
              target="_blank"
              rel="nofollow noreferrer noopener"
              className="btno"
            >
              <img
                src="https://weworld.org.ua/wp-content/uploads/soc-ig.svg"
                alt="Instagram"
              />
            </a>
            <a
              href="https://www.facebook.com/weworld.go"
              target="_blank"
              rel="nofollow noreferrer noopener"
              className="btno"
            >
              <img
                src="https://weworld.org.ua/wp-content/uploads/soc-fb.svg"
                alt="Facebook"
              />
            </a>
          </div>

          <div className="txt">
            <br />© 2025 Кропивницька філія Асоціації молодіжних центрів
            України, Всі права захищені.
          </div>
        </div>
      </div>
    </footer>
  );
};
