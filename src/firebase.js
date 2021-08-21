import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBgWAi-TBTPkp8aEMtFxS_gXO7ZwoP2nn8",
  authDomain: "reizoko-app.firebaseapp.com",
  projectId: "reizoko-app",
  storageBucket: "reizoko-app.appspot.com",
  messagingSenderId: "750088048369",
  appId: "1:750088048369:web:7731f1fac71934e7ffe350",
  measurementId: "G-SFPWNNTWTT",
};

firebase.initializeApp(firebaseConfig);
