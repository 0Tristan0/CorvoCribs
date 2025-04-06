"use client";

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Onboarding_1 from '../onboarding_1/page';

export default function OnboardingGate({ children }) {
  const [shouldShowOnboarding, setShouldShowOnboarding] = useState(null);
  const pathname = usePathname();

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

  // this is so cooked but i am so tired it is okay!!
  setTimeout(() => {
    if (shouldShowOnboarding) {
      const hasOnboarded = localStorage.getItem('hasOnboarded')
      setShouldShowOnboarding(hasOnboarded === 'false')
    }
  }, 100)

  if (shouldShowOnboarding) {
    if (pathname !== '/onboarding_1' && pathname !== '/onboarding_2' && pathname !== '/onboarding_3' && pathname !== '/onboarding_preferences') {
      return <Onboarding_1 />
    }
  }

  return <>{children}</>
}
