// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBy4MPvkzLs1IvXysKRVGgLy3k-UupS99g",
  authDomain: "artshop-coder.firebaseapp.com",
  projectId: "artshop-coder",
  storageBucket: "artshop-coder.appspot.com",
  messagingSenderId: "17039127578",
  appId: "1:17039127578:web:7cf41e71f1f42961b88da3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore (app);

export default db