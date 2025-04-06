import PreferencesIcon from "./icons/PreferencesIcon";
import HomeIcon from "./icons/HomeIcon";
import FavoritesIcon from "./icons/FavoritesIcon";
import MapIcon from "./icons/MapIcon";

import Link from "next/link";

export default function Navbar({ currentIndex = 2 }) {
    return (
        <div>
            <nav className="flex items-center justify-between flex-wrap px-5 py-2">
                <Link href="/preferences">
                    <PreferencesIcon fill={(currentIndex == 0 ? "#D2D2D2" : "#F5E5AC")} className="h-10 w-auto" />
                </Link>
                <Link href="/map">
                    <MapIcon fill={(currentIndex == 1 ? "#FACBCB" : "#F5E5AC")} className="h-10 w-auto" />
                </Link>
                <Link href="/">
                    <HomeIcon fill={(currentIndex == 2 ? "#69554D" : "#F5E5AC")} className="h-10 w-auto" />
                </Link>
                <Link href="/favorites">
                    <FavoritesIcon fill={(currentIndex == 3 ? "#FFAC8B" : "#F5E5AC")} className="h-10 w-auto" />
                </Link>
            </nav>
        </div>
    );
}
