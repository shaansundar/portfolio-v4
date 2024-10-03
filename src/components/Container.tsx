import { TabContext } from "@/app/context/tabContext";
import clsx from "clsx";
import { motion } from "framer-motion";
import React, { useContext, useMemo } from "react";
import About from "./About";
import Projects from "./Projects";

type Props = {};

const tabs = [
  {
    name: "About",
    component: About,
  },
  {
    name: "Projects",
    component: Projects,
  },
];

const Container = (props: Props) => {
  const { tab, setTab } = useContext(TabContext);

  return (
    <div
      className={clsx(
        "bg-themeBlue-2 h-4/5 mr-4 z-20 transition-all ease-in-out rounded-xl duration-300",
        tab === "Close" ? "w-0" : "w-5/6"
      )}
    >
      {tabs.map((_tab) => (_tab.name === tab && <_tab.component key={_tab.name} />))}
      {/* {tab === "About" && (
        <div
          className={clsx(
            "h-full w-full bg-themeBlue-2 transition-opacity rounded-xl ease-in-out duration-500 delay-500 flex items-center justify-center",
            tab === "About" ? "opacity-100" : "opacity-0"
          )}
        >
          <motion.div
            layoutId="About-activeTab"
            className="absolute h-[3px] w-full -bottom-2 bg-brand-purple-3"
          />
          <h1 className="text-themeBlue-11 text-9xl">About</h1>
        </div>
      )}
      {tab === "Projects" && (
        <div
          className={clsx(
            "h-full w-full bg-themeBlue-2 transition-opacity rounded-xl ease-in-out duration-500 delay-500 flex items-center justify-center",
            tab === "Projects" ? "opacity-100" : "opacity-0"
          )}
        >
          <motion.div
            layoutId="Projects-activeTab"
            className="absolute h-[3px] w-full -bottom-2 bg-brand-purple-3"
          />
          <h1 className="text-themeBlue-11 text-9xl">Projects</h1>
        </div>
      )} */}
    </div>
  );
};

export default Container;
