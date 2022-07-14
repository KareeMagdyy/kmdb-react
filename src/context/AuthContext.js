import { useEffect, useState, useContext, createContext } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const signUp = (email, password, firstName, lastName) =>
    createUserWithEmailAndPassword(auth, email, password, firstName, lastName);

  const signIn = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const logOut = () => signOut(auth);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) =>
      setUser(currentUser)
    );
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, signUp, signIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => useContext(AuthContext);
