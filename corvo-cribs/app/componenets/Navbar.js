import Image from "next/image";
import PreferencesIcon from "./icons/PreferencesIcon";

export default function Navbar({ currentIndex = 2 }) {
    return (
        <div>
            <nav className="flex items-center justify-between flex-wrap p-6">
                <PreferencesIcon fill={(currentIndex ? 0 : "#D2D2D2")} className="h-10 w-auto" />
                <Image src="/icons/map.svg" alt="Logo" width={100} height={50} className="h-10 w-auto" />
                <Image src="/icons/home.svg" alt="Logo" width={100} height={50} className="h-10 w-auto" />
                <Image src="/icons/favorites.svg" alt="Logo" width={100} height={50} className="h-10 w-auto" />
            </nav>
        </div>
    );
}