import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCzWcUtudtEFI6YN4rSRsY85nX4qItlll8",
    authDomain: "mandem-attendance.firebaseapp.com",
    projectId: "mandem-attendance",
    storageBucket: "mandem-attendance.firebasestorage.app",
    messagingSenderId: "529111181954",
    appId: "1:529111181954:web:7934e8d26f908a6667e29b",
    measurementId: "G-D41N8KLQHQ"
};

// Initialize Firebase (check if already initialized for Next.js SSR/HMR)
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

export const db = getFirestore(app);

// Initialize Analytics only in browser
export const analytics = typeof window !== "undefined" ? isSupported().then(yes => yes ? getAnalytics(app) : null) : null;
