import React, { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, googleProvider } from "../firebase";

const AuthContext = createContext(null);

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

// Sync Firebase user into MongoDB (upsert)
const syncUserToMongo = async (user, provider = "email") => {
  try {
    await fetch(`${API_URL}/api/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        uid: user.uid,
        name: user.displayName || "",
        email: user.email,
        photoURL: user.photoURL || "",
        provider,
      }),
    });
  } catch (err) {
    // Non-fatal — user is authenticated in Firebase even if MongoDB sync fails
    console.error("Failed to sync user to MongoDB:", err);
  }
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signup = async (name, email, password) => {
    const credential = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(credential.user, { displayName: name });
    // Reload to get updated displayName
    await credential.user.reload();
    await syncUserToMongo({ ...credential.user, displayName: name }, "email");
    return credential;
  };

  const login = async (email, password) => {
    const credential = await signInWithEmailAndPassword(auth, email, password);
    await syncUserToMongo(credential.user, "email");
    return credential;
  };

  const googleLogin = async () => {
    const credential = await signInWithPopup(auth, googleProvider);
    await syncUserToMongo(credential.user, "google");
    return credential;
  };

  const logout = () => signOut(auth);

  const forgotPassword = (email) => sendPasswordResetEmail(auth, email);

  const getToken = async () => {
    if (!currentUser) return null;
    return await currentUser.getIdToken();
  };

  // Authenticated fetch helper — auto-attaches Bearer token
  const authFetch = async (url, options = {}) => {
    const token = await getToken();
    return fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...(options.headers || {}),
      },
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = { currentUser, loading, signup, login, googleLogin, logout, forgotPassword, getToken, authFetch };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
