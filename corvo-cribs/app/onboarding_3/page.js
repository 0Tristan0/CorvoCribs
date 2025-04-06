import Image from "next/image";
import Link from "next/link";

export default function Onboarding_3() {
  return (
    <div className="h-screen flex flex-col items-center justify-between gap-y-5">
      <img src = "/icons/Background.svg" className="absolute w-full h-full object cover" alt= "Background"></img>
      <img src = "/logo.png" className="absolute w-[50vw] h-[30vh] " alt= "Logo"></img>
      <div className="relative z-10 flex flex-col items-center justify-center h-full gap-y-5  ">
          <Link href="/preferences">
            <button className="bg-[#69554D] hover:bg-[#29201D] text-white text-2xl  py-2 px-4 rounded w-60 h-15">
              Lets get started!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
