import Image from "next/image";
import Link from "next/link";

export default function Onboarding_3() {
  return (
    <div className="h-screen flex flex-col items-center justify-between h-full gap-y-5">
      <img
        src="/icons/Background.svg"
        className="absolute w-full h-full object cover"
        alt="Background"
      ></img>
      <img
        src="/logo.png"
        className="absolute max-w-[300px] w-[80vw] h-auto"
        alt="Logo"
      ></img>
      <div className="pt-50 relative z-10 flex flex-col items-center justify-center h-full gap-y-5  ">
        <Link href="/onboarding_preferences">
          <button className="bg-[#69554D] hover:bg-[#29201D] text-white text-2xl py-2 px-4 rounded w-60 h-15">
            Lets get started!
          </button>
        </Link>
      </div>
    </div>
  );
}
