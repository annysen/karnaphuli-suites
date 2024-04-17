import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "./../Firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

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

  // reset password
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // show user when login
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const logout = () => {
    return signOut(auth);
  };

  const authInfo = {
    logout,
    googleLogin,
    createUser,
    login,
    resetPassword,
    user,
  };

  return (
    <>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
    </>
  );
};

export default AuthProvider;
