import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase.config';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const logInWithEmailAndPassword = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
  }
}

const logout = () => {
  signOut(auth);
}

export {
  auth,
  logInWithEmailAndPassword,
  logout
}