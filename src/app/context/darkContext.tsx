"use client";
import { useState, createContext, ReactNode } from "react";

type DarkContextType = {
  children: ReactNode;
};

type DarkContextState = {
  dark: boolean;
  setDark: (tab: boolean) => void;
};

export const DarkContext = createContext<DarkContextState>({
  dark: false,
  setDark: () => {},
});

const DarkContextProvider = ({ children }: DarkContextType) => {
  const [dark, setDark] = useState(false);
  return (
    <DarkContext.Provider value={{ dark, setDark }}>
      {children}
    </DarkContext.Provider>
  );
};

export default DarkContextProvider;
