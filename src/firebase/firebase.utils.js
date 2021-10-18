import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDKFy5HXFK9_Vus2lhyrY_kxmn9Nc9hBoQ",
  authDomain: "crown-db-70548.firebaseapp.com",
  projectId: "crown-db-70548",
  storageBucket: "crown-db-70548.appspot.com",
  messagingSenderId: "583465399986",
  appId: "1:583465399986:web:98acb7c4a216a59abafbab",
  measurementId: "G-KMYLPZM0WJ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
