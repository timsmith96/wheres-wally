import styles from './Highscores.module.css';
import HighscoreRow from './HighscoreRow';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import db from '../../firebase/config';
import { useState, useEffect } from 'react';
import sortHighscores from '../../logic/sortHighscores';

export default function Highscores() {
  const [highscores, setHighscores] = useState('');

  let rows;

  const getScores = async () => {
    const arr = [];
    const q = query(collection(db, 'highscores'), orderBy('timeTaken', 'asc'));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc);
      arr.push(doc);
    });
    setHighscores(arr);
  };

  useEffect(() => {
    getScores();
  }, []);

  if (highscores) {
    const sortedHighscores = sortHighscores(highscores);
    console.log(sortedHighscores);
    rows = highscores.map((doc) => {
      console.log(doc.data());
      return (
        <HighscoreRow
          key={doc.id}
          name={doc.id}
          timeTaken={doc.data().timeTaken}
          position={sortedHighscores.indexOf(doc) + 1}
        />
      );
    });
  }
  return (
    <div className={styles.container}>
      <h1>Highscores</h1>
      <div className={styles.highscores}>
        <ul>{rows}</ul>
      </div>
    </div>
  );
}
