import { Jua } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";
import Onboarding_1 from "./onboarding_1/page";
import OnboardingGate from "./utils/OnboardingGate";

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



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jua.className} antialiased m-3`}
      >
        <OnboardingGate>
          {children}
        </OnboardingGate>
      </body>
    </html>
  );
}