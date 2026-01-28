'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Phone, ChevronDown } from 'lucide-react'

export default function Navigation() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="DRWTRANS" width={50} height={50} className="object-contain" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Produk dan Layanan */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-700 hover:text-royal-purple font-medium transition-colors py-2 text-sm">
                Produk & Layanan
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-44 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all border border-gray-100">
                <Link href="/bisnis" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-royal-purple hover:text-white first:rounded-t-lg transition-colors">
                  Bisnis
                </Link>
                <Link href="/pribadi" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-royal-purple hover:text-white last:rounded-b-lg transition-colors">
                  Pribadi
                </Link>
              </div>
            </div>

            {/* Tentang Kami */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-700 hover:text-royal-purple font-medium transition-colors py-2 text-sm">
                Tentang Kami
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-52 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all border border-gray-100">
                <Link href="/profil" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-royal-purple hover:text-white first:rounded-t-lg transition-colors">
                  Profil Perusahaan
                </Link>
                <Link href="/armada" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-royal-purple hover:text-white transition-colors">
                  Armada Kami
                </Link>
                <Link href="/penghargaan" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-royal-purple hover:text-white last:rounded-b-lg transition-colors">
                  Penghargaan
                </Link>
              </div>
            </div>

            {/* Promo */}
            <Link href="/promo" className="text-gray-700 hover:text-royal-purple font-medium transition-colors text-sm">
              Promo
            </Link>

            {/* Pusat Bantuan */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-700 hover:text-royal-purple font-medium transition-colors py-2 text-sm">
                Bantuan
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-44 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all border border-gray-100">
                <Link href="/faq" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-royal-purple hover:text-white first:rounded-t-lg transition-colors">
                  FAQ
                </Link>
                <Link href="/lokasi-cabang" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-royal-purple hover:text-white transition-colors">
                  Lokasi Cabang
                </Link>
                <Link href="/hubungi-kami" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-royal-purple hover:text-white last:rounded-b-lg transition-colors">
                  Hubungi Kami
                </Link>
              </div>
            </div>

            {/* Call Center Button */}
            <a 
              href="tel:08112050800" 
              className="bg-royal-purple text-white px-5 py-2 rounded-lg font-semibold hover:bg-royal-purple-dark transition-all flex items-center gap-2 text-sm shadow-md"
            >
              <Phone className="h-4 w-4" />
              0811-2050-800
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
