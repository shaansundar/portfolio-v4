"use client";
import { DarkContext } from "@/app/context/darkContext";
import { PauseContext } from "@/app/context/pauseContext";
import clsx from "clsx";
import { useContext, useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

type Props = {
  className?: string;
  play: boolean;
  titleClassName?: string;
  title: string;
  speed?: number;
  direction?: "left" | "right";
};

export const HeroMarqueeContainer = () => {
  const { pause } = useContext(PauseContext);

  const [speed, setSpeed] = useState(
    Array.from({ length: 6 }, () => Math.floor(Math.random() * 10)+1 * 10)
  );

  const [direction, setDirection] = useState(
    Array.from({ length: 6 }).map(() =>
      Math.random() < 0.5 ? "left" : "right"
    )
  );

  return (
    <div className="absolute -z-10 flex bg-themeBlue-4 dark:bg-themeBlue-11 flex-col items-center justify-center gap-4 w-full h-full overflow-y-hidden">
      <HeroMarquee
        direction={direction[0]}
        speed={speed[0]}
        play={!pause}
        titleClassName="mr-40 py-4 text-8xl"
        title={"npx create-next-app"}
      />
      <HeroMarquee
        direction={direction[1]}
        speed={speed[1]}
        play={!pause}
        titleClassName="mr-40 py-4 text-7xl"
        title={"npm run dev"}
      />
      <HeroMarquee
        direction={direction[2]}
        speed={speed[2]}
        play={!pause}
        titleClassName="mr-40 py-4 text-9xl"
        title={"git push -f"}
      />
      <HeroMarquee
        direction={direction[3]}
        speed={speed[3]}
        play={!pause}
        titleClassName="mr-40 py-4 text-8xl"
        title={"npx create-next-app"}
      />
      <HeroMarquee
        direction={direction[4]}
        speed={speed[4]}
        play={!pause}
        titleClassName="mr-40 py-4 text-9xl"
        title={"npm run dev"}
      />
      <HeroMarquee
        direction={direction[5]}
        speed={speed[5]}
        play={!pause}
        titleClassName="mr-40 py-4 text-7xl"
        title={"git push -f"}
      />
    </div>
  );
};

const HeroMarquee = ({
  className,
  title,
  play,
  speed = 150,
  titleClassName,
  direction = "right",
}: Props) => {
  const { dark } = useContext(DarkContext);

  return (
    <Marquee
      className={clsx("h-fit overflow-hidden", className)}
      speed={speed}
      play={play}
      autoFill
      direction={direction}
    >
      <h1
        className={clsx(
          "text-8xl prevent-select font-Inter overflow-hidden font-bold text-themeBlue-11 dark:text-themeBlue-2",
          titleClassName
        )}
      >
        {title}
      </h1>
      <h1
        className={clsx(
          "text-8xl prevent-select font-Inter overflow-hidden font-bold text-transparent",
          dark? "font-outline-4-dark" : "font-outline-4",
          titleClassName
        )}
      >
        {title}
      </h1>
    </Marquee>
  );
};

export default HeroMarquee;
