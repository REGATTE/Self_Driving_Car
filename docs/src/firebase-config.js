import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Uur web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBu2iZLWQMj0yvvTEgOYUR4RX_p6BI6pj0", //should not publicly available
    authDomain: "fir-authentication-13bde.firebaseapp.com",  //should not publicly available
    projectId: "fir-authentication-13bde",
    storageBucket: "fir-authentication-13bde.appspot.com",
    messagingSenderId: "809907564999",
    appId: "1:809907564999:web:209bd480e9012bc0f2e9e2",
    measurementId: "G-V8127LW02P"
  };

  const app = initializeApp(firebaseConfig);   //initialize the connection between firebase and our project

  export const auth = getAuth(app);    //exporting authentication to other files
