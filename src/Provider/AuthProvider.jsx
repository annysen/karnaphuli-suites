import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React, { createContext } from "react";
import app from "./../Firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  //   registration new user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   login with google
  const googleLogin = (googleProvider) => {
    return signInWithPopup(auth, googleProvider);
  };

  const authInfo = { googleLogin, createUser, login };

  return (
    <>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
    </>
  );
};

export default AuthProvider;
