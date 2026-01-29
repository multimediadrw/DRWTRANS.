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

  // Regular routes: mobile container with splash screen
  return (
    <>
      <SplashScreen />
      {/* Desktop: Dark background with centered mobile container */}
      <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
        {/* Mobile-Only Container (480px max) */}
        <div className="min-h-screen w-full max-w-[480px] mx-auto bg-white shadow-2xl overflow-hidden relative">
          {children}
        </div>
      </div>
    </>
  )
}
