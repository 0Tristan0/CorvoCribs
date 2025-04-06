"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function Onboarding_1() {
  const [isFurnished, setIsFurnished] = useState(true);
  const [bedrooms, setBedrooms] = useState(1);
  const [bathrooms, setBathrooms] = useState(1);
  const [price, setPrice] = useState(500);
  const [term, setTerm] = useState(1);
  const [walk, setWalk] = useState(0);
  const [bike, setBike] = useState(0);
  const [publicTransportation, setpublicTransportation] = useState(0);

  const handleBedroomsChange = (event) => {
    setBedrooms(event.target.value);
    if (bedrooms < 0) {
      setBedrooms = 0;
    } else if (bedrooms > 10) {
      setBedrooms = 10;
    }
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };
  const handleLeaseTermChange = (event) => {
    setTerm(event.target.value);
  };

  const handleWalkChange = (event) => {
    setWalk(event.target.value);
  };

  const handleBikeChange = (event) => {
    setBike(event.target.value);
  };

  const handlePublicTransportationChange = (event) => {
    setpublicTransportation(event.target.value);
  };

  const formatTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    if (hours > 0) {
      return `${hours} hr${hours > 1 ? "s" : ""} ${remainingMinutes} min${
        remainingMinutes !== 1 ? "s" : ""
      }`;
    }
    return `${remainingMinutes} min${remainingMinutes !== 1 ? "s" : ""}`;
  };

  const finishOnboarding = () => {
    localStorage.setItem("hasOnboarded", "true");
  };

  return (
    <div className="flex flex-col items-center justify-between h-full">
      <button
        onClick={() => setIsFurnished((prevState) => !prevState)}
        className={`text-white font-bold text-2xl py-2 px-4 rounded w-64 h-16 mb-8 ${
          isFurnished ? "bg-[#69554D]" : "bg-[#AB8C80]"
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
          onClick={() => setBedrooms(bedrooms + 1)}
          className="flex items-center "
        >
          <Image src="/icons/+.svg" width={24} height={24}></Image>
        </button>
        Bedrooms: {bedrooms}{" "}
        <button
          onClick={() => setBedrooms(bedrooms - 1)}
          className="flex items-center "
        >
          <Image src="/icons/Minus.svg" width={24} height={24}></Image>
        </button>
      </div>

      <div
        className={
          "text-white font-bold bg-[#69554D] text-2xl py-2 px-4 rounded w-64 h-16 mb-8 flex justify-between items-center"
        }
      >
        <button
          onClick={() => setBathrooms(bathrooms + 1)}
          className="flex items-center "
        >
          <Image src="/icons/+.svg" width={24} height={24}></Image>
        </button>
        Bathrooms: {bathrooms}{" "}
        <button
          onClick={() => setBathrooms(bathrooms - 1)}
          className="flex items-center "
        >
          <Image src="/icons/Minus.svg" width={24} height={24}></Image>
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
          Public trasportation: {formatTime(publicTransportation)}
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

      <div>
        <Link href="/">
          <button onClick={ () => finishOnboarding() }>
            <Image src="/icons/Arrow.svg" width={60} height={40}></Image>
          </button>
        </Link>
      </div>
    </div>
  );
}
