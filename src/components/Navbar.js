import { Link } from 'react-router-dom';

// styles
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>
          <Link to="/">Where's Wally?</Link>
        </li>
        <li>
          <Link to="/highscores">Highscores</Link>
        </li>
      </ul>
    </nav>
  );
}
