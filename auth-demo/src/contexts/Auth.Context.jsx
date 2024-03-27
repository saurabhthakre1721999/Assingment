import React, { createContext, useCallback, useContext, useState } from "react";
import {
  clearSession,
  getLoggedInProfile,
  saveSession,
} from "../services/session.service";

// Create context for authentication
const authContext = createContext();

// Custom hook for using authentication context
export const useAuth = () => {
  return useContext(authContext);
};

// AuthProvider component for managing authentication state
const AuthProvider = ({ children }) => {
  // Initialize user profile state with the logged-in user's data
  const [userProfile, setUserProfile] = useState(getLoggedInProfile());

  // Callback function to handle user sign out
  const onSignOut = useCallback(() => {
    clearSession();
    // Reset user profile state on sign out
    setUserProfile(null);
  }, []);

  // Callback function to save session data and update user profile state
  const onSaveSession = useCallback(
    ({ userToken, refreshUserToken, ...profile }) => {
      console.log("refreshtocken", refreshUserToken);
      saveSession({ userToken, refreshUserToken, ...profile });
      setUserProfile(profile);
    },
    []
  );

  // Return the context provider with value containing user profile and callback functions
  return (
    <authContext.Provider value={{ userProfile, onSignOut, onSaveSession }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
