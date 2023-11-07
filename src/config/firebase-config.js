import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAE2UYKoyltonEoLWW9RG43EFsEl_-InI8",
  authDomain: "share-your-project-ff8d2.firebaseapp.com",
  projectId: "share-your-project-ff8d2",
  storageBucket: "share-your-project-ff8d2.appspot.com",
  messagingSenderId: "735314452647",
  appId: "1:735314452647:web:0a5b1bebb64bf7a12fbb82",
  measurementId: "G-7B0E9PWNQP",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
