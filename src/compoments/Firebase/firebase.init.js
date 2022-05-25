import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgKQshekTPg97AgGFo_ow74MP63YMyU5Q",
  authDomain: "vehicleshowroom-de27b.firebaseapp.com",
  projectId: "vehicleshowroom-de27b",
  storageBucket: "vehicleshowroom-de27b.appspot.com",
  messagingSenderId: "99575369190",
  appId: "1:99575369190:web:97c466b2eb914d60085a27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);

export default app;