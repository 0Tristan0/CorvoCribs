import { Jua } from "next/font/google";
import "./globals.css";

import Navbar from "./componenets/Navbar";
import Onboarding_1 from "./onboarding_1/page";

const jua = Jua({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Corvo Cribs",
  description: "Web app for Corvo Cribs.",
};

const isOnboarded = false;

export default function RootLayout({ children }) {

  if (!isOnboarded) {
    return (
      <html lang="en">
        <body className={`${jua.className} antialiased m-3`}>
          <Onboarding_1 />
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body
        className={`${jua.className} antialiased m-3`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
