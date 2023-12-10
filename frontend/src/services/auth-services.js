import { auth } from '@/config/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { useRouter } from 'next/navigation';

export const router = useRouter;

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log(error);
  }
};

export const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    localStorage.setItem('user', userCredential.user.refreshToken);
    console.log(userCredential);
    return userCredential;
  } catch (error) {
    throw error;
  }
};

export const register = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    localStorage.setItem('user', userCredential.user.refreshToken);
    console.log(userCredential);
    return userCredential;
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async () => {
  try {
    const user = auth.currentUser;
    deleteUser(user).then(() => {
      console.log('User deleted');
    });
  } catch (error) {
    console.log(user);
  }
};
