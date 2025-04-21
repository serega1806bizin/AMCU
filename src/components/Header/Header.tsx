import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import logo from '/public/logo.svg';

export const Header = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <header id="nav">
      <div className="container">
        <nav className="col">
          <div className="flrr">
            <Link to="/" className={classNames('logo', 'btno')}>
              <img src={logo} alt="" />
            </Link>

            <div className="links">
              <Link
                to="/"
                className={classNames('btn btn4 sml hid-s hid-m', {
                  activeCat: path === '/',
                })}
              >
                Головна
              </Link>
              <Link
                to="/news"
                className={classNames('btn btn4 sml hid-s hid-m', {
                  activeCat: path === '/news',
                })}
              >
                Новини
              </Link>
              <Link
                to="/about-us"
                className={classNames('btn btn4 sml hid-s hid-m', {
                  activeCat: path === '/about-us',
                })}
              >
                Про нас
              </Link>
              <Link
                to="/contacts"
                className={classNames('btn btn4 sml hid-s hid-m', {
                  activeCat: path === '/contacts',
                })}
              >
                Контакти
              </Link>
            </div>

            <a
              href="https://youthcenters.net.ua/join/"
              target="_blank"
              rel="nofollow noreferrer noopener"
              className="btn btn3 big prevent hid-s hid-m"
            >
              Вступити
            </a>
          </div>

          <button className="hamb menu-open hid-l hid-xl">
            <svg
              width="18"
              height="14"
              viewBox="0 0 18 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                // eslint-disable-next-line max-len
                d="M0.29248 0.25H17.7925V1.75H0.29248V0.25ZM0.29248 6.25H17.7925V7.75H0.29248V6.25ZM0.29248 12.25H17.7925V13.75H0.29248V12.25Z"
                fill="#252525"
              />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
};
