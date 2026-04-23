import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "./../../firebase/firebase.inti";
import { AuthContext } from "../AuthContext/AuthContext";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Register user with email and password
  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign in user with email and password
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Sign in with Google
  const signInWIthGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Log out user
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (profileData) => {
    return updateProfile(auth.currentUser, profileData);
  };

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    registerUser,
    signInUser,
    signInWIthGoogle,
    updateUserProfile,
    logOut,
    loading,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
