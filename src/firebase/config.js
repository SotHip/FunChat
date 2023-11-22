import firebase from  'firebase/compat/app';
import 'firebase/compat/analytics';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDkuSIl9-BXeM3tnjjfA0QMlYfjkHLr7PE",
    authDomain: "funchat-3d976.firebaseapp.com",
    projectId: "funchat-3d976",
    storageBucket: "funchat-3d976.appspot.com",
    messagingSenderId: "1066350928103",
    appId: "1:1066350928103:web:f5733c02d6d1472b02c242",
    measurementId: "G-S0T55XPFP5"
  };
  
  // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
firebase.analytics(app);


  const auth = firebase.auth();
  const db = firebase.firestore();

  export {db, auth};
  export default firebase;