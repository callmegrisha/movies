import classNames from 'classnames';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Logo } from 'assets/svg/Logo';
import { MoviesIcon } from 'assets/svg/MoviesIcon';
import { TvShowsIcon } from 'assets/svg/TvShowsIcon';
import { BookmarksIcon } from 'assets/svg/BookmarksIcon';
import { LogoutIcon } from 'assets/svg/LogoutIcon.tsx';
import { useAppDispatch } from 'services/store.ts';
import { logout } from 'features/auth/authSlice.ts';
import styles from './Nav.module.scss';

export function Nav() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isActive = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? classNames(styles.nav__link, styles['nav__link--active'])
      : styles.nav__link;

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.nav__logo}>
        <Logo />
      </Link>
      <ul className={classNames(styles.nav__list, 'list-reset')}>
        <li className={styles.nav__item}>
          <NavLink to="/" className={isActive}>
            <MoviesIcon />
          </NavLink>
        </li>
        <li className={styles.nav__item}>
          <NavLink to="/tvshows" className={isActive}>
            <TvShowsIcon />
          </NavLink>
        </li>
        <li className={styles.nav__item}>
          <NavLink to="/bookmarks" className={isActive}>
            <BookmarksIcon />
          </NavLink>
        </li>
      </ul>
      <button
        className={classNames(styles.nav__button, styles.nav__link)}
        onClick={handleLogout}
      >
        <LogoutIcon />
      </button>
    </nav>
  );
}
