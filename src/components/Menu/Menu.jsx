import { Link, useLocation } from 'react-router-dom';

export const Menu = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div id="mob_menu" style={{ display: 'none' }}>
      <nav>
        <Link
          to="/"
          className={`btn btn4 sml ${path === '/' ? 'activeCat' : ''}`}
        >
          Головна
        </Link>

        <Link
          to="/news"
          className={`btn btn4 sml ${path === '/news' ? 'activeCat' : ''}`}
        >
          Новини
        </Link>

        <Link
          to="/team"
          className={`btn btn4 sml ${path === '/team' ? 'activeCat' : ''}`}
        >
          Про нас
        </Link>

        <Link
          to="/contacts"
          className={`btn btn4 sml ${path === '/contacts' ? 'activeCat' : ''}`}
        >
          Контакти
        </Link>

        <a
          href="https://youthcenters.net.ua/join/"
          target="_blank"
          rel="nofollow noreferrer noopener"
          className="btn btn3 big"
        >
          Вступити
        </a>
      </nav>
    </div>
  );
};
