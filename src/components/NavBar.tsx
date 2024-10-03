import {
  Cross2Icon,
  LaptopIcon,
  MoonIcon,
  PauseIcon,
  PersonIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import React, { useContext } from "react";
import Footer from "./Footer";
import { TabContext } from "@/app/context/tabContext";
import { PauseContext } from "@/app/context/pauseContext";
import clsx from "clsx";
import { DarkContext } from "@/app/context/darkContext";

const NavBar = () => {
  const { tab, setTab } = useContext(TabContext);
  const { pause, setPause } = useContext(PauseContext);
  const { dark, setDark } = useContext(DarkContext);

  const setTabState = (_tab: string) => {
    if (tab === _tab) {
      setTab("Close");
    } else {
      setTab(_tab);
    }
  };

  console.log("🚀 ~ NavBar ~ dark:", dark);

  return (
    <div className="w-24 transition-all h-4/5 z-20 dark:border-themeBlue-9 border-r border-y rounded-r-xl bg-themeBlue-2 dark:bg-themeBlue-9 flex flex-col items-center justify-between p-2">
      <header className="h-20 w-full flex font-Yellowtail items-center justify-center font-medium text-themeBlue-11 dark:text-themeBlue-2 prevent-select">
        <h1 className="-rotate-12 text-3xl">Shaan</h1>
      </header>
      <nav className="flex flex-col h-full pt-20 pb-4 items-center justify-between gap-4">
        <div className="flex flex-col h-fit items-center justify-center gap-4">
          <div className="size-10 flex items-center justify-center">
            {" "}
            <button
              onClick={() => setTabState("About")}
              className={clsx(
                "size-9 hover:size-10 rounded-xl hover:rounded-lg cursor-pointer transition-all bg-themeBlue-11 hover:bg-themeBlue-6 text-themeBlue-2 dark:text-themeBlue-11 hover:dark:text-themeBlue-2 dark:hover:bg-themeBlue-6 dark:bg-themeBlue-2 flex items-center justify-center",
                tab === "About" && "bg-themeBlue-6 size-10 rounded-lg"
              )}
            >
              <PersonIcon className=" size-5" />
            </button>
          </div>
          <div className="size-10 flex items-center justify-center">
            {" "}
            <button
              onClick={() => setTabState("Projects")}
              className={clsx(
                "size-9 hover:size-10 rounded-xl hover:rounded-lg cursor-pointer transition-all bg-themeBlue-11 hover:bg-themeBlue-6 text-themeBlue-2 dark:text-themeBlue-11 hover:dark:text-themeBlue-2 dark:hover:bg-themeBlue-6 dark:bg-themeBlue-2 flex items-center justify-center",
                tab === "Projects" && "bg-themeBlue-6 size-10 rounded-lg"
              )}
            >
              <LaptopIcon className="size-5" />
            </button>
          </div>
        </div>
        <div className="flex flex-col h-fit items-center justify-center gap-4">
          <div className="size-10 flex items-center justify-center">
            <button
              onClick={() => setPause(!pause)}
              className={clsx(
                "size-9 hover:size-10 rounded-xl hover:rounded-lg cursor-pointer transition-all bg-themeBlue-11 hover:bg-themeBlue-6 text-themeBlue-2 dark:text-themeBlue-11 hover:dark:text-themeBlue-2 dark:hover:bg-themeBlue-6 dark:bg-themeBlue-2 flex items-center justify-center",
                pause && "bg-themeBlue-6 dark:bg-themeBlue-6 dark:text-themeBlue-2 size-10 rounded-lg"
              )}
            >
              <PauseIcon className="size-5" />
            </button>
          </div>
          {/* <div className="size-10 flex items-center justify-center">
            <button
              onClick={() => setDark(!dark)}
              className={clsx(
                "size-9 hover:size-10 rounded-xl hover:rounded-lg cursor-pointer transition-all bg-themeBlue-11 hover:bg-themeBlue-6 text-themeBlue-2 dark:text-themeBlue-11 hover:dark:text-themeBlue-2 dark:hover:bg-themeBlue-6 dark:bg-themeBlue-2 flex items-center justify-center",
                !dark &&
                  "bg-themeBlue-6 size-10 rounded-lg hover:bg-themeBlue-11"
              )}
            >
              {dark ? (
                <MoonIcon className="size-5" />
              ) : (
                <SunIcon className="size-5" />
              )}
            </button>
          </div> */}
        </div>
      </nav>
      <Footer />
    </div>
  );
};

export default NavBar;
