import type { Metadata } from "next";

import "./globals.css";
import Burger from "./components/Burger";

export const metadata: Metadata = {
  title: "Site to pass exam",
  description: "Site to my freind and me, to pass the two exam.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-full min-h-screen  flex items-center">
        {/* Бургер меню для выбора предмета */}
        <Burger />
        {children}
      </body>
    </html>
  );
}
