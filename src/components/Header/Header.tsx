import styles from './Header.module.scss';
import classNames from 'classnames';
import { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { DispatchContext, StateContext } from '../../Store/Store';
import { Navbar } from '../../enums/Navbar';
import logo from '../../../public/img/physics.png';
import closeIcon from '../../../public/img/icons/close-icon.svg';
import menuIcon from '../../../public/img/icons/menu-icon.svg';

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

  // Объект для отображаемых имен
  const navLabels: Record<string, string> = {
    task: 'роботи',
    create: 'Створити роботу',
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <Link to={'/task'} className={styles.header__logoLink}>
          <img src={logo} alt="Logo" className={styles.header__logo} />
        </Link>
        <div className={styles.header__navbar}>
          {Object.values(Navbar).map(page => (
            <NavLink to={page} className={getNavbarLinkClass} key={page}>
              {navLabels[page] || page}
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
            <img src={closeIcon} className={styles.header__closeIcon} />
          ) : (
            <img src={menuIcon} className={styles.header__menuIcon} />
          )}
        </button>
      </div>
    </header>
  );
};
