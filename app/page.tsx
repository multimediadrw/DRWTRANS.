'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from './components/Navigation'
import MobileHeader from './components/MobileHeader'
import BottomNav from './components/BottomNav'
import BookingModal from './components/BookingModal'
import { Search, Shield, Clock, Award, Users, ChevronRight } from 'lucide-react'

export default function HomePage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all')

  const armada = [
    {
      id: 1,
      name: 'Toyota HiAce',
      category: 'hiace',
      seats: '14 Kursi',
      price: 'Rp 1.500.000',
      image: '/hero-bus.jpg',
      popular: true,
    },
    {
      id: 2,
      name: 'Medium Bus',
      category: 'medium',
      seats: '31 Kursi',
      price: 'Rp 2.500.000',
      image: '/hero-bus.jpg',
    },
    {
      id: 3,
      name: 'Big Bus',
      category: 'big',
      seats: '50 Kursi',
      price: 'Rp 3.500.000',
      image: '/hero-bus.jpg',
    },
    {
      id: 4,
      name: 'Elf Long',
      category: 'elf',
      seats: '18 Kursi',
      price: 'Rp 1.800.000',
      image: '/hero-bus.jpg',
    },
  ]

  const filteredArmada = selectedCategory === 'all' 
    ? armada 
    : armada.filter(item => item.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <Navigation />
      </div>

      {/* Mobile Header */}
      <MobileHeader />

      {/* Hero Section - Full Screen */}
      <section className="relative h-screen md:h-[600px] mt-16 md:mt-0">
        <div className="absolute inset-0">
          <Image
            src="/hero-bus.jpg"
            alt="DRWTRANS Bus"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
        </div>

        <div className="relative h-full flex flex-col justify-end pb-32 md:pb-20 px-4">
          <div className="text-center text-white mb-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-3 drop-shadow-lg">
              DRWTRANS
            </h1>
            <p className="text-lg md:text-xl text-gray-100 drop-shadow">
              Layanan Transportasi Korporat Terpercaya
            </p>
          </div>

          {/* Floating Search Card */}
          <button
            onClick={() => setIsBookingModalOpen(true)}
            className="bg-white rounded-2xl shadow-2xl p-6 mx-auto w-full max-w-md hover:shadow-3xl transition-all"
            style={{ minHeight: '44px' }}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-royal-purple rounded-full flex items-center justify-center flex-shrink-0">
                <Search className="h-6 w-6 text-white" />
              </div>
              <div className="text-left flex-1">
                <p className="text-lg font-bold text-royal-purple">Mau pergi ke mana?</p>
                <p className="text-sm text-gray-500">Pilih lokasi, tanggal & armada</p>
              </div>
              <ChevronRight className="h-6 w-6 text-gray-400 flex-shrink-0" />
            </div>
          </button>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-8 bg-white border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center gap-8 md:gap-12 overflow-x-auto">
            <div className="flex flex-col items-center gap-2 min-w-[80px]">
              <Shield className="h-8 w-8 text-royal-purple" />
              <span className="text-xs font-semibold text-gray-600 text-center">Legal & Aman</span>
            </div>
            <div className="flex flex-col items-center gap-2 min-w-[80px]">
              <Clock className="h-8 w-8 text-royal-purple" />
              <span className="text-xs font-semibold text-gray-600 text-center">24/7 Service</span>
            </div>
            <div className="flex flex-col items-center gap-2 min-w-[80px]">
              <Award className="h-8 w-8 text-royal-purple" />
              <span className="text-xs font-semibold text-gray-600 text-center">Bersertifikat</span>
            </div>
            <div className="flex flex-col items-center gap-2 min-w-[80px]">
              <Users className="h-8 w-8 text-royal-purple" />
              <span className="text-xs font-semibold text-gray-600 text-center">1000+ Client</span>
            </div>
          </div>
        </div>
      </section>

      {/* Armada Section with Horizontal Scroll */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-royal-purple">Pilih Armada</h2>

          {/* Pills Filter */}
          <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition-all ${
                selectedCategory === 'all'
                  ? 'bg-royal-purple text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-300'
              }`}
              style={{ minHeight: '44px' }}
            >
              Semua
            </button>
            <button
              onClick={() => setSelectedCategory('big')}
              className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition-all ${
                selectedCategory === 'big'
                  ? 'bg-royal-purple text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-300'
              }`}
              style={{ minHeight: '44px' }}
            >
              Bus Besar
            </button>
            <button
              onClick={() => setSelectedCategory('hiace')}
              className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition-all ${
                selectedCategory === 'hiace'
                  ? 'bg-royal-purple text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-300'
              }`}
              style={{ minHeight: '44px' }}
            >
              HiAce
            </button>
            <button
              onClick={() => setSelectedCategory('elf')}
              className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition-all ${
                selectedCategory === 'elf'
                  ? 'bg-royal-purple text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-300'
              }`}
              style={{ minHeight: '44px' }}
            >
              Elf
            </button>
          </div>

          {/* Horizontal Scroll Carousel */}
          <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory">
            {filteredArmada.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-72 bg-white rounded-2xl shadow-lg overflow-hidden snap-start"
              >
                {item.popular && (
                  <div className="bg-amber-gold text-white text-xs font-bold px-3 py-1 inline-block">
                    POPULER
                  </div>
                )}
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-royal-purple mb-2">{item.name}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <span className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {item.seats}
                    </span>
                    <span>AC • Audio</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-500">Mulai dari</p>
                      <p className="text-lg font-bold text-royal-purple">{item.price}</p>
                    </div>
                    <Link
                      href="/pemesanan"
                      className="bg-amber-gold hover:bg-amber-gold-dark text-white px-6 py-2 rounded-lg font-semibold transition-all"
                      style={{ minHeight: '44px' }}
                    >
                      Pilih Unit
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-royal-purple">
            Mengapa Pilih DRWTRANS?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-royal-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-royal-purple" />
              </div>
              <h3 className="font-bold text-lg mb-2">Armada Terawat</h3>
              <p className="text-gray-600 text-sm">Kendaraan selalu dalam kondisi prima</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-royal-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-royal-purple" />
              </div>
              <h3 className="font-bold text-lg mb-2">Driver Profesional</h3>
              <p className="text-gray-600 text-sm">Berpengalaman dan bersertifikat</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-royal-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-royal-purple" />
              </div>
              <h3 className="font-bold text-lg mb-2">Tepat Waktu</h3>
              <p className="text-gray-600 text-sm">Komitmen ketepatan waktu terjamin</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-royal-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-royal-purple" />
              </div>
              <h3 className="font-bold text-lg mb-2">Harga Kompetitif</h3>
              <p className="text-gray-600 text-sm">Harga terbaik dengan layanan premium</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-royal-purple-dark to-royal-purple text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Siap Memulai Perjalanan?
          </h2>
          <p className="text-lg mb-8 text-gray-200">
            Hubungi kami sekarang untuk penawaran terbaik
          </p>
          <a
            href="https://wa.me/628112050800"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-amber-gold hover:bg-amber-gold-dark text-white px-8 py-4 rounded-xl font-bold text-lg transition-all"
            style={{ minHeight: '44px' }}
          >
            Chat via WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-royal-purple-dark text-white py-12 pb-20 md:pb-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image
                src="/logo.png"
                alt="DRWTRANS"
                width={150}
                height={50}
                className="mb-4 brightness-0 invert"
              />
              <p className="text-gray-300 text-sm">
                Layanan transportasi korporat terpercaya sejak 2010
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Layanan</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="/bisnis" className="hover:text-white">Bisnis</Link></li>
                <li><Link href="/pribadi" className="hover:text-white">Pribadi</Link></li>
                <li><Link href="/armada" className="hover:text-white">Armada</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="/profil" className="hover:text-white">Profil</Link></li>
                <li><Link href="/karir" className="hover:text-white">Karir</Link></li>
                <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Kontak</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>0811-2050-800</li>
                <li>info@drwtrans.com</li>
                <li>Jakarta, Indonesia</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 DRWTRANS. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Mobile Bottom Navigation */}
      <BottomNav />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  )
}
