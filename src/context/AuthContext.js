import { useEffect, useState, useContext, createContext } from "react";
import { auth, db } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const signUp = async (email, password, firstName, lastName) => {
    if (!email || !password || !firstName || !lastName) return;
    await createUserWithEmailAndPassword(auth, email, password);
    setDoc(doc(db, "users", email), {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      displayName: `${firstName} ${lastName}`,
      created: new Date().toISOString(),
      savedShows: [],
    });
  };

  const signIn = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const logOut = () => signOut(auth);

  const forgotPassword = (email) => sendPasswordResetEmail(auth, email);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) =>
      setUser(currentUser)
    );
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, signUp, signIn, logOut, forgotPassword }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => useContext(AuthContext);
