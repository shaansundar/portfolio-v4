import Logos from "@/assets/Logos";
import * as Dialog from "@radix-ui/react-dialog";
import {
  CaretRightIcon,
  Cross2Icon,
  ExternalLinkIcon,
  MagicWandIcon,
} from "@radix-ui/react-icons";
import clsx from "clsx";
import React, { useState } from "react";
import Iframe from "react-iframe";

type Props = {};

type Projects = {
  name: string;
  logo: string;
  desc: React.ReactNode;
  iframe: React.ReactNode;
  link: string;
};

const Projects = (props: Props) => {
  const projectsArray: Projects[] = [
    {
      name: "Rage Trade",
      logo: "rage",
      desc: (
        <ul className="text-xl flex flex-col h-full gap-8">
          <li className="flex items-start w-full gap-2">
            <CaretRightIcon className="size-8" />
            <p className="w-full">
              <b className="font-bold text-themeBlue-9">
                Led the Frontend Team
              </b>{" "}
              to revamp the legacy platform with a new interface, utilizing
              design-first principles to deliver a seamless user experience.
            </p>
          </li>
          <li className="flex items-start w-full gap-2">
            <CaretRightIcon className="size-8" />
            <p className="w-full">
              Scaled the platform to support{" "}
              <b className="font-bold text-themeBlue-9">
                $750M+ in trade volume
              </b>{" "}
              by optimizing the User Interface, codebase, and performance,
              resulting in smoother interaction, faster load times, better code
              structure and robust practices. It resulted in{" "}
              <b className="font-bold text-themeBlue-9">$400K+ in revenue</b>{" "}
              within 6 months of launch.
            </p>
          </li>
        </ul>
      ),
      iframe: (
        <Iframe
          loading="eager"
          id="rage"
          url={"https://app.rage.trade"}
          width="100%"
          className="rounded-xl"
          height="100%"
          scrolling="auto"
        />
      ),
      link: "https://app.rage.trade",
    },
    {
      name: "Biconomy",
      logo: "biconomy",
      desc: (
        <ul className="text-xl flex flex-col h-full gap-4">
          <li className="flex items-start w-full gap-2">
            <CaretRightIcon className="size-8" />
            <p className="w-full">
              Spearheaded the development of the{" "}
              <b className="font-bold text-themeBlue-9">
                {"Biconomy SDK's Dashboard"}
              </b>
              , utilizing user-centric design principles, it captured over 45%
              of the market and reached 4.9M+ deployed wallets
            </p>
          </li>
          <li className="flex items-start w-full gap-2">
            <CaretRightIcon className="size-8" />
            <p className="w-full">
              Handled the maintenance and development of the Gasless protocol,
              <b className="font-bold text-themeBlue-9">
                optimized the backend infrastructure and improved the UI on the
                frontend.
              </b>{" "}
              Also the first project to create a revenue stream for the
              organization
            </p>
          </li>
          <li className="flex items-start w-full gap-2">
            <CaretRightIcon className="size-8" />
            <p className="w-full">
              <b className="font-bold text-themeBlue-9">
                Created a liquidity rebalancing bot for Hyphen
              </b>{" "}
              by utilizing core DeFi principles and rebalancing algorithms,
              which achieved a market cap of $249M and $800k in TVL, which
              enhanced cross-liquidity management.
            </p>
          </li>
        </ul>
      ),
      iframe: (
        <Iframe
          loading="eager"
          id="biconomy"
          url={"https://dashboard.biconomy.io"}
          width="100%"
          className="rounded-xl"
          height="100%"
          scrolling="auto"
        />
      ),
      link: "https://dashboard.biconomy.io",
    },
    {
      name: "Ethernaut",
      logo: "ethernaut",
      desc: (
        <ul className="text-xl flex flex-col h-full gap-4">
          <li className="flex items-start w-full gap-2">
            <CaretRightIcon className="size-8" />
            <p className="w-full">
              Was responsible for implementing the redesign of the website from
              an initial Bootstrap design
            </p>
          </li>
          <li className="flex items-start w-full gap-2">
            <CaretRightIcon className="size-8" />
            <p className="w-full">
              Am one of the largest contributors to the open-source repository
              (by lines of code)
            </p>
          </li>
        </ul>
      ),
      iframe: (
        <Iframe
          loading="eager"
          id="ozethernaut"
          url={"https://ethernaut.openzeppelin.com"}
          width="100%"
          className="rounded-xl"
          height="100%"
          scrolling="auto"
        />
      ),
      link: "https://ethernaut.openzeppelin.com",
    },
  ];

  const [openItem, setOpenItem] = useState<Projects>(projectsArray[0]);
  const [emulateItem, setEmulateItem] = useState<Projects | undefined>(
    undefined
  );

  return (
    <div className="w-full transition-all relative h-full flex gap-2 rounded-xl">
      <div className="w-28 rounded-xl h-full gap-2 flex flex-col items-center">
        {projectsArray.map((item, index) => (
          <button
            key={index}
            onClick={() => {
              setEmulateItem(undefined);
              setOpenItem(item);
            }}
            className={clsx(
              "cursor-pointer w-28 transition-colors min-h-28  h-full flex items-center justify-center  first:rounded-t-xl last:rounded-b-xl",
              openItem.name !== item.name
                ? "text-themeBlue-11 hover:text-themeBlue-2 hover:bg-themeBlue-6 bg-themeBlue-2"
                : "text-themeBlue-2  bg-themeBlue-11"
            )}
          >
            <Logos className="size-8" icon={item.logo} />
          </button>
        ))}
      </div>
      <div className="w-full rounded-xl h-full p-8 bg-themeBlue-2">
        <div
          className={clsx(
            "transition-all ease-in-out duration-300",
            emulateItem && emulateItem.name === openItem.name
              ? "w-0 h-full hidden opacity-0"
              : "rounded-xl w-full h-full flex opacity-100 items-start justify-center p-4 bg-themeBlue-3"
          )}
        >
          <div className="flex flex-col items-start justify-start gap-8 w-1/2 h-full">
            <h1 className="text-4xl text-themeBlue-9 font-bold">
              {openItem.name}
            </h1>
            <div className="w-full">{openItem.desc}</div>
            <div className="flex items-center gap-2 ml-9">
              <button
                onClick={() => setEmulateItem(openItem)}
                className="w-40 h-12 flex items-center justify-center cursor-pointer transition-colors bg-themeBlue-11 hover:bg-themeBlue-6 text-themeBlue-2 rounded-xl"
              >
                Emulate
              </button>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={openItem.link}
                className="w-40 h-12 flex gap-2 items-center justify-center border-2 border-themeBlue-11 transition-colors hover:border-themeBlue-6 hover:text-themeBlue-6 rounded-xl cursor-pointer"
              >
                Visit
                <ExternalLinkIcon className="size-4 font-bold" />
              </a>
            </div>
          </div>
          <div className="w-1/2 h-full flex flex-col gap-4 items-end justify-end p-4">
            <Logos
              className="size-96 text-themeBlue-9 transition-all opacity-10 relative "
              icon={openItem.logo}
            />
          </div>
        </div>
        <div
          className={clsx(
            "transition-all ease-in-out",
            emulateItem && emulateItem.name === openItem.name
              ? "rounded-xl w-full h-full relative flex items-start opacity-100 justify-center p-4 bg-themeBlue-11 duration-300"
              : "w-0 h-full opacity-0 duration-0"
          )}
        >
          <button
            onClick={() => setEmulateItem(undefined)}
            className="absolute z-20 flex items-center justify-center bg-themeBlue-11 rounded-full cursor-pointer top-2 right-2 size-6"
          >
            <Cross2Icon className="size-4 text-themeBlue-2" />
          </button>
          {emulateItem?.iframe}
        </div>
      </div>
    </div>
  );
};

export default Projects;
