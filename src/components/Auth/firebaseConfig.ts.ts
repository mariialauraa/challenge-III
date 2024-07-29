import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC0E6tgiKJQxeMHa3Hj6agMJwm_6I2a0tE",
    authDomain: "e-commerce-45516.firebaseapp.com",
    projectId: "e-commerce-45516",
    storageBucket: "e-commerce-45516.appspot.com",
    messagingSenderId: "942139487319",
    appId: "1:942139487319:web:b1c96aa446c2f5b8101f12"
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)