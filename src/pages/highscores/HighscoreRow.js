import styles from './HighscoreRow.module.css';

export default function HighscoresRow({ name, timeTaken, position }) {
  return (
    <div className={styles.rowContainer}>
      {position === 1 && (
        <img src={require('../../img/1st.png')} alt="trophy" />
      )}
      <div className={styles.contentContainer}>
        <p className={`${position === 1 ? styles.winner : styles.loser}`}>
          {name}
        </p>
        <p className={`${position === 1 ? styles.winner : styles.loser}`}>
          {timeTaken}
        </p>
      </div>
    </div>
  );
}
