import { Jua } from "next/font/google";
import "./globals.css";

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
        className={`${jua.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
