"use client";

import { useEffect, useState } from 'react'
import Onboarding_1 from '../onboarding_1/page';

export default function OnboardingGate({ children }) {
  const [shouldShowOnboarding, setShouldShowOnboarding] = useState(null);

  useEffect(() => {
    const hasOnboarded = localStorage.getItem('hasOnboarded')
    if (hasOnboarded === null) {
      localStorage.setItem('hasOnboarded', 'false')
      setShouldShowOnboarding(true)
    } else {
      setShouldShowOnboarding(hasOnboarded === 'false')
    }
  }, [])

  if (shouldShowOnboarding === null) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-screen">
        <h1 className="text-2xl font-semibold text-center">Loading...</h1>
      </div>
    )
  }

  if (shouldShowOnboarding) {
    return <Onboarding_1 />
  }

  return <>{children}</>
}