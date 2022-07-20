import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyA-po9zZGNWka37t1d71mRDD5n6WfdiR1Y",
  authDomain: "fullclone-70887.firebaseapp.com",
  projectId: "fullclone-70887",
  storageBucket: "fullclone-70887.appspot.com",
  messagingSenderId: "391445635272",
  appId: "1:391445635272:web:2b7279752a18926a8e05fd",
  measurementId: "G-29VN5X2KEX"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };