// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


// Your web app's Firebase configuration //

// const firebaseConfig = {
//   apiKey: AIzaSyDqHlz6WujWW_X8FSj_i5GKFxsRTGIrgt8
//   authDomain: shaadidotcom-af40a.firebaseapp.com
//   projectId: shaadidotcom-af40a
//   storageBucket: shaadidotcom-af40a.appspot.com
//   messagingSenderId: 921872908604
//   appId: 1:921872908604:web:cb18a8bc623b853ec05e39
// };