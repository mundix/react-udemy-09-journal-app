//* Firebase version 2021-10 , on React 17
import 'firebase/firestore';
import 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';
 
 
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBStKooPm7kvc8x678pvGC_Qn14-ECPQqk",
    authDomain: "react-app-cursos-ddc84.firebaseapp.com",
    projectId: "react-app-cursos-ddc84",
    storageBucket: "react-app-cursos-ddc84.appspot.com",
    messagingSenderId: "712351294751",
    appId: "1:712351294751:web:6c58397a99f85321087c2a"
};
 
// Initialize Firebase
initializeApp(firebaseConfig);
 
const db = getFirestore();
 
const googleAuthProvider = new GoogleAuthProvider();
 
export{
    db,
    googleAuthProvider
}