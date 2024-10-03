"use client";
import { useState, createContext, ReactNode } from "react";

type PauseContextType = {
  children: ReactNode;
};

type PauseContextState = {
  pause: boolean;
  setPause: (tab: boolean) => void;
};

export const PauseContext = createContext<PauseContextState>({
  pause: false,
  setPause: () => {},
});

const PauseContextProvider = ({ children }: PauseContextType) => {
  const [pause, setPause] = useState(false);
  return (
    <PauseContext.Provider value={{ pause, setPause }}>
      {children}
    </PauseContext.Provider>
  );
};

export default PauseContextProvider;
