import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC2_jPgV2bxkF75xXMtavgIIjwwF3V9XUU",
  authDomain: "mnda-store-26ba1.firebaseapp.com",
  projectId: "mnda-store-26ba1",
  storageBucket: "mnda-store-26ba1.appspot.com",
  messagingSenderId: "1039458603506",
  appId: "1:1039458603506:web:58f6694bd6061359749b6b",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
