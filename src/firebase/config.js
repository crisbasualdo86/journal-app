// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyD-UvLczxnweS04Opa3AvIJiEzvUNOc7Pw',
    authDomain: 'react-cursos-5843d.firebaseapp.com',
    projectId: 'react-cursos-5843d',
    storageBucket: 'react-cursos-5843d.appspot.com',
    messagingSenderId: '549781354854',
    appId: '1:549781354854:web:0f39f89951442721d770a7',
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
