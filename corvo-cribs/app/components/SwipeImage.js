"use client";

import React, { useState, useMemo, useRef, useEffect } from 'react'
import TinderCard from 'react-tinder-card'
import FavoritesIcon from './icons/FavoritesIcon';
import MapIcon from './icons/MapIcon';
import ApartmentCard from './ApartmentCard';
import axios from 'axios';

export default function SwipeImage() {
    const [db, setDb] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchApartments = async () => {
            try {
                const response = await axios.get("http://localhost:8000/newApartments", {
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Credentials": "true",
                        "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
                        "Access-Control-Allow-Headers": "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
                    },
                });

                let currentDb = db;
                currentDb.push(...response.data);
                setDb(currentDb);

                setLoading(false);
            } catch (error) {
                console.error("Error fetching apartments:", error);
                setLoading(false);
            }
        };

        fetchApartments();
    }, []);

    const [dislikedIDs, setDislikedIDs] = useState([]);
    const [favoritedIDs, setFavoritedIDs] = useState([]);
    const [viewedIDs, setViewedIDs] = useState([]);

    const [isFavorited, setIsFavorited] = useState(false);

    useEffect(() => {
        const localDislikedIDs = localStorage.getItem('dislikedIDs');
        const localFavoritedIDs = localStorage.getItem('favoritedIDs');
        const localViewedIDs = localStorage.getItem('viewedIDs');

        if (localDislikedIDs === null) {
            localStorage.setItem('dislikedIDs', '[]');
        } else {
            setDislikedIDs(JSON.parse(localDislikedIDs))
        }

        if (localFavoritedIDs === null) {
            localStorage.setItem('favoritedIDs', '[]');
        } else {
            setFavoritedIDs(JSON.parse(localFavoritedIDs))
        }

        if (localViewedIDs === null) {
            localStorage.setItem('viewedIDs', '[]');
        } else {
            setViewedIDs(JSON.parse(localViewedIDs))
        }
    }, []);

    const [currentIndex, setCurrentIndex] = useState(db.length - 1)
    const [lastDirection, setLastDirection] = useState()
    // used for outOfFrame closure
    const currentIndexRef = useRef(currentIndex)

    const childRefs = useMemo(
        () =>
            Array(db.length)
                .fill(0)
                .map((i) => React.createRef()),
        []
    )

    const updateCurrentIndex = (val) => {
        setCurrentIndex(val)
        currentIndexRef.current = val
    }

    const canGoBack = currentIndex < db.length - 1

    const canSwipe = currentIndex >= 0

    // set last direction and decrease current index
    const swiped = (direction, nameToDelete, index) => {
        setLastDirection(direction)
        updateCurrentIndex(index - 1)

        setIsFavorited(false);

        if (direction === "left") {
            setDislikedIDs([...dislikedIDs, db[index].id])
            localStorage.setItem('dislikedIDs', JSON.stringify([...dislikedIDs, db[index].id]));
        } else if (direction === "right") {
            setViewedIDs([...viewedIDs, db[index].id])
            localStorage.setItem('viewedIDs', JSON.stringify([...viewedIDs, db[index].id]));
        }
    }

    const outOfFrame = (name, idx) => {
        console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
        // handle the case in which go back is pressed before card goes outOfFrame
        currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
        // TODO: when quickly swipe and restore multiple times the same card,
        // it happens multiple outOfFrame events are queued and the card disappear
        // during latest swipes. Only the last outOfFrame event should be considered valid
    }

    const swipe = async (dir) => {
        if (canSwipe && currentIndex < db.length) {
            await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
        }
    }

    // increase current index and show card
    const goBack = async () => {
        if (!canGoBack) return
        const newIndex = currentIndex + 1
        updateCurrentIndex(newIndex)
        await childRefs[newIndex].current.restoreCard()
    }

    const handleFavorite = () => {
        if (isFavorited) {
            setIsFavorited(false);
            const updatedFavoritedIDs = favoritedIDs.filter(id => id !== db[currentIndex].id);
            setFavoritedIDs(updatedFavoritedIDs);
            localStorage.setItem('favoritedIDs', JSON.stringify(updatedFavoritedIDs));
        } else {
            setIsFavorited(true);
            setFavoritedIDs([...favoritedIDs, db[currentIndex].id])
            localStorage.setItem('favoritedIDs', JSON.stringify([...favoritedIDs, db[currentIndex].id]));
        }
    };

    const handleUndo = () => {
        if (lastDirection === "left") {
            const updatedDislikedIDs = [...dislikedIDs];
            updatedDislikedIDs.pop();
            setDislikedIDs(updatedDislikedIDs);
            localStorage.setItem('dislikedIDs', JSON.stringify(updatedDislikedIDs));
        } else if (lastDirection === "right") {
            const updatedViewedIDs = [...viewedIDs];
            updatedViewedIDs.pop();
            setViewedIDs(updatedViewedIDs);
            localStorage.setItem('viewedIDs', JSON.stringify(updatedViewedIDs));
        }

        goBack();
    };

    return (
        <div>
            <div className='flex flex-row justify-between items-center'>
                <div className={'w-10 h-[25vh] rounded-4xl bg-red-300 ' + (db[currentIndex] !== undefined ? "" : "opacity-0")} />
                <div className='w-[90vw] max-w-[260px] h-[300px] flex justify-center'>
                    {db.map((character, index) => (
                        <TinderCard
                            ref={childRefs[index]}
                            className="absolute"
                            key={character.id}
                            onSwipe={(dir) => swiped(dir, character.name, index)}
                            onCardLeftScreen={() => outOfFrame(character.name, index)}
                        >
                            <div className="shadow-md border-8 border-white relative w-[80vw] max-w-[320px] h-[300px] rounded-2xl bg-cover" style={{ backgroundImage: 'url(' + character.images.hero + ')' }}>
                                <div role="status" className={"absolute " + (loading ? "opacity-100" : "opacity-0")}>
                                    <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                    </svg>
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                        </TinderCard>
                    ))}
                </div>
                <div className={'w-10 h-[25vh] rounded-4xl bg-green-300 ' + (db[currentIndex] !== undefined ? "" : "opacity-0")} />
            </div>

            {db[currentIndex] !== undefined ? (
                <div>
                    <div className='flex justify-center gap-x-5 mt-4'>
                        <button className={"p-2 rounded-xl border-2 bg-[#ECB29B] border-[#957264] " + (!canGoBack ? "opacity-20" : "opacity-100 ")}
                            onClick={() => handleUndo()}>Undo swipe</button>
                        <button className={"p-2 rounded-xl border-2 " + (isFavorited ? "bg-[#e95757]" : "bg-[#F5E5AC]")} onClick={() => handleFavorite()}>
                            <div className='flex flex-row items-center gap-x-2'>
                                <div className='w-5 h-5 flex items-center justify-center'>
                                    <FavoritesIcon fill="#FFAC8B" />
                                </div>
                                <h1>Favorite</h1>
                            </div>
                        </button>
                    </div>
                    <ApartmentCard title={db[currentIndex].title} address={db[currentIndex].address} pricePerMonth={db[currentIndex].pricePerMonth} beds={db[currentIndex].bedrooms} baths={db[currentIndex].baths} area={db[currentIndex].area} distance={2.5} imageUrl={db[currentIndex].images.hero} thumbnail={true} />

                </div>
            ) : (null)}
        </div>
    )
}
