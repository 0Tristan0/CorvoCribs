import Image from "next/image";

export default function Onboarding_1() {
  return (
    <div className="h-screen">
      <div className="pt-15 flex flex-col items-center justify-between h-full gap-y-5  ">
        <h1 className="text-3xl font-semibold text-center">
          Looking for housing your next academic term?
        </h1>
        <div className="pb-20">
          <img className=""></img>
        </div>
        <div className="pb-15">
          <button className="bg-[#69554D] hover:bg-[#29201D] text-white text-2xl  py-2 px-4 rounded w-60 h-15">
            Yes!
          </button>
        </div>
      </div>
    </div>
  );
}
