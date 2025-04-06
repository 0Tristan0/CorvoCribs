import Image from "next/image";
import Link from "next/link";

export default function Onboarding_3() {
  return (
    <div className="h-screen">
      <div className="flex flex-col items-center justify-between h-full gap-y-5  ">
        <div className="flex items-center justify-center">
          <img
            src="/icons/Background.svg"
            className="absolute w-full h-full object cover"
            alt="Background"
          ></img>
          <img
            src="/logo.png"
            className="absolute w-[50vw] h-[30vh] "
            alt="Logo"
          ></img>
        </div>
        <div className="pb-20">
          <Link href="/onboarding_3">
            <button className="bg-[#69554D] hover:bg-[#29201D] text-white text-2xl  py-2 px-4 rounded w-60 h-15">
              Yes!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
