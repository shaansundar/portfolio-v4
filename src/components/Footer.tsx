import {
  TwitterLogoIcon,
  LinkedInLogoIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center w-full h-40 py-8">
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="text-themeBlue-11 hover:text-themeBlue-6 dark:text-themeBlue-2 dark:hover:text-themeBlue-6 size-8 p-1"
        href="https://twitter.com/0xNotthatsundar"
      >
        <TwitterLogoIcon className="size-6 transition-all " />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="text-themeBlue-11 hover:text-themeBlue-6 dark:text-themeBlue-2 dark:hover:text-themeBlue-6 size-8 p-1"
        href="https://www.linkedin.com/in/notthatsundar/"
      >
        <LinkedInLogoIcon className="size-6 transition-all " />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="text-themeBlue-11 hover:text-themeBlue-6 dark:text-themeBlue-2 dark:hover:text-themeBlue-6 size-8 p-1"
        href="https://github.com/shaansundar"
      >
        <GitHubLogoIcon className="size-6 transition-all " />
      </a>
    </div>
  );
};

export default Footer;
