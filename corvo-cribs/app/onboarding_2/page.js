import Image from "next/image";
import Link from "next/link";

export default function Onboarding_1() {
  return (
    <div className="h-screen">
      <div className="pt-5 flex flex-col items-center justify-between h-full gap-y-5  ">
        <h1 className="text-3xl font-semibold text-center m-4">
          No housing? Thats just a camping with more stress!
        </h1>
        <div className="pb-20 flex items-center justify-center">
          <img src="/beavers/beaver_mu_tent.png" className=" max-w-[300px] w-[80vw] absolute z-10" alt="Mu and Tent"></img>
        </div>
        <div className="mb-40">
          <Link href="/onboarding_3">
            <button className="bg-[#69554D] hover:bg-[#29201D] text-white text-2xl  py-2 px-4 rounded w-60 h-15">
              Womp Womp
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}