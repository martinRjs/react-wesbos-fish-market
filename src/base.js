import Rebase from 're-base';
import firebase from 'firebase';


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDdUDf3sq0yWJkFean2OBdOhOR4VUO0TzU",
  authDomain: "catch-of-the-day-martin-rojas.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-martin-rojas.firebaseio.com"
});


const base = Rebase.createClass(firebase.database());


export { firebaseApp }

export default base;