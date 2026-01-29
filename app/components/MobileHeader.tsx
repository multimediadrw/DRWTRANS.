'use client'

import Image from 'next/image'
import Link from 'next/link'
import { MessageCircle } from 'lucide-react'

export default function MobileHeader() {
  return (
    <header className="sticky top-0 bg-white border-b border-gray-200 z-40 shadow-sm">
      <div className="flex items-center justify-between px-4 h-16">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="DRWTRANS"
            width={120}
            height={40}
            className="h-8 w-auto"
          />
        </Link>
        
        <a
          href="https://wa.me/6281120500800"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 hover:bg-green-600 transition-colors"
        >
          <MessageCircle className="h-5 w-5 text-white" />
        </a>
      </div>
    </header>
  )
}
