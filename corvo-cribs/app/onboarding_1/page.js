import Image from "next/image";
import Link from "next/link";

export default function Onboarding_1() {
  return (
    <div className="h-screen">
      <div className="pt-15 flex flex-col items-center justify-between h-full gap-y-5  ">
        <h1 className="text-3xl font-semibold text-center m-4">
          Looking for housing your next academic term?
        </h1>
        <div className="pb-20 flex items-center justify-center">
          <img src="/beavers/Beaver-Lodge.PNG" className="w-[80vw] absolute z-10"></img>
          <img src="/icons/Trees_Lodge.svg" className="w-[100vw] absolute"></img>
        </div>
        <div className="pb-15">
          <Link href="/onboarding_2">
            <button className="bg-[#69554D] hover:bg-[#29201D] text-white text-2xl  py-2 px-4 rounded w-60 h-15">
              Yes!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
