'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Cek apakah splash screen sudah pernah ditampilkan di session ini
    const hasSeenSplash = sessionStorage.getItem('hasSeenSplash')
    
    if (hasSeenSplash) {
      setIsVisible(false)
      return
    }

    // Tampilkan splash screen selama 2.5 detik
    const timer = setTimeout(() => {
      setIsVisible(false)
      sessionStorage.setItem('hasSeenSplash', 'true')
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 flex items-center justify-center animate-fadeIn">
      {/* Logo Container */}
      <div className="flex flex-col items-center animate-scaleIn">
        {/* Logo */}
        <div className="mb-6 animate-bounce-slow">
          <Image 
            src="/logo-drwtrans.png" 
            alt="DRW TRANS" 
            width={120}
            height={120}
            className="drop-shadow-2xl"
            priority
          />
        </div>

        {/* Brand Name */}
        <h1 className="text-4xl font-bold text-white mb-2 tracking-wide drop-shadow-lg">
          DRW TRANS
        </h1>

        {/* Tagline */}
        <p className="text-white/80 text-sm mb-8 tracking-wider">
          Layanan Transportasi Premium
        </p>

        {/* Loading Indicator */}
        <div className="flex gap-2">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse-dot" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-white rounded-full animate-pulse-dot" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-white rounded-full animate-pulse-dot" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  )
}
