import styles from './Header.module.scss';
import classNames from 'classnames';
import { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { DispatchContext, StateContext } from '../../Store/Store';
import { Navbar } from '../../enums/Navbar';

const getNavbarLinkClass = ({ isActive }: { isActive: boolean }) =>
  classNames(styles.header__navbarItem, {
    [styles['is-active']]: isActive,
  });

export const Header = () => {
  const dispatch = useContext(DispatchContext);
  const { isMenuVisible } = useContext(StateContext);
  const [wasMenuOpen, setWasMenuOpen] = useState(isMenuVisible);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        if (isMenuVisible) {
          setWasMenuOpen(true);
          dispatch({ type: 'closeMenu' });
        }
      } else {
        if (wasMenuOpen) {
          dispatch({ type: 'openMenu' });
          setWasMenuOpen(false);
        }
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [dispatch, isMenuVisible, wasMenuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <Link to={'/phones'} className={styles.header__logoLink}>
          <img
            src="./img/physics.png"
            alt="Logo"
            className={styles.header__logo}
          />
        </Link>
        <div className={styles.header__navbar}>
          {Object.values(Navbar).map(page => (
            <NavLink to={page} className={getNavbarLinkClass} key={page}>
              {page}
            </NavLink>
          ))}
        </div>
      </div>

      <div className={styles.header__iconsContainer}>
        <button
          className={styles.header__menuButton}
          onClick={() =>
            isMenuVisible
              ? dispatch({ type: 'closeMenu' })
              : dispatch({ type: 'openMenu' })
          }
        >
          {isMenuVisible ? (
            <img
              src="/img/icons/close-icon.svg"
              className={styles.header__closeIcon}
            />
          ) : (
            <img
              src="/img/icons/menu-icon.svg"
              className={styles.header__menuIcon}
            />
          )}
        </button>
      </div>
    </header>
  );
};
