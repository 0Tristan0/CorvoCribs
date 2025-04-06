"use client";

import React, { useState, useMemo, useRef, useEffect } from 'react'
import TinderCard from 'react-tinder-card'
import FavoritesIcon from './icons/FavoritesIcon';
import MapIcon from './icons/MapIcon';

export default function SwipeImage() {
    const db = [
        {
            "id": 1234,
            "title": "1335 North",
            "timePublished": "2023-08-20'T'13:20:10*633+0000",
            "nearestUniversity": "Oregon State University",
            "address": "",
            "furnished": true,
            "pricePerMonth": 1000,
            "leaseTermLengthMonths": 12,
            "bedrooms": 2,
            "baths": 2,
            "area": 1500,
            "landlordID": 1234,
            "images": {
                "hero": "beavers/approving.png",
                "exterior": [
                    "https://abc.com/exterior.jpeg",
                    "https://abc.com/exterior.jpeg",
                    "https://abc.com/exterior.jpeg"
                ],
                "interior": [
                    "https://abc.com/interior.jpeg",
                    "https://abc.com/interior.jpeg",
                    "https://abc.com/interior.jpeg"
                ]
            }
        },
        {
            "id": 6969,
            "title": "The Metropolitan",
            "timePublished": "2023-08-20'T'13:20:10*633+0000",
            "nearestUniversity": "Oregon State University",
            "address": "",
            "furnished": true,
            "pricePerMonth": 1000,
            "leaseTermLengthMonths": 12,
            "bedrooms": 2,
            "baths": 2,
            "area": 1500,
            "landlordID": 1234,
            "images": {
                "hero": "beavers/disapproving.png",
                "exterior": [
                    "https://abc.com/exterior.jpeg",
                    "https://abc.com/exterior.jpeg",
                    "https://abc.com/exterior.jpeg"
                ],
                "interior": [
                    "https://abc.com/interior.jpeg",
                    "https://abc.com/interior.jpeg",
                    "https://abc.com/interior.jpeg"
                ]
            }
        },
        {
            "id": 4914,
            "title": "1335 North",
            "timePublished": "2023-08-20'T'13:20:10*633+0000",
            "nearestUniversity": "Oregon State University",
            "address": "",
            "furnished": true,
            "pricePerMonth": 1000,
            "leaseTermLengthMonths": 12,
            "bedrooms": 2,
            "baths": 2,
            "area": 1500,
            "landlordID": 1234,
            "images": {
                "hero": "beavers/approving.png",
                "exterior": [
                    "https://abc.com/exterior.jpeg",
                    "https://abc.com/exterior.jpeg",
                    "https://abc.com/exterior.jpeg"
                ],
                "interior": [
                    "https://abc.com/interior.jpeg",
                    "https://abc.com/interior.jpeg",
                    "https://abc.com/interior.jpeg"
                ]
            }
        },
        {
            "id": 1111,
            "title": "1335 North",
            "timePublished": "2023-08-20'T'13:20:10*633+0000",
            "nearestUniversity": "Oregon State University",
            "address": "",
            "furnished": true,
            "pricePerMonth": 1000,
            "leaseTermLengthMonths": 12,
            "bedrooms": 2,
            "baths": 2,
            "area": 1500,
            "landlordID": 1234,
            "images": {
                "hero": "beavers/approving.png",
                "exterior": [
                    "https://abc.com/exterior.jpeg",
                    "https://abc.com/exterior.jpeg",
                    "https://abc.com/exterior.jpeg"
                ],
                "interior": [
                    "https://abc.com/interior.jpeg",
                    "https://abc.com/interior.jpeg",
                    "https://abc.com/interior.jpeg"
                ]
            }
        },
        {
            "id": 2222,
            "title": "1335 North",
            "timePublished": "2023-08-20'T'13:20:10*633+0000",
            "nearestUniversity": "Oregon State University",
            "address": "",
            "furnished": true,
            "pricePerMonth": 1000,
            "leaseTermLengthMonths": 12,
            "bedrooms": 2,
            "baths": 2,
            "area": 1500,
            "landlordID": 1234,
            "images": {
                "hero": "beavers/approving.png",
                "exterior": [
                    "https://abc.com/exterior.jpeg",
                    "https://abc.com/exterior.jpeg",
                    "https://abc.com/exterior.jpeg"
                ],
                "interior": [
                    "https://abc.com/interior.jpeg",
                    "https://abc.com/interior.jpeg",
                    "https://abc.com/interior.jpeg"
                ]
            }
        },
        {
            "id": 3333,
            "title": "1335 North",
            "timePublished": "2023-08-20'T'13:20:10*633+0000",
            "nearestUniversity": "Oregon State University",
            "address": "",
            "furnished": true,
            "pricePerMonth": 1000,
            "leaseTermLengthMonths": 12,
            "bedrooms": 2,
            "baths": 2,
            "area": 1500,
            "landlordID": 1234,
            "images": {
                "hero": "beavers/approving.png",
                "exterior": [
                    "https://abc.com/exterior.jpeg",
                    "https://abc.com/exterior.jpeg",
                    "https://abc.com/exterior.jpeg"
                ],
                "interior": [
                    "https://abc.com/interior.jpeg",
                    "https://abc.com/interior.jpeg",
                    "https://abc.com/interior.jpeg"
                ]
            }
        },
        {
            "id": 4444,
            "title": "1335 North",
            "timePublished": "2023-08-20'T'13:20:10*633+0000",
            "nearestUniversity": "Oregon State University",
            "address": "",
            "furnished": true,
            "pricePerMonth": 1000,
            "leaseTermLengthMonths": 12,
            "bedrooms": 2,
            "baths": 2,
            "area": 1500,
            "landlordID": 1234,
            "images": {
                "hero": "beavers/approving.png",
                "exterior": [
                    "https://abc.com/exterior.jpeg",
                    "https://abc.com/exterior.jpeg",
                    "https://abc.com/exterior.jpeg"
                ],
                "interior": [
                    "https://abc.com/interior.jpeg",
                    "https://abc.com/interior.jpeg",
                    "https://abc.com/interior.jpeg"
                ]
            }
        },
    ]

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
                            <div className="shadow-md border-8 border-white relative w-[80vw] max-w-[320px] h-[300px] rounded-2xl bg-cover" style={{ backgroundImage: 'url(' + character.images.hero + ')' }} />
                        </TinderCard>
                    ))}
                </div>
                <div className={'w-10 h-[25vh] rounded-4xl bg-green-300 ' + (db[currentIndex] !== undefined ? "" : "opacity-0")} />
            </div>

            {db[currentIndex] !== undefined ? (
                <div>
                    <div className='flex justify-center gap-x-5 mt-4'>
                        <button className={"p-2 rounded-xl border-2 bg-[#ECB29B] border-[#957264] " + (!canGoBack ? "opacity-20" : "opacity-100 ")}
                            onClick={() => handleUndo() }>Undo swipe</button>
                        <button className={"p-2 rounded-xl border-2 " + (isFavorited ? "bg-[#e95757]" : "bg-[#F5E5AC]" )} onClick={() => handleFavorite() }>
                            <div className='flex flex-row items-center gap-x-2'>
                                <div className='w-5 h-5 flex items-center justify-center'>
                                    <FavoritesIcon fill="#FFAC8B" />
                                </div>
                                <h1>Favorite</h1>
                            </div>
                        </button>
                    </div>
                    <div className='mt-5 bg-[#F5E5AC] p-5 shadow-lg rounded-2xl'>
                        <div>
                            <h1 className='truncate text-2xl font-semibold'>{db[currentIndex].title}</h1>
                            <h1 className='text-xl pb-2'>${db[currentIndex].pricePerMonth}/mo.</h1>
                            <h1 className='text-md uppercase'>{db[currentIndex].bedrooms} bedroom, {db[currentIndex].baths} bath</h1>
                            <h1 className='text-md'>{db[currentIndex].area} square feet</h1>
                            <div className='flex flex-row items-center gap-x-2'>
                                <div className='w-5 h-5 flex items-center justify-center'>
                                    <MapIcon fill="#FACBCB" />
                                </div>
                                <h1>2 miles away</h1>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (null)}
        </div>
    )
}
