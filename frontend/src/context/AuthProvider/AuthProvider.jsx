import React from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./../../firebase/firebase.inti";
import { AuthContext } from "../AuthContext/AuthContext";

const AuthProvider = ({ children }) => {
  // Register user with email and password
  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign in user with email and password
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const authInfo = {
    registerUser,
    signInUser,
  };

  return <AuthContext value={{ authInfo }}>{children}</AuthContext>;
};

export default AuthProvider;
