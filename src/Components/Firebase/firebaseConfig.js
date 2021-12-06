import { initializeApp } from "@firebase/app";
import { getDatabase } from "@firebase/database";

export const firebaseConfig = {
  apiKey: "AIzaSyCxnWv5KbpxOlM8HoLrmbVtbqQ3w7oYRq4",
  authDomain: "mrdonaldsss.firebaseapp.com",
  databaseURL: "https://mrdonaldsss-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mrdonaldsss",
  storageBucket: "mrdonaldsss.appspot.com",
  messagingSenderId: "1093090726045",
  appId: "1:1093090726045:web:a64bd40ddd81476ad3c474"
};

export const app = initializeApp(firebaseConfig);

export const db = getDatabase(app, firebaseConfig.databaseURL);