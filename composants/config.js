// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  { getFirestore }from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHm_KM8_WpXiingp2fJ36bDTnqui9bB0c",
  authDomain: "projet-musee-annabelle.firebaseapp.com",
  projectId: "projet-musee-annabelle",
  storageBucket: "projet-musee-annabelle.appspot.com",
  messagingSenderId: "639001064357",
  appId: "1:639001064357:web:48d7a734367e48d8062e4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getFirestore(app); 

//const auth = getAuth(app); // Initialisez Firebase Authentication

//export { auth }; 
export default db;