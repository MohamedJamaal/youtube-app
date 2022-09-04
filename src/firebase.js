import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// import firebase from 'firebase';

// import 'firebase/auth'; // for mail config

const firebaseConfig = {
  apiKey: 'AIzaSyC8O685PeRJayf2k-r3veKBsEhkJUmFGWo',
  authDomain: 'yt-clone93.firebaseapp.com',
  projectId: 'yt-clone93',
  storageBucket: 'yt-clone93.appspot.com',
  messagingSenderId: '481799526018',
  appId: '1:481799526018:web:7068953bbe121b4002469b',
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
