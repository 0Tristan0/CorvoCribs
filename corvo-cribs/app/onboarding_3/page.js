import Image from "next/image";
import Link from "next/link";

export default function Onboarding_3() {
  return (
    <div className="h-screen ">
      <img src = "/icons/Background.svg" className="absolute w-full h-full object cover" alt= "Background"></img>
      <div className="relative z-10 flex flex-col items-center justify-center h-full gap-y-5  ">
        <h1 className="text-7xl font-semibold text-center">Corvo Cribs</h1>
        <div className="pb-15 relative">
          <Link href="/onboarding_preferences">
            <button className="bg-[#69554D] hover:bg-[#29201D] text-white text-2xl  py-2 px-4 rounded w-60 h-15">
              Lets get started!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

