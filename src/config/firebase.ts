import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
export const firebaseConfig: any = {
  apiKey: 'AIzaSyBktZt_yO3me7mdNpG4-3XPM2eZNtfCzCI',
  authDomain: 'treasured-portraits.firebaseapp.com',
  databaseURL: 'https://treasured-portraits.firebaseio.com',
  projectId: 'treasured-portraits',
  storageBucket: 'treasured-portraits.appspot.com',
  messagingSenderId: '986640445346',
  appId: '1:986640445346:web:c835e711d314503737ccfb',
  measurementId: 'G-6P4GYF42G8',
  userProfile: 'users',
  useFirestoreForProfile: true
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
// firebase.storage();
// firebase.functions();
// firebase.auth();
firebase.firestore();
