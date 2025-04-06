import { Jua } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";
import Onboarding_1 from "./onboarding_1/page";

const jua = Jua({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Corvo Cribs",
  description: "Web app for Corvo Cribs.",
};

/*
const [currentIndex, setCurrentIndex] = useState(2); // Default to Home

const handleNavClick = (index) => {
  setCurrentIndex(index);
};
*/

// Temporary variable
const isOnboarded = true;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jua.className} antialiased m-3`}
      >
        {isOnboarded ? ( <Navbar /> ) : (null)}
        {children}
      </body>
    </html>
  );
}
