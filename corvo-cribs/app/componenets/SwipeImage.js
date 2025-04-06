"use client";

import React, { useState, useMemo, useRef } from 'react'
import TinderCard from 'react-tinder-card'

export default function SwipeImage() {
    const db = [
      {
        name: 'Approving Beaver',
        url: 'beavers/approving.png'
      },
      {
        name: 'Disapproving Beaver',
        url: 'beavers/disapproving.png'
      },
    ]
    
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
    
      return (
        <div>
          <div className='w-[90vw] max-w-[260px] h-[300px]'>
            {db.map((character, index) => (
              <TinderCard
                ref={childRefs[index]}
                className="absolute"
                key={character.name}
                onSwipe={(dir) => swiped(dir, character.name, index)}
                onCardLeftScreen={() => outOfFrame(character.name, index)}
              >
                <div className="relative w-[80vw] max-w-[260px] h-[300px] rounded-2xl bg-cover" style={{ backgroundImage: 'url(' + character.url + ')' }}>
                  <h3>{character.name}</h3>
                </div>
              </TinderCard>
            ))}
          </div>
            <button className={ "p-2 rounded-xl border-2 " + (!canGoBack ? "bg-gray-100 border-gray-300" : "bg-[#ECB29B] border-[#dba48f]") } onClick={() => goBack()}>Undo swipe!</button>
        </div>
      )
    }  