import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCKBsOKcDT-P-zadXF6jnKTsDEtkJ5_76Q",
    authDomain: "linkedin-clone-bd50b.firebaseapp.com",
    projectId: "linkedin-clone-bd50b",
    storageBucket: "linkedin-clone-bd50b.appspot.com",
    messagingSenderId: "1011622417428",
    appId: "1:1011622417428:web:d535df6a993b4ed5958301"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };