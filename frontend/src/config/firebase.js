import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAN_oLJ3_UURF-Jk9wQFoCqmTg6mjp39Ys',
  authDomain: 'pet-wink.firebaseapp.com',
  projectId: 'pet-wink',
  storageBucket: 'pet-wink.appspot.com',
  messagingSenderId: '1006564175473',
  appId: '1:1006564175473:web:2cbea86f4871c5d118b5d0',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
