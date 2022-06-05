import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const auth = getAuth();

// eslint-disable-next-line no-unused-vars
export const loginRequest = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const RegisterRequest = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);
