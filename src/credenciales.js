// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAi4oZElozUf-LXZAwAiopq-XN6my4uoK8",
  authDomain: "login-react-5d0d4.firebaseapp.com",
  projectId: "login-react-5d0d4",
  storageBucket: "login-react-5d0d4.appspot.com",
  messagingSenderId: "551141309051",
  appId: "1:551141309051:web:b843f6f935026b227400de"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;