import Image from "next/image";
import Link from "next/link";

export default function Onboarding_1() {
  return (
    <div className="h-screen">
      <div className="pt-5 flex flex-col items-center justify-between h-full gap-y-5  ">
        <h1 className="text-3xl font-semibold text-center m-4">
          Looking for housing your next academic term?
        </h1>
        <div className="pb-20 flex items-center justify-center">
          <img src="/beavers/Beaver-Lodge.PNG" className=" max-w-[300px] w-[80vw] absolute z-10" alt="Beaver Lodge"></img>
          <img src="/icons/Trees_Lodge.svg" className="max-w-[350px] w-[100vw] absolute" alt= "Trees Lodge"></img>
        </div>
        <div className="mb-25">
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
