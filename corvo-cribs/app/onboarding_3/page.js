import Image from "next/image";
import Link from "next/link";

export default function Onboarding_3() {
  return (
    <div className="h-screen">
      <div className="flex flex-col items-center justify-between h-full gap-y-5  ">
        <div className="flex justify-center">
          <Image src="/icons/Background.svg" width={100} height={100} alt={"Logo"} className="absolute -z-10 w-full h-[100vh] object-cover" />
          <Image src="/logo.png" width={200} height={200} alt={"Logo"} className="mt-15 absolute z-10 w-[30vh] object-contain" />
        </div>
        <div className="pb-20 items-center flex flex-col">
            <h1 className="text-center pb-5">All ORIGINAL artwork made by Ally Chen</h1>
          <Link href="/preferences">
            <button className="bg-[#69554D] hover:bg-[#29201D] text-white text-2xl py-2 px-4 rounded w-60 h-15 mb-15">
<<<<<<< HEAD
              Let's start!
=======
              Lets get started!
>>>>>>> c1f48338e83a46ee15fc31a3dad4693ad9f177e8
            </button>
          </Link>
        </div>
      </div>
      </div>
  );
}
