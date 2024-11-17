/* eslint-disable @next/next/no-img-element */
import Icons from "@/assets/Icons";
import { sleep } from "@/utils/sleep";
import React, { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";

type Props = {};

function About({}: Props) {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function run() {
      setIsLoading(true);
      await sleep(500);
      setIsLoading(false);
    }
    run();
  }, []);
  return (
    <div className="w-full transition-transform bg-themeBlue-2 relative h-full flex gap-4 items-center p-8 rounded-xl">
      {/* <h1 className="text-[384px] text-themeBlue-11 opacity-5 font-extrabold absolute right-8 -bottom-28 align-text-bottom">
        About
      </h1> */}
      <div className="w-2/5 h-full flex flex-col gap-4 items-center z-10">
        <img
          src="/professional-headshot.jpeg"
          alt="Headshot"
          className="w-full rounded-xl transition-transform"
        />
        <div className="w-full h-full flex flex-col transition-transform items-center bg-themeBlue-3 gap-2 rounded-xl p-4">
          <h2 className="text-themeBlue-9 font-bold text-center">Languages I ❤️</h2>
          <div className="w-full h-full grid grid-cols-3 grid-rows-3 items-center place-items-center">
          {/* <div className="w-full h-full flex items-center justify-evenly flex-wrap gap-[10%]"> */}
            <Icons className="text-themeBlue-11 hover:text-themeBlue-9 transition-colors max-size-10 size-[50%]" />
          </div>
        </div>
      </div>
      <div className="w-full h-full flex flex-col items-center gap-4 z-10">
        <div className="w-full p-4 rounded-xl flex flex-col items-start bg-themeBlue-3 justify-start gap-6">
          <h1 className="text-7xl text-themeBlue-9 font-bold">Hi There! 👋</h1>
          <p className="text-sm">
            {`They call me Shaan, the "full-stack" Web3 developer from MI6. While "full-stack" might be a generous term, I can definitely cobble together an okay okay backend application with a fantastic frontend that won't make your grandma need a migraine medication, but get her to change her password every week`}
            <br />
            <br />
            {`Currently, I'm juggling a few top secret MI6 projects (think Bond, Fevi-Bond) and I'm always open for a fantastic idea we'd work on the weekend, push a few commits and forget about it the next day, or some serious opportunities too. Yk, Daddy's gotta pay the bills.`}
            <br />
            <br />
            {`Open source? Absolutely love the concept! Contributing code, I'll do that the next weekend ;)`}
            <br />
            <br />
            {`As for my technical kryptonite? Rust. Don't even get me started on those crustacean-loving coders. And let's just say my relationship with generic backend developers is more like Barney's relationship with ~282 girls he had a shot on`}
            <br />
            <br />
            {`But hey, if you have a wacky web3 idea or a project that needs a creative spark with focus on UI, then hit me up! I'm the Q of duct tape solutions, after all.`}
          </p>
          <p className="text-[10px] text-themeBlue-6 font-medium absolute bottom-2 right-3">
            PS: Also good at prompt engineering :P
          </p>
        </div>
        <div className="w-full h-4/5 p-4 rounded-xl flex flex-col items-center justify-center bg-themeBlue-3 gap-6">
          <GitHubCalendar
            loading={isLoading}
            username="shaansundar"
            blockRadius={8}
            style={{
              maxWidth: "100%",
            }}
            colorScheme="light"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
