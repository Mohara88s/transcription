import { NavLink } from 'react-router-dom';
import styles from './DisplayNavigation.module.css';

const DisplayNavigation = () => (
  <nav className={styles.DisplayNavigation}>
    <ul className={styles.DisplayNavigationList}>
      <li className={styles.DisplayNavigationList__item}>
        <NavLink
          exact
          to="/"
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          Home
        </NavLink>
      </li>
      <li className={styles.DisplayNavigationList__item}>
        <NavLink
          exact
          to="/transcription-trainings"
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          Transcription trainings
        </NavLink>
      </li>
      <li className={styles.DisplayNavigationList__item}>
        <NavLink
          exact
          to="/about"
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          About
        </NavLink>
      </li>
    </ul>
  </nav>
);
export default DisplayNavigation;
