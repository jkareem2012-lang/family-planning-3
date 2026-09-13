import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyD0XNQS67jGbQdGzGf9sWspNueT2RxM95U",
    authDomain: "damietta-family-planning.firebaseapp.com",
    projectId: "damietta-family-planning",
    storageBucket: "damietta-family-planning.firebasestorage.app",
    messagingSenderId: "53784566626",
    appId: "1:53784566626:web:63c4d3a4f52aa1d9d6ea3b"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
