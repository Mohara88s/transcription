import styles from './AboutPage.module.css';

export default function AboutPage() {
  return (
    <div className={styles.AboutPage}>
      <h2>Developed by:</h2>
      <ul>
        <li>
          <h3>Vitalii Vasylets</h3>
          <p>mohara88@ukr.net</p>
        </li>
        <li>
          <h3>Kontsevoi Serhii</h3>
          <p>serkon157@ukr.net</p>
        </li>
      </ul>
    </div>
  );
}
