import classNames from 'classnames';
import { NavLink, useLocation } from 'react-router-dom';

const getNavbarLinkClass = ({ isActive }: { isActive: boolean }) =>
  classNames(styles.header__navbarItem, {
    [styles['is-active']]: isActive,
  });

export const Header = () => {
  const location = useLocation();

  return (
    <header id="nav">
      <div className="container">
        <nav className="col">
          <div className="flrr">
            <NavLink to="/" className={classNames('logo', 'btno')}>
              <img src="/public/logo.svg" alt="" />
            </NavLink>
            <div className="links">
              <NavLink to="/" className="btn btn4 sml hid-s hid-m">
                Головна
              </NavLink>
              <NavLink to="/news" className="btn btn4 sml hid-s hid-m">
                Новини
              </NavLink>
              <NavLink to="/about-us" className="btn btn4 sml hid-s hid-m">
                Про нас
              </NavLink>
              <NavLink to="/contacts" className="btn btn4 sml hid-s hid-m">
                Контакти
              </NavLink>
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
