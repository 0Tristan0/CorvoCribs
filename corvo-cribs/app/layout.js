import { Jua } from "next/font/google";
import "./globals.css";
import Navbar from "./componenets/Navbar";

const jua = Jua({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Corvo Cribs",
  description: "Web app for Corvo Cribs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={ `${jua.className} antialiased m-3` }
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
