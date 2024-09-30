/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import React, { useContext, useState } from "react";
import { useQuery } from "react-query";
import * as apiClient from "../api-client";
import Toast from "../components/Toast";

// Define the context
const AppContext = React.createContext();

export const AppContextProvider = ({ children }) => {
  const [toast, setToast] = useState(null);
  const { isError } = useQuery("validateToken", apiClient.validateToken, {
    retry: false,
  });

  // Define the showToast function
  const showToast = (toastMessage) => {
    setToast(toastMessage);
    // Optional: Automatically hide the toast after a few seconds
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <AppContext.Provider value={{ showToast, isLoggedIn: !isError }}>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
      {children}
    </AppContext.Provider>
  );
};

// Custom hook for context
export const useAppContext = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }

  return context;
};
