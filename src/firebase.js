import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCVKbJ7Q5Yf0T2N0vTGsBrFYjLwPhUgkOk",
  authDomain: "whatsapp-clone-a4903.firebaseapp.com",
  projectId: "whatsapp-clone-a4903",
  storageBucket: "whatsapp-clone-a4903.appspot.com",
  messagingSenderId: "624679758289",
  appId: "1:624679758289:web:c05e6f524085139c0898f0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
