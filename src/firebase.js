import app from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDAgXCziM-lR5HzLaKtRnOBW-ER-mFf53M",
  authDomain: "crud-react-9428e.firebaseapp.com",
  projectId: "crud-react-9428e",
  storageBucket: "crud-react-9428e.appspot.com",
  messagingSenderId: "159070198515",
  appId: "1:159070198515:web:f9ef722bfe01ef38c23586",
};

app.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();

export { db, auth };
