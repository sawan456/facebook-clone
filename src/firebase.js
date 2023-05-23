import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB0wJ2mckwyhnFuE7DS_MOSdmAe7QY1KXc",
    authDomain: "facebook-clone-a2415.firebaseapp.com",
    projectId: "facebook-clone-a2415",
    storageBucket: "facebook-clone-a2415.appspot.com",
    messagingSenderId: "1080441593006",
    appId: "1:1080441593006:web:a63fed72f5d9fae4bca13f",
    measurementId: "G-HNN83FBMGN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;