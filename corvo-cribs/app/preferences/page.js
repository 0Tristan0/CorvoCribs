"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Preferences() {
    const [hasOnboarded, setHasOnboarded] = useState(null);

    useEffect(() => {
        const localHasOnboarded = localStorage.getItem("hasOnboarded");
        if (localHasOnboarded === null) {
            localStorage.setItem("hasOnboarded", "false");
            setHasOnboarded(false);
        } else {
            setHasOnboarded(localHasOnboarded === "true");
        }

        const preferences = localStorage.getItem("preferences");
        if (preferences === null) {
            localStorage.setItem(
                "preferences",
                JSON.stringify([])
            );
        }
    }, []);

    const router = useRouter();

    const [isFurnished, setIsFurnished] = useState(true);
    const [bedrooms, setBedrooms] = useState(1);
    const [bathrooms, setBathrooms] = useState(1);
    const [price, setPrice] = useState(500);
    const [term, setTerm] = useState(1);
    const [walk, setWalk] = useState(0);
    const [bike, setBike] = useState(0);
    const [publicTransportation, setpublicTransportation] = useState(0);

    const handleBedroomsChange = (event) => {
        if (bedrooms < 10 && bedrooms > 0) {
            setBedrooms(event.target.value);
        }

        if (event.target.value < 0 && event.target.value > 10) {
            setBedrooms(1);
        }

        if (event.target.value > 10 && event.target.value < 0) {
            setBedrooms(10);
        }

        const preferences = JSON.parse(localStorage.getItem("preferences"));
        const newPreferences = {
            ...preferences,
            bedrooms: event.target.value
        };
        localStorage.setItem("preferences", JSON.stringify(newPreferences));
    };

    const handleBathroomsChange = (event) => {
        if (bathrooms < 10 && bathrooms > 0) {
            setBathrooms(event.target.value);
        }
        if (event.target.value < 0 && event.target.value > 10) {
            setBathrooms(1);
        }
        if (event.target.value > 10 && event.target.value < 0) {
            setBathrooms(10);
        }

        const preferences = JSON.parse(localStorage.getItem("preferences"));
        const newPreferences = {
            ...preferences,
            bathrooms: event.target.value
        };
        localStorage.setItem("preferences", JSON.stringify(newPreferences));
    }

    const handleFurnishedChange = (event) => {
        setIsFurnished(event.target.value);

        const preferences = JSON.parse(localStorage.getItem("preferences"));
        const newPreferences = {
            ...preferences,
            furnished: event.target.value
        };
        localStorage.setItem("preferences", JSON.stringify(newPreferences));
    };

    const handlePriceChange = (event) => {
        setPrice(event.target.value);

        const preferences = JSON.parse(localStorage.getItem("preferences"));
        const newPreferences = {
            ...preferences,
            price: event.target.value
        };
        localStorage.setItem("preferences", JSON.stringify(newPreferences));
    };
    const handleLeaseTermChange = (event) => {
        setTerm(event.target.value);

        const preferences = JSON.parse(localStorage.getItem("preferences"));
        const newPreferences = {
            ...preferences,
            leaseTerm: event.target.value
        };
        localStorage.setItem("preferences", JSON.stringify(newPreferences));
    };

    const handleWalkChange = (event) => {
        setWalk(event.target.value);

        const preferences = JSON.parse(localStorage.getItem("preferences"));
        const newPreferences = {
            ...preferences,
            walk: event.target.value
        };
        localStorage.setItem("preferences", JSON.stringify(newPreferences));
    };

    const handleBikeChange = (event) => {
        setBike(event.target.value);

        const preferences = JSON.parse(localStorage.getItem("preferences"));
        const newPreferences = {
            ...preferences,
            bike: event.target.value
        };
        localStorage.setItem("preferences", JSON.stringify(newPreferences));
    };

    const handlePublicTransportationChange = (event) => {
        setpublicTransportation(event.target.value);

        const preferences = JSON.parse(localStorage.getItem("preferences"));
        const newPreferences = {
            ...preferences,
            publicTransportation: event.target.value
        };
        localStorage.setItem("preferences", JSON.stringify(newPreferences));
    };

    const formatTime = (minutes) => {
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;
        if (hours > 0) {
            return `${hours} hr${hours > 1 ? "s" : ""} ${remainingMinutes} min${remainingMinutes !== 1 ? "s" : ""
                }`;
        }
        return `${remainingMinutes} min${remainingMinutes !== 1 ? "s" : ""}`;
    };

    const finishOnboarding = () => {
        localStorage.setItem("hasOnboarded", "true");
        router.replace("/");
    };

    return (
        <div className="mt-10 flex flex-col items-center justify-between h-full">
            <button
                onClick={() => handleFurnishedChange({ target: { value: !isFurnished } })}
                className={`text-white font-bold text-2xl py-2 px-4 rounded w-64 h-16 mb-8 ${isFurnished ? "bg-[#69554D]" : "bg-[#6dbe75]"
                    }`}
            >
                Furnished
            </button>
            <div
                className={
                    "text-white font-bold bg-[#69554D] text-2xl py-2 px-4 rounded w-64 h-16 mb-8 flex justify-between items-center"
                }
            >
                <button
                    onClick={() => handleBedroomsChange({ target: { value: bedrooms + 1 } })}
                    className="flex items-center "
                >
                    <Image src="/icons/+.svg" width={24} height={24} alt="plus"></Image>
                </button>
                Bedrooms: {bedrooms}{" "}
                <button
                    onClick={() => handleBedroomsChange({ target: { value: bedrooms - 1 } })}
                    className="flex items-center "
                >
                    <Image src="/icons/Minus.svg" width={24} height={24} alt="minus"></Image>
                </button>
            </div>

            <div
                className={
                    "text-white font-bold bg-[#69554D] text-2xl py-2 px-4 rounded w-64 h-16 mb-8 flex justify-between items-center"
                }
            >
                <button
                    onClick={() => handleBathroomsChange({ target: { value: bathrooms + 1 } })}
                    className="flex items-center "
                >
                    <Image src="/icons/+.svg" width={24} height={24} alt="plus"></Image>
                </button>
                Bathrooms: {bathrooms}{" "}
                <button
                    onClick={() => handleBathroomsChange({ target: { value: bathrooms - 1 } })}
                    className="flex items-center "
                >
                    <Image src="/icons/Minus.svg" width={24} height={24} alt="minus"></Image>
                </button>
            </div>

            <div className="flex flex-col items-center w-64 mb-8">
                <label htmlFor="price" className="text-xl font-semibold mb-2">
                    {" "}
                    Price: ${price} mo.
                </label>
                <input
                    type="range"
                    id="price"
                    min="500"
                    max="5000"
                    step="100"
                    value={price}
                    onChange={handlePriceChange}
                    className="w-full accent-[#69554D] h-2 bg-gray-200 rounded-lg"
                />
            </div>

            <div className="flex flex-col items-center w-64 mb-8">
                <label htmlFor="lease" className="text-xl font-semibold mb-2">
                    Lease term: {term} mo.
                </label>
                <input
                    type="range"
                    id="lease"
                    min="1"
                    max="12"
                    step="1"
                    value={term}
                    onChange={handleLeaseTermChange}
                    className="w-full accent-[#69554D] h-2 bg-gray-200 rounded-lg"
                />
            </div>

            <div className="flex flex-col items-center w-64 mb-8">
                <label htmlFor="walk" className="text-.5xl font-semibold mb-2">
                    Walking distance: {formatTime(walk)}
                </label>
                <input
                    type="range"
                    id="walk"
                    min="0"
                    max="120"
                    step="5"
                    value={walk}
                    onChange={handleWalkChange}
                    className="w-full accent-[#69554D] h-2 bg-gray-200 rounded-lg"
                />
            </div>

            <div className="flex flex-col items-center w-64 mb-8">
                <label htmlFor="bike" className="text-.5xl font-semibold mb-2">
                    Biking distance: {formatTime(bike)}
                </label>
                <input
                    type="range"
                    id="bike"
                    min="0"
                    max="120"
                    step="5"
                    value={bike}
                    onChange={handleBikeChange}
                    className="w-full accent-[#69554D] h-2 bg-gray-200 rounded-lg"
                />
            </div>

            <div className="flex flex-col items-center w-64 mb-8">
                <label htmlFor="public" className="text-.5xl font-semibold mb-2">
                    Public transportation: {formatTime(publicTransportation)}
                </label>
                <input
                    type="range"
                    id="public"
                    min="0"
                    max="120"
                    step="5"
                    value={publicTransportation}
                    onChange={handlePublicTransportationChange}
                    className="w-full accent-[#69554D] h-2 bg-gray-200 rounded-lg"
                />
            </div>

            {hasOnboarded === false ? (<div>
                <Link href="/">
                    <button onClick={() => finishOnboarding()}>
                        <Image src="/icons/Arrow.svg" width={60} height={40} alt="arrow"></Image>
                    </button>
                </Link>
            </div>
            ) : (null)}
        </div>
    );
}
