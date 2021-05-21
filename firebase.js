import {
  APIKEY,
  APPID,
  AUTHDOMAIN,
  MESSAGINGSENDERID,
  PROJECTID,
  STORAGEBUCKET,
} from '@env';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: APIKEY,
  authDomain: AUTHDOMAIN,
  projectId: PROJECTID,
  storageBucket: STORAGEBUCKET,
  messagingSenderId: MESSAGINGSENDERID,
  appId: APPID,
};

console.log(firebaseConfig);

let firebaseapp;
if (!firebase.apps.length) {
  firebaseapp = firebase.initializeApp(firebaseConfig);
}
const storage = firebase.storage();

export { storage };
