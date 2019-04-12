import Rebase from 're-base';
import firebase from 'firebase';

//TODO: add api key
const firebaseApp = firebase.initializeApp({
  authDomain: "catch-of-the-day-martin-rojas.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-martin-rojas.firebaseio.com"
});


const base = Rebase.createClass(firebase.database());


export { firebaseApp }

export default base;