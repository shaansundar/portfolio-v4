"use client";
import { useState, createContext, ReactNode } from "react";

const options = ["Close", "Projects", "About"];

type TabContextType = {
  children: ReactNode;
};

type TabContextState = {
  tab: string;
  setTab: (tab: string) => void;
};

export const TabContext = createContext<TabContextState>({
  tab: "",
  setTab: () => {},
});

const TabContextProvider = ({ children }: TabContextType) => {
  const [tab, setTab] = useState(options[0]);
  return (
    <TabContext.Provider value={{ tab, setTab }}>
      {children}
    </TabContext.Provider>
  );
};

export default TabContextProvider;
