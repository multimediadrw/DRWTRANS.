'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Phone, ChevronDown } from 'lucide-react'

export default function Navigation() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu)
  }

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="DRWTRANS" width={60} height={60} className="object-contain" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Produk dan Layanan */}
            <div className="relative group">
              <button 
                className="flex items-center gap-1 text-gray-700 hover:text-purple-600 font-medium transition-colors py-2"
                onClick={() => toggleDropdown('produk')}
              >
                Produk dan Layanan
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link href="/bisnis" className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 first:rounded-t-lg">
                  Bisnis
                </Link>
                <Link href="/pribadi" className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 last:rounded-b-lg">
                  Pribadi
                </Link>
              </div>
            </div>

            {/* Blog */}
            <Link href="/blog" className="text-orange-500 hover:text-orange-600 font-medium transition-colors">
              Blog
            </Link>

            {/* Promo */}
            <Link href="/promo" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Promo
            </Link>

            {/* Tentang Kami */}
            <div className="relative group">
              <button 
                className="flex items-center gap-1 text-gray-700 hover:text-purple-600 font-medium transition-colors py-2"
                onClick={() => toggleDropdown('tentang')}
              >
                Tentang Kami
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link href="/profil" className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 first:rounded-t-lg">
                  Profil
                </Link>
                <Link href="/armada" className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600">
                  Armada
                </Link>
                <Link href="/penghargaan" className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 last:rounded-b-lg">
                  SMART Protocol Penghargaan
                </Link>
              </div>
            </div>

            {/* Karir */}
            <Link href="/karir" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Karir
            </Link>

            {/* Pusat Bantuan */}
            <div className="relative group">
              <button 
                className="flex items-center gap-1 text-gray-700 hover:text-purple-600 font-medium transition-colors py-2"
                onClick={() => toggleDropdown('bantuan')}
              >
                Pusat Bantuan
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link href="/faq" className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 first:rounded-t-lg">
                  FAQ
                </Link>
                <Link href="/lokasi-cabang" className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600">
                  Lokasi Cabang
                </Link>
                <Link href="/hubungi-kami" className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 last:rounded-b-lg">
                  Hubungi Kami
                </Link>
              </div>
            </div>

            {/* Pemesanan Button */}
            <Link 
              href="/pemesanan" 
              className="border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all"
            >
              Pemesanan
            </Link>

            {/* Call Center Button */}
            <a 
              href="tel:08112050800" 
              className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-all flex items-center gap-2"
            >
              <Phone className="h-5 w-5" />
              Call Center <span className="text-orange-400">0811-2050-800</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-gray-700">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}
