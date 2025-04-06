'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Onboarding_1 from '../onboarding_1/page';

export default function OnboardingGate({ children }) {
  const [shouldShowOnboarding, setShouldShowOnboarding] = useState(null);
  const pathname = usePathname();

  const checkOnboardingStatus = () => {
    const hasOnboarded = localStorage.getItem('hasOnboarded');
    setShouldShowOnboarding(hasOnboarded === 'false');
  }

  useEffect(() => {
    checkOnboardingStatus();

    // Optional: Listen for localStorage updates from other tabs
    const handleStorage = () => checkOnboardingStatus();
    window.addEventListener('storage', handleStorage);

    return () => {
      window.removeEventListener('storage', handleStorage);
    };
  }, []);

  if (shouldShowOnboarding === null) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-screen">
        <h1 className="text-2xl font-semibold text-center">Loading...</h1>
      </div>
    )
  }

  const onboardingRoutes = [
    '/onboarding_1',
    '/onboarding_2',
    '/onboarding_3',
    '/onboarding_preferences'
  ]

  if (shouldShowOnboarding && !onboardingRoutes.includes(pathname)) {
    return <Onboarding_1 />
  }

  return <>{children}</>
}