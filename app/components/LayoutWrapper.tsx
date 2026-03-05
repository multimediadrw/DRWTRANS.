'use client'

import { usePathname } from 'next/navigation'
import SplashScreen from './SplashScreen'

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isAdminRoute = pathname?.startsWith('/admin')

  // Admin routes: no mobile container, no splash screen
  if (isAdminRoute) {
    return <>{children}</>
  }

  // Regular routes: responsive layout
  // - Mobile (< lg): mobile container 480px centered
  // - Desktop (>= lg): full-width layout
  return (
    <>
      <SplashScreen />
      {/* Mobile: Dark background with centered mobile container */}
      <div className="lg:hidden min-h-screen w-full bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
        <div className="min-h-screen w-full max-w-[480px] mx-auto bg-white shadow-2xl overflow-hidden relative">
          {children}
        </div>
      </div>
      {/* Desktop: Full-width layout */}
      <div className="hidden lg:block min-h-screen bg-white">
        {children}
      </div>
    </>
  )
}
