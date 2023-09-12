// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4OzsQNWrdLtrhb_ExacGqLNpfigdr6Vw",
  authDomain: "art-shop-476a4.firebaseapp.com",
  projectId: "art-shop-476a4",
  storageBucket: "art-shop-476a4.appspot.com",
  messagingSenderId: "341346138664",
  appId: "1:341346138664:web:fe69371871664273f7131d",
  measurementId: "G-VV1NX814ZH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);