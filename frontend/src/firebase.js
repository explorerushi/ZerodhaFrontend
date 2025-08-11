import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDZsspacycLcDntxiOZ2iIH8uMdghnX0ZM",
  authDomain: "zerodha-5f8bf.firebaseapp.com",
  projectId: "zerodha-5f8bf",
  storageBucket: "zerodha-5f8bf.firebasestorage.app",
  messagingSenderId: "70047454431",
  appId: "1:70047454431:web:cad2fc780c8fc2de4ac56a",
  measurementId: "G-97D960L7E2"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);

// Export both so they can be used anywhere
export { app, auth };
