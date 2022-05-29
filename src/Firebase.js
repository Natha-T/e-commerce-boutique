
import {getFirestore} from 'firebase/firestore'
import { initializeApp} from "firebase/app";




const firebaseConfig = {
  apiKey: "AIzaSyD_dr74Kf11gaP6EEDMuM_utSgc40w8us8",
  authDomain: "hustlegangtest.firebaseapp.com",
  projectId: "hustlegangtest",
  storageBucket: "hustlegangtest.appspot.com",
  messagingSenderId: "1062744267827",
  appId: "1:1062744267827:web:25a115cf6c592224371746"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

