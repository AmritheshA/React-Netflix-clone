import { createContext, useContext, useEffect, useState } from "react";
import { auth,database } from "../firbaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut(){
    return signOut(auth);
  }

  useEffect(() =>{
    const unAuthenticated = onAuthStateChanged(auth,(currentUser) =>{
      setUser(currentUser);
    });

    return () =>{
      unAuthenticated();
    }

  })

  return (
    <AuthContext.Provider value={{ user, signUp, logIn ,logOut }}>
      {children}
    </AuthContext.Provider>
  );
}
export function UserAuth() {
  return useContext(AuthContext);
}
