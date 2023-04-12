import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBMXK7Jup3O45T8RAHashw5RTe-mlujMkA',
  authDomain: 'chatgpt-messenger-422cf.firebaseapp.com',
  projectId: 'chatgpt-messenger-422cf',
  storageBucket: 'chatgpt-messenger-422cf.appspot.com',
  messagingSenderId: '604872504390',
  appId: '1:604872504390:web:97045af0c911a586d5c647',
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
