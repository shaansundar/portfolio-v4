"use client";
import HeroMarquee, { HeroMarqueeContainer } from "@/components/HeroMarquee";
import NavBar from "@/components/NavBar";
import TabContextProvider from "./context/tabContext";
import Container from "@/components/Container";
import { useContext, useState } from "react";
import PauseContextProvider, { PauseContext } from "./context/pauseContext";
import DarkContextProvider, { DarkContext } from "./context/darkContext";
import clsx from "clsx";
import {
  HoverCard,
  HoverCardArrow,
  HoverCardContent,
  HoverCardPortal,
  HoverCardTrigger,
} from "@radix-ui/react-hover-card";
import {
  Cross1Icon,
  Crosshair1Icon,
  Crosshair2Icon,
  EyeOpenIcon,
  PauseIcon,
  PlayIcon,
} from "@radix-ui/react-icons";
import ToastComponent from "@/components/Toast";

export default function Home() {
  const { dark, setDark } = useContext(DarkContext);
  const { pause, setPause } = useContext(PauseContext);
  const [toast, setToast] = useState<boolean>(true);

  console.log("🚀 ~ Home ~ dark:", dark);

  return (
    <div className={clsx(dark && "dark", "overflow-y-hidden")}>
      <ToastComponent/>
      <HeroMarqueeContainer />
      <div className="overflow-hidden w-screen z-10 h-screen flex gap-8 items-center justify-start">
        <NavBar />
        <Container />
      </div>
      <div className="w-screen h-screen bg-transparent absolute left-0 top-0 z-10 flex items-center justify-center">
        <Crosshair2Icon className="size-4 animate-pulse text-themeBlue-11 z-10 font-bold" />
      </div>
      <HoverCard openDelay={100}>
        <HoverCardTrigger className="absolute cursor-help z-50 bottom-4 right-4 flex items-center justify-center size-12 rounded-full shadow-2xl shadow-black bg-themeBlue-2 hover:bg-themeBlue-3 transition-all">
          <EyeOpenIcon className="size-6 text-themeBlue-11 font-bold" />
        </HoverCardTrigger>
        <HoverCardPortal>
          <HoverCardContent
            side="top"
            sideOffset={10}
            collisionPadding={{ right: 20 }}
            className="bg-themeBlue-2 relative transition-all z-50 shadow-xl rounded-xl w-80 h-40 flex flex-col p-4 gap-2"
          >
            <div className="flex text-themeBlue-6 items-center gap-2">
              <EyeOpenIcon className="size-6 font-bold" />
              <h2 className="font-bold text-lg">Optical Illusion</h2>{" "}
            </div>
            <p className="text-themeBlue-11 text-sm">
              Focus on the crosshair and click "Pause" You may notice the text
              appears to continue moving slowly
            </p>
            <button
              onClick={() => setPause(!pause)}
              className="w-full cursor-pointer absolute bottom-0 left-0 h-10 bg-themeBlue-6 hover:bg-themeBlue-8 transition-all rounded-b-xl text-themeBlue-2 flex items-center justify-center gap-2"
            >
              {pause ? (
                <PlayIcon className="size-4" />
              ) : (
                <PauseIcon className="size-4" />
              )}
              {pause ? "Play " : "Pause"}
            </button>
          </HoverCardContent>
        </HoverCardPortal>
      </HoverCard>
    </div>
  );
}
