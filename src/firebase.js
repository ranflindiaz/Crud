import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBRTcHm5xnbTcx9NOjVv2BHCSb9GLUoDic",
    authDomain: "react-crud-256b8.firebaseapp.com",
    projectId: "react-crud-256b8",
    storageBucket: "react-crud-256b8.appspot.com",
    messagingSenderId: "511185780318",
    appId: "1:511185780318:web:c2e7df25140f10519e7ecf",
    measurementId: "G-Q56QMS4HDB"
  };

  export const firebaseApp = firebase.initializeApp(firebaseConfig);