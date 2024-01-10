import React, { createContext, useContext, useState } from "react";

const LoadingContext = createContext();

function LoadingContextProvider({ children }) {

  const [loading, setLoading] = useState(true);

  const DataLoaded = () => {
    setLoading(false);
  };

  return (
    <LoadingContext.Provider value={{loading,DataLoaded}}>
      {children}
    </LoadingContext.Provider>
  );
}

export default LoadingContextProvider;

export function useLoadingContext() {
  return useContext(LoadingContext);
}
