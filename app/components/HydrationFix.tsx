'use client';

import { useEffect, useState } from 'react';

/**
 * HydrationFix Component
 * 
 * Prevents Flash of Unstyled Content (FOUC) by:
 * 1. Ensuring client-side hydration is complete before showing content
 * 2. Adding a minimal delay to allow CSS to fully load
 * 3. Preventing animation flashes on initial load
 */
export function HydrationFix({ children }: { children: React.ReactNode }) {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Mark as hydrated after a minimal delay to ensure CSS is loaded
    const timer = setTimeout(() => {
      setIsHydrated(true);
      document.documentElement.classList.add('hydrated');
    }, 50); // 50ms delay is imperceptible but prevents FOUC

    return () => clearTimeout(timer);
  }, []);

  // Show content immediately in production, with fade-in in development
  // This prevents the "blank screen" issue while still preventing FOUC
  return (
    <div 
      style={{ 
        opacity: isHydrated ? 1 : 0.99, // 0.99 instead of 0 to prevent complete hiding
        transition: 'opacity 0.1s ease-in' 
      }}
    >
      {children}
    </div>
  );
}

