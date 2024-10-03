import Logos from "@/assets/Logos";
import * as Dialog from "@radix-ui/react-dialog";
import clsx from "clsx";
import React, { useState } from "react";
import Iframe from "react-iframe";

type Props = {};

type Projects = {
  name: string;
  logo: string;
  desc: string;
  link: string;
  priority: 1 | 2 | 3;
};

const Projects = (props: Props) => {
  const projectsArray: Projects[] = [
    {
      name: "Rage Trade",
      logo: "rage",
      desc: "This is a rage project",
      link: "https://app.rage.trade",
      priority: 1,
    },
    {
      name: "Biconomy",
      logo: "biconomy",
      desc: "This is a rage project",
      link: "https://dashboard.biconomy.io",
      priority: 1,
    },
    {
      name: "Ethernaut",
      logo: "ethernaut",
      desc: "This is a rage project",
      link: "https://ethernaut.openzeppelin.com",
      priority: 1,
    },
    {
      name: "TruFin",
      logo: "trufin",
      desc: "This is a rage project",
      link: "https://trufin.io",
      priority: 2,
    },
  ];

  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const [hoverItem, setHoverItem] = useState<
    | {
        row: number;
        itemIndex: number;
      }
    | undefined
  >(undefined);

  const [openItem, setOpenItem] = useState<
    | {
        row: number;
        itemIndex: number;
      }
    | undefined
  >(undefined);

  return (
    <div className="w-full transition-all relative h-full gap-4 grid grid-rows-6 p-8 rounded-xl">
      <div className="row-span-3 flex items-center gap-4">
        {projectsArray
          .filter((item) => item.priority === 1)
          .map((item, index) => {
            const isOpen = openItem?.row === 1 && openItem?.itemIndex === index;
            return (
              <div
                onMouseEnter={() => {
                  if (isOpen) {
                    return;
                  }
                  setHoverItem({
                    itemIndex: index,
                    row: 1,
                  });
                }}
                onMouseLeave={() => {
                  if (isOpen) {
                    return;
                  }
                  setHoverItem(undefined);
                }}
                onClick={() => {
                  if (isOpen) {
                    setOpenItem(undefined);
                  } else {
                    setOpenItem({
                      itemIndex: index,
                      row: 1,
                    });
                  }
                }}
                className={clsx(
                  "w-full h-full flex flex-col justify-center transition-all items-center cursor-pointer gap-2 rounded-xl p-4",
                  isOpen
                    ? "text-themeBlue-2 bg-themeBlue-11"
                    : "text-themeBlue-6 hover:text-themeBlue-2 bg-themeBlue-3 hover:bg-themeBlue-6"
                )}
              >
                {!isOpen ? (
                  <div
                    className={clsx("flex items-center justify-center size-16")}
                  >
                    <Logos
                      className="size-full transition-all"
                      icon={item.logo}
                    />
                  </div>
                ) : (
                  <div className="w-full h-full p-4 flex flex-col gap-2 text-themeBlue-2">
                    <div className="flex items-center gap-2">
                      <div
                        className={clsx(
                          "flex items-center justify-center",
                          item.logo === "ethernaut" ? "size-4" : "size-5"
                        )}
                      >
                        <Logos
                          className="size-full transition-all w-full h-full"
                          icon={item.logo}
                        />
                      </div>
                      <h2 className="text-xl font-bold">{item.name}</h2>
                    </div>
                    <p>{item.desc}</p>
                    {/* <button
                      className="w-full h-10 bg-themeBlue-6 z-50"
                      onClick={(e) => {
                        alert("clicked");
                        e.stopPropagation()
                      }}
                    >
                      Open
                    </button> */}
                    <Dialog.Root open={modalOpen}>
                      <Dialog.Trigger asChild>
                        <button
                          onClick={() => setModalOpen(true)}
                          className="w-full h-10 bg-themeBlue-6 z-50"
                        >
                          Open
                        </button>
                      </Dialog.Trigger>
                      <Dialog.Portal>
                        <Dialog.Overlay
                          className="bg-themeBlue-11 opacity-50 z-[90]"
                          style={{
                            animation:
                              "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
                          }}
                        />
                        <Dialog.Content className="w-80 h-40 z-[90] bg-themeBlue-2 rounded-xl">
                          <Dialog.Title />
                          <Dialog.Description />
                          <Dialog.Close />
                        </Dialog.Content>
                      </Dialog.Portal>
                    </Dialog.Root>

                    {/* <Iframe width="100%" height="100%" className="w-full h-40 " url={item.link}/> */}
                  </div>
                )}
              </div>
            );
          })}
      </div>
      <div className="row-span-2 flex items-center gap-4">
        {projectsArray
          .filter((item) => item.priority === 2)
          .map((item, index) => {
            const isOpen = openItem?.row === 2 && openItem?.itemIndex === index;
            return (
              <div
                onMouseEnter={() => {
                  if (isOpen) {
                    return;
                  }
                  setHoverItem({
                    itemIndex: index,
                    row: 2,
                  });
                }}
                onMouseLeave={() => {
                  if (isOpen) {
                    return;
                  }
                  setHoverItem(undefined);
                }}
                onClick={() => {
                  if (isOpen) {
                    setOpenItem(undefined);
                  } else {
                    setOpenItem({
                      itemIndex: index,
                      row: 2,
                    });
                  }
                }}
                className={clsx(
                  "w-full h-full flex flex-col justify-center transition-all items-center cursor-pointer gap-2 rounded-xl p-4",
                  isOpen
                    ? "text-themeBlue-2 bg-themeBlue-11"
                    : "text-themeBlue-6 hover:text-themeBlue-2 bg-themeBlue-3 hover:bg-themeBlue-6"
                )}
              >
                {!isOpen ? (
                  <div
                    className={clsx("flex items-center justify-center size-16")}
                  >
                    <Logos
                      className="size-full transition-all"
                      icon={item.logo}
                    />
                  </div>
                ) : (
                  <div className="w-full h-full p-4 flex flex-col gap-2 text-themeBlue-2">
                    <div className="flex items-center gap-2">
                      <div
                        className={clsx(
                          "flex items-center justify-center",
                          item.logo === "ethernaut" ? "size-4" : "size-5"
                        )}
                      >
                        <Logos
                          className="size-full transition-all w-full h-full"
                          icon={item.logo}
                        />
                      </div>
                      <h2 className="text-xl font-bold">{item.name}</h2>
                    </div>
                    <p>{item.desc}</p>
                    <iframe className="w-full h-40" src={item.link} />
                  </div>
                )}
              </div>
            );
          })}
      </div>
      <div className="row-span-1 flex items-center gap-4">
        {projectsArray
          .filter((item) => item.priority === 3)
          .map((item, index) => {
            const isOpen = openItem?.row === 3 && openItem?.itemIndex === index;
            return (
              <div
                onMouseEnter={() => {
                  if (isOpen) {
                    return;
                  }
                  setHoverItem({
                    itemIndex: index,
                    row: 3,
                  });
                }}
                onMouseLeave={() => {
                  if (isOpen) {
                    return;
                  }
                  setHoverItem(undefined);
                }}
                onClick={() => {
                  if (isOpen) {
                    setOpenItem(undefined);
                  } else {
                    setOpenItem({
                      itemIndex: index,
                      row: 3,
                    });
                  }
                }}
                className={clsx(
                  "w-full h-full flex flex-col justify-center transition-all items-center cursor-pointer gap-2 rounded-xl p-4",
                  isOpen
                    ? "text-themeBlue-2 bg-themeBlue-11"
                    : "text-themeBlue-6 hover:text-themeBlue-2 bg-themeBlue-3 hover:bg-themeBlue-6"
                )}
              >
                {!isOpen ? (
                  <div
                    className={clsx("flex items-center justify-center size-16")}
                  >
                    <Logos
                      className="size-full transition-all"
                      icon={item.logo}
                    />
                  </div>
                ) : (
                  <div className="w-full h-full p-4 flex flex-col gap-2 text-themeBlue-2">
                    <div className="flex items-center gap-2">
                      <div
                        className={clsx(
                          "flex items-center justify-center",
                          item.logo === "ethernaut" ? "size-4" : "size-5"
                        )}
                      >
                        <Logos
                          className="size-full transition-all w-full h-full"
                          icon={item.logo}
                        />
                      </div>
                      <h2 className="text-xl font-bold">{item.name}</h2>
                    </div>
                    <p>{item.desc}</p>
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Projects;
