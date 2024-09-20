import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAZwa5XZHF68KJIwwfNqGUacqioq8-pMGg",
  authDomain: "react-hook-form-ddae7.firebaseapp.com",
  projectId: "react-hook-form-ddae7",
  storageBucket: "react-hook-form-ddae7.appspot.com",
  messagingSenderId: "1005691408050",
  appId: "1:1005691408050:web:f2fc688043759c7e6e03ab",
  measurementId: "G-7NSQ6T3BGH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app