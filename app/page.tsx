import Link from 'next/link'
import Image from 'next/image'
import { Phone, MapPin, Clock, Shield, Award, Users } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo.png" alt="DRWTRANS" width={60} height={60} className="object-contain" />
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/fleet" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Armada</Link>
              <Link href="/pricing" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Harga</Link>
              <Link href="/about" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Tentang</Link>
              <Link href="/contact" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Kontak</Link>
              <Link href="/booking" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all">
                Pesan Sekarang
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              DRWTRANS, Teman di Setiap Perjalanan
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100">
              Kemanapun tujuannya, berpergian aman bersama DRWTRANS
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking" className="bg-white text-purple-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-xl">
                Pesan Sekarang
              </Link>
              <a href="tel:08112050800" className="bg-orange-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition-all shadow-xl flex items-center justify-center gap-2">
                <Phone className="h-6 w-6" />
                0811-2050-800
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-12 -mt-16 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-6 text-center border-t-4 border-purple-600">
              <MapPin className="h-12 w-12 text-purple-600 mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">Jangkauan Luas</h3>
              <p className="text-gray-600">Melayani perjalanan ke seluruh Indonesia</p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-6 text-center border-t-4 border-pink-600">
              <Clock className="h-12 w-12 text-pink-600 mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">Siap 24/7</h3>
              <p className="text-gray-600">Layanan tersedia kapan saja Anda butuhkan</p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-6 text-center border-t-4 border-purple-600">
              <Shield className="h-12 w-12 text-purple-600 mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">Aman & Legal</h3>
              <p className="text-gray-600">Dokumen lengkap dan asuransi terjamin</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Mengapa Pilih DRWTRANS?</h2>
            <p className="text-xl text-gray-600">Layanan terbaik untuk perjalanan Anda</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="font-bold text-2xl mb-3 text-center">Armada Lengkap</h3>
              <p className="text-gray-600 text-center leading-relaxed">Bus medium hingga HiAce untuk berbagai kebutuhan perjalanan Anda dengan kondisi terawat</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-bold text-2xl mb-3 text-center">Keamanan Terjamin</h3>
              <p className="text-gray-600 text-center leading-relaxed">Semua armada dilengkapi dokumen lengkap (STNK, KIR) dan fitur keamanan standar untuk kenyamanan Anda</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-bold text-2xl mb-3 text-center">Driver Profesional</h3>
              <p className="text-gray-600 text-center leading-relaxed">Driver berpengalaman, ramah, dan berlisensi siap mengantar perjalanan Anda dengan aman</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Award className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4">Siap Melayani Perjalanan Anda</h2>
          <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
            Hubungi kami sekarang untuk konsultasi gratis dan dapatkan penawaran terbaik
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking" className="bg-white text-purple-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all">
              Pesan Online
            </Link>
            <a href="tel:08112050800" className="bg-orange-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition-all flex items-center justify-center gap-2">
              <Phone className="h-6 w-6" />
              Hubungi Kami
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image src="/logo.png" alt="DRWTRANS" width={120} height={120} className="mb-4" />
              <p className="text-gray-400">Layanan transportasi bus terpercaya untuk perjalanan Anda</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Menu</h4>
              <ul className="space-y-2">
                <li><Link href="/fleet" className="text-gray-400 hover:text-white">Armada</Link></li>
                <li><Link href="/pricing" className="text-gray-400 hover:text-white">Harga</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-white">Tentang Kami</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white">Kontak</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Layanan</h4>
              <ul className="space-y-2">
                <li><Link href="/booking" className="text-gray-400 hover:text-white">Pemesanan</Link></li>
                <li><Link href="/safety" className="text-gray-400 hover:text-white">Keamanan</Link></li>
                <li><Link href="/facilities" className="text-gray-400 hover:text-white">Fasilitas</Link></li>
                <li><Link href="/terms" className="text-gray-400 hover:text-white">Syarat & Ketentuan</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Kontak</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  <a href="tel:08112050800" className="hover:text-white">0811-2050-800</a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  <span>Indonesia</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 DRWTRANS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
