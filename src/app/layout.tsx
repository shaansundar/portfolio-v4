import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DarkContextProvider from "./context/darkContext";
import PauseContextProvider from "./context/pauseContext";
import TabContextProvider from "./context/tabContext";
import * as Toast from "@radix-ui/react-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shaan Sundar",
  description: "It's a portfolio dammmitt",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <TabContextProvider>
        <PauseContextProvider>
          <DarkContextProvider>
            <Toast.Provider swipeDirection="right" duration={5000}>
              <body className={inter.className}>{children}</body>
            </Toast.Provider>
          </DarkContextProvider>
        </PauseContextProvider>
      </TabContextProvider>
    </html>
  );
}
