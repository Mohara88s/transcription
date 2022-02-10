import { Link, useRouteMatch, useLocation } from 'react-router-dom';
import styles from './HomePage.module.css';
import transTrainingsImg from '../../public/pictures/transcription_trainings.jpg';

export default function HomePage() {
  const { url } = useRouteMatch();
  const location = useLocation();

  return (
    <div className={styles.HomePage}>
      <h2>Choose trainings:</h2>
      <ul className={styles.LinksList}>
        <li className={styles.LinksList__item}>
          <Link
            to={{
              pathname: `${url}transcription-trainings/`,
              state: { from: location },
            }}
          >
            <h3 className={styles.LinksList__name}>Transcription trainings</h3>
            <img
              src={transTrainingsImg}
              alt="transcription trainings"
              className={styles.LinksList__picture}
            />
          </Link>
        </li>
      </ul>
    </div>
  );
}
