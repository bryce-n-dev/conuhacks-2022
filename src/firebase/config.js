import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCuYw_Fb8HqWhEZk9Kt8yKJFoa7whq875g",
  authDomain: "conuhacksdev.firebaseapp.com",
  projectId: "conuhacksdev",
  storageBucket: "conuhacksdev.appspot.com",
  messagingSenderId: "390640064825",
  appId: "1:390640064825:web:dbc7372b16864df1cef0e8",
  measurementId: "G-4LBBXB9DCV"
};


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };