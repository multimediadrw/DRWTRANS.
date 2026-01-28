import Link from 'next/link'
import { Bus, Phone } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <Bus className="h-8 w-8 text-purple-600" />
              <span className="text-2xl font-bold text-purple-600">DRWTRANS</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/fleet" className="text-gray-700 hover:text-purple-600">Armada</Link>
              <Link href="/pricing" className="text-gray-700 hover:text-purple-600">Harga</Link>
              <Link href="/about" className="text-gray-700 hover:text-purple-600">Tentang</Link>
              <Link href="/contact" className="text-gray-700 hover:text-purple-600">Kontak</Link>
              <Link href="/booking" className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700">
                Pemesanan
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">
            DRWTRANS, Teman di Setiap Perjalanan
          </h1>
          <p className="text-xl mb-8">
            Kemanapun tujuannya, berpergian aman bersama DRWTRANS
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/booking" className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
              Pesan Sekarang
            </Link>
            <a href="tel:08112050800" className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 flex items-center gap-2">
              <Phone className="h-5 w-5" />
              0811-2050-800
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Mengapa Pilih DRWTRANS?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bus className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-xl mb-2">Armada Lengkap</h3>
              <p className="text-gray-600">Bus medium hingga HiAce untuk berbagai kebutuhan perjalanan Anda</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-2">Keamanan Terjamin</h3>
              <p className="text-gray-600">Semua armada dilengkapi dokumen lengkap dan fitur keamanan standar</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-2">Driver Profesional</h3>
              <p className="text-gray-600">Driver berpengalaman dan ramah siap mengantar perjalanan Anda</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
