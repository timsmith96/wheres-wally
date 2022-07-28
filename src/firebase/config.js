import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDI4_YkjsMr5EaiXcRzQQXKO4bBQn4OI58',
  authDomain: 'where-s-wally-ce5f2.firebaseapp.com',
  projectId: 'where-s-wally-ce5f2',
  storageBucket: 'where-s-wally-ce5f2.appspot.com',
  messagingSenderId: '98672485148',
  appId: '1:98672485148:web:cc74141e83820fe73dd0d9',
};

// init firebase
const app = initializeApp(firebaseConfig);

// init service
const db = getFirestore(app);

export default db;
