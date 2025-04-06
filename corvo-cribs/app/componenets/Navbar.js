import PreferencesIcon from "./icons/PreferencesIcon";
import HomeIcon from "./icons/HomeIcon";
import FavoritesIcon from "./icons/FavoritesIcon";
import MapIcon from "./icons/MapIcon";

export default function Navbar({ currentIndex = 2 }) {
    return (
        <div>
            <nav className="flex items-center justify-between flex-wrap p-6">
                <PreferencesIcon fill={(currentIndex == 0 ? "#D2D2D2": "#F5E5AC")} className="h-10 w-auto" />
                <MapIcon fill={(currentIndex == 1 ? "#FACBCB" : "#F5E5AC")} className="h-10 w-auto" />
                <HomeIcon fill={(currentIndex == 2 ? "#69554D": "#F5E5AC")} className="h-10 w-auto" />
                <FavoritesIcon fill={(currentIndex == 3 ? "#FFAC8B" : "#F5E5AC")} className="h-10 w-auto" />
            </nav>
        </div>
    );
}
