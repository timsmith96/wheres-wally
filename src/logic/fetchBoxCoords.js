import db from '../firebase/config';
import { doc, getDoc } from 'firebase/firestore';

const fetchCoords = async (name) => {
  const docSnap = await getDoc(doc(db, 'characters', name));

  return docSnap.data();
};

export default fetchCoords;
