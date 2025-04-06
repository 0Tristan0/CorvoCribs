import Image from "next/image";

export default function Onboarding_2() {
  return (
    <div className="h-screen">
      <div className="pt-15 flex flex-col items-center justify-between h-full gap-y-5  ">
        <h1 className="text-3xl font-semibold text-center">
          No apartment? That's just camping with more stress.
        </h1>
        <div className="pb-15">
          <button className="bg-[#69554D] hover:bg-[#29201D] text-white text-2xl font-bold py-2 px-4 rounded w-60 h-15">
            Womp Womp
          </button>
        </div>
      </div>
    </div>
  );
}
